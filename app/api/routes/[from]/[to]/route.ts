import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { distance } from "@/lib/utils";

let CityNodes: CityNode[] = [];

type CityNodeChildren = {
	distance: number;
	node: CityNode;
};

type Heuristic = {
	[key: string]: number;
};

class CityNode {
	public city;
	public children: CityNodeChildren[] = [];

	constructor(city: Prisma.CityGetPayload<{}>) {
		this.city = city;
	}
}

async function load_city_graph(): Promise<CityNode[]> {
	let city_nodes: CityNode[] = [];

	const map = await prisma.map.findMany();
	const cities = await prisma.city.findMany();

	for (const city of cities) {
		city_nodes.push(new CityNode(city));
	}

	for (const item of map) {
		const from_city = city_nodes.filter((i) => i.city.id == item.from_city_id)[0];
		from_city.children.push({ distance: item.distance, node: city_nodes.filter((i) => i.city.id == item.to_city_id)[0] });
	}

	return city_nodes;
}

export async function GET(req: NextRequest) {
	if (CityNodes.length == 0) {
		CityNodes = await load_city_graph();

		setInterval(async () => {
			CityNodes = await load_city_graph();
		}, 60 * 60 * 60);
	}

	const slices = req.url.split("/");
	const from = slices.at(-2);
	const to = slices.at(-1);

	const from_cities = await prisma.city.findMany({
		where: {
			name: {
				mode: "insensitive",
				equals: from,
			},
		},
	});

	const to_cities = await prisma.city.findMany({
		where: {
			name: {
				mode: "insensitive",
				equals: to,
			},
		},
	});

	if (from_cities.length == 0) {
		return NextResponse.json({
			error: true,
			message: `${from} not found`,
		});
	}
	if (to_cities.length == 0) {
		return NextResponse.json({
			error: true,
			message: `${to} not found`,
		});
	}

	const from_city = from_cities[0];
	const to_city = to_cities[0];

	const heuristics: Heuristic = {};
	const finals: any[] = [];

	let availables: Available[] = find_paths([from_city.id, to_city.id], heuristics, 0);
	let x = 0;

	while (true) {
		const matches = analyse_available(availables, finals);
		if (matches.length == 0 || finals.length == 5) break;

		const next = matches[0];
		let new_availables = find_paths([...next.path, to_city.id], heuristics, next.dn);
		next.done = true;
		availables = availables.concat(new_availables);
	}

	console.log(finals);

	return NextResponse.json({ heuristics });
}

function analyse_available(available: Available[], finals: any[]): Available[] {
	const next = available.filter((i) => !i.done).sort((a, b) => a.fn - b.fn);

	if (next.length > 0 && next[0].final) {
		finals.push({ path: next[0].path, distance: next[0].dn });
	}

	return next;
}

function find_distance(from_city_id: number, to_city_id: number): number {
	const c1 = CityNodes.filter((i) => i.city.id == from_city_id)[0];
	const c2 = CityNodes.filter((i) => i.city.id == to_city_id)[0];
	return distance(
		c1.city.latitude.toNumber(),
		c1.city.longitude.toNumber(),
		c2.city.latitude.toNumber(),
		c2.city.longitude.toNumber(),
		"K"
	);
}

type Available = {
	done: boolean;
	final: boolean;
	path: number[];
	dn: number;
	hn: number;
	fn: number;
};

function find_paths(path: number[], h: Heuristic, distance: number) {
	const from = path.at(-2);
	const end = path.at(-1);

	if (from == undefined || end == undefined) {
		throw new Error("Path length should equal or longer than 2");
	}

	const from_node = CityNodes.filter((i) => i.city.id == from)[0];
	const history = path.slice(0, -2);

	let available: Available[] = [];

	for (const node of from_node.children) {
		const id = node.node.city.id;
		if (history.indexOf(id) == -1) {
			if (!(id in h)) {
				h[id] = find_distance(id, end);
			}
			const final = id == end;
			const dn = distance + node.distance;
			const hn = h[id];
			const fn = dn + hn;

			available.push({
				done: false,
				final: final,
				dn,
				hn,
				fn,
				path: [...path.slice(0, -1), id],
			});
		}
	}
	return available;
}

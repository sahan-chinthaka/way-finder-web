import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import "./selectedroad.css";
import Navbar from "./Navbar";
import Backbtn from './Backbtn';
import Searchcard from './Searchcard'
import Busstatus from './Busstatus'
import map from './map'

export default function Selectedroad() {
  return (
    <div>
        <Navbar />

        <div className="section">

            <div className="container">
                <Backbtn />
            </div>

            <Searchcard />

        </div>

        <div className="section">
            <div className="container">

                <div className="content">
                    <div className="buses">
                        <h1>Available buses with arrival time and departure time</h1>

                        <Busstatus name='Anuradhapura Express' number='NP-3456' start='08:30 A.M' end='03.30 P.M'/>
                        <Busstatus name='Balangoda Express' number='NP-4321' start='05:00 A.M' end='11.30 A.M'/>
                    </div>

                    <div className="map">
                        <map />
                    </div>
                </div>

            </div>
        </div>


    </div>
  )
}

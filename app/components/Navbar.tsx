import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import "./navbar.css";
import logo from "../assest/logo.png";
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
        <header className="navbar">
            <div className="logo">
                <a href="#">
                    <img src={logo.src} alt="Blog Logo" />
                </a>
            </div>

            <nav className='nav'>
                <ul className='navlinks'>
                    <li><Link href="/" className='links'>Home</Link></li>
                    <li><a href="#" className='links'>Services</a></li>
                    <li><a href="#" className='links'>About Us</a></li>
                    <li><a href="#" className='links'>Blogs</a></li>
                    <li><a href="#" className='links'>Contact Us</a></li>
                </ul>
            </nav>

            <div className="contact">
                <a href="#" className="btn-booknow">BOOK NOW</a>

                <a href="#" className="user">
                    <div className="user-profile">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </a>
            </div>
        </header>
    </div>
  )
}

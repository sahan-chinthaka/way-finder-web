import React from 'react';
import Image from 'next/image';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRecycle } from '@fortawesome/free-solid-svg-icons';
import {faGift } from '@fortawesome/free-solid-svg-icons';
import {faMessage } from '@fortawesome/free-solid-svg-icons';
import {faClock } from '@fortawesome/free-solid-svg-icons';
import {faLaptop } from '@fortawesome/free-solid-svg-icons';
import {faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';



export default function navbar(){
    return (
        <div>
            <div className="service-page">
            {/* Navigation bar*/}
            
            
                <div className="service-header">
                    <h1 className="service-title">Our Services</h1>
                    <p className="service-description">We Provide Best Services For You</p>
                    <button className="back-button">Back</button>
                </div>

                <div className="service-buttons">
                    
                    <div className="service-card">
                       
                        <div className="image-container">
                            <FontAwesomeIcon icon={faRecycle} />
                        </div>
                        <h1 className="service-title">Live Updates</h1>
                        <p className="service-descriptiuon">Receive real-time notifications about bus arrivals, delays, and route changes, keeping you informed throughout your journey.</p><div className="service-button-container">
                        <p className="back-button">Read More</p>
                        
                    </div>
                    <a href="/" className='image-container-back'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>

                    <div className="service-card">
                        <div className="image-container">
                            <FontAwesomeIcon icon={faGift} />
                        </div>
                        <h1 className="service-title">Discounts and Promo</h1>
                        <p className="service-descriptiuon">Enjoy exclusive discounts and promotional offers on ticket purchases, loyalty rewards, and special deals for frequent travelers.</p><div className="service-button-container">
                        <p className="back-button">Read More</p>
                    </div>
                    <a href="/" className='image-container-back'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>

                    <div className="service-card">
                        <div className="image-container">
                            <FontAwesomeIcon icon={faMessage} />
                        </div>
                        <h1 className="service-title">User Reviews</h1>
                        <p className="service-descriptiuon">Access user-generated reviews and ratings for bus routes, stops, and experiences, helping you make informed decisions about your travels.</p><div className="service-button-container">
                        <p className="back-button">Read More</p>
                    </div>
                    <a href="/" className='image-container-back'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>

                    <div className="service-card">
                        <div className="image-container">
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                        <h1 className="service-title">Schedule On-Time</h1>
                        <p className="service-descriptiuon">We adhere to strict schedules, utilize efficient routing algorithms, and provide real-time updates to ensure you reach your destination on time.</p><div className="service-button-container">
                        <p className="back-button">Read More</p>
                    </div>
                    <a href="/" className='image-container-back'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                    
                    <div className="service-card">
                        <div className="image-container">
                            <FontAwesomeIcon icon={faLaptop} />
                        </div>
                        <h1 className="service-title">Online Booking</h1>
                        <p className="service-descriptiuon">Receive real-time notifications about bus arrivals, delays, and route changes, keeping you informed throughout your journey.</p><div className="service-button-container">
                        <p className="back-button">Read More</p>
                    </div>
                    <a href="/" className='image-container-back'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                        
                    <div className="service-card">
                        <div className="image-container">
                            <FontAwesomeIcon icon={faPeopleGroup} />
                        </div>
                        <h1 className="service-title">Community Forums</h1>
                        <p className="service-descriptiuon">Join discussions, share travel tips, and connect with fellow commuters in our community forums, fostering a sense of camaraderie among users.</p><div className="service-button-container">
                        <p className="back-button">Read More</p>
                    </div>
                    <a href="/" className='image-container-back'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>

                       
                    </div>
                </div>
       </div>
    );
};



import React from 'react';
import Image from 'next/image';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function navbar(){
    return (
        <div>
            <div className="service-page">
            {/* Navigation bar*/}
            
            
                <div className="service-header">
                    <h1 className="service-title">Our News</h1>
                    <p className="service-description">Latest Articles & Blogs</p>
                    <button className="back-button">Back</button>
                </div>

                <div className="service-buttons">
                    
                    <div className="service-card">
                        <div className="image-container">
                            <img src={'/blog1.png'} alt="blog1" />
                        </div>
                        <h1 className="service-title">5 Tips for Stress-Free Bus Travel</h1>
                        <p className="service-description">Are you planning a bus journey and want to make it as smooth and stress-free as possible? Here are five...</p><div className="service-button-container">
                        <p className="back-button">Read More</p>
                    </div>
                    <a href="/" className='image-container-back'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>

                    <div className="service-card">
                        <div className="image-container">
                        <img src={'/blog2.png'} alt="blog1" />
                        </div>
                        <h1 className="service-title">The Benefits of Real-Time Bus Tracking</h1>
                        <p className="service-description">Real-time bus tracking technology has revolutionized the way commuters navigate public ...</p><div className="service-button-container">
                        <p className="back-button">Read More</p>
                    </div>
                    <a href="/" className='image-container-back'>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>

                    <div className="service-card">
                        <div className="image-container">
                        <img src={'/blog3.png'} alt="blog1" />
                        </div>
                        <h1 className="service-title">Tips for Safe and Secure Bus Travel</h1>
                        <p className="service-description">Safety should always be a top priority when traveling by bus. Here are some essential tips to help ...</p><div className="service-button-container">
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
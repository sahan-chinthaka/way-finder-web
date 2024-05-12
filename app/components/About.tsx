import React from 'react';
import './About.css';

export default function navbar(){
    return (
        <div>
            <div className="service-page">
            {/* Navigation bar*/}
            
            
                <div className="service-header">
                    <h1 className="service-title">About Us</h1>
                    <p className="service-description">Group Member Details</p>
                    <button className="back-button">Back</button>
                </div>

                <div className="about-wayfinder">
                    <h1 className='service-title'>WayFinder</h1>
                    <p className='service-description'>Our website, TransitTracker, is dedicated to revolutionizing the bus travel experience for commuters. We provide a comprehensive platform that offers real-time bus tracking, predictive journey timelines, and convenient online ticket booking services. <br /><br />

Our mission is to enhance the accessibility, reliability, and convenience of public transportation, empowering users to plan their journeys with confidence and ease. With a commitment to innovation and user-centric design, TransitTracker strives to make bus travel safer, more efficient, and more enjoyable for passengers of all ages and backgrounds. Join us on our journey to transform the way we move through our cities and communities.</p>
                </div>

                <div className="service-header">
                    <h1 className="service-title">Meet the Team</h1>
                </div>    
                    
                    <div className="service-buttons">

                    <div className="service-card">
                        <div className="image-container">
                            <img src={'/Sahan1.png'} alt="Sahan" />
                        </div>
                        <p className="service-description">Sahan Chinthaka</p>
                    </div>

                    <div className="service-card">
                        <div className="image-container">
                            <img src={'/Jayaru.png'} alt="Jayaru" />
                        </div>
                        <p className="service-description">Jayaru Perera</p>
                    </div>
                    <div className="service-card">
                        <div className="image-container">
                            <img src={'/kalpani.png'} alt="Kalpani" />
                        </div>
                        <p className="service-description">Kalpani Ariyawansha</p>
                    </div>
                    <div className="service-card">
                        <div className="image-container">
                            <img src={'/Sumira.png'} alt="Sumira" />
                        </div>
                        <p className="service-description">Sumira Pathirana</p>
                    </div>
                    <div className="service-card">
                        <div className="image-container">
                            <img src={'/Tharindu.png'} alt="Tharindu" />
                        </div>
                        <p className="service-description">Tharindu Lakmal</p>
                    </div>


                </div>

            </div>
            </div>
    );
}
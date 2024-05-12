import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import "./busstatus.css";

export default function Busstatus() {
  return (
    <div>
        <div className="bus-status">
            <div className="main">
                <div className="bus-icon">
                    <img src="#" alt="" />
                </div>

                <div className="details">
                    <h2 className="d-heading">
                        Sahan Express 
                        {/* <span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#000000",}} /></span> */}
                    </h2>
                    <p className="number">NP-3456</p>
                </div>
            </div>

            <div className="da-time">
                <span className='arrival'>09:00 A.M</span>
                <span className='depature'>09:00 A.M</span>
            </div>

        </div>
    </div>
  )
}

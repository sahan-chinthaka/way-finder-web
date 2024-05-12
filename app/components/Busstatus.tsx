import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import "./busstatus.css";

export default function Busstatus({name, number, start, end} : {name: string, number: string, start: string, end:string}) {
  return (
    <div>
        <div className="bus-status">
            <div className="main">
                <div className="bus-icon">
                    <img src="#" alt="" />
                </div>

                <div className="details">
                    <h2 className="d-heading">
                        {name} 
                        {/* <span><FontAwesomeIcon icon={faCircleCheck} style={{color: "#000000",}} /></span> */}
                    </h2>
                    <p className="number">{number}</p>
                </div>
            </div>

            <div className="da-time">
                <span className='arrival'>{start}</span>
                <span className='depature'>{end}</span>
            </div>

        </div>
    </div>
  )
}

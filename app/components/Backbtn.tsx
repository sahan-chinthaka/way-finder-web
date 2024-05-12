import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faBus } from '@fortawesome/free-solid-svg-icons';

import "./backbtn.css";

export default function Backbtn() {
  return (
    <div>
        <div className="back-btn">
            <FontAwesomeIcon icon={faAngleUp} className='btn-icon' />
            <a href="#"><p className="back">Back</p></a>
        </div>
    </div>
  )
}

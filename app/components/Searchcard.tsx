import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faBus } from '@fortawesome/free-solid-svg-icons';

import "./searchcard.css";
import Link from 'next/link';

export default function Searchdetails() {
  return (
    <div>
        <div className="container container-r">

		  <Link href="/search/1">
            <div className="results">
                <div className='result-content'>

                <div className="result-icon">
                    <FontAwesomeIcon icon={faBus} className='result-icon' />
                </div>

                <p className="r-text">
                    Anuradhapura
                    <span> --- </span> 
                    Balangoda 
                    <span> | </span> 
                    <span className='Distance'> 250 km </span> 
                    <span> | </span> 
                    <span className='time'> 08:30 A.M </span> 
                </p>
                </div>

                <div className="b-status">
                <p className="status">Direct Bus</p>
                </div>

                
            </div> 
            </Link>

        </div>
    </div>
  )
}

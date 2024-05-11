import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faBus } from '@fortawesome/free-solid-svg-icons';

import "./searchresults.css";
import Navbar from "./Navbar";


export default function Searchresults() {
  return (
    <div>

      <Navbar />
      
      <div className="section">

        {/* top content */}
        <div className="container">

          <div className="back-btn">
            <FontAwesomeIcon icon={faAngleUp} className='btn-icon' />
            <a href="#"><p className="back">Back</p></a>
          </div>

          <div className="sort-result">
            <h2>Search results from 
              <span> Anuradhapura</span> to 
              <span> Pabahinna</span> on 
              <span> 28/04/2024</span>
            </h2>

            <div className="sort">
              <p className="text">Sorted by: </p>
              <a href="#" className="sort-link">Price</a>
              <a href="#" className="sort-link">Distance</a>
              <a href="#" className="sort-link">Bus Count</a>
            </div>
          </div>

        </div>

        {/* search results */}
        <div className="container container-r">

          <a href="#">
            <div className="results">
              <div className='result-content'>

                <div className="result-icon">
                  <FontAwesomeIcon icon={faBus} className='result-icon' />
                </div>

                <p className="r-text">
                  Anuradhapura
                  <span> --- </span> 
                  Pabahinna 
                  <span> | </span> 
                  <span className='Distance'> 250 km </span> 
                  <span> | </span> 
                  <span className='time'> 09:00 A.M </span> 
                </p>
              </div>

              <div className="b-status">
                <p className="status">Direct Bus</p>
              </div>

              
            </div> 
          </a>

        </div>

        {/* search results */}
        <div className="container container-r">

          <a href="#">
            <div className="results">
              <div className='result-content'>

                <div className="result-icon">
                  <FontAwesomeIcon icon={faBus} className='result-icon' />
                </div>

                <p className="r-text">
                  Anuradhapura
                  <span> --- </span> 
                  Pabahinna 
                  <span> | </span> 
                  <span className='Distance'> 250 km </span> 
                  <span> | </span> 
                  <span className='time'> 09:00 A.M </span> 
                </p>
              </div>

              <div className="b-status">
                <p className="status">Direct Bus</p>
              </div>

              
            </div> 
          </a>

        </div>

        {/* search results */}
        <div className="container container-r">

          <a href="#">
            <div className="results">
              <div className='result-content'>

                <div className="result-icon">
                  <FontAwesomeIcon icon={faBus} className='result-icon' />
                </div>

                <p className="r-text">
                  Anuradhapura
                  <span> --- </span> 
                  Pabahinna 
                  <span> | </span> 
                  <span className='Distance'> 250 km </span> 
                  <span> | </span> 
                  <span className='time'> 09:00 A.M </span> 
                </p>
              </div>

              <div className="b-status">
                <p className="status">Direct Bus</p>
              </div>

              
            </div> 
          </a>

        </div>

        {/* search results */}
        <div className="container container-r">

          <a href="#">
            <div className="results">
              <div className='result-content'>

                <div className="result-icon">
                  <FontAwesomeIcon icon={faBus} className='result-icon' />
                </div>

                <p className="r-text">
                  Anuradhapura
                  <span> --- </span> 
                  Pabahinna 
                  <span> | </span> 
                  <span className='Distance'> 250 km </span> 
                  <span> | </span> 
                  <span className='time'> 09:00 A.M </span> 
                </p>
              </div>

              <div className="b-status">
                <p className="status">Direct Bus</p>
              </div>

              
            </div> 
          </a>

        </div>

      </div>

    </div>
  )
}

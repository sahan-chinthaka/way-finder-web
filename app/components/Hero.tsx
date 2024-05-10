import React from 'react';
import "./hero.css";
import calendar from "../assest/calendar.png";

export default function navbar() {
    

  return (
    <div>
      <div className="section-hero">
        <div className="main-container">
          <h1>Real-Time bus tracking for any one !!!</h1>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="content">
            <h2 className="sub-heading">Real-Time bus tracking for any one !!!</h2>

            <form action="" className="form">
              <div className="distance">
                <div className="from">
                  <label htmlFor="">From</label><br />
                  <input type="text" placeholder="Select the location" />
                </div>

                <div className="from">
                  <label htmlFor="">To</label><br />
                  <input type="text" placeholder="Select the location" />
                </div>
              </div>

              <div className="distance sub-distance">
                <div className="date calender-img">
                  <label htmlFor="">Date</label><br />
                  <input type="text" placeholder="Select the Date" />
                  <a href="#">
                    <img src="calender" alt="calender" />
                  </a>
                </div>

                <div className="date">
                  <label htmlFor="">Time</label><br />
                  <input type="text" placeholder="Select the time" />
                </div>

                <div className="date">
                  <label htmlFor="">Seats</label><br />
                  <input type="text" placeholder="Select the seats" />
                </div>
              </div>

              <button type="submit" className='btn'>Search Buses</button>

            </form>

            

          </div>
        </div>
      </div>

    </div>

    
  );
}

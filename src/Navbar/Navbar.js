import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import the Link component


function Navbar() {
  const handleClick = () => {
    // Your handleClick logic here
  };

  return (
    <nav>
      <div className="nav__logo">
        <a href="/">
          StayHealthy
          <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
            <title>Doctor With Stethoscope SVG icon</title>
            <g>
              <g>
                <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
              </g>
            </g>
          </svg>
        </a>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-times fa fa-bars"></i>
      </div>
      <ul className="nav__links active">
        <li className="link">
          <Link to = "/landingpage"> Home </Link>
        </li>
        <li className="link">
          <a href="#">Appointments</a>
        </li>
        <li className="link">
            <Link to="/signup">
            <button className="btn1">Sign Up</button>
            </Link>
        </li>
        <li className="link">
           <Link to="/login">
            <button className="btn1">Login</button>
            </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

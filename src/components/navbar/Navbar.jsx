import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";


const Navbar = () => {

  return (
    <div className='navbar'>
      {/* ====================NAV=========================== */}
        <div className='navContainer'>
          <span className="logo">TravelBooking</span>
          <div className="navItems">
            <FontAwesomeIcon icon={faBars} className="btnMenu" />
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar
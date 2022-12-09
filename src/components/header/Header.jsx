import React from 'react';
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className="headerList">
        <div className="headerItems">
          <FontAwesomeIcon icon={faBed} />
          <span>Stay</span>
        </div>
      </div>
    </div>
  )
}

export default Header
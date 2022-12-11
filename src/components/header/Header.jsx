import React, { useState } from 'react';
import { 
  faBed, faPlane, 
  faCar, faTaxi, 
  faCalendarDays, faPerson, 
  faSearch } 
from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import "./header.css";

const Header = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);

  return (
    <div className='header'>
      <div className="headerContainer">
        <div className="headerList">
          {/* =====================HEADER ITEMS=============== */}
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>

        </div>
        {/* =====================TITLE-HEADER=========================== */}
        <h1 className="headerTitle">
          A lifetime of discounts? It's Genius.
        </h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or
          more with a free Lamabooking account
        </p>
        <button className="headerBtn">
          Sign in / Register
        </button>
        {/* ============================SEARCH-BAR======================= */}
        <div className="headerSearch">
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input 
              type="text"
              placeholder='Where are you want to go?'
              className='headerSearchInput'
            />
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            <DateRange
            	editableDateInputs={true}
              onChange={(item) => setDate([!item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="dateHeaderSearch"
            />
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>
          <div className="headerSearchItems">
            <button className="headerBtn-search">
              <FontAwesomeIcon icon={faSearch} className="headerIcon" />
              Search
            </button>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Header
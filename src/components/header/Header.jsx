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
  
  // ==================SET-LOGIC =================
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

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
            <span 
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>
            {openDate &&
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                rangeColors={["#55E6C1"]}
                color={["#B33771"]}
                showSelectionPreview={true}
                className="dateHeaderSearch"
              />
            }
          </div>
          <div className="headerSearchItems">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">
              {`${options.adult} adult - ${options.children} children - ${options.room} room`}
            </span>
              <div className="options">
                <div className="optionsItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button className="optionCounterBtn">-</button>
                    <span className="optionCounterNumb">1</span>
                    <button className="optionCounterBtn">+</button>
                  </div>
                </div>
                <div className="optionsItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button className="optionCounterBtn">-</button>
                    <span className="optionCounterNumb">0</span>
                    <button className="optionCounterBtn">+</button>
                  </div>
                </div>
                <div className="optionsItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button className="optionCounterBtn">-</button>
                    <span className="optionCounterNumb">1</span>
                    <button className="optionCounterBtn">+</button>
                  </div>
                </div>
              </div>
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
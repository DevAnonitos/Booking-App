import React from 'react';
import "./featured.css";

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img 
          src="https://images.pexels.com/photos/12238287/pexels-photo-12238287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Items" 
          className='featuredImg' 
        />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>123 propp</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
          src="https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Items" 
          className='featuredImg' 
        />
        <div className="featuredTitle">
          <h1>London</h1>
          <h2>156 propp</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img 
          src="https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Items" 
          className='featuredImg' 
        />
        <div className="featuredTitle">
          <h1>Dubai</h1>
          <h2>452 propp</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured
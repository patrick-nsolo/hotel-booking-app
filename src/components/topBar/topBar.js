import React from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

import './TopBar.css';

function TopBar() {
  return (
    <div className='topbar-container'>
      <div className='top-bar'>
        <div className='search-bar'>
          <div className="search-content">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search any things..." />  
          </div>
        </div> 
        <div className='date-notification'>
          <div className='date'>October 16, 2023</div>
          <FaBell className='bell-icon'/>
          <div className='notification-dot'></div>
        </div> 
      </div>
      <div className='image-container'>
        <img src='/images/hero-image.png' alt='couch'/>
        <div className='dropdown-container'>
          <div className='location-dropdown'>
              <input type='text' placeholder='Where are you going?'>
                <option value="destination1">Destination 1</option>
                <option value="destination2">Destination 2</option>
                <option value="destination3">Destination 3</option>
                {/* Add more destinations as needed */}
              </input>
          </div>
        </div>
      </div>  
    </div>  
  )
}

export default TopBar;


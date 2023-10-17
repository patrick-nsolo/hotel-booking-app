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
      <div>
        <img src='../images/hero-image.png' alt='couch'/>
      </div>  
    </div>  
  )
}

export default TopBar;


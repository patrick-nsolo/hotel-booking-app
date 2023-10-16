import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './TopBar.css';

function TopBar() {
  return (
    <div className='top-bar'>
      <div className='search-bar'>
        <div className="search-content">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search anything" />
        </div>
      </div>
      
    </div>
  )
}

export default TopBar;


import React, { useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import ReactDatePicker from 'react-datepicker';
import MapMarker from '../mapMarker/mapMarker';
import 'react-datepicker/dist/react-datepicker.css';
import './TopBar.css';

function TopBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [destination, setDestination] = useState('');
  const [occupants, setOccupants] = useState('');

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleOccupantsChange = (e) => {
    setOccupants(e.target.value);
  }

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
          <div className='date'>{startDate.toDateString()}</div>
          <FaBell className='bell-icon'/>
          <div className='notification-dot'></div>
        </div> 
      </div>
      <div className='image-container'>
        <img src='/images/hero-image.png' alt='couch'/>
        <div className='dropdown-container'>
          <div className='location-dropdown'>
              <MapMarker/>
              <select value={destination} onChange={handleDestinationChange}>
                <option value="">Where are you going?</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
              </select>
          </div>
          <div className="date-picker">
            <div className="date-picker-input">
                <span className="date-placeholder">Check-in Date</span>
                <ReactDatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  popperPlacement="bottom-start"
                />
            </div>
          </div>
          <div className='location-dropdown'>
              <select value={occupants} onChange={handleOccupantsChange}>
                <option value="">Number of Occupants</option>
                <option value="1person">1 Person</option>
                <option value="2persons">2 Persons</option>
                <option value="3persons">3 Persons</option>
              </select>
          </div>
        </div>
      </div>  
    </div>  
  )
}

export default TopBar;


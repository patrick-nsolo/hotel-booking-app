import React, { useState } from 'react';
import { FaSearch, FaBell, FaCalendar, FaUser, FaMapMarker } from 'react-icons/fa';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './TopBar.css';

function TopBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [destination, setDestination] = useState('');
  const [occupants, setOccupants] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleOccupantsChange = (e) => {
    setOccupants(e.target.value);
  }

  const handlePreviousSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

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
              <FaMapMarker/>
              <select value={destination} onChange={handleDestinationChange}>
                <option value="">Where are you going?</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
              </select>
          </div>
          <div className="date-picker">
            <div className="date-picker-input">
                <span className="date-placeholder"><FaCalendar/>Check-in Date</span>
                <ReactDatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  dateFormat="MMMM d, yyyy"
                />
            </div>
          </div>
          <div className='occupant-dropdown'>
              <FaUser/>
              <select value={occupants} onChange={handleOccupantsChange}>
                <option value="">Number of Occupants</option>
                <option value="1person">1 Person</option>
                <option value="2persons">2 Persons</option>
                <option value="3persons">3 Persons</option>
              </select>
          </div>
          <button className='search-btn'>Search</button>
        </div>
      </div> 
      <div className='carousel-container'>
        <div className='carousel-title'>
          <h3>Trending Destinations</h3>
          <div className='carousel-btns'>
            <button className='left' onClick={handlePreviousSlide}><span>&#60;</span></button>
            <button className='right' onClick={handleNextSlide}><span>&#62;</span></button>
          </div>
        </div>
        <div className='destinations'>
          <div className='slide-one slide-one-BG'>
            <img src='/images/seoul-korea.png' alt=''/>
            <div className='slide-text'>
              <h3>Seoul, Korea</h3>
              <p>Visiting the best tourist areas chosen by the audience.</p>
              <p>$450,000</p>
            </div>
          </div>
          <div className='slide-one slide-two-BG'>
            <img src='/images/tokyo-japan.jpg' alt=''/>
            <div className='slide-text'>
              <h3>Tokyo, Japan</h3>
              <p>One of the best selling tours to Japan.</p>
              <p>$600,000</p>
            </div>
          </div>
          <div className='slide-one slide-three-BG'>
            <img src='/images/moscow-russia.jpg' alt=''/>
            <div className='slide-text'>
              <h3>Seoul, Korea</h3>
              <p>Russia is One of the best places to visit</p>
              <p>$450,000</p>
            </div>
          </div>
        </div>
      </div> 
    </div>  
  )
}

export default TopBar;


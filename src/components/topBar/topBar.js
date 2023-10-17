import React, { useState } from 'react';
import { FaSearch, FaBell, FaCalendar, FaUser, FaMapMarker } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './TopBar.css';

function TopBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [destination, setDestination] = useState('');
  const [occupants, setOccupants] = useState('');
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleOccupantsChange = (e) => {
    setOccupants(e.target.value);
  }

  const handlePreviousSlide = () => {
    setSelectedSlide(selectedSlide - 1);
  };
  const handleNextSlide = () => {
    setSelectedSlide(selectedSlide + 1);
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
        </div>
      </div> 
      <div className='carousel-container'>
        <div className='carousel-title'>
          <h3>Trending Destinations</h3>
          <div className='carousel-btns'>

          </div>

        </div>
        <Carousel showThumbs={true} showArrows={true}>
            <div className='slide-one'>
              <img src='/images/moscow-russia.jpg' alt='Slide 1' />
            </div>
            <div className='slide-two'>
              <img src='/images/seoul-korea.jpg' alt='Slide 2' />
            </div>
            <div className='slide-three'>
              <img src='/images/tokyo-japan.jpg' alt='Slide 3' />
            </div>

        </Carousel>
      </div> 
    </div>  
  )
}

export default TopBar;


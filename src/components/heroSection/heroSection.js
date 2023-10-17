import React from 'react';
import './heroSection.css';

function heroSection() {
  return (
    <div>
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

export default heroSection;

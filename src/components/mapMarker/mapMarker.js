import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

function MapMarker() {
  return (
    <div className="map-marker">
      <FontAwesomeIcon icon={faMapMarker} />
    </div>
  );
}

export default MapMarker;

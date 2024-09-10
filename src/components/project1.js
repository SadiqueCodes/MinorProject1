import React from 'react';

function MapWithRiskLevel() {
  return (
    <div className="map-container">
      <h2>Map of Areas with Risk Level</h2>
      {/* Placeholder for the map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="Risk Map"
      ></iframe>
    </div>
  );
}

export default MapWithRiskLevel;

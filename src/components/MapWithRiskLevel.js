import React from 'react';
import './MapWithRiskLevel.css';

function MapWithRiskLevel() {
  return (
    <section className="map-container" id="map">
      <h2>Map of Areas with Risk Level</h2>
      <div className="map-frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32821855.76781227!2d69.20562369351545!3d22.351114258481583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304f37f9aa7287e9%3A0xc51f69e742d92cdd!2sIndia!5e0!3m2!1sen!2sus!4v1632828352925!5m2!1sen!2sushttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.760655265935!2d75.8577253153637!3d22.719568085106067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc8a3e26d13%3A0xb09cc367350bca6!2sIndore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1632829216763!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Risk Map"
        ></iframe>
      </div>
    </section>
  );
}

export default MapWithRiskLevel;

import React, { useState } from 'react';
import './AutoAlert.css';
function AutoAlert() {
  const [batteryLevel, setBatteryLevel] = useState(50);

  const handleSliderChange = (event) => {
    setBatteryLevel(event.target.value);
  };

  return (
    <div className="auto-alert-page">
      <h2>Set Auto Alert Battery Level</h2>
      <div>
        <p>Choose battery percentage for auto alert:</p>
        <input 
          type="range" 
          min="1" 
          max="100" 
          value={batteryLevel} 
          onChange={handleSliderChange} 
        />
        <div>{batteryLevel}%</div>
      </div>
      <button className="cta-button">Set Alert</button>
    </div>
  );
}

export default AutoAlert;

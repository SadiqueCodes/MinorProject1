import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';

function Features() {
  const navigate = useNavigate();

  return (
    <section className="features" id="features">
      <h2>Our Features</h2>
      <div className="features-container">
        
        <div className="feature-card">
          <h3>Panic Button</h3>
          <p>One-touch emergency alert to notify contacts and authorities instantly.</p>
          {/* Add button to redirect to the Home page */}
          <button className="cta-button" onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>

        <div className="feature-card">
          <h3>GPS Tracking</h3>
          <p>Real-time location sharing with trusted contacts for enhanced safety.</p>
          {/* Add button to redirect to the GPS tracking page */}
          <button className="cta-button" onClick={() => navigate('/gps-tracking')}>
            Share Location
          </button>
        </div>

        <div className="feature-card">
          <h3>Emergency Contacts</h3>
          <p>Manage a list of people to be contacted in case of an emergency.</p>
          {/* Add button to redirect to the Profile page */}
          <button className="cta-button" onClick={() => navigate('/profile')}>
            Manage Contacts
          </button>
        </div>

        <div className="feature-card">
          <h3>Auto Alert</h3>
          <p>Automatically alert contacts when battery drops below a certain level.</p>
          {/* Replace Safety Network with Auto Alert */}
          <button className="cta-button" onClick={() => navigate('/auto-alert')}>
            Set Auto Alert
          </button>
        </div>

      </div>
    </section>
  );
}

export default Features;

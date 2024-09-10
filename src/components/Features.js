import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features" id="features">
      <h2>Our Features</h2>
      <div className="features-container">
        <div className="feature-card">
          <h3>Panic Button</h3>
          <p>One-touch emergency alert to notify contacts and authorities instantly.</p>
        </div>
        <div className="feature-card">
          <h3>GPS Tracking</h3>
          <p>Real-time location sharing with trusted contacts for enhanced safety.</p>
        </div>
        <div className="feature-card">
          <h3>Emergency Contacts</h3>
          <p>Manage a list of people to be contacted in case of an emergency.</p>
        </div>
        <div className="feature-card">
          <h3>Safety Network</h3>
          <p>Create a network of trusted contacts for support in emergencies.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

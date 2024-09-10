import React from 'react';
import './HelpPage.css'; // Import your custom CSS for the Help Page

function HelpPage() {
  return (
    <div className="help-container">
      <h1>Help is on the Way!</h1>
      <p>Your request has been received. We will be in touch shortly.</p>
      <div className="siren"></div> {/* Add siren visual */}
    </div>
  );
}

export default HelpPage;

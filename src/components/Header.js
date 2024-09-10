import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Safe Guard Her</h1>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/map">Map</Link>
          <Link to="/about">About</Link>
          <Link to="/Profile">Profile</Link>   
        </nav>
        <button className="cta-button">Download App</button>
      </div>
    </header>
  );
}

export default Header;

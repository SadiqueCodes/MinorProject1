import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import MapWithRiskLevel from './components/MapWithRiskLevel';
import About from './components/About';
import Footer from './components/Footer';
import HelpPage from './components/HelpPage';
import Profile from './components/Profile';
import GPSTracking from './components/GPSTracking';
import AutoAlert from './components/AutoAlert';
import './App.css'; // Import your App CSS

// Import FontAwesome for icons (Optional)
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the user is on mobile (width <= 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize); // Check on window resize

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Conditionally render centered header for mobile or default header */}
        {isMobile ? (
          <div className="mobile-header">Safe Guard Her</div>
        ) : (
          <Header />
        )}

        <div className={isMobile ? 'mobile-content' : 'desktop-content'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/map" element={<MapWithRiskLevel />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/gps-tracking" element={<GPSTracking />} />
            <Route path="/auto-alert" element={<AutoAlert />} />
          </Routes>
        </div>

        {/* Conditionally render mobile footer or desktop footer */}
        {isMobile ? (
          <div className="mobile-nav">
            <a href="/"><i className="fas fa-home"></i><span>Home</span></a>
            <a href="/profile"><i className="fas fa-user"></i><span>Profile</span></a>
            <a href="/gps-tracking"><i className="fas fa-map-marker-alt"></i><span>GPS</span></a>
            <a href="/auto-alert"><i className="fas fa-bell"></i><span>Auto Alert</span></a>
            <a href="/about"><i className="fas fa-info-circle"></i><span>About</span></a>
          </div>
        ) : (
          <Footer />
        )}
      </div>
    </Router>
  );
}

export default App;

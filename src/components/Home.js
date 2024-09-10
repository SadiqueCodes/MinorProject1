import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook
import './Home.css';

function Home() {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleClick = () => {
    navigate('/help'); // Navigate to the new Help page
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h2>Empowering Women’s Safety with Technology</h2>
        <p>Stay safe, stay connected, with real-time alerts, GPS tracking, and emergency features.</p>
        <button className="cta-button" onClick={handleClick}>Help Me</button> {/* Updated Button */}
      </div>
    </section>
  );
}

export default Home;

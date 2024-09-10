import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import MapWithRiskLevel from './components/MapWithRiskLevel';
import About from './components/About';
import Footer from './components/Footer';
import HelpPage from './components/HelpPage';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/map" element={<MapWithRiskLevel />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

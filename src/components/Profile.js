// src/Profile.js
import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handlePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="profile-pic">Profile Picture</label>
          <input type="file" id="profile-pic" accept="image/*" onChange={handlePicChange} />
          {profilePic && <img src={profilePic} alt="Profile Preview" width="100" />}
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="emergency-number">Emergency Number</label>
          <input
            type="text"
            id="emergency-number"
            value={emergencyNumber}
            onChange={(e) => setEmergencyNumber(e.target.value)}
            placeholder="Enter emergency number"
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;

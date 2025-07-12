import React, { useState, useEffect } from 'react';
import Header from './Header'; // Assuming you want the header
import Footer from './Footer'; // Import Footer component
import './ProfilePage.css';
import { FaInstagram, FaTwitter, FaDiscord, FaUserCircle, FaEnvelope, FaPhone } from 'react-icons/fa'; // Using react-icons

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Attempt to load user data from localStorage
    // Assuming Register.js saves data to 'currentUserProfile'
    const storedData = localStorage.getItem('currentUserProfile');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      // Fallback or placeholder data if no user is found
      setUserData({
        name: 'Guest User',
        email: 'guest@example.com',
        phone: 'N/A',
        // Add any other default fields you might expect
      });
    }
  }, []);

  if (!userData) {
    return (
      <>
        <Header />
        <div className="profile-page-loading">Loading profile...</div>
        <Footer /> {/* Add Footer component */}
      </>
    );
  }

  // Extract initials for the logo placeholder
  const nameInitials = userData.name
    ? userData.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
    : 'GU';

  return (
    <>
      <Header />
      <div className="profile-page-container">
        <div className="profile-card">
          <div className="profile-card-top">
            <div className="profile-logo">{nameInitials}</div>
            <div className="profile-social-icons">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Discord"><FaDiscord /></a>
            </div>
          </div>
          <div className="profile-banner">
            {/* You can add an image here or keep it as a colored banner */}
            {/* <img src="path/to/banner-image.jpg" alt="Profile banner" /> */}
          </div>
          <div className="profile-card-bottom">
            <h1 className="profile-name">{userData.name}</h1>
            <div className="profile-stats">
              <div className="stat-item">
                <FaUserCircle className="stat-icon" />
                <span className="stat-value">{userData.name || 'N/A'}</span>
                <span className="stat-label">Full Name</span>
              </div>
              <div className="stat-item">
                <FaEnvelope className="stat-icon" />
                <span className="stat-value">{userData.email || 'N/A'}</span>
                <span className="stat-label">Email Address</span>
              </div>
              <div className="stat-item">
                <FaPhone className="stat-icon" />
                <span className="stat-value">{userData.phone || 'N/A'}</span>
                <span className="stat-label">Phone Number</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Add Footer component */}
    </>
  );
};

export default ProfilePage;
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Gift a Smile</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Connect with Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Make Money with Us</h3>
            <ul>
              <li>Sell on Chomuzon</li>
              <li>Sell under Chomuzon Accelerator</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <ul>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <img src="https://github.com/sheikhsajid69/MediaAssist.v1/blob/main/chomozon.png?raw=true" alt="Chomuzon Logo" className="footer-logo" />
          <p>&copy; 2023 Chomuzon.in, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
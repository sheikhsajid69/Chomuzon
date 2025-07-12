import React from 'react';
import './AmazonLayout.css';

const AmazonLayout = () => {
  return (
    <div className="amazon-container">
      {/* Header Section */}
      <header className="amazon-header">
        <div className="header-left">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className="amazon-logo" />
          <div className="location">
            <span>Delivering to Bangalore 560130</span>
            <span>Update location</span>
          </div>
        </div>
        <div className="header-search">
          <input type="text" placeholder="Search Amazon.in" />
          <button type="submit">Search</button>
        </div>
        <div className="header-right">
          <div className="nav-item">
            <span>Hello, sign in</span>
            <span>Account & Lists</span>
          </div>
          <div className="nav-item">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
          <div className="cart">
            <span>Cart</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="amazon-main">
        {/* Add your main content here */}
      </main>

      {/* Footer Section */}
      <footer className="amazon-footer">
        <div className="footer-section">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <ul>
              <li>About Amazon</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
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
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <ul>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className="footer-logo" />
          <div className="language-selector">
            <select>
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
          <div className="country-selector">
            <select>
              <option>India</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AmazonLayout;
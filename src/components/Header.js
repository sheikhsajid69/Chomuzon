import React, { useContext, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

// Add a responsive menu toggle function
const Header = () => {
  const { getCartCount } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <header className="header">
        <div className="header-left">
          <Link to="/">
            <img src="https://github.com/sheikhsajid69/MediaAssist.v1/blob/main/chomozon.png?raw=true" alt="Chomuzon" className="logo" />
          </Link>
          <div className="location">
            <span className="delivery-text">Delivering to</span>
            <div className="location-text">
              <i className="fas fa-map-marker-alt"></i>
              <span>Update location</span>
            </div>
          </div>
        </div>
        
        <div className="search-bar">
          <select className="search-dropdown">
            <option value="all">All</option>
            <option value="all">Fresh</option>
            <option value="all">Toys</option>
            <option value="all">Fashion</option>
            <option value="all">Footwear</option>
            <option value="all">Stationary</option>
            <option value="all">Books</option>
            <option value="all">Electronics</option>
          </select>
          <input type="text" placeholder="Search on Chomuzon" />
          <button className="search-button">
            <i className="search-icon fas fa-search"></i>
          </button>
        </div>
        
        <div className="header-right">
          <div className="language-selector">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="IN" className="flag-icon" />
            <span>EN</span>
          </div>
          <div className="account-menu">
            <span className="hello-text">Hello, sign in</span>
            <span className="account-text">Account & Lists</span>
            <div className="account-dropdown">
                <Link to="/profile" className="dropdown-link">Your Profile</Link>
                <Link to="/register" className="dropdown-link">Register / Sign In</Link>
            </div>
          </div>
          <div className="returns-orders">
            <span className="returns-text">Returns</span>
            <span className="orders-text">& Orders</span>
          </div>
          <div className="cart">
            <Link to="/cart" className="cart">
              <i className="fas fa-shopping-bag"></i>
              <span>Cart</span>
              {getCartCount() > 0 && (
                <span className="cart-count">{getCartCount()}</span>
              )}
            </Link>
          </div>
        </div>
        
        {/* Mobile menu toggle button */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </header>
      
      <nav className={`sub-header ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="menu-icon">
          <i className="fas fa-bars"></i>
          <span>All</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/todo">To-Do</Link>
          <Link to="/fresh">Fresh</Link>
          <Link to="/play">ChomuzonTV</Link>
          <Link to="/pay">Chomuzon Pay</Link>
          <Link to="/basics">Basics</Link>
          <Link to="/home-improvement">Home Improvement</Link>
          <a href="#">Sell</a>
          <a href="#">Gift Cards</a>
          <a href="#">Buy Again</a>
          <a href="#">Today's Deal</a>
          <a href="#">Luxuary</a>
          <a href="#">Bestseller</a>
          <a href="#">Browsing History</a>
          <a href="#">Gift Ideas</a>
          <a href="#">Health, Household & Personal Care</a>
          <a href="#">Books</a>
          <a href="#">Electronics</a>
          <a href="#">Art works</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
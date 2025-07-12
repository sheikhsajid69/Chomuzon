import React, { useState } from 'react';
import './Registor.css';

const Registor = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    course: '',
    email: '',
    mobile: '',
    address: '',
    terms: false
  });
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`register-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="theme-toggle">
        <button onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <div className={`header ${darkMode ? 'dark-mode' : ''}`}>
        <img src="https://nagarjunaeducation.com/images/G-100-removebg-preview.png" alt="Nagarjuna Logo" />
        <h1>Nagarjuna Group of Institutions</h1>
      </div>
      <div className="content-wrapper">
        <form onSubmit={handleSubmit} className={`register-form ${darkMode ? 'dark-mode' : ''}`}>
        <h2>Student Registration</h2>
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="class">Class</label>
          <input
            type="text"
            id="class"
            name="class"
            placeholder="Class your in"
            value={formData.class}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            placeholder="Course you've' taking"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="+91 9876543210"       
           value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
        
      </div>
    </div>
  );
};

export default Registor;
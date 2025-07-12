import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 
import Header from './Header'; 
import Footer from './Footer'; // Import Footer component

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password || !formData.phone) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const userData = {
        ...formData, 
        id: Date.now(),
        registeredAt: new Date().toISOString()
      };

      localStorage.setItem('currentUserProfile', JSON.stringify(userData));

      let users = [];
      try {
        const existingData = localStorage.getItem('registeredUsers');
        if (existingData) {
          users = JSON.parse(existingData);
        }
      } catch (error) {
        console.error('Error reading existing users data:', error);
      }
      users.push(userData);
      localStorage.setItem('registeredUsers', JSON.stringify(users, null, 2));

      console.log('User registered successfully:', userData);
      alert('Registration successful!');
      navigate('/profile'); 
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <Header /> 
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Create Account</h2>
          
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
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
            <label htmlFor="email">Email Address</label>
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
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
      <Footer /> {/* Add Footer component */}
    </>
  );
};

export default Register;
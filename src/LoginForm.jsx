import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    acceptTerms: false
  });
  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors('Please fill in all fields');
      return;
    }
    if (!formData.acceptTerms) {
      setErrors('Please accept the terms and conditions');
      return;
    }
    console.log('Form submitted:', formData);
    setErrors('');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {errors && <div style={{ color: 'red' }}>{errors}</div>}
        
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{display:"flex", color:"#fff"}}>
          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              placeholder="Accept Terms"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            {' '}I accept the terms and conditions
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
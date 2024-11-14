import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [form, setForm] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., form validation, API request)
    console.log('Login form submitted:', form);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username or Email</label>
          <input
            type="text"
            name="usernameOrEmail"
            value={form.usernameOrEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>

      <div className="google-login">
        <button className="google-btn">Login with Google</button>
      </div>
    </div>
  );
};

export default LoginPage;

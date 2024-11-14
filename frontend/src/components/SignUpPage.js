import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Signup.css'; // Import the CSS file for styling

const SignUpPage = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    rollnumber: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Use navigate to redirect to the login page
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error message
    setSuccessMessage(''); // Reset success message

    // Check if passwords match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Use the actual backend URL here
      const response = await fetch('http://localhost:3300/apis/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roll_number: form.rollnumber,
          u_name: form.username,
          mail: form.email,
          pass: form.password, // Send password in the request body
        }),
      });

      // Handling based on status code
      if (response.status !== 201) { // Check explicitly for 201 success status
        const errorData = await response.json();
        
        // Handle specific status codes
        switch (response.status) {
          case 400:
            throw new Error(errorData.message || 'Bad request. Please check the entered details.');
          case 409:
            throw new Error(errorData.message || 'Email or username already exists.');
          case 500:
            throw new Error('Internal server error. Please try again later.');
          default:
            throw new Error(errorData.message || 'Sign-up failed. Please try again.');
        }
      }

      // On successful sign-up, set success message
      setSuccessMessage("Sign-up successful! Please log in.");
      
      // Redirect to the login page
      navigate('/login'); // Redirect to login page

      // Optionally, clear form on successful sign-up
      setForm({
        username: '',
        rollnumber: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      console.log('Sign-up successful');
    } catch (error) {
      setError(error.message);
      console.error('Error during sign-up:', error);
    }
  };

  // Handler for Google Sign Up
  const handleGoogleSignUp = async () => {
    setError(null); // Reset error message
    setSuccessMessage(''); // Reset success message

    try {
      const response = await fetch('http://localhost:3300/apis/v1/user/signup_with_google', {
        method: 'GET',  // Google sign-up is a GET request
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status !== 200) {
        const errorData = await response.json();
        switch (response.status) {
          case 400:
            throw new Error(errorData.message || 'Bad request. Please try again.');
          case 409:
            throw new Error(errorData.message || 'Email or username already exists.');
          case 500:
            throw new Error('Internal server error. Please try again later.');
          default:
            throw new Error(errorData.message || 'Sign-up failed. Please try again.');
        }
      }

      // On successful Google sign-up, set success message
      setSuccessMessage("Google sign-up successful! Please log in.");
      
      // Redirect to the login page
      navigate('/login'); // Redirect to login page

      console.log('Google sign-up successful');

      // Optionally, clear form on successful sign-up
      setForm({
        username: '',
        rollnumber: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

    } catch (error) {
      setError(error.message);
      console.error('Error during Google sign-up:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Roll Number</label>
          <input
            type="text"
            name="rollnumber"
            value={form.rollnumber}
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="google-signup">
        <button className="google-btn" onClick={handleGoogleSignUp}>Sign Up with Google</button>
      </div>
    </div>
  );
};

export default SignUpPage;

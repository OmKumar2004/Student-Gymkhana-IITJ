import React from "react";
import { Link } from "react-router-dom";
import "./headerpage.css"; // Create a new CSS file for the header styles

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src="logo_IITJ.png" alt="Logo IITJ" className="logo-img" />
          <img
            src="logo_SG.png"
            alt="Logo Student Gymkhana"
            className="logo-img"
          />
        </div>
        <div className="auth-buttons">
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </header>

      {/* Navbar Section */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <Link to="/news-and-stories">News and Stories</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

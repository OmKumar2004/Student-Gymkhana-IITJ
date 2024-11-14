import React from "react";
import { Link } from "react-router-dom";
import "./headerpage.css"; // Create a new CSS file for the header styles

const Footer = () => {
  return (
    <div>
     <footer className="footer">
        <div className="footer-column">
          <img src="iitj-logo.png" alt="IITJ Logo" />
          <p>Student Gymkhana<br />Indian Institute of Technology Jodhpur<br />Rajasthan, India</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">GitHub</a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
            <li><a href="#">Link 5</a></li>
            <li><a href="#">Link 6</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Learn with SATHI</h4>
          <button>Get in Touch</button>
        </div>
      </footer>

      <div className="copyright">
        <p>&copy; Student Gymkhana, IIT Jodhpur</p>
      </div>
    </div>
  );
};

export default Footer;



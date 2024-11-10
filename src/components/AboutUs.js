import React from 'react';
import './AboutUs.css'; // Import the CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Student Senate Heading */}
      <section className="student-senate">
        <h2>Student Senate</h2>
        <div className="content-box">
          <p>
            Welcome to the Student Senate page! This is where you can learn more about the structure and leadership of our student body.
          </p>
        </div>
      </section>

      {/* Student Council Section */}
      <section className="student-council">
        <h3>Student Council</h3>
        <div className="council-blocks">
          <div className="block sac">
            <div className="block-content">
              <h4>SAC</h4>
              <p>Student Affairs Council</p>
            </div>
          </div>
          <div className="block acac">
            <div className="block-content">
              <h4>ACAC</h4>
              <p>Academic Affairs Council</p>
            </div>
          </div>
        </div>
      </section>

      {/* Societies Section */}
      <section className="societies">
        <h3>Societies</h3>
        <div className="societies-blocks">
          <div className="block">
            <div className="block-content">
              <h4>Society 1</h4>
              <p>Details about society 1.</p>
            </div>
          </div>
          <div className="block">
            <div className="block-content">
              <h4>Society 2</h4>
              <p>Details about society 2.</p>
            </div>
          </div>
          <div className="block">
            <div className="block-content">
              <h4>Society 3</h4>
              <p>Details about society 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boards Section */}
      <section className="boards">
        <h3>Boards</h3>
        <div className="boards-blocks">
          <div className="board-block">
            <div className="block-content">
              <h4>Board 1</h4>
              <p>Details about board 1.</p>
            </div>
          </div>
          <div className="board-block">
            <div className="block-content">
              <h4>Board 2</h4>
              <p>Details about board 2.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-column">
          <img src="iitj-logo.png" alt="IITJ Logo" className="iitj-logo" />
          <p>Student Gymkhana</p>
          <p>Indian Institute of Technology Jodhpur</p>
          <p>Rajasthan, India</p>
          <div className="social-links">
            <a href="https://instagram.com" className="social-icon">Instagram</a>
            <a href="https://linkedin.com" className="social-icon">LinkedIn</a>
            <a href="https://facebook.com" className="social-icon">Facebook</a>
            <a href="https://github.com" className="social-icon">GitHub</a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Other IITJ Links</h4>
          <ul>
            <li><a href="#">IITJ Homepage</a></li>
            <li><a href="#">IITJ Research</a></li>
            <li><a href="#">IITJ Alumni</a></li>
            <li><a href="#">IITJ Academics</a></li>
            <li><a href="#">IITJ Admissions</a></li>
            <li><a href="#">IITJ Campus Life</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Learn with SATHI</h4>
          <button className="get-in-touch-btn">Get in Touch</button>
        </div>
      </footer>

      {/* Copyright */}
      <div className="copyright">
        <p>Copyright © Student Gymkhana, IIT Jodhpur</p>
      </div>
    </div>
  );
};

export default AboutUs;

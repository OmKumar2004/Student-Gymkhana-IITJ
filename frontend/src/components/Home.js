import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from './headerpage';

const HomePage = () => {
  return (
    <div className="homepage">
      
      {/* Header Section */}
      {/* <header className="header">
        <div className="logo">
          <img src="logo_IITJ.png" alt="Logo IITJ" className="logo-img" />
          <img src="logo_SG.png" alt="Logo Student Gymkhana" className="logo-img" />
        </div>
        <div className="auth-buttons">
          <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
          <Link to="/login"><button className="login-btn">Login</button></Link>
        </div>
      </header> */}

      {/* Navbar Section */}
      {/* <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About Us</a></li>
          <li><Link to="/news-and-stories">News and Stories</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav> */}

      {/* New Section before Student Senate */}
      <div className="intro-section">
        <div className="intro-bg">
          <div className="intro-content">
            <div className="intro-header">
              <img src="/logo_SG.png" alt="Logo" className="intro-logo" />
              <div className="intro-text">
                <h1>Student Gymkhana</h1>
                <h2>IIT Jodhpur</h2>
                <hr className="divider" />
                <p className="welcome-text">Welcomes You!</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About Section (appears under Student Senate) */}
      <div id="about" className="about-section">
        <div className="about-header">
          <h2>Student Senate</h2>
          <p>This is the student senate section where important student activities and governance are discussed. <Link to="/student-senate">Know More</Link></p>
        </div>
        <hr />

        {/* Student Council Heading and Horizontal Line */}
        <div className="student-council-heading">
          <h2>Student Council</h2>
        </div>

        <div className="horizontal-line">
          {/* Left side (SAC) */}
          <div className="sac-block">
            <div className="flip-block large">
              <div className="front">
                <img id = "sacLogo" src="https://sac.iitj.ac.in/static/img/logo.489465ca.png" alt="SAC Logo" />
                  <script>
                    const sacLogo = document.getElementById('sacLogo');
                    sacLogo.style.filter = 'invert(100%)';
                  </script>
              </div>
              <div className="back">
                <h3>SAC</h3>
                <p>The Student Activity Council (SAC) at IIT Jodhpur serves as the backbone of all student-driven initiatives on campus. It organizes a wide range of events, from cultural festivals to technical competitions, fostering creativity and leadership. SAC also provides a platform for students to engage with peers, collaborate on projects, and contribute to the vibrant campus life. Through its efforts, SAC aims to cultivate a well-rounded experience that complements academic pursuits.</p>
                <Link to="https://sac.iitj.ac.in/">Know More</Link>
              </div>
            </div>
          </div>

          {/* Right side (ACAC) */}
          <div className="acac-block">
            <div className="flip-block large">
              <div className="front">
                <img src="acac-logo.png" alt="ACAC Logo" />
              </div>
              <div className="back">
                <h3>ACAC</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="https://acac.iitj.ac.in/">Know More</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Societies and Boards Sections */}
        <div className="societies-boards">
          <h3>Societies</h3>
          <div className="flip-blocks">
            <div className="flip-block">
              <div className="front">
                <img src="society1-logo.png" alt="Society 1 Logo" />
              </div>
              <div className="back">
                <h3>Society 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/society-1">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="society2-logo.png" alt="Society 2 Logo" />
              </div>
              <div className="back">
                <h3>Society 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/society-2">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="society3-logo.png" alt="Society 3 Logo" />
              </div>
              <div className="back">
                <h3>Society 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/society-3">Know More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="societies-boards">
          <h3>Boards</h3>
          <div className="flip-blocks">
            <div className="flip-block">
              <div className="front">
                <img src="board1-logo.png" alt="Board 1 Logo" />
              </div>
              <div className="back">
                <h3>Board 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/board-1">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="board2-logo.png" alt="Board 2 Logo" />
              </div>
              <div className="back">
                <h3>Board 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/board-2">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="board3-logo.png" alt="Board 3 Logo" />
              </div>
              <div className="back">
                <h3>Board 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/board-3">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="board4-logo.png" alt="Board 4 Logo" />
              </div>
              <div className="back">
                <h3>Board 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/board-4">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="board5-logo.png" alt="Board 5 Logo" />
              </div>
              <div className="back">
                <h3>Board 5</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/board-5">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="board6-logo.png" alt="Board 6 Logo" />
              </div>
              <div className="back">
                <h3>Board 6</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/board-6">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="board7-logo.png" alt="Board 7 Logo" />
              </div>
              <div className="back">
                <h3>Board 7</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/board-7">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="board8-logo.png" alt="Board 8 Logo" />
              </div>
              <div className="back">
                <h3>Board 8</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/board-8">Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      
    </div>
  );
};

export default HomePage;

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
          <p>The Student Senate at the Indian Institute of Technology Jodhpur (IITJ) serves as the central body representing the interests and voices of the student community. It plays a vital role in facilitating communication between the students and the administration, ensuring that the student perspective is taken into account in decision-making processes. By fostering an environment of collaboration, the Student Senate plays a crucial role in shaping a vibrant campus culture at IIT Jodhpur.<Link to="https://iitj.ac.in/uploaded_docs/rti/rti_misc/Constitution%20of%20Student%20Councils.pdf">Know More</Link></p>
        </div>
        <hr />

        {/* Student Council Heading and Horizontal Line */}
        <div className="student-council-heading">
          <h2 style={{ fontSize: '1.7rem' }}>Student Councils</h2>
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
                <img src="https://sac.iitj.ac.in/static/img/logo.489465ca.png" alt="ACAC Logo" />
              </div>
              <div className="back">
                <h3>ACAC</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="https://acac.iitj.ac.in/">Know More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="societies-boards">
          <h3 style={{ fontSize: '1.6rem' }}>Boards</h3>
          <div className="flip-blocks">
            <div className="flip-block">
              <div className="front">
                <img src="/assets/BDS.png" alt="BDS Logo" />
              </div>
              <div className="back">
                <h3>Board of Departmental Socities</h3>
                <p>BDS is the governing body responsible for organizing and overseeing activities specific to the academic departments of the institute. It aims to foster departmental identity and provide a platform for students to engage in discipline-specific learning, networking, and collaboration.</p>
                <Link to="https://www.linkedin.com/company/board-of-departmental-socities/">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="\assets\BAI.png" alt="Board 2 Logo" />
              </div>
              <div className="back">
                <h3>Board of Academic Interaction</h3>
                <p>It is a dedicated student-driven body that acts as a bridge between the academic administration and the student community. Its primary focus is to ensure smooth academic processes, address student concerns related to academics, and foster a culture of collaborative learning and intellectual growth.</p>
                <Link to="/board-2">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/BCD.png" alt="BCD Logo" />
              </div>
              <div className="back">
                <h3>Board of Career Development</h3>
                <p>It is a pivotal student-led body dedicated to guiding students in their career journeys. The BCD aims to enhance students' employability, foster professional development, and create opportunities for industry engagement, entrepreneurship, and higher education.</p>
                <Link to="/board-3">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/BSS.png" alt="BSS Logo" />
              </div>
              <div className="back">
                <h3>Board of Student Sports</h3>
                <p>It is the central body responsible for promoting sports and physical fitness among students. It oversees the organization of sports events, manages facilities, and encourages participation in inter- and intra-institute tournaments. BOSS aims to build a strong sports culture on campus, fostering teamwork, discipline, and a healthy lifestyle.</p>
                <Link to="https://www.instagram.com/bss.iitj/">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/SAA.png" alt="Board 5 Logo" />
              </div>
              <div className="back">
                <h3>Society of Alumni Affairs</h3>
                <p>SAA serves as a vital link between the institute and its alumni. It fosters a lifelong connection with former students, leveraging their expertise, achievements, and networks to benefit both the alumni and the current student community. The SAA aims to create a global network of IIT Jodhpur alumni while contributing to the institute's growth and legacy.</p>
                <Link to="https://www.linkedin.com/company/society-of-alumni-affairs-iit-jodhpur/posts/?feedView=all">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/BLA.png" alt="BLA Logo" />
              </div>
              <div className="back">
                <h3>Board of Literary Affairs</h3>
                <p>BLA is responsible for promoting literary activities and fostering a culture of intellectual engagement on campus. The BLA organizes various events that encourage creative writing, debates, public speaking, and other forms of literary expression. It provides a platform for students to explore their literary talents and engage with the broader cultural and intellectual community.</p>
                <Link to="https://www.linkedin.com/company/board-of-literary-affairs-iit-jodhpur/?originalSubdomain=in">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/BSW.png" alt="Board 7 Logo" />
              </div>
              <div className="back">
                <h3>Board of Students Welfare</h3>
                <p>It is a student-driven body dedicated to enhancing the overall well-being of students by focusing on various aspects of their life on campus, including social, cultural, emotional, and personal development. BSW ensures that students' needs are addressed, creating a supportive and balanced environment for academic and extracurricular growth.</p>
                <Link to="https://www.instagram.com/bsw.iitj/">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/BAC.png" alt="BAC Logo" />
              </div>
              <div className="back">
                <h3>
                Board of Art and Culture</h3>
                <p>BAC is responsible for promoting the cultural vibrancy of the campus by organizing various artistic and cultural activities. BAC aims to provide students with a platform to explore, express, and showcase their creative talents, ranging from performing arts to fine arts, and fostering an environment where art and culture thrive alongside academics.</p>
                <Link to="https://www.instagram.com/bac.iitj/">Know More</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Societies and Boards Sections */}
        <div className="societies-boards">
          <h3 style={{ fontSize: '1.6rem' }}>Societies</h3>
          <div className="flip-blocks">
            <div className="flip-block">
              <div className="front">
                <img src="/assets/Robotics.png" alt="Robotics Society Logo" />
              </div>
              <div className="back">
                <h3>Robotics Society</h3>
                <p>The Robotics Club at IIT Jodhpur is dedicated to fostering the spirit of innovation in robotics and automation. It organizes workshops, competitions, and hands-on projects focusing on robotics development and the use of advanced technologies like AI and machine learning in robotics​.</p>
                <Link to="https://github.com/RoboticsClubIITJ">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/DevlUp.png" alt="Devlup Labs Logo" />
              </div>
              <div className="back">
                <h3>Devlup Labs</h3>
                <p>DevlUp Labs is an open-source enthusiasts' community at IIT Jodhpur. It encourages students to explore and contribute to open-source software projects, focusing on areas such as web development, programming languages, and application tools.​</p>
                <Link to="https://devluplabs.tech/#/">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/PC.png" alt="PC Logo" />
              </div>
              <div className="back">
                <h3>Programming Society</h3>
                <p>The Programming Club, IIT Jodhpur, promotes programming skills and competitive coding.</p>
                <Link to="https://www.linkedin.com/company/pclubiitj/?originalSubdomain=in">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/Inside.png" alt="Inside Society Logo" />
              </div>
              <div className="back">
                <h3>InSIDe</h3>
                <p>It is the GameDev Club focusing on Game Development.</p>
                <Link to="https://www.instagram.com/inside._iitj/">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/Nexus.png" alt="Nexus Logo" />
              </div>
              <div className="back">
                <h3>Nexus Society</h3>
                <p>Nexus is the astronomy club of IITJ. It organise star gazing sessions and also participate in various competitions like CanSat, Model Rocketery.</p>
                <Link to="https://www.instagram.com/nexus__iitj/">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/RAID.png" alt="RAID Society Logo" />
              </div>
              <div className="back">
                <h3>RAID Society</h3>
                <p>It is a student-run club at IIT Jodhpur focused on AI, machine learning, and deep learning. The club hosts workshops, hackathons, and projects aimed at advancing students' knowledge and experience in cutting-edge AI technologies.</p>
                <Link to="https://www.instagram.com/raid.iitj/">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/Badminton.png" alt="Badminton Society Logo" />
              </div>
              <div className="back">
                <h3>Badminton Society</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="https://www.instagram.com/badminton_bss.iitj/">Know More</Link>
              </div>
            </div>
            <div className="flip-block">
              <div className="front">
                <img src="/assets/Dramebaaz.png" alt="Dramatics Society Logo" />
              </div>
              <div className="back">
                <h3>Dramatics Society</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="https://www.instagram.com/dramatics_iitj/">Know More</Link>
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

// import React from "react";
// import "./headerpage.css"; // CSS file for styling

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer">
//         <div className="footer-column logo-column">
//           <img src="logo_IIT.png" alt="IITJ Logo" className="footer-logo" />
//           <p className="footer-text">
//             Technology Students' Gymkhana<br />
//             Indian Institute of Technology Jodhpur,<br />
//             Rajasthan, India
//           </p>
//           <div className="social-links">
//             <a href="#">Instagram</a>
//             <a href="#">LinkedIn</a>
//             <a href="#">Facebook</a>
//             <a href="#">GitHub</a>
//           </div>
//         </div>

//         <div className="footer-column">
//           <h4>Links</h4>
//           <ul>
//             <li><a href="#">Counselling Centre</a></li>
//             <li><a href="#">Yellow Pages</a></li>
//             <li><a href="#">Library</a></li>
//             <li><a href="#">Your Dost</a></li>
//             <li><a href="#">CIC</a></li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>More Resources</h4>
//           <ul>
//             <li><a href="#">IIT Jodhpur Website</a></li>
//             <li><a href="#">HMC</a></li>
//             <li><a href="#">ERP</a></li>
//             <li><a href="#">Grievance Form</a></li>
//             <li><a href="#">Apna IIT</a></li>
//           </ul>
//         </div>

//         <div className="footer-column contact-column">
//           <h4>We're here</h4>
//           <p className="contact-subtitle">Let's talk</p>
//           <button className="contact-button">Get in Touch</button>
//         </div>
//       </footer>

//       <div className="copyright">
//         <p>&copy; Technology Students' Gymkhana, IIT Jodhpur | <a href="#">Source Code</a></p>
//       </div>
//     </div>
//   );
// };

// export default Footer;




import React from "react";
import { Link } from "react-router-dom";
import "./headerpage.css"; // Create a new CSS file for the header styles

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-column">
          <img src="logo_IITJ_2.png" alt="IITJ Logo" className="footer-logo" />
          <p>Student Gymkhana<br />Indian Institute of Technology Jodhpur<br />Rajasthan, India</p>
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
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


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









// import React from "react";
// import { Link } from "react-router-dom";
// import "./headerpage.css"; // Create a new CSS file for the header styles

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer">
//         <div className="footer-column">
//           <img src="logo_IITJ_2.png" alt="IITJ Logo" className="footer-logo" />
//           <p>Student Gymkhana<br />Indian Institute of Technology Jodhpur<br />Rajasthan, India</p>
//           <div className="social-links">
//             <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
//             <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
//             <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
//             <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
//           </div>
//         </div>
//         <div className="footer-column">
//           <h4>Links</h4>
//           <ul>
//             <li><a href="#">Link 1</a></li>
//             <li><a href="#">Link 2</a></li>
//             <li><a href="#">Link 3</a></li>
//             <li><a href="#">Link 4</a></li>
//             <li><a href="#">Link 5</a></li>
//             <li><a href="#">Link 6</a></li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Learn with SATHI</h4>
//           <button>Get in Touch</button>
//         </div>
//       </footer>

//       <div className="copyright">
//         <p>&copy; Student Gymkhana, IIT Jodhpur</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;











// import React from "react"; 
// import { Link } from "react-router-dom";
// import "./footer.css"; // Ensure the CSS file is named properly

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer">
//         <div className="footer-column logo-column">
//           <img src="logo_IITJ_2.png" alt="IITJ Logo" className="footer-logo" />
//           <p>
//             Student Gymkhana<br />
//             Indian Institute of Technology Jodhpur<br />
//             Rajasthan, India
//           </p>
//           <div className="social-links">
//             <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
//             <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
//             <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
//             <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
//           </div>
//         </div>

//         <div className="footer-column">
//           <h4>Links</h4>
//           <div className="links-row">
//             <ul>
//               <li><a href="https://www.iitj.ac.in/">IITJ Website</a></li>
//               <li><a href="">Academic ERP</a></li>
//               <li><a href="http://172.16.100.162/">Gallery</a></li>
//               <li><a href="https://iitj.ac.in/footer/index.php?id=contact">Contact US</a></li>
//             </ul>
//             <ul>
//               <li><a href="http://swc.iitj.ac.in/">SWC</a></li>
//               <li><a href="https://library.iitj.ac.in/">Library</a></li>
//               <li><a href="http://172.16.100.168:8080/jspui/">Repository</a></li>
//               <li><a href="https://gateway.iitj.ac.in/remote/login?lang=en">VPN</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="footer-column contact-column">
//           <h4>Learn with SATHI</h4>
//           <button className="contact-button">Get in Touch</button>
//         </div>
//       </footer>

//       <div className="copyright">
//         <p>&copy; Student Gymkhana, IIT Jodhpur</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;








import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleGetInTouch = () => {
    if (isLoggedIn) {
      navigate("/sathi"); // Redirect to the SATHI page if logged in
    } else {
      navigate("/login"); // Redirect to the login page if not logged in
    }
  };

  return (
    <div>
      <footer className="footer">
        <div className="footer-column logo-column">
          <img src="logo_IITJ_2.png" alt="IITJ Logo" className="footer-logo" />
          <p>
            Student Gymkhana<br />
            Indian Institute of Technology Jodhpur<br />
            Rajasthan, India
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <div className="links-row">
            <ul>
              <li><a href="https://www.iitj.ac.in/">IITJ Website</a></li>
              <li><a href="https://erp.iitj.ac.in/SSOAdministration/login.htm?sessionToken=EB45BD8985C02C917937A594475E7BD4.worker2&requestedUrl=https://erp.iitj.ac.in/IIT_ERP3/">Academic ERP</a></li>
              <li><a href="http://172.16.100.162/">Gallery</a></li>
              <li><a href="https://iitj.ac.in/footer/index.php?id=contact">Contact US</a></li>
            </ul>
            <ul>
              <li><a href="http://swc.iitj.ac.in/">SWC</a></li>
              <li><a href="https://library.iitj.ac.in/">Library</a></li>
              <li><a href="http://172.16.100.168:8080/jspui/">Repository</a></li>
              <li><a href="https://gateway.iitj.ac.in/remote/login?lang=en">VPN</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-column contact-column">
          <h4>Learn with SATHI</h4>
          <button className="contact-button" onClick={handleGetInTouch}>
            Get in Touch
          </button>
        </div>
      </footer>

      <div className="copyright">
        <p>&copy; Student Gymkhana, IIT Jodhpur</p>
      </div>
    </div>
  );
};

export default Footer;

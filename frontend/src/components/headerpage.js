// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./headerpage.css"; // Create a new CSS file for the header styles

// const Header = () => {
//   // Assuming you're using useState to track login status
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // Default: user is not logged in

//   // Optionally, you could use localStorage or a global state management tool (e.g., Context API, Redux) to manage this value

//   return (
//     <div>
//       {/* Header Section */}
//       <header className="header">
//         <div className="logo">
//           <img src="logo_IITJ.png" alt="Logo IITJ" className="logo-img" />
//           <img
//             src="logo_SG.png"
//             alt="Logo Student Gymkhana"
//             className="logo-img"
//           />
//         </div>
//         <div className="auth-buttons">
//           <Link to="/signup">
//             <button className="signup-btn">Sign Up</button>
//           </Link>
//           <Link to="/login">
//             <button className="login-btn">Login</button>
//           </Link>
//         </div>
//       </header>

//       {/* Navbar Section */}
//       <nav className="navbar">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <a href="#about">About Us</a>
//           </li>

//           {/* Render Noticeboard and SATHI links only if the user is logged in */}
//           {isLoggedIn && (
//             <>
//               <li>
//                 <Link to="/noticeboard">Noticeboard</Link>
//               </li>
//               <li>
//                 <Link to="/sathi">SATHI</Link>
//               </li>
//             </>
//           )}

//           <li>
//             <Link to="/news-and-stories">News and Stories</Link>
//           </li>
//           <li>
//             <Link to="/events">Events</Link>
//           </li>
//           <li>
//             <Link to="/gallery">Gallery</Link>
//           </li>
//           <li>
//             <Link to="/team">Team</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Header;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./headerpage.css"; // Create a new CSS file for the header styles

// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: user is not logged in

//   // Check if a token exists in localStorage when the component mounts
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true); // User is logged in
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setIsLoggedIn(false); // Update state when user logs out
//   };

//   return (
//     <div>
//       {/* Header Section */}
//       <header className="header">
//         <div className="logo">
//           <img src="logo_IITJ.png" alt="Logo IITJ" className="logo-img" />
//           <img
//             src="logo_SG.png"
//             alt="Logo Student Gymkhana"
//             className="logo-img"
//           />
//         </div>
//         <div className="auth-buttons">
//           {!isLoggedIn ? (
//             <>
//               <Link to="/signup">
//                 <button className="signup-btn">Sign Up</button>
//               </Link>
//               <Link to="/login">
//                 <button className="login-btn">Login</button>
//               </Link>
//             </>
//           ) : (
//             <button className="logout-btn" onClick={handleLogout}>Logout</button>
//           )}
//         </div>
//       </header>

//       {/* Navbar Section */}
//       <nav className="navbar">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <a href="#about">About Us</a>
//           </li>

//           {/* Render Noticeboard and SATHI links only if the user is logged in */}
//           {isLoggedIn && (
//             <>
//               <li>
//                 <Link to="/noticeboard">Noticeboard</Link>
//               </li>
//               <li>
//                 <Link to="/sathi">SATHI</Link>
//               </li>
//             </>
//           )}

//           <li>
//             <Link to="/news-and-stories">News and Stories</Link>
//           </li>
//           <li>
//             <Link to="/events">Events</Link>
//           </li>
//           <li>
//             <Link to="/gallery">Gallery</Link>
//           </li>
//           <li>
//             <Link to="/team">Team</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Header;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./headerpage.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    setIsLoggedIn(loginStatus === 'true');
    setUsername(storedUsername);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername(null);
    window.location.reload();
  };
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="logo_IITJ.png" alt="Logo IITJ" className="logo-img" />
          <img src="logo_SG.png" alt="Logo Student Gymkhana" className="logo-img" />
        </div>
        <div className="auth-buttons">
          {isLoggedIn ? (
            <div className="logged-in-info">
              <div className="avatar">
                <span>{username ? username.charAt(0).toUpperCase() : 'U'}</span>
              </div>
              <span className="username">{username}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <>
              <Link to="/signup">
                <button className="signup-btn">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="login-btn">Login</button>
              </Link>
            </>
          )}
        </div>
      </header>

      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/noticeboard">About Us</Link></li>
          {isLoggedIn && (
            <>
              <li><Link to="/noticeboard">Noticeboard</Link></li>
              <li><Link to="/sathi">SATHI</Link></li>
            </>
          )}
          <li><Link to="/news-and-stories">News and Stories</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};
//   return (
//     <div>
//       <header className="header">
//         <div className="logo">
//           <img src="logo_IITJ.png" alt="Logo IITJ" className="logo-img" />
//           <img src="logo_SG.png" alt="Logo Student Gymkhana" className="logo-img" />
//         </div>
//         <div className="auth-buttons">
//           {isLoggedIn ? (
//             <button onClick={() => {
//               localStorage.removeItem('token'); // Clear token on logout
//               localStorage.setItem('isLoggedIn', false); // Update login status
//               setIsLoggedIn(false);
//               window.location.reload(); // Refresh the page to show login state
//             }} className="logout-btn">Logout</button>
//           ) : (
//             <>
//               <Link to="/signup">
//                 <button className="signup-btn">Sign Up</button>
//               </Link>
//               <Link to="/login">
//                 <button className="login-btn">Login</button>
//               </Link>
//             </>
//           )}
//         </div>
//       </header>

//       <nav className="navbar">
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><a href="#about">About Us</a></li>
//           {isLoggedIn && (
//             <>
//               <li><Link to="/noticeboard">Noticeboard</Link></li>
//               <li><Link to="/sathi">SATHI</Link></li>
//             </>
//           )}
//           <li><Link to="/news-and-stories">News and Stories</Link></li>
//           <li><Link to="/events">Events</Link></li>
//           <li><Link to="/gallery">Gallery</Link></li>
//           <li><Link to="/team">Team</Link></li>
//           <li><Link to="/contact">Contact Us</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

export default Header;

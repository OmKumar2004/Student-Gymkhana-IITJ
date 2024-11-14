// import React, { useState } from 'react';
// import './Login.css';

// const LoginPage = () => {
//   const [form, setForm] = useState({
//     field: '', // For either username or email
//     pass: '',  // Changed password field to 'pass' to match backend
//   });
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset error message before submission

//     try {
//       // Use the actual backend URL here
//       const response = await fetch('http://localhost:3300/apis/v1/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form), // Send form directly, where 'pass' is the password field
//       });

//       // Handling based on status code
//       if (response.status !== 200) {
//         const errorData = await response.json();

//         // Handle specific status codes
//         switch (response.status) {
//           case 400:
//             throw new Error(errorData.message || 'Bad request. Please check the entered details.');
//           case 401:
//             throw new Error(errorData.message || 'Invalid username/email or password.');
//           case 500:
//             throw new Error('Internal server error. Please try again later.');
//           default:
//             throw new Error(errorData.message || 'Login failed. Please try again.');
//         }
//       }

//       const data = await response.json();
//       // Assuming the data contains a token or session details, store them for later use
//       localStorage.setItem('token', data.token); // Example of storing the token for later use
//       console.log('Login successful:', data);

//       // Optionally, redirect or update UI on successful login
//       window.location.href = './'; // Adjust as needed for your app structure
//     } catch (error) {
//       setError(error.message);
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Username or Email</label>
//           <input
//             type="text"
//             name="field" // Use the 'field' key to send either username or email
//             value={form.field}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="pass" // Changed 'password' to 'pass' for backend compatibility
//             value={form.pass}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="login-btn">Login</button>
//       </form>

//       {error && <div className="error-message">{error}</div>}

//       <div className="google-login">
//         <button className="google-btn">Login with Google</button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection after successful login
import './Login.css';

const LoginPage = () => {
  const [form, setForm] = useState({
    field: '', // For either username or email
    pass: '',  // Changed password field to 'pass' to match backend
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for redirecting after successful login

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(null); // Reset error message before submission

  //   try {
  //     const response = await fetch('http://localhost:3300/apis/v1/user/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(form), // Send form directly, where 'pass' is the password field
  //     });

  //     if (response.status !== 200) {
  //       const errorData = await response.json();

  //       // Handle specific status codes
  //       switch (response.status) {
  //         case 400:
  //           throw new Error(errorData.message || 'Bad request. Please check the entered details.');
  //         case 401:
  //           throw new Error(errorData.message || 'Invalid username/email or password.');
  //         case 500:
  //           throw new Error('Internal server error. Please try again later.');
  //         default:
  //           throw new Error(errorData.message || 'Login failed. Please try again.');
  //       }
  //     }

  //     const data = await response.json();
  //     localStorage.setItem('token', data.token); // Store the token for later use

  //     // Optionally, store the user data if needed
  //     localStorage.setItem('user', JSON.stringify(data.user));

  //     console.log('Login successful:', data);

  //     // Redirect to home or dashboard after login
  //     navigate('/'); // Adjust the path as needed for your app structure
  //   } catch (error) {
  //     setError(error.message);
  //     console.error('Error during login:', error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const response = await fetch('http://localhost:3300/apis/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      if (response.status !== 200) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed. Please try again.');
      }
  
      const data = await response.json();
      localStorage.setItem('token', data.token); // Store token in localStorage
      localStorage.setItem('isLoggedIn', true);   // Store login status in localStorage
      localStorage.setItem('username', data.user.username);
      window.location.href = '/'; // Redirect to the home page after login
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username or Email</label>
          <input
            type="text"
            name="field"
            value={form.field}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="pass"
            value={form.pass}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="google-login">
        <button className="google-btn">Login with Google</button>
      </div>
    </div>
  );
};

export default LoginPage;

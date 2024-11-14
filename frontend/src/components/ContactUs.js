// import React, { useState } from 'react';
// import './ContactUs.css';

// const FeedbackPage = () => {
//   const [recipient, setRecipient] = useState(''); // Stores selected recipient
//   const [content, setContent] = useState(''); // Stores content of the feedback
//   const [submitted, setSubmitted] = useState(false); // Tracks submission status

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (recipient && content) {
//       setSubmitted(true);
//       setContent('');
//       setRecipient('');
//     }
//   };

//   return (
//     <div className="feedback-page">
//       <div className="feedback-block">
//         <h2 className="feedback-heading">Feedback Form</h2>
        
//         {/* Recipient Dropdown */}
//         <div className="feedback-recipient">
//           <label htmlFor="recipient" className="feedback-label-left">To:</label>
//           <div className="dropdown-container">
//             <select 
//               id="recipient" 
//               value={recipient} 
//               onChange={(e) => setRecipient(e.target.value)} 
//               className="dropdown-select"
//             >
//               <option value="">Select Recipient</option>
//               <option value="Gen Secy @ SS">Gen Secy @ SS</option>
//               <option value="Gen Secy @ SAC">Gen Secy @ SAC</option>
//               <option value="Gen Secy @ ACAC">Gen Secy @ ACAC</option>
//               <option value="Admin">Admin</option>
//             </select>
//           </div>
//         </div>

//         {/* Content Box */}
//         <div className="feedback-content">
//           <label htmlFor="content" className="feedback-label-left">Content:</label>
//           <textarea 
//             id="content" 
//             value={content} 
//             onChange={(e) => setContent(e.target.value)} 
//             placeholder="Write your feedback here..." 
//             className="content-textarea" 
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <button onClick={handleSubmit} className="submit-button">Submit</button>

//         {/* Success Message */}
//         {submitted && <p className="success-message">Your feedback has been submitted successfully.</p>}
//       </div>
//     </div>
//   );
// };

// export default FeedbackPage;
import React, { useState } from 'react';
import './ContactUs.css';

const FeedbackPage = () => {
  const [recipient, setRecipient] = useState(''); // Stores selected recipient
  const [content, setContent] = useState(''); // Stores content of the feedback
  const [submitted, setSubmitted] = useState(false); // Tracks submission status

  // Map of recipient options to email addresses
  const recipientEmailMap = {
    "Gen Secy @ SS": "gensecy_ss@iitj.ac.in",
    "Gen Secy @ SAC": "gensecy_sac@iitj.ac.in",
    "Gen Secy @ ACAC": "gensecy_acac@iitj.ac.in",
    "Admin": "studentgymkhanaiitj@gmail.com" // Adjust email if needed
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (recipient && content) {
      const email = recipientEmailMap[recipient]; // Get the email address based on selected recipient
      
      try {
        // Send feedback data to backend
        await fetch('http://localhost:3300/apis/v1/common/feedback', { // Use the correct endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from_mail: "sumeetpatil20004@gmail.com",       // Email of the selected recipient
            to_mail: email,
            feedback: content// Feedback content
          })
        });
        
        // Update state to reflect successful submission
        setSubmitted(true);
        setContent('');
        setRecipient('');
      } catch (error) {
        console.error("Error sending feedback:", error);
      }
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-block">
        <h2 className="feedback-heading">Feedback Form</h2>
        
        {/* Recipient Dropdown */}
        <div className="feedback-recipient">
          <label htmlFor="recipient" className="feedback-label-left">To:</label>
          <div className="dropdown-container">
            <select 
              id="recipient" 
              value={recipient} 
              onChange={(e) => setRecipient(e.target.value)} 
              className="dropdown-select"
            >
              <option value="">Select Recipient</option>
              <option value="Gen Secy @ SS">Gen Secy @ SS</option>
              <option value="Gen Secy @ SAC">Gen Secy @ SAC</option>
              <option value="Gen Secy @ ACAC">Gen Secy @ ACAC</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        {/* Content Box */}
        <div className="feedback-content">
          <label htmlFor="content" className="feedback-label-left">Content:</label>
          <textarea 
            id="content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            placeholder="Write your feedback here..." 
            className="content-textarea" 
          ></textarea>
        </div>

        {/* Submit Button */}
        <button onClick={handleSubmit} className="submit-button">Submit</button>

        {/* Success Message */}
        {submitted && <p className="success-message">Your feedback has been submitted successfully.</p>}
      </div>
    </div>
  );
};

export default FeedbackPage;
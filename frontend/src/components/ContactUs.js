import React, { useState } from 'react';
import './ContactUs.css';

const FeedbackPage = () => {
  const [recipient, setRecipient] = useState(''); // Stores selected recipient
  const [content, setContent] = useState(''); // Stores content of the feedback
  const [submitted, setSubmitted] = useState(false); // Tracks submission status

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipient && content) {
      setSubmitted(true);
      setContent('');
      setRecipient('');
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

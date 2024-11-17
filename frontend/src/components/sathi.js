// import React from 'react';
// import './sathi.css';

// const Sathi = () => {
//   return (
//     <div className="gallery-container">
//       <h1>SATHI</h1>
//       <p>Connect with Sathi</p>
//     </div>
//   );
// };

// export default Sathi;






import React, { useState, useEffect } from "react";
import "./sathi.css";

const SathiPage = () => {
  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");
  const [activeSlider, setActiveSlider] = useState("");
  const [feedbackForm, setFeedbackForm] = useState({
    to: "",
    subject: "",
    description: "",
  });
  const [resourceForm, setResourceForm] = useState({
    title: "",
    category: "",
    description: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [resourceAdded, setResourceAdded] = useState(false);

  // Fetch resources from backend
  const fetchResources = async () => {
    try {
      const response = await fetch("http://localhost:3300/apis/v1/user/sathi", {
        headers: {
          "Content-Type": "application/json",
          "X-filter": search,
        },
      });
      const data = await response.json();
      setResources(data);
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    fetchResources();
  };

  // Handle feedback form submission
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3300/apis/v1/common/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to_mail: feedbackForm.to,
          from_mail: "useremail@domain.com",
          subject: feedbackForm.subject,
          feedback: feedbackForm.description,
        }),
      });
      setSubmitted(true);
      setFeedbackForm({ to: "", subject: "", description: "" });
      window.location.reload();
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  // Handle add resource form submission
  const handleAddResourceSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("u_mail", localStorage.getItem('umail'));
    formData.append("title", resourceForm.title);
    formData.append("category", resourceForm.category);
    formData.append("description", resourceForm.description);
    formData.append("resource", resourceForm.file);

    try {
      await fetch("http://localhost:3300/apis/v1/user/sathi", {
        method: "POST",
        body: formData,
        headers:{
          "x-image":"false"
        }
      });
      setResourceAdded(true);
      setResourceForm({ title: "", category: "", description: "", file: null });
      window.location.reload();
    } catch (error) {
      console.error("Error adding resource:", error);
    }
  };

  // Fetch all resources on initial load
  useEffect(() => {
    fetchResources();
  }, []);

  // Close the slider when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest(".slider") && !e.target.closest(".icon")) {
      setActiveSlider("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="sathi-page">
      <div className="help-header">We are here to help you !!</div>
      {/* Search Section */}
      <div className="search-section">
        <h2>Search for Resources</h2>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Tell your search content"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      {/* Table for Resources */}
      {resources.length > 0 && (
        <div className="resources-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Uploaded By</th>
                <th>File Url</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource, index) => (
                <tr key={index}>
                  <td>{resource.title}</td>
                  <td>{resource.category}</td>
                  <td>{resource.description}</td>
                  <td>{resource.mail}</td>
                  <td><a href = {resource.file_url}>File Url</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Right-Side Icons */}
      <div className="side-icons">
        <div
          className="icon add-resource-icon"
          onClick={() =>
            setActiveSlider((prev) => (prev === "add-resource" ? "" : "add-resource"))
          }
        >
          ➕
        </div>
        <div
          className="icon feedback-icon"
          onClick={() =>
            setActiveSlider((prev) => (prev === "feedback" ? "" : "feedback"))
          }
        >
          📩
        </div>
      </div>

      {/* Add Resource Slider */}
      {activeSlider === "add-resource" && (
        <div className="slider">
          <button
            className="minimize-button"
            onClick={() => setActiveSlider("")}
          >
            ➡️
          </button>
          <h2>Add a Resource</h2>
          <form onSubmit={handleAddResourceSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                value={resourceForm.title}
                onChange={(e) =>
                  setResourceForm({ ...resourceForm, title: e.target.value })
                }
                placeholder="Enter resource title"
                required
              />
            </div>
            <div className="form-group">
              <label>Category:</label>
              <input
                type="text"
                value={resourceForm.category}
                onChange={(e) =>
                  setResourceForm({ ...resourceForm, category: e.target.value })
                }
                placeholder="Enter category"
                required
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={resourceForm.description}
                onChange={(e) =>
                  setResourceForm({ ...resourceForm, description: e.target.value })
                }
                placeholder="Enter description"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>File:</label>
              <input
                type="file"
                onChange={(e) =>
                  setResourceForm({ ...resourceForm, file: e.target.files[0] })
                }
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Add Resource
            </button>
          </form>
          {resourceAdded && <p className="success-message">Resource added successfully!</p>}
        </div>
      )}

      {/* Feedback Slider */}
      {activeSlider === "feedback" && (
        <div className="slider">
          <button
            className="minimize-button"
            onClick={() => setActiveSlider("")}
          >
            ➡️
          </button>
          <h2>Send a Message</h2>
          <form onSubmit={handleFeedbackSubmit}>
            <div className="form-group">
              <label>To:</label>
              <input
                type="text"
                value={feedbackForm.to}
                onChange={(e) =>
                  setFeedbackForm({ ...feedbackForm, to: e.target.value })
                }
                placeholder="Recipient's Email"
                required
              />
            </div>
            <div className="form-group">
              <label>Subject:</label>
              <input
                type="text"
                value={feedbackForm.subject}
                onChange={(e) =>
                  setFeedbackForm({ ...feedbackForm, subject: e.target.value })
                }
                placeholder="Subject of the Message"
                required
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={feedbackForm.description}
                onChange={(e) =>
                  setFeedbackForm({ ...feedbackForm, description: e.target.value })
                }
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send
            </button>
          </form>
          {submitted && <p className="success-message">Message sent successfully!</p>}
        </div>
      )}
    </div>
  );
};

export default SathiPage;

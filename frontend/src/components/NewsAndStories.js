// import React, { useState } from 'react';
// import './NewsAndStories.css';

// const newsData = [
//   {
//     id: 1,
//     title: "AI Breakthrough in Healthcare",
//     description: "Exploring recent advancements in AI technology that improve diagnostics.",
//   },
//   {
//     id: 2,
//     title: "Campus Innovation Challenge",
//     description: "Highlights from the campus-wide innovation competition.",
//   },
//   {
//     id: 3,
//     title: "New Research Center Inaugurated",
//     description: "The new facility focuses on AI and robotics research.",
//   },
//   // Add more news items here
// ];

// const NewsAndStoriesPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredNews = newsData.filter(news =>
//     news.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="news-page">
//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search news and stories..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* News List */}
//       <div className="news-list">
//         {filteredNews.map(news => (
//           <div key={news.id} className="news-box">
//             <h3>{news.title}</h3>
//             <p>{news.description}</p>
//             <a href={`/news/${news.id}`} className="view-btn">View</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsAndStoriesPage;





// import React, { useState } from 'react';
// import { FaCalendarAlt } from 'react-icons/fa';
// import './NewsAndStories.css';

// const newsData = [
//   {
//     id: 1,
//     date: "2024-11-06",
//     title: "Congratulations Dr. Suchetana Chakraborty for prestigious Google Academic Research Award!",
//     description: "This remarkable achievement highlights IIT Jodhpur’s commitment to advancing impactful research and fostering innovation in computer science.",
//     imageUrl: "/assets/news.png",  // Replace with the actual image paths
//   },
//   {
//     id: 2,
//     date: "2024-10-20",
//     title: "IIT Jodhpur choosen as the center for GenAI in India",
//     description: "Srijan—the Center of Excellence on Generative AI at IITJodhpur.",
//     imageUrl: "/assets/news.png",
//   },
//   {
//     id: 3,
//     date: "2024-10-26",
//     title: "We are honored to have Shri Jagdeep Dhankhar, Hon'ble Vice-President of India, as the Chief Guest for Convocation",
//     description: "The grand 10th Convocation of IIT Jodhpur on 26th October 2024..",
//     imageUrl: "/assets/news.png",
//   },
//   // Add more news items here
// ];

// const NewsAndStoriesPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredNews = newsData.filter(news =>
//     news.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="news-page">
//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search news and stories..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* News List */}
//       <div className="news-list">
//         {filteredNews.map(news => (
//           <div key={news.id} className="news-box">
//             <div className="news-image">
//               <img src={news.imageUrl} alt={news.title} />
//             </div>
//             <div className="news-content">
//               <div className="news-date">
//                 <FaCalendarAlt /> {news.date}
//               </div>
//               <h3>{news.title}</h3>
//               <p>{news.description}</p>
//               <a href={`/news/${news.id}`} className="view-btn">View</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsAndStoriesPage;
import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import './NewsAndStories.css';

const NewsAndStoriesPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Fetch the news stories from the backend
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:3300/apis/v1/common/stories'); // Your backend API URL
        if (response.ok) {
          const data = await response.json();
          setNewsData(data); // Update state with the fetched news data
        } else {
          console.error('Failed to fetch news data');
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Filter news based on search query
  const filteredNews = newsData.filter(news =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="news-page">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search news and stories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* News List */}
      <div className="news-list">
        {filteredNews.map(news => (
          <div key={news.story_id} className="news-box">
            <div className="news-image">
              <img src={news.image_url || '/assets/news.png'} alt={news.title} />
            </div>
            <div className="news-content">
              <div className="news-date">
                <FaCalendarAlt /> {new Date(news.created_at).toLocaleDateString()}
              </div>
              <h3>{news.title}</h3>
              <p>{news.content.substring(0, 150)}...</p> {/* Show part of content */}
              <a href={`/news/${news.story_id}`} className="view-btn">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndStoriesPage;

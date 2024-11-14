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





import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import './NewsAndStories.css';

const newsData = [
  {
    id: 1,
    date: "2024-11-01",
    title: "AI Breakthrough in Healthcare",
    description: "Exploring recent advancements in AI technology that improve diagnostics.",
    imageUrl: "path/to/image1.jpg",  // Replace with the actual image paths
  },
  {
    id: 2,
    date: "2024-10-20",
    title: "Campus Innovation Challenge",
    description: "Highlights from the campus-wide innovation competition.",
    imageUrl: "path/to/image2.jpg",
  },
  {
    id: 3,
    date: "2024-10-10",
    title: "New Research Center Inaugurated",
    description: "The new facility focuses on AI and robotics research.",
    imageUrl: "path/to/image3.jpg",
  },
  // Add more news items here
];

const NewsAndStoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
          <div key={news.id} className="news-box">
            <div className="news-image">
              <img src={news.imageUrl} alt={news.title} />
            </div>
            <div className="news-content">
              <div className="news-date">
                <FaCalendarAlt /> {news.date}
              </div>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <a href={`/news/${news.id}`} className="view-btn">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndStoriesPage;

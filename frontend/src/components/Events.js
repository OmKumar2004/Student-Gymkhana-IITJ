// import React, { useState } from 'react';
// import './Events.css';

// const eventsData = [
//   {
//     id: 1,
//     title: "Tech Fest 2024",
//     startDate: "2024-11-20",
//     endDate: "2024-11-25",
//     description: "A tech event showcasing innovations in AI and Robotics.",
//     status: "upcoming",
//   },
//   {
//     id: 2,
//     title: "Alumni Meet 2024",
//     startDate: "2024-10-15",
//     endDate: "2024-10-17",
//     description: "Annual alumni gathering to network and share experiences.",
//     status: "past",
//   },
//   {
//     id: 3,
//     title: "Workshop on Machine Learning",
//     startDate: "2024-11-05",
//     endDate: "2024-11-06",
//     description: "A hands-on workshop on Machine Learning techniques.",
//     status: "ongoing",
//   },
//   // Add more events here
// ];

// const EventsPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('all');

//   const filteredEvents = eventsData.filter(event => {
//     const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesFilter =
//       filter === 'all' ||
//       (filter === 'past' && new Date(event.endDate) < new Date()) ||
//       (filter === 'upcoming' && new Date(event.startDate) > new Date()) ||
//       (filter === 'ongoing' && new Date(event.startDate) <= new Date() && new Date(event.endDate) >= new Date());
      
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="events-page">
//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Filter Options */}
//       <div className="filters">
//         <button onClick={() => setFilter('all')}>All Events</button>
//         <button onClick={() => setFilter('past')}>Past Events</button>
//         <button onClick={() => setFilter('upcoming')}>Upcoming Events</button>
//         <button onClick={() => setFilter('ongoing')}>Ongoing Events</button>
//       </div>

//       {/* Events List */}
//       <div className="events-list">
//         {filteredEvents.map(event => (
//           <div key={event.id} className="event-box">
//             <h3>{event.title}</h3>
//             <p><strong>Start Date:</strong> {event.startDate}</p>
//             <p><strong>End Date:</strong> {event.endDate}</p>
//             <p>{event.description}</p>
//             <a href={`/events/${event.id}`} className="view-btn">View</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventsPage;




// import React, { useState } from 'react';
// import './Events.css';

// const eventsData = [
//   {
//     id: 1,
//     title: "Tech Fest 2024",
//     startDate: "2024-11-20",
//     endDate: "2024-11-25",
//     description: "A tech event showcasing innovations in AI and Robotics.",
//     imageUrl: "tech_fest_image.jpg", // Add image URL here
//     status: "upcoming",
//   },
//   {
//     id: 2,
//     title: "Alumni Meet 2024",
//     startDate: "2024-10-15",
//     endDate: "2024-10-17",
//     description: "Annual alumni gathering to network and share experiences.",
//     imageUrl: "alumni_meet_image.jpg", // Add image URL here
//     status: "past",
//   },
//   {
//     id: 3,
//     title: "Workshop on Machine Learning",
//     startDate: "2024-11-05",
//     endDate: "2024-11-06",
//     description: "A hands-on workshop on Machine Learning techniques.",
//     imageUrl: "ml_workshop_image.jpg", // Add image URL here
//     status: "ongoing",
//   },
//   // Add more events here
// ];

// const EventsPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('all');

//   const filteredEvents = eventsData.filter(event => {
//     const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesFilter =
//       filter === 'all' ||
//       (filter === 'past' && new Date(event.endDate) < new Date()) ||
//       (filter === 'upcoming' && new Date(event.startDate) > new Date()) ||
//       (filter === 'ongoing' && new Date(event.startDate) <= new Date() && new Date(event.endDate) >= new Date());
      
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="events-page">
//       {/* Search and Filter Bar */}
//       <div className="search-filter-bar">
//         <div className="filter-dropdown">
//           <button className="filter-btn">{filter.charAt(0).toUpperCase() + filter.slice(1)} ▼</button>
//           <div className="filter-options">
//             <button onClick={() => setFilter('all')}>All Events</button>
//             <button onClick={() => setFilter('past')}>Past Events</button>
//             <button onClick={() => setFilter('upcoming')}>Upcoming Events</button>
//             <button onClick={() => setFilter('ongoing')}>Ongoing Events</button>
//           </div>
//         </div>
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Events List */}
//       <div className="events-list">
//         {filteredEvents.map(event => (
//           <div key={event.id} className="event-box">
//             <img src={event.imageUrl} alt={event.title} className="event-image" />
//             <div className="event-content">
//               <h3>{event.title}</h3>
//               <p><strong>Start Date:</strong> {event.startDate}</p>
//               <p><strong>End Date:</strong> {event.endDate}</p>
//               <p>{event.description}</p>
//               <a href={`/events/${event.id}`} className="view-btn">View</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventsPage;




// import React, { useState } from 'react';
// import './Events.css';
// import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

// const eventsData = [
//   {
//     id: 1,
//     title: "Varchas: Sports Fest 2024",
//     startDate: "2024-10-30",
//     endDate: "2024-11-02",
//     location: "IIT Jodhpur Campus",
//     description: "Varchas, the annual sports festival of IIT Jodhpur, ignites the flames of competition and stands as the largest sporting event in North-West India.",
//     status: "past",
//   },
//   {
//     id: 2,
//     title: "Prometeo: Tech Fest 2025",
//     startDate: "2025-01-17",
//     endDate: "2025-01-19",
//     location: "IIT Jodhpur Campus",
//     description: "",
//     status: "upcoming",
//   },
//   // Add more events here
// ];

// const EventsPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('all');

//   const filteredEvents = eventsData.filter(event => {
//     const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesFilter =
//       filter === 'all' ||
//       (filter === 'past' && new Date(event.endDate) < new Date()) ||
//       (filter === 'upcoming' && new Date(event.startDate) > new Date()) ||
//       (filter === 'ongoing' && new Date(event.startDate) <= new Date() && new Date(event.endDate) >= new Date());
      
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="events-page">
//       {/* Search and Filter Bar */}
//       <div className="search-filter-bar">
//         <div className="filter-dropdown">
//           <button className="filter-btn"> {filter.charAt(0).toUpperCase() + filter.slice(1)}</button>
//           <div className="filter-options">
//             <button onClick={() => setFilter('all')}>All Events</button>
//             <button onClick={() => setFilter('past')}>Past Events</button>
//             <button onClick={() => setFilter('upcoming')}>Upcoming Events</button>
//             <button onClick={() => setFilter('ongoing')}>Ongoing Events</button>
//           </div>
//         </div>
//         <input
//           type="text"
//           placeholder="Search events..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Events List */}
//       <div className="events-list">
//         {filteredEvents.map(event => (
//           <div key={event.id} className="event-box">
//             <img src={`event_${event.id}.jpg`} alt={event.title} className="event-image" />
//             <div className="event-content">
//               <h3>{event.title}</h3>
//               <div className="event-details">
//                 <p><FaCalendarAlt /> <strong>Starts:</strong> {event.startDate}</p>
//                 <p><FaCalendarAlt /> <strong>Ends:</strong> {event.endDate}</p>
//                 <p><FaMapMarkerAlt /> {event.location}</p>
//                 <p>{event.description}</p>
//               </div>
//               <a href={`/events/${event.id}`} className="view-btn">View</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventsPage;
import React, { useState, useEffect } from 'react';
import './Events.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  // Fetch events from backend on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log("l")
        const response = await fetch('http://localhost:3300/apis/v1/common/events');// Use your backend URL here
        console.log(response.status)
        if (response.status == 200) {
          const data = await response.json();
          setEventsData(data);
          console.log(data);
          console.log(eventsData);
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === 'all' ||
      (filter === 'past' && new Date(event.end_date) < new Date()) ||
      (filter === 'upcoming' && new Date(event.start_date) > new Date()) ||
      (filter === 'ongoing' && new Date(event.start_date) <= new Date() && new Date(event.endDate) >= new Date());
      
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="events-page">
      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <div className="filter-dropdown">
          <button className="filter-btn">{filter.charAt(0).toUpperCase() + filter.slice(1)}</button>
          <div className="filter-options">
            <button onClick={() => setFilter('all')}>All Events</button>
            <button onClick={() => setFilter('past')}>Past Events</button>
            <button onClick={() => setFilter('upcoming')}>Upcoming Events</button>
            <button onClick={() => setFilter('ongoing')}>Ongoing Events</button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Events List */}
      <div className="events-list">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-box">
            <img src={`event_${event.id}.jpg`} alt={event.name} className="event-image" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <div className="event-details">
                <p><FaCalendarAlt /> <strong>Starts:</strong> {event.start_date}</p>
                <p><FaCalendarAlt /> <strong>Ends:</strong> {event.end_date}</p>
                <p><FaMapMarkerAlt /> {event.location}</p>
                <p>{event.description}</p>
              </div>
              <a href={`/events/${event.id}`} className="view-btn">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

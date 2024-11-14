import React from 'react';
import './Team.css';

// Sample data for each team section
const genSecyData = [
  { id: 1, initials: 'SS', imageUrl: 'path/to/image1.jpg', name: 'John Doe', email: 'johndoe@example.com' },
  { id: 2, initials: 'SAC', imageUrl: 'path/to/image2.jpg', name: 'Jane Smith', email: 'janesmith@example.com' },
  { id: 3, initials: 'ACAC', imageUrl: 'path/to/image3.jpg', name: 'Alice Johnson', email: 'alicejohnson@example.com' },
];

const vpData = [
  { id: 1, initials: 'Cultural Board', imageUrl: 'path/to/image4.jpg', name: 'Tom White', email: 'tomwhite@example.com' },
  { id: 2, initials: 'Technical Board', imageUrl: 'path/to/image5.jpg', name: 'Sarah Black', email: 'sarahblack@example.com' },
  // Add more VPs as needed
];

const secyData = [
  { id: 1, initials: 'Sports Society', imageUrl: 'path/to/image6.jpg', name: 'Robert Green', email: 'robertgreen@example.com' },
  { id: 2, initials: 'Art Society', imageUrl: 'path/to/image7.jpg', name: 'Lucy Brown', email: 'lucybrown@example.com' },
  { id: 3, initials: 'Drama Society', imageUrl: 'path/to/image8.jpg', name: 'markdoe@example.com' },
];

const TeamSection = ({ title, members }) => (
  <div className="team-section">
    <h2>{title}</h2>
    <div className="team-cards">
      {members.map(member => (
        <div key={member.id} className="team-card">
          <div className="team-initials">{member.initials}</div>
          <div className="team-image">
            <img src={member.imageUrl} alt={member.name} />
          </div>
          <h3>{member.name}</h3>
          <p className="team-email">{member.email}</p>
        </div>
      ))}
    </div>
  </div>
);

const TeamPage = () => {
  return (
    <div className="team-page">
      <TeamSection title="Gen Secretary" members={genSecyData} />
      <TeamSection title="Vice Presidents" members={vpData} />
      <TeamSection title="Secretaries" members={secyData} />
    </div>
  );
};

export default TeamPage;

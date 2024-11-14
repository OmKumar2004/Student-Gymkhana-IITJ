import React from 'react';
import './Team.css';

// Sample data for each team section
const genSecyData = [
  { id: 1, initials: 'SS', imageUrl: '/assets/user.png', name: 'Shashank Asthana', email: 'gensecy_ss@iitj.ac.in' },
  { id: 2, initials: 'SAC', imageUrl: '/assets/user.png', name: 'Manan Srivastava', email: 'gensecy_sac@iitj.ac.in' },
  { id: 3, initials: 'ACAC', imageUrl: '/assets/user.png', name: 'Dhyan Naik', email: 'gensecy_acac@iitj.ac.in' },
];

const vpData = [
  { id: 1, initials: 'CDC', imageUrl: '/assets/user.png', name: 'Anurag Verma', email: 'verma.47@iitj.ac.in' },
  { id: 2, initials: 'SAA', imageUrl: '/assets/user.png', name: 'Tharakadatta Hegde', email: 'saa@iitj.ac.in' },
  // Add more VPs as needed
];

const secyData = [
  { id: 1, initials: 'Literature Society', imageUrl: '/assets/user.png', name: 'Pragati Sinha', email: 'literature@iitj.ac.in' },
  { id: 2, initials: 'InSiDe Society', imageUrl: '/assets/user.png', name: 'Avinash Kumar', email: 'inside@iitj.ac.in' },
  { id: 3, initials: 'Robotics Society', imageUrl: '/assets/user.png', name: 'Yash Golani', email: 'inside@iitj.ac.in' },
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
      <TeamSection title="Secretaries and Coordinators" members={secyData} />
    </div>
  );
};

export default TeamPage;

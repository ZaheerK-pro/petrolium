import React from 'react';
import '../styles/About.css';
import TeamMember1 from '../assets/team-member-1.jpg'; // Example team member image
import TeamMember2 from '../assets/team-member-2.avif'; // Example team member image

const About = () => {
  return (
    <div className="about-page">
      <h2 className="section-title">About Us</h2>
      <p className="about-description">
        We are committed to providing the best fuel and car services in town.
      </p>
      <div className="team">
        <div className="team-member">
          <img src={TeamMember1} alt="Team Member 1" className="team-member-img" />
          <div className="member-details">
            <h4 className="member-name">Zaheer Khan</h4>
            <p className="member-role">Founder & CEO</p>
          </div>
        </div>
        <div className="team-member">
          <img src={TeamMember2} alt="Team Member 2" className="team-member-img" />
          <div className="member-details">
            <h4 className="member-name">Jane Smith</h4>
            <p className="member-role">Chief Mechanic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

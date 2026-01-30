import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import TeamMember1 from '../assets/team-member-1.jpg';
import TeamMember2 from '../assets/team-member-2.avif';

const About = () => {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '50K+', label: 'Happy Customers' },
    { value: '24/7', label: 'Service Available' },
  ];

  const values = [
    { icon: 'fas fa-shield-alt', title: 'Trust & Quality', desc: 'We deliver only premium fuel and reliable service you can count on.' },
    { icon: 'fas fa-handshake', title: 'Customer First', desc: 'Your satisfaction drives everything we do.' },
    { icon: 'fas fa-leaf', title: 'Eco-Conscious', desc: 'Committed to cleaner fuels and a greener future.' },
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <span className="section-label">Who we are</span>
        <h2 className="section-title">About SubPetro</h2>
        <p className="about-description">
          We are committed to providing the best fuel and car services in town. Quality, reliability, and your trust are at the heart of everything we do.
        </p>
      </div>

      <section className="about-mission glass-card">
        <h3 className="mission-title">Our Mission</h3>
        <p className="mission-text">
          To keep you moving with premium fuel and expert car care—delivered with speed, honesty, and a smile. We aim to be the first choice for fuel and vehicle services in our community.
        </p>
      </section>

      <section className="about-stats">
        {stats.map((item, index) => (
          <div key={index} className="stat-item glass-card">
            <span className="stat-value">{item.value}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </section>

      <section className="about-values">
        <h3 className="values-title">What We Stand For</h3>
        <div className="values-grid">
          {values.map((item, index) => (
            <div key={index} className="value-item glass-card">
              <div className="value-icon"><i className={item.icon} /></div>
              <h4 className="value-title">{item.title}</h4>
              <p className="value-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h3 className="team-section-title">Our Team</h3>
        <div className="team">
          <div className="team-member glass-card">
            <img src={TeamMember1} alt="Zaheer Khan" className="team-member-img" />
            <div className="member-details">
              <h4 className="member-name">Zaheer Khan</h4>
              <p className="member-role">Founder & CEO</p>
            </div>
          </div>
          <div className="team-member glass-card">
            <img src={TeamMember2} alt="Jane Smith" className="team-member-img" />
            <div className="member-details">
              <h4 className="member-name">Jane Smith</h4>
              <p className="member-role">Chief Mechanic</p>
            </div>
          </div>
        </div>
        <Link to="/contact" className="about-cta">Get in Touch</Link>
      </section>
    </div>
  );
};

export default About;

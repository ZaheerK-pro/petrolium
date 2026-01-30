import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import AnimatedGraphic from './AnimatedGraphic';
import CustomerTestimonials from './CustomerTestimonials';
import FuelImage from '../assets/fuel.jpg';

const Home = () => {
  const highlights = [
    { icon: 'fas fa-clock', text: '24/7 Open' },
    { icon: 'fas fa-gas-pump', text: 'Premium Fuel' },
    { icon: 'fas fa-award', text: 'Rewards' },
  ];

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${FuelImage})` }} />
        <div className="hero-overlay" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-content">
          <p className="hero-badge">Trusted by 50,000+ customers</p>
          <h1 className="hero-title">
            <span className="gradient-text">Welcome to</span>
            <span className="hero-brand"> SubPetro</span>
          </h1>
          <p className="hero-tagline">Premium fuel & car care. Fast, reliable, always here when you need us.</p>
          <div className="hero-actions">
            <Link to="/services" className="hero-btn hero-btn-primary">
              <i className="fas fa-concierge-bell" /> Our Services
            </Link>
            <Link to="/contact" className="hero-btn hero-btn-outline">
              <i className="fas fa-envelope" /> Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust-strip">
        <div className="trust-strip-inner">
          {highlights.map((item, i) => (
            <div key={i} className="trust-item">
              <i className={item.icon} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="page">
        <section className="main-content">
          {/* Promo */}
          <div className="advertisement glass-card">
            <div className="ad-ribbon">Limited time</div>
            <div className="ad-off">10% OFF</div>
            <h2>Premium Fuel This Week</h2>
            <p>Fill up and save. Valid on premium petrol & diesel at all SubPetro stations.</p>
            <Link to="/services" className="learn-more-btn">
              Claim offer <i className="fas fa-arrow-right" />
            </Link>
          </div>

          <div className="home-divider">
            <AnimatedGraphic />
            <span className="home-divider-text">Why SubPetro</span>
          </div>

          {/* Features */}
          <div className="features bento">
            <div className="feature glass-card bento-item bento-large">
              <div className="feature-icon"><i className="fas fa-bolt" /></div>
              <h3>Fast Service</h3>
              <p>Quick and efficient fueling so you're back on the road in no time.</p>
            </div>
            <div className="feature glass-card bento-item">
              <div className="feature-icon"><i className="fas fa-clock" /></div>
              <h3>24/7 Availability</h3>
              <p>We're open around the clock whenever you need fuel.</p>
            </div>
            <div className="feature glass-card bento-item">
              <div className="feature-icon"><i className="fas fa-leaf" /></div>
              <h3>Eco-Friendly</h3>
              <p>Cleaner fuels, lower emissions, better for the planet.</p>
            </div>
            <div className="feature glass-card bento-item bento-wide">
              <div className="feature-icon"><i className="fas fa-gift" /></div>
              <h3>Rewards Program</h3>
              <p>Earn points on every visit. Redeem for discounts and free services.</p>
            </div>
          </div>

          {/* Visit us */}
          <div className="image-section glass-card">
            <div className="image-section-inner">
              <img src={FuelImage} alt="SubPetro fuel station" className="fuel-image" />
              <div className="image-overlay">
                <h3>Visit Our Stations</h3>
                <p>Modern pumps, clean facilities, friendly staff.</p>
                <Link to="/contact" className="image-cta">Find us <i className="fas fa-map-marker-alt" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2 className="testimonials-section-title">What Our Customers Say</h2>
          <div className="testimonials glass-card">
            <CustomerTestimonials />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
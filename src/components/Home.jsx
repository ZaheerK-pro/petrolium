import React from 'react';
import '../styles/Home.css';
import AnimatedGraphic from './AnimatedGraphic'; // Create a separate component for the animated graphic
import CustomerTestimonials from './CustomerTestimonials'; // Component for displaying customer testimonials
import FuelImage from '../assets/fuel.webp'; // Import an image asset

const Home = () => {
  return (
    <div className="page">
      <header className="header">
        <h1>Welcome to the subPetro</h1>
      </header>

      <section className="main-content">
        <div className="advertisement">
          <h2>Special Discount on Premium Fuel!</h2>
          <p>Get a 10% discount on premium fuel this week only. Hurry up and fill your tanks!</p>
          <button className="learn-more-btn">Learn More</button>
        </div>

        {/* Animated graphic component */}
        <AnimatedGraphic />

        {/* Additional features */}
        <div className="features">
          <div className="feature">
            <h3>Fast Service</h3>
            <p>We offer quick and efficient fueling services to save your time.</p>
          </div>
          <div className="feature">
            <h3>24/7 Availability</h3>
            <p>Our stations are open around the clock to serve you whenever you need fuel.</p>
          </div>
          <div className="feature">
            <h3>Environmentally Friendly</h3>
            <p>Our fuels are eco-friendly, reducing emissions and supporting a cleaner environment.</p>
          </div>
          <div className="feature">
            <h3>Rewards Program</h3>
            <p>Earn points with every purchase and redeem them for discounts or free services.</p>
          </div>
        </div>

        {/* Image section */}
        <div className="image-section">
          <img src={FuelImage} alt="Fuel station" className="fuel-image" />
          <p>Visit our modern and efficient fuel stations.</p>
        </div>
      </section>

      {/* Customer testimonials section */}
      <section className="testimonials">
        <CustomerTestimonials />
      </section>
    </div>
  );
};

export default Home;

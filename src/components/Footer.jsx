import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About SubPetro</h3>
          <p>SubPetro is a leading fuel provider, offering high-quality petrol and diesel at competitive prices. Our goal is to ensure your vehicle runs smoothly with our premium products.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><i className="fas fa-phone"></i> +91 8766806557</p>
          <p><i className="fas fa-envelope"></i> info@subpetro.com</p>
          <p><i className="fas fa-envelope"></i> izaheerk21@gmail.com</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SubPetro. All rights reserved | Zaheer Khan</p>
      </div>
    </footer>
  );
};

export default Footer;

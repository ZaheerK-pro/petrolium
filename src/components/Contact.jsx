import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Thank you for your message!');
  //   setFormData({ name: '', email: '', message: '' });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to send message. Please try again later.');
    }
  };
  

  return (
    <div className="contact-page">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-description">Have questions? We're here to help!</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="form-input"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="form-input"
          required
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15040.109469845918!2d77.03159444104203!3d19.540438580172346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd048ee4b08cf13%3A0x5fe349212cb14a3e!2sAundha%20Nagnath%2C%20Maharashtra%20431705!5e0!3m2!1sen!2sin!4v1719215925679!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
          className="map-frame"
        ></iframe>
        </div>
    </div>
  );
};

export default Contact;

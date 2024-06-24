import React, { useState } from 'react';
import '../styles/Services.css';
import oilChangeImage from '../assets/oil-change.jpg'; // Example service image
import tireCheckImage from '../assets/tire-check.jpg'; // Example service image
import carWashImage from '../assets/car-wash.jpg'; // Example service image
import fuelRefillImage from '../assets/fuel-refill.jpg'; // Example service image

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
  });

  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState(null);

  const servicesData = [
    {
      name: 'Oil Change',
      image: oilChangeImage,
      description: 'Keep your engine running smoothly with our oil change service.',
    },
    {
      name: 'Tire Check',
      image: tireCheckImage,
      description: 'Ensure safety and performance with regular tire checks.',
    },
    {
      name: 'Car Wash',
      image: carWashImage,
      description: 'Keep your car looking pristine with our professional car wash.',
    },
    {
      name: 'Fuel Refill',
      image: fuelRefillImage,
      description: 'Refuel conveniently at our station with high-quality fuel.',
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Service booked for ${formData.name} on ${formData.date} at ${formData.time}`);
    setFormData({ name: '', service: '', date: '', time: '' });
  };

  const handlePriceCalculation = () => {
    const rate = 95; // Example rate per liter
    setPrice(quantity * rate);
  };

  return (
    <div className="services-container">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-info">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="appointment-section">
        <h3 className="section-title">Book a Service Appointment</h3>
        <form onSubmit={handleSubmit} className="appointment-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="form-input"
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select Service</option>
            {servicesData.map((service, index) => (
              <option value={service.name} key={index}>
                {service.name}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="form-input"
            required
          />
          <button type="submit" className="submit-button">Book Now</button>
        </form>
      </div>
      <div className="calculator">
        <h3 className="section-title">Fuel Price Calculator</h3>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity (in liters)"
          className="form-input"
        />
        <button onClick={handlePriceCalculation} className="calculate-button">Calculate Price</button>
        {price !== null && (
          <p className="price-display">Total Price: ₹{price.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default Services;

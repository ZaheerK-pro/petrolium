import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const CustomerTestimonials = () => {
  const testimonials = [
    { id: 1, text: 'Great service! Fast and reliable.', name: 'Raj K.', role: 'Regular Customer' },
    { id: 2, text: 'Love the discounts on premium fuel!', name: 'Priya M.', role: 'Premium Member' },
    { id: 3, text: 'Convenient locations and friendly staff.', name: 'Amit S.', role: 'Local Driver' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonials-carousel">
      <h2 className="testimonials-heading">What Our Customers Say</h2>
      <div className="testimonial-slides">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
            aria-hidden={index !== currentIndex}
          >
            <blockquote className="testimonial-quote">"{item.text}"</blockquote>
            <div className="testimonial-author">
              <span className="author-name">{item.name}</span>
              <span className="author-role">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-dots" role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;

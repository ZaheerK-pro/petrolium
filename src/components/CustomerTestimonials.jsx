import React, { useState, useEffect } from 'react';

const CustomerTestimonials = () => {
  const testimonials = [
    { id: 1, text: "Great service! Fast and reliable." },
    { id: 2, text: "Love the discounts on premium fuel!" },
    { id: 3, text: "Convenient locations and friendly staff." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div style={styles.testimonials}>
      <h2 style={styles.heading}>What Our Customers Say</h2>
      <ul style={styles.list}>
        {testimonials.map((testimonial, index) => (
          <li
            key={testimonial.id}
            style={{
              ...styles.listItem,
              ...(index === currentIndex ? styles.activeItem : {})
            }}
          >
            {testimonial.text}
          </li>
        ))}
      </ul>
      <div style={styles.navigation}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.navDot,
              ...(index === currentIndex ? styles.activeNavDot : {})
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  testimonials: {
    width: '80%',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    position: 'relative',
    height: '50px',
    overflow: 'hidden'
  },
  listItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0,
    transition: 'opacity 1s ease-in-out'
  },
  activeItem: {
    opacity: 1
  },
  navigation: {
    marginTop: '20px'
  },
  navDot: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    margin: '0 5px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  activeNavDot: {
    backgroundColor: '#333'
  }
};

export default CustomerTestimonials;

import React from 'react';

const PetrolRates = () => {
  const rates = [
    { type: 'Petrol', price: '₹90/L' },
    { type: 'Diesel', price: '₹80/L' },
    { type: 'CNG', price: '₹60/L' },
  ];

  return (
    <div className="rates">
      <h2>Current Rates</h2>
      <ul>
        {rates.map((rate, index) => (
          <li key={index}>{rate.type}: {rate.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default PetrolRates;
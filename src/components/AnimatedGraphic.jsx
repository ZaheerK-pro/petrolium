// Example of AnimatedGraphic.jsx
import React from 'react';

const AnimatedGraphic = () => {
  return (
    <div className="animated-graphic">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#ff6b6b"
          strokeWidth="5"
          fill="none"
          strokeDasharray="283"
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="283;0"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default AnimatedGraphic;

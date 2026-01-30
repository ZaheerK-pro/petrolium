import React from 'react';
import '../styles/AnimatedGraphic.css';

const AnimatedGraphic = () => {
  return (
    <div className="animated-graphic" aria-hidden="true">
      <div className="graphic-inner">
        <div className="fuel-drop fuel-drop-1" />
        <div className="fuel-drop fuel-drop-2" />
        <div className="fuel-drop fuel-drop-3" />
        <svg className="pump-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="20" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M28 20V12h8v8M32 32v12M28 44h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="32" cy="38" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M48 28h6l4 8v8h-10V28z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedGraphic;

import React from 'react';

const LinkedInIcon = ({ size = 48, bgColor = '#0A66C2', iconColor = '#FFFFFF' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular background */}
      <circle cx="24" cy="24" r="24" fill={bgColor} />
      
      {/* LinkedIn icon - centered */}
      <g transform="translate(12, 12)">
        <path
          d="M4 6v12h-4V6h4zm-2-6c1.3 0 2.4 1.1 2.4 2.4S3.3 4.8 2 4.8s-2.4-1.1-2.4-2.4S0.7-1.2 2-1.2z"
          fill={iconColor}
        />
        <path
          d="M7 6h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.9h-3.9v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.2H7V6z"
          fill={iconColor}
        />
      </g>
    </svg>
  );
};

export default LinkedInIcon;
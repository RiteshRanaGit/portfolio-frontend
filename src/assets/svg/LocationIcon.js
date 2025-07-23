import React from 'react';

const LocationIcon = ({ size = 48, bgColor = '#EF4444', iconColor = '#FFFFFF' }) => {
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
      
      {/* Location pin icon */}
      <path
        d="M24 14c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill={iconColor}
      />
      <circle cx="24" cy="21" r="3" fill={bgColor} />
    </svg>
  );
};

export default LocationIcon;
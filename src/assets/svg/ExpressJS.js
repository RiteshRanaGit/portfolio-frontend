import React from 'react';

const ExpressJS = ({ size = 24, color = '#000000' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12z"
        fill="white"
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M3 8h18l-2 8H5L3 8z"
        fill={color}
      />
      <path
        d="M6 10l3 4 3-4 3 4 3-4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="7" cy="6" r="1" fill={color} />
      <circle cx="12" cy="6" r="1" fill={color} />
      <circle cx="17" cy="6" r="1" fill={color} />
    </svg>
  );
};

export default ExpressJS;
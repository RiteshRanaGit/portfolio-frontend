import React from 'react';

const RestAPI = ({ size = 24, color = '#25A162' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2" fill="none" />
      <path
        d="M2 8h20"
        stroke={color}
        strokeWidth="2"
      />
      <circle cx="5" cy="6" r="0.5" fill={color} />
      <circle cx="7" cy="6" r="0.5" fill={color} />
      <circle cx="9" cy="6" r="0.5" fill={color} />
      <path
        d="M6 12h12M6 14h8M6 16h10"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M18 14l2-2-2-2"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default RestAPI;
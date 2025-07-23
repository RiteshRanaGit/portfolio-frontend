import React from 'react';

const EmailIcon = ({ size = 48, bgColor = '#4F46E5', iconColor = '#FFFFFF' }) => {
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
      
      {/* Email icon */}
      <path
        d="M32 16H16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2z"
        fill={iconColor}
      />
      <path
        d="M32 18l-8 5-8-5"
        stroke={bgColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmailIcon;
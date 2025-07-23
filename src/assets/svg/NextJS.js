import React from 'react';

const NextJS = ({ size = 24, color = '#000000' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="12" cy="12" r="11" fill={color} />
        <path
          d="M9.5 6.5h-1v11h1V6.5z"
          fill="white"
        />
        <path
          d="M15.5 6.5L9.97 17.5h1.06L16.56 6.5h-1.06z"
          fill="white"
        />
        <path
          d="M19.28 15.79L15.97 10.21h-1.06l4.31 6.58h1.06z"
          fill="white"
        />
        <path
          d="M5.72 8.21L9.03 13.79h1.06L5.78 7.21H4.72l.88 1.32.12-.32z"
          fill="white"
        />
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="0.5" fill="none" />
      </g>
    </svg>
  );
};

export default NextJS;
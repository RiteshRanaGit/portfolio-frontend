import React from 'react';

const TypeScript = ({ size = 24, color = '#3178C6' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="2" fill={color} />
      <path
        d="M8 8h6v1.5H12V16h-1.5V9.5H8V8z"
        fill="white"
      />
      <path
        d="M14.5 12h2.5c.55 0 1 .45 1 1s-.45 1-1 1h-1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-2.5v-1.5H16c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1v-1h1c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.5V12z"
        fill="white"
      />
    </svg>
  );
};

export default TypeScript;
import React from 'react';

const NodeJS = ({ size = 24, color = '#68A063' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2c-.6 0-1.2.2-1.6.5l-8 4.6c-1 .6-1 2.2 0 2.8l8 4.6c.8.5 2.4.5 3.2 0l8-4.6c1-.6 1-2.2 0-2.8l-8-4.6c-.4-.3-1-.5-1.6-.5z"
        fill={color}
      />
      <path
        d="M12 22c-.6 0-1.2-.2-1.6-.5l-8-4.6c-1-.6-1-2.2 0-2.8l8-4.6c.8-.5 2.4-.5 3.2 0l8 4.6c1 .6 1 2.2 0 2.8l-8 4.6c-.4.3-1 .5-1.6.5z"
        fill={color}
        opacity="0.7"
      />
      <circle cx="12" cy="12" r="3" fill="white" />
      <path
        d="M10.5 10.5h3v3h-3v-3z"
        fill={color}
      />
    </svg>
  );
};

export default NodeJS;
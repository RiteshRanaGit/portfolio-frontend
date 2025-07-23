import React from 'react';

const MySQL = ({ size = 24, color = '#4479A1' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-13z"
        fill={color}
      />
      <path
        d="M3.5 8h17v8h-17V8z"
        fill="white"
        opacity="0.2"
      />
      <circle cx="7" cy="12" r="1.5" fill={color} />
      <circle cx="12" cy="12" r="1.5" fill={color} />
      <circle cx="17" cy="12" r="1.5" fill={color} />
      <path
        d="M5 4h14v1H5V4z"
        fill="#E48E00"
      />
      <path
        d="M5 19h14v1H5v-1z"
        fill="#E48E00"
      />
    </svg>
  );
};

export default MySQL;
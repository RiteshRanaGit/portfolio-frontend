import React from 'react';

const Python = ({ size = 24, color = '#3776AB' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C8.7 2 8 3.7 8 5.5v2.7H12.5v.5H6.5c-1.8 0-3.4.9-3.9 2.7-.6 2-.6 3.2 0 5.3.4 1.6 1.4 2.7 3.2 2.7H8v-2.4c0-2.1 1.8-3.9 3.9-3.9h5.4c1.7 0 3.1-1.4 3.1-3.1V5.6c0-1.7-1.4-3.1-3.1-3.1L12 2z"
        fill={color}
      />
      <path
        d="M12 22c3.3 0 4-1.7 4-3.5v-2.7H11.5v-.5H17.5c1.8 0 2.5-.8 3-2.7.5-2 .5-3.2 0-5.3-.4-1.6-1.2-2.7-3-2.7H16v2.4c0 2.1-1.8 3.9-3.9 3.9H6.7c-1.7 0-3.1 1.4-3.1 3.1v5.9c0 1.7 1.4 3.1 3.1 3.1L12 22z"
        fill="#FFD43B"
      />
      <circle cx="9.75" cy="6.75" r="1" fill="#FFD43B" />
      <circle cx="14.25" cy="17.25" r="1" fill={color} />
    </svg>
  );
};

export default Python;
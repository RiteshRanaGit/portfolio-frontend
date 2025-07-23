import React from 'react';

const HTML5 = ({ size = 24, color = '#E34F26' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2h20l-2 18-8 2-8-2L2 2z"
        fill={color}
      />
      <path
        d="M12 22l6.5-1.8L20 4H12v18z"
        fill="#FF5722"
      />
      <path
        d="M12 9H6l.2 2H12v2H8.5l.2 2H12v2H6.8l-.8-8H12V9z"
        fill="white"
      />
      <path
        d="M12 9v2h5.8l-.2 2H12v2h3.5l-.3 3L12 19v-2l2.5-.7.2-2.3H12z"
        fill="#FFEB3B"
      />
    </svg>
  );
};

export default HTML5;
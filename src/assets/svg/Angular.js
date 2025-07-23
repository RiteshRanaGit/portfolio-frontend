import React from 'react';

const Angular = ({ size = 24, color = '#DD0031' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 6l2 14 8 2 8-2 2-14L12 2z"
        fill={color}
      />
      <path
        d="M12 2v20l8-2 2-14L12 2z"
        fill="#C3002F"
      />
      <path
        d="M12 5.5L7 17h2.5l1-2.5h3l1 2.5H17L12 5.5zm0 3l1.5 3h-3L12 8.5z"
        fill="white"
      />
    </svg>
  );
};

export default Angular;
import React from 'react';

const MongoDB = ({ size = 24, color = '#47A248' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1C8.5 1 5.7 3.8 5.7 7.3c0 2.8 2.2 6.5 5.8 13.1.2.4.8.4 1 0 3.6-6.6 5.8-10.3 5.8-13.1C18.3 3.8 15.5 1 12 1z"
        fill={color}
      />
      <path
        d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="#4FA94D"
      />
      <path
        d="M11.5 21v2h1v-2h-1z"
        fill="#3F3F3F"
      />
      <ellipse cx="12" cy="7.5" rx="5" ry="2" fill="#4FA94D" opacity="0.3" />
    </svg>
  );
};

export default MongoDB;
import React from 'react';

const JavaScript = ({ size = 24, color = '#F7DF1E' }) => {
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
        d="M12.5 8v8c0 1.1-.9 2-2 2s-2-.9-2-2h1.5c0 .3.2.5.5.5s.5-.2.5-.5V8h1.5z"
        fill="#000"
      />
      <path
        d="M16.5 14c0 1.1-.9 2-2 2-1.1 0-2-.9-2-2h1.5c0 .3.2.5.5.5s.5-.2.5-.5c0-.3-.2-.5-.5-.5h-1v-1.5h1c.8 0 1.5.7 1.5 1.5z"
        fill="#000"
      />
    </svg>
  );
};

export default JavaScript;
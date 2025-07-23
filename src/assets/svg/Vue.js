import React from 'react';

const Vue = ({ size = 24, color = '#4FC08D' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 3h4l6 10 6-10h4L12 21 2 3z"
        fill={color}
      />
      <path
        d="M6 3h3l3 5 3-5h3L12 17 6 3z"
        fill="#35495E"
      />
    </svg>
  );
};

export default Vue;
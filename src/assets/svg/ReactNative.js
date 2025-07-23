import React from 'react';

const ReactNative = ({ size = 24, color = '#61DAFB' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="12" cy="12" r="2" fill={color} />
        <path
          d="M12 1c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72v2.56c-.6.34-1 .98-1 1.72 0 .74.4 1.38 1 1.72v2.56c-.6.34-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72v-2.56c.6-.34 1-.98 1-1.72 0-.74-.4-1.38-1-1.72V4.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2z"
          fill={color}
        />
        <path
          d="M20.5 6.5c-1.25-1.25-3.25-1.25-4.5 0-.85.85-1.1 2.05-.75 3.15l-1.9 1.9c-1.1-.35-2.3-.1-3.15.75s-1.1 2.05-.75 3.15l-1.9 1.9c-1.1-.35-2.3-.1-3.15.75-1.25 1.25-1.25 3.25 0 4.5s3.25 1.25 4.5 0c.85-.85 1.1-2.05.75-3.15l1.9-1.9c1.1.35 2.3.1 3.15-.75s1.1-2.05.75-3.15l1.9-1.9c1.1.35 2.3.1 3.15-.75 1.25-1.25 1.25-3.25 0-4.5z"
          fill={color}
          opacity="0.3"
        />
        <circle cx="7" cy="7" r="1.5" fill={color} />
        <circle cx="17" cy="17" r="1.5" fill={color} />
        <circle cx="7" cy="17" r="1.5" fill={color} />
        <circle cx="17" cy="7" r="1.5" fill={color} />
      </g>
    </svg>
  );
};

export default ReactNative;
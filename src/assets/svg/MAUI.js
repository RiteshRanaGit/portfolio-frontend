import React from 'react';
import { useTheme } from 'styled-components';

const MAUI = ({ size = 24 }) => {
  const theme = useTheme();
  const isDarkMode = theme.colors.background === '#1a1a1a';
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="2" fill={isDarkMode ? '#7B68EE' : '#512BD4'} />
      <path
        d="M6 12L8 8L10 12L8 16L6 12Z"
        fill="white"
        fillOpacity="0.9"
      />
      <path
        d="M14 12L16 8L18 12L16 16L14 12Z"
        fill="white"
        fillOpacity="0.9"
      />
      <path
        d="M10 10H14V14H10V10Z"
        fill="white"
      />
    </svg>
  );
};

export default MAUI;
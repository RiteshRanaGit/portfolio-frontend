import React from 'react';
import { useTheme } from 'styled-components';

const DotNetFramework = ({ size = 24 }) => {
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
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        .NET
      </text>
    </svg>
  );
};

export default DotNetFramework;
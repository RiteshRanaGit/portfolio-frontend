import { keyframes, css } from 'styled-components';

// Keyframe animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Animation mixins
export const animationMixin = (animation, duration = '0.6s', delay = '0s', fillMode = 'both') => css`
  animation: ${animation} ${duration} ${delay} ${fillMode};
`;

export const hoverScale = css`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const hoverFloat = css`
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

// Intersection Observer hook for scroll animations
export const scrollAnimation = css`
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
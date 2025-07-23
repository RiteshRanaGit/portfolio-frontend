import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const Skeleton = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray[200]} 0px,
    ${({ theme }) => theme.colors.gray[100]} 40px,
    ${({ theme }) => theme.colors.gray[200]} 80px
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: ${({ $radius, theme }) => $radius || theme.borderRadius.md};
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '200px'};
  display: ${({ $display }) => $display || 'block'};
`;

export const SkeletonText = styled(Skeleton)`
  height: ${({ $height }) => $height || '1em'};
  margin-bottom: ${({ theme, $mb }) => $mb || theme.spacing.sm};
  width: ${({ $width }) => $width || '100%'};
`;

export const SkeletonCircle = styled(Skeleton)`
  border-radius: 50%;
  width: ${({ $size }) => $size || '40px'};
  height: ${({ $size }) => $size || '40px'};
`;

export const SkeletonImage = styled(Skeleton)`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '300px'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;
import styled from 'styled-components';

export const Banner = styled.div`
  width: 100%;
  height: ${({ $height }) => $height || '300px'};
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $overlay }) => $overlay || 'rgba(0, 0, 0, 0.5)'};
  }
  
  @media ${({ theme }) => theme.breakpoints.md} {
    height: ${({ $mdHeight, $height }) => $mdHeight || $height || '400px'};
  }
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  
  h1, h2 {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    max-width: 600px;
    margin: 0 auto;
  }
`;
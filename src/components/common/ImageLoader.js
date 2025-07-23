import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SkeletonImage } from './Skeleton';

const ImageWrapper = styled.div`
  position: relative;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || 'auto'};
  overflow: hidden;
  border-radius: ${({ theme, $radius }) => $radius || theme.borderRadius.lg};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ $objectFit }) => $objectFit || 'cover'};
  display: ${({ $loaded }) => $loaded ? 'block' : 'none'};
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ $loaded }) => $loaded ? 1 : 0};
`;

const ImageLoader = ({ 
  src, 
  alt, 
  width, 
  height, 
  objectFit = 'cover',
  radius,
  fallbackSrc,
  className 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setLoaded(false);
    setError(false);
    setImageSrc(src);
  }, [src]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  };

  return (
    <ImageWrapper $width={width} $height={height} $radius={radius} className={className}>
      {(!loaded || error) && !fallbackSrc && (
        <SkeletonImage $width={width} $height={height} />
      )}
      <StyledImage
        src={imageSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        $loaded={loaded && !error}
        $objectFit={objectFit}
      />
    </ImageWrapper>
  );
};

export default ImageLoader;
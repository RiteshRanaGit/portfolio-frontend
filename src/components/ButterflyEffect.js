import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import flowerImage from '../assets/butterflies/flower-96.png';

const flap = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(60deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

const ButterflyContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  cursor: none;
  
  * {
    cursor: none !important;
  }
`;

const FlowerCursor = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  pointer-events: none;
  transform: translate(-50%, -50%);
  opacity: ${props => props.$isVisible ? 0.8 : 0};
  transition: opacity 0.2s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Butterfly = styled.div`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  pointer-events: none;
  will-change: transform;
  transition: opacity 0.3s ease;
`;

const ButterflyBody = styled.div`
  position: absolute;
  width: 4px;
  height: 20px;
  background: #333;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Wing = styled.div`
  position: absolute;
  width: 20px;
  height: 25px;
  background: ${props => props.$color};
  border-radius: 50% 10% 50% 10%;
  opacity: 0.9;
  top: 50%;
  transform-origin: ${props => props.$side === 'left' ? '100% 50%' : '0% 50%'};
  transform: translate(${props => props.$side === 'left' ? '-100%' : '0'}, -50%);
  left: ${props => props.$side === 'left' ? '50%' : '50%'};
  animation: ${flap} ${props => props.$flapSpeed}s ease-in-out infinite;
  animation-delay: ${props => props.$side === 'left' ? '0s' : '0.1s'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 20px;
    background: inherit;
    border-radius: 50% 10% 50% 10%;
    top: -10px;
    ${props => props.$side === 'left' ? 'left: 5px;' : 'right: 5px;'}
    transform: rotate(${props => props.$side === 'left' ? '-20deg' : '20deg'});
    opacity: 0.8;
  }
`;

const ButterflyEffect = () => {
  const [isActive, setIsActive] = useState(true);
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const lastMousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isMoving, setIsMoving] = useState(false);
  const [isOnButton, setIsOnButton] = useState(false);
  const [buttonBounds, setButtonBounds] = useState(null);
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' && window.innerWidth <= 768;
  });
  const [isTouching, setIsTouching] = useState(false);
  const moveTimeout = useRef(null);
  const animationRef = useRef();
  
  const butterflies = useRef([
    {
      id: 0,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: 0,
      vy: 0,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      angle: 0,
      currentRadius: 60,
      rotationDirection: Math.random() > 0.5 ? 1 : -1, // 1 for clockwise, -1 for anticlockwise
      orbitSpeed: 0.02,
      isChasing: true,
      lockedRadius: 60,
      currentAngle: 0,
      wanderX: 0,
      wanderY: 0,
      wanderSpeed: 0.005,
      elasticity: 0.008,
      damping: 0.98,
      size: 40,
      color: '#FF6B4A',
      flapSpeed: 0.8
    },
    {
      id: 1,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: 0,
      vy: 0,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      angle: Math.PI,
      currentRadius: 60,
      rotationDirection: Math.random() > 0.5 ? 1 : -1,
      orbitSpeed: 0.025,
      isChasing: true,
      lockedRadius: 60,
      currentAngle: 0,
      wanderX: 0,
      wanderY: 0,
      wanderSpeed: 0.006,
      elasticity: 0.007,
      damping: 0.975,
      size: 35,
      color: '#4A90FF',
      flapSpeed: 0.9
    },
    {
      id: 2,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: 0,
      vy: 0,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      angle: Math.PI / 2,
      currentRadius: 70,
      rotationDirection: Math.random() > 0.5 ? 1 : -1,
      orbitSpeed: 0.018,
      isChasing: true,
      lockedRadius: 70,
      currentAngle: 0,
      wanderX: 0,
      wanderY: 0,
      wanderSpeed: 0.004,
      elasticity: 0.009,
      damping: 0.98,
      size: 38,
      color: '#FFD700',
      flapSpeed: 0.85
    },
    {
      id: 3,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: 0,
      vy: 0,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      angle: (3 * Math.PI) / 2,
      currentRadius: 65,
      rotationDirection: Math.random() > 0.5 ? 1 : -1,
      orbitSpeed: 0.022,
      isChasing: true,
      lockedRadius: 65,
      currentAngle: 0,
      wanderX: 0,
      wanderY: 0,
      wanderSpeed: 0.005,
      elasticity: 0.0075,
      damping: 0.977,
      size: 36,
      color: '#20B2AA',
      flapSpeed: 0.95
    }
  ]).current;

  // Hide cursor globally on desktop only
  useEffect(() => {
    if (!isMobile) {
      document.body.style.cursor = 'none';
    }
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [isMobile]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      setMousePos({ x: newX, y: newY });
      
      // Check if mouse is over a button
      const element = document.elementFromPoint(newX, newY);
      const button = element?.closest('button, a, [role="button"]');
      
      if (button) {
        const rect = button.getBoundingClientRect();
        setIsOnButton(true);
        setButtonBounds({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height
        });
      } else {
        setIsOnButton(false);
        setButtonBounds(null);
      }
      
      // Detect if mouse is moving
      const dx = newX - lastMousePos.current.x;
      const dy = newY - lastMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 2) {
        setIsMoving(true);
        clearTimeout(moveTimeout.current);
        moveTimeout.current = setTimeout(() => {
          setIsMoving(false);
        }, 300);
      }
      
      lastMousePos.current = { x: newX, y: newY };
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    const handleMouseEnter = () => {
      setIsActive(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(moveTimeout.current);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      // Check for butterfly collisions and adjust
      const checkCollisions = () => {
        for (let i = 0; i < butterflies.length; i++) {
          for (let j = i + 1; j < butterflies.length; j++) {
            const dx = butterflies[i].x - butterflies[j].x;
            const dy = butterflies[i].y - butterflies[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = 50; // Minimum distance between butterflies
            
            if (distance < minDistance) {
              // Push butterflies apart
              const angle = Math.atan2(dy, dx);
              const pushDistance = (minDistance - distance) / 2;
              
              butterflies[i].x += Math.cos(angle) * pushDistance;
              butterflies[i].y += Math.sin(angle) * pushDistance;
              butterflies[j].x -= Math.cos(angle) * pushDistance;
              butterflies[j].y -= Math.sin(angle) * pushDistance;
            }
          }
        }
      };
      
      butterflies.forEach((butterfly, index) => {
        if (isOnButton && buttonBounds) {
          // When on button, butterflies should circle around the button edges
          butterfly.angle += butterfly.orbitSpeed * butterfly.rotationDirection * 1.5;
          
          // Position butterflies around button perimeter
          const angleOffset = (Math.PI * 2 / butterflies.length) * index;
          const radius = Math.max(buttonBounds.width, buttonBounds.height) / 2 + 40;
          
          butterfly.targetX = buttonBounds.x + Math.cos(butterfly.angle + angleOffset) * radius;
          butterfly.targetY = buttonBounds.y + Math.sin(butterfly.angle + angleOffset) * radius;
        } else if (isMoving) {
          // Set chasing mode
          butterfly.isChasing = true;
          
          // Calculate distance to mouse
          const distToMouse = Math.sqrt(
            Math.pow(butterfly.x - mousePos.x, 2) + 
            Math.pow(butterfly.y - mousePos.y, 2)
          );
          
          // Only start chasing if distance is more than 50 pixels
          if (distToMouse > 50) {
            butterfly.targetX = mousePos.x + (Math.random() - 0.5) * 20;
            butterfly.targetY = mousePos.y + (Math.random() - 0.5) * 20;
          } else {
            // Stay close but with slight offset
            butterfly.targetX = butterfly.x + (Math.random() - 0.5) * 5;
            butterfly.targetY = butterfly.y + (Math.random() - 0.5) * 5;
          }
        } else {
          // When mouse is stationary, butterflies revolve in perfect circles
          // Calculate current distance and angle from cursor
          const dx = butterfly.x - mousePos.x;
          const dy = butterfly.y - mousePos.y;
          const currentDistance = Math.sqrt(dx * dx + dy * dy);
          const currentAngle = Math.atan2(dy, dx);
          
          // Lock the radius when cursor first stops
          if (butterfly.isChasing) {
            butterfly.lockedRadius = currentDistance < 40 ? 40 + index * 20 : currentDistance;
            butterfly.currentAngle = currentAngle;
            butterfly.isChasing = false;
          }
          
          // Update angle for circular motion
          butterfly.currentAngle += butterfly.orbitSpeed * butterfly.rotationDirection;
          
          // Calculate perfect circular path position
          butterfly.targetX = mousePos.x + Math.cos(butterfly.currentAngle) * butterfly.lockedRadius;
          butterfly.targetY = mousePos.y + Math.sin(butterfly.currentAngle) * butterfly.lockedRadius;
        }
        
        // Calculate forces
        const dx = butterfly.targetX - butterfly.x;
        const dy = butterfly.targetY - butterfly.y;
        
        // Apply elastic force
        butterfly.vx += dx * butterfly.elasticity;
        butterfly.vy += dy * butterfly.elasticity;
        
        // Add flutter only when chasing, not when revolving
        if (butterfly.isChasing) {
          butterfly.vx += (Math.random() - 0.5) * 0.05;
          butterfly.vy += (Math.random() - 0.5) * 0.05;
        }
        
        // Apply damping
        butterfly.vx *= butterfly.damping;
        butterfly.vy *= butterfly.damping;
        
        // Update position
        butterfly.x += butterfly.vx;
        butterfly.y += butterfly.vy;
      });
      
      // Check and resolve collisions
      checkCollisions();
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos, isMoving, isOnButton, buttonBounds]);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch event handlers for mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      setMousePos({ x: touch.clientX, y: touch.clientY });
      setIsTouching(true);
      setIsActive(true);
      setIsMoving(false);
      
      // Reset butterflies to appear around touch point
      butterflies.forEach((butterfly, index) => {
        const angle = (Math.PI * 2 / butterflies.length) * index;
        const radius = 60 + index * 15;
        butterfly.x = touch.clientX + Math.cos(angle) * radius;
        butterfly.y = touch.clientY + Math.sin(angle) * radius;
        butterfly.targetX = butterfly.x;
        butterfly.targetY = butterfly.y;
        butterfly.isChasing = false;
        butterfly.lockedRadius = radius;
        butterfly.currentAngle = angle;
      });
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      setMousePos({ x: touch.clientX, y: touch.clientY });
    };

    const handleTouchEnd = () => {
      setIsTouching(false);
      // Butterflies will fade out through opacity
      setTimeout(() => {
        setIsActive(false);
      }, 300);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  return (
    <ButterflyContainer>
      {/* Flower cursor - only on desktop */}
      {!isMobile && (
        <FlowerCursor 
          $isVisible={!isOnButton}
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          <img src={flowerImage} alt="" />
        </FlowerCursor>
      )}
      
      {/* Butterflies */}
      {butterflies.map((butterfly, index) => {
        // Calculate rotation based on velocity for natural direction
        const velocityAngle = Math.atan2(butterfly.vy, butterfly.vx);
        const rotation = (velocityAngle * 180 / Math.PI) + 90;
        
        return (
          <Butterfly
            key={butterfly.id}
            $size={butterfly.size}
            style={{
              transform: `translate(${butterfly.x - butterfly.size/2}px, ${butterfly.y - butterfly.size/2}px) rotate(${rotation}deg)`,
              opacity: (isMobile ? (isTouching && isActive) : isActive) ? 1 : 0
            }}
          >
            <ButterflyBody />
            <Wing 
              $side="left" 
              $color={butterfly.color}
              $flapSpeed={butterfly.flapSpeed}
            />
            <Wing 
              $side="right" 
              $color={butterfly.color}
              $flapSpeed={butterfly.flapSpeed}
            />
          </Butterfly>
        );
      })}
    </ButterflyContainer>
  );
};

export default ButterflyEffect;
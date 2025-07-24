import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './common';
import { useTheme } from '../contexts/ThemeContext';
import darkModeOffIcon from '../assets/logo/dark-mode-100.png';
import darkModeOnIcon from '../assets/logo/dark-mode-ON-100.png';

const Nav = styled.nav`
  background-color: transparent;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  transition: all 0.3s ease;
  
  &.scrolled {
    background-color: ${({ theme }) => 
      theme.colors.background === '#1a1a1a' 
        ? 'rgba(26, 26, 26, 0.95)' 
        : 'rgba(255, 107, 74, 0.95)'
    };
    backdrop-filter: blur(10px);
    box-shadow: ${({ theme }) => theme.shadows.base};
    position: fixed;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  font-family: 'Dancing Script', cursive;
  letter-spacing: 0.5px;
  position: relative;
  display: inline-block;
  
  /* Add slight rotation for more natural signature look */
  transform: rotate(-2deg);
  
  &:hover {
    opacity: 0.9;
    transform: rotate(-2deg) translateY(-1px);
  }
  
  /* Permanent tilted underline flourish */
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 10%;
    width: 80%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: rotate(-2deg);
  }
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  z-index: 9999;
  transform: translateX(${({ $isOpen }) => $isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuHeader = styled.div`
  padding: ${({ theme }) => theme.spacing['2xl']};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MobileSignature = styled.div`
  font-size: 36px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Dancing Script', cursive;
  letter-spacing: 0.5px;
  transform: rotate(-2deg);
  text-align: center;
  position: relative;
  display: inline-block;
  
  /* Permanent tilted underline */
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 10%;
    width: 80%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: rotate(-2deg);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.xl};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-50%) rotate(90deg);
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DarkModeToggle = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.base};
  margin-left: ${({ theme }) => theme.spacing.lg};
  
  img {
    width: 24px;
    height: 24px;
    opacity: 0.8;
    transition: all ${({ theme }) => theme.transitions.base};
  }
  
  &:hover {
    transform: scale(1.1);
    
    img {
      opacity: 1;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: absolute;
    right: 60px;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 0;
  }
`;

const DesktopNavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  
  li {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.8)};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    color: ${({ $isActive, theme }) => $isActive ? theme.colors.white : theme.colors.primary};
    background-color: ${({ $isActive, theme }) => $isActive ? theme.colors.primary : 'transparent'};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['2xl']};
    width: 100%;
    text-align: center;
    display: block;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    margin: ${({ theme }) => theme.spacing.sm} 0;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
      opacity: 1;
    }
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    transition: all 0.3s ease;
    transform: translateX(-50%);
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <Nav className={scrolled ? 'scrolled' : ''}>
        <NavContainer>
          <Logo to="/">Ritesh Rana</Logo>
          <MobileMenuButton onClick={() => {
            console.log('Mobile menu clicked, current state:', isOpen);
            setIsOpen(!isOpen);
          }}>
            ☰
          </MobileMenuButton>
          {/* Desktop Menu */}
          <DesktopNavLinks>
            {navItems.map(item => (
              <li key={item.path}>
                <NavLink to={item.path} $isActive={location.pathname === item.path}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <DarkModeToggle onClick={toggleTheme} $isDarkMode={isDarkMode}>
                <img src={isDarkMode ? darkModeOnIcon : darkModeOffIcon} alt="Toggle dark mode" />
              </DarkModeToggle>
            </li>
          </DesktopNavLinks>
        </NavContainer>
      </Nav>
      
      {/* Mobile Menu */}
      <MobileMenuOverlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <MobileMenu $isOpen={isOpen}>
        <MobileMenuHeader>
          <MobileSignature>Ritesh Rana</MobileSignature>
          <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
        </MobileMenuHeader>
        <MobileNavLinks>
          {navItems.map(item => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                $isActive={location.pathname === item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </MobileNavLinks>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <DarkModeToggle onClick={toggleTheme} $isDarkMode={isDarkMode} style={{ position: 'relative', right: 'auto', top: 'auto', transform: 'none' }}>
            <img src={isDarkMode ? darkModeOnIcon : darkModeOffIcon} alt="Toggle dark mode" />
          </DarkModeToggle>
        </div>
      </MobileMenu>
    </>
  );
};

export default Navigation;
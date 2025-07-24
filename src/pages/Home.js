import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Button } from '../components/common';
import { device } from '../styles/theme';
import { fadeIn, fadeInUp, animationMixin } from '../styles/animations';
import homeBannerImage from '../assets/images/HomePageBanner.jpg';
import SEO from '../components/SEO';
import brandLogo from '../assets/BrandLogo/Brandlogo.png';

// Social media icons (using Unicode for now, can be replaced with actual icons)
const socialIcons = {
  facebook: '𝐟',
  twitter: '𝕏',
  linkedin: 'in',
  dribbble: '◉',
  instagram: '📷'
};

const HomeWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${homeBannerImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => 
      theme.colors.background === '#1a1a1a' 
        ? 'rgba(0, 0, 0, 0.7)'  // 70% dark overlay in dark mode
        : 'rgba(0, 0, 0, 0.4)'  // 40% dark overlay in light mode
    };
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.xl};
  ${animationMixin(fadeIn, '1s', '0.2s')}
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  letter-spacing: 2px;
  
  @media ${device.md} {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }
  
  @media ${device.lg} {
    font-size: 5rem;
  }
`;

const HeroName = styled.span`
  color: #FF6B4A;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  letter-spacing: 1px;
  opacity: 0.9;
  
  @media ${device.md} {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const CTAButton = styled(Button)`
  background-color: #FF6B4A !important;
  color: ${({ theme }) => theme.colors.white} !important;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing['2xl']}`};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 2px solid #FF6B4A !important;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: transparent !important;
    color: #FF6B4A !important;
    transform: translateY(-2px);
  }
`;

const BottomInfo = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};
  ${animationMixin(fadeInUp, '1s', '0.6s')}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: ${({ theme }) => theme.spacing.lg};
    left: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    justify-content: space-between;
    align-items: flex-end;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const ContactInfo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    opacity: 0.8;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  a {
    color: #FF6B4A;
    text-decoration: none;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    transition: color 0.3s ease;
    
    &:hover {
      color: #E55A3A;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: all 0.3s ease;
  opacity: 0.8;
  
  &:hover {
    color: #FF6B4A;
    opacity: 1;
    transform: translateY(-2px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO 
        title="Ritesh Rana - Full Stack Developer | React Developer | Cloud Architect"
        description="Welcome to Ritesh Rana's portfolio. Expert Full Stack Developer specializing in React.js, React Native, Node.js, and cloud solutions. Available for freelance projects and full-time opportunities."
        keywords="Ritesh Rana, Full Stack Developer, React Developer, Cloud Architect, Software Engineer, Web Developer, Mobile App Developer, India Developer, Freelance Developer, React.js Expert, Node.js Developer"
        url="https://riteshrana.com"
      />
      <HomeWrapper>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            {t('home.greeting')} <HeroName>{t('home.name')}</HeroName>
          </HeroTitle>
          <HeroSubtitle>
            {t('home.subtitle')}
          </HeroSubtitle>
          <CTAButton as={Link} to="/about">
            {t('home.cta')}
          </CTAButton>
        </HeroContent>
        
        <BottomInfo>
          <ContactInfo>
            <p>{t('home.contact.title')}</p>
            <a href={`mailto:${t('home.contact.email')}`}>{t('home.contact.email')}</a>
            <p>{t('home.contact.phone')}</p>
          </ContactInfo>
          
          <SocialLinks>
            <img 
              src={brandLogo} 
              alt="Ritesh Rana Brand" 
              style={{ 
                width: '50px', 
                height: '50px', 
                objectFit: 'contain',
                opacity: 0.9
              }} 
            />
          </SocialLinks>
        </BottomInfo>
      </HeroSection>
      
      {/* Hidden SEO Content for Better Search Engine Ranking */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <h2>Ritesh Rana - Professional Full Stack Developer</h2>
        <p>Ritesh Rana is a highly skilled Full Stack Developer and Software Engineer based in India. With expertise in React.js, React Native, Next.js, Node.js, JavaScript, TypeScript, Python, and cloud architecture. Specializing in building scalable web applications, mobile applications, and cloud solutions. Available for freelance projects, contract work, and full-time opportunities. Contact Ritesh Rana for professional software development services.</p>
        <p>Skills: React Developer, React Native Developer, Node.js Developer, JavaScript Developer, TypeScript Developer, Python Developer, AWS Cloud Architect, Full Stack Engineer, MERN Stack Developer, Frontend Developer, Backend Developer, Mobile App Developer, Web Developer, Software Developer, Cloud Solutions Architect.</p>
        <p>Location: India | Email: <span className="selectable">rana1997ritesh@gmail.com</span> | Phone: <span className="selectable">+91 9871080053</span></p>
      </div>
    </HomeWrapper>
    </>
  );
};

export default Home;
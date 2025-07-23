import React from 'react';
import styled from 'styled-components';
import { Container, Button } from '../components/common';
import { device } from '../styles/theme';
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, animationMixin } from '../styles/animations';
import aboutBannerImage from '../assets/images/AboutBanner.jpg';
import profileImage from '../assets/images/dp.jpg';

// Social media icons
const socialIcons = {
  facebook: '𝐟',
  twitter: '𝕏',
  youtube: '▶',
  googlePlus: 'g+'
};

const AboutWrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const BannerSection = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  background-image: url(${aboutBannerImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  ${animationMixin(fadeIn, '1s', '0.2s')}
`;

const BannerTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: -2px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const BannerSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: all 0.3s ease;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
    transform: translateY(-3px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  animation: bounce 2s infinite;
  cursor: pointer;
  z-index: 2;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing['5xl']} 0;
  background-color: #ffffff;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ProfileImageWrapper = styled.div`
  ${animationMixin(fadeInLeft, '0.8s', '0.2s')}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 0;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
  
  &:hover {
    filter: grayscale(0%);
  }
`;

const AboutText = styled.div`
  ${animationMixin(fadeInRight, '0.8s', '0.4s')}
`;

const AboutTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  
  @media ${device.md} {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const AboutDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
`;

const DownloadButton = styled(Button)`
  background-color: #FF6B4A !important;
  color: ${({ theme }) => theme.colors.white} !important;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing['2xl']}`};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
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

const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  ${animationMixin(fadeInUp, '0.8s', '0.2s')}
`;

const SkillCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  background: #FF6B4A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background: #E55A3A;
    transform: scale(1.1);
  }
`;

const SkillTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SkillDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const About = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.6,
      behavior: 'smooth'
    });
  };

  const skills = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building responsive and performant web applications with modern frameworks'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps with React Native'
    },
    {
      icon: '☁️',
      title: 'Cloud Architecture',
      description: 'Designing scalable solutions with AWS services'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Crafting intuitive and beautiful user interfaces'
    }
  ];

  return (
    <AboutWrapper>
      <BannerSection>
        <BannerContent>
          <BannerSubtitle>Full Stack</BannerSubtitle>
          <BannerTitle>Developer</BannerTitle>
        </BannerContent>
        <ScrollIndicator onClick={scrollToContent}>⌄</ScrollIndicator>
      </BannerSection>

      <AboutSection>
        <Container>
          <AboutContent>
            <ProfileImageWrapper>
              <ProfileImage src={profileImage} alt="Ritesh Rana" />
            </ProfileImageWrapper>
            <AboutText>
              <AboutTitle>
                I'm Ritesh Rana,<br />
                Full Stack Developer & Cloud Architect<br />
                from the vibrant lands of India.
              </AboutTitle>
              <AboutDescription>
                I have rich experience in web development & building scalable applications. 
                Also I am good at React, Node.js, AWS, and modern web technologies. 
                I love to talk with you about our unique approach. 
                Feel free to contact me writing an email with your project idea.
              </AboutDescription>
              <DownloadButton as="a" href="/Ritesh_Rana_Resume.pdf" download>
                DOWNLOAD RESUME
              </DownloadButton>
            </AboutText>
          </AboutContent>
        </Container>
      </AboutSection>

      <SkillsSection>
        <Container>
          <SectionTitle>What I Do</SectionTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard key={index}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Container>
      </SkillsSection>
    </AboutWrapper>
  );
};

export default About;
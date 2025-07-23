import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Card, Banner, BannerContent } from '../components/common';
import { PageSection, PageTitle } from '../styles/PageStyles';
import { device } from '../styles/theme';
import bannerImage from '../assets/images/robs-HOrhCnQsxnQ-unsplash.jpg';

// AI Tool Logos
import chatGptLogo from '../assets/logo/chatgpt.png';
import githubCopilotLogo from '../assets/logo/github-copilot.png';
import claudeLogo from '../assets/logo/claude-ai.png';
import geminiLogo from '../assets/logo/gemini-ai.png';
import clineLogo from '../assets/logo/cline.png';
import augmentLogo from '../assets/logo/augment__logos.jpeg';

// SVG Icons
import ReactJS from '../assets/svg/ReactJS';
import ReactNative from '../assets/svg/ReactNative';
import NextJS from '../assets/svg/NextJS';
import HTML5 from '../assets/svg/HTML5';
import CSS3 from '../assets/svg/CSS3';
import JavaScript from '../assets/svg/JavaScript';
import TypeScript from '../assets/svg/TypeScript';
import NodeJS from '../assets/svg/NodeJS';
import Python from '../assets/svg/Python';
import ExpressJS from '../assets/svg/ExpressJS';
import RestAPI from '../assets/svg/RestAPI';
import MongoDB from '../assets/svg/MongoDB';
import MySQL from '../assets/svg/MySQL';
import AWS from '../assets/svg/AWS';
import Git from '../assets/svg/Git';
import DefaultSkill from '../assets/svg/DefaultSkill';

// Skill Icon Mapping
const getSkillIcon = (skillName) => {
  const iconMap = {
    'React JS': ReactJS,
    'React Native': ReactNative,
    'Next JS': NextJS,
    'HTML': HTML5,
    'CSS': CSS3,
    'JavaScript': JavaScript,
    'TypeScript': TypeScript,
    'Node JS': NodeJS,
    'Python': Python,
    'Express JS': ExpressJS,
    'REST APIs': RestAPI,
    'MongoDB': MongoDB,
    'MySQL': MySQL,
    'AWS': AWS,
    'AWS Amplify': AWS,
    'AWS Lambda': AWS,
    'AWS AppSync': AWS,
    'Git/Version Control': Git,
  };
  
  const IconComponent = iconMap[skillName] || DefaultSkill;
  return <IconComponent size={20} />;
};

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(Card)`
  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `calc(${theme.spacing.md} + ${theme.spacing.xs})`};
`;

const SkillItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillPercentage = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const SkillBar = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  height: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  overflow: hidden;
`;

const progressAnimation = keyframes`
  from {
    width: 0;
  }
`;

const SkillProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, 
    #11998e 0%,     /* Teal */
    #38ef7d 50%,    /* Green */
    #F7971E 100%    /* Orange */
  );
  border-radius: ${({ theme }) => theme.borderRadius.base};
  transition: width 1s ease-in-out;
  animation: ${progressAnimation} 1.5s ease-in-out;
  width: ${({ level }) => `${level}%`};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      rgba(255,255,255,0.2) 0%, 
      rgba(255,255,255,0) 50%, 
      rgba(255,255,255,0.2) 100%
    );
    border-radius: ${({ theme }) => theme.borderRadius.base};
  }
`;

const AdditionalSkills = styled.section`
  margin-top: ${({ theme }) => theme.spacing['4xl']};

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

const CompetenciesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CompetencyItem = styled(Card)`
  text-align: center;
  transition: transform ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    color: ${({ theme }) => theme.colors.text.light};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

const AITechnologiesSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  
  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
    color: ${({ theme }) => theme.colors.text.primary};
    text-align: center;
  }
`;

const AITechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AITechCard = styled(Card)`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  transition: all ${({ theme }) => theme.transitions.base};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const AITechIcon = styled.div`
  width: 60px;
  height: 60px;
  min-width: 60px;
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.sm};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const AITechContent = styled.div`
  flex: 1;
  
  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "React JS", level: 90 },
        { name: "React Native", level: 85 },
        { name: "Next JS", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      category: "Backend Technologies",
      skills: [
        { name: "Node JS", level: 85 },
        { name: "Python", level: 80 },
        { name: "Fast-API", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "Express JS", level: 85 }
      ]
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "AWS", level: 85 },
        { name: "AWS Amplify", level: 80 },
        { name: "AWS Lambda", level: 80 },
        { name: "AWS AppSync", level: 75 }
      ]
    },
    {
      category: "Other Technologies",
      skills: [
        { name: "Selenium Automation", level: 75 },
        { name: "Browser Stack", level: 70 },
        { name: "MAUI", level: 70 },
        { name: ".NET Framework", level: 75 },
        { name: "Git/Version Control", level: 90 }
      ]
    }
  ];

  const aiTechnologies = [
    {
      name: "OpenAI (ChatGPT)",
      logo: chatGptLogo,
      description: "Utilized for code generation, debugging, and architectural suggestions during development workflows."
    },
    {
      name: "GitHub Copilot",
      logo: githubCopilotLogo,
      description: "Integrated into VS Code (macOS) for intelligent code completion and automation of repetitive tasks."
    },
    {
      name: "Claude Code",
      logo: claudeLogo,
      description: "VS Code - Enabled hands-free coding and terminal interaction using voice commands."
    },
    {
      name: "Gemini AI",
      logo: geminiLogo,
      description: "VS Code - Used for in-editor code suggestions, optimization, and inline documentation assistance."
    },
    {
      name: "Cline",
      logo: clineLogo,
      description: "VS Code - Used for AI-assisted coding support, project navigation, and intelligent code generation."
    },
    {
      name: "Augment AI",
      logo: augmentLogo,
      description: "VS Code - Applied for real-time debugging assistance, test case suggestions, and performance improvements."
    }
  ];

  return (
    <>
      <Banner $image={bannerImage} $height="60vh" $mdHeight="60vh" style={{ minHeight: '400px', backgroundAttachment: 'fixed' }}>
        <BannerContent>
          <h1>Technical Skills</h1>
          <p>Technologies and tools I work with</p>
        </BannerContent>
      </Banner>
      <PageSection>
        <Container>
        
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index}>
              <h2>{category.category}</h2>
              <SkillsList>
                {category.skills.map((skill, idx) => (
                  <SkillItem key={idx}>
                    <SkillHeader>
                      <SkillName>
                        {getSkillIcon(skill.name)}
                        {skill.name}
                      </SkillName>
                      <SkillPercentage>{skill.level}%</SkillPercentage>
                    </SkillHeader>
                    <SkillBar>
                      <SkillProgress level={skill.level} />
                    </SkillBar>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
        
        <AdditionalSkills>
          <h2>Key Competencies</h2>
          <CompetenciesGrid>
            <CompetencyItem>
              <h3>Full Stack Development</h3>
              <p>End-to-end application development from UI/UX to database design</p>
            </CompetencyItem>
            <CompetencyItem>
              <h3>Serverless Architecture</h3>
              <p>Designing scalable cloud solutions with AWS services</p>
            </CompetencyItem>
            <CompetencyItem>
              <h3>Agile Methodology</h3>
              <p>Experienced in Scrum and collaborative development</p>
            </CompetencyItem>
            <CompetencyItem>
              <h3>Cross-Platform Development</h3>
              <p>Building applications for web, mobile, and desktop</p>
            </CompetencyItem>
          </CompetenciesGrid>
        </AdditionalSkills>
      </Container>
    </PageSection>
    
    <AITechnologiesSection>
      <Container>
        <h2>AI-Powered Development Tools</h2>
        <AITechGrid>
          {aiTechnologies.map((tech, index) => (
            <AITechCard key={index}>
              <AITechIcon>
                <img src={tech.logo} alt={tech.name} />
              </AITechIcon>
              <AITechContent>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </AITechContent>
            </AITechCard>
          ))}
        </AITechGrid>
      </Container>
    </AITechnologiesSection>
    </>
  );
};

export default Skills;
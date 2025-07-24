import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Card, Banner, BannerContent } from '../components/common';
import { PageSection, PageTitle } from '../styles/PageStyles';
import { device } from '../styles/theme';
import bannerImage from '../assets/images/robs-HOrhCnQsxnQ-unsplash.jpg';
import SEO from '../components/SEO';

// AI Tool Logos
import chatGptLogo from '../assets/logo/chatgpt.png';
import githubCopilotLogo from '../assets/logo/github-copilot.png';
import claudeLogo from '../assets/logo/claude-ai.png';
import geminiLogo from '../assets/logo/gemini-ai.png';
import clineLogo from '../assets/logo/cline.png';
import augmentLogo from '../assets/logo/augment__logos.jpeg';

// Technology Icons
import reactIcon from '../assets/logo/react-js-160.png';
import reactNativeIcon from '../assets/logo/react-native-256.png';
import htmlIcon from '../assets/logo/html-5-240.png';
import cssIcon from '../assets/logo/css-240.png';
import jsIcon from '../assets/logo/js-144.png';
import nodeIcon from '../assets/logo/node-js-144.png';
import pythonIcon from '../assets/logo/python-240.png';
import expressIcon from '../assets/logo/express-js-100.png';
import restApiIcon from '../assets/logo/rest-api-100.png';
import mongoIcon from '../assets/logo/mongo-db-100.png';
import mysqlIcon from '../assets/logo/my-sql-240.png';
import awsIcon from '../assets/logo/aws-96.png';
import gitIcon from '../assets/logo/git-240.png';
import seleniumIcon from '../assets/logo/selenium-80.png';
import browserStackIcon from '../assets/logo/browser-stack-240.png';
import fastApiIcon from '../assets/logo/fast-api-80.png';
import typescriptIcon from '../assets/logo/typescript-240.png';
import nextjsIcon from '../assets/logo/nextjs-240.png';

// SVG Icons for technologies without PNG icons
import DotNetFramework from '../assets/svg/DotNetFramework';
import MAUI from '../assets/svg/MAUI';

// Skill Icon Mapping
const getSkillIcon = (skillName) => {
  const iconMap = {
    'React JS': reactIcon,
    'React Native': reactNativeIcon,
    'Next JS': nextjsIcon,
    'HTML': htmlIcon,
    'CSS': cssIcon,
    'JavaScript': jsIcon,
    'TypeScript': typescriptIcon,
    'Node JS': nodeIcon,
    'Python': pythonIcon,
    'Express JS': expressIcon,
    'REST APIs': restApiIcon,
    'MongoDB': mongoIcon,
    'MySQL': mysqlIcon,
    'AWS': awsIcon,
    'AWS Amplify': awsIcon,
    'AWS Lambda': awsIcon,
    'AWS AppSync': awsIcon,
    'Git/Version Control': gitIcon,
    'Selenium': seleniumIcon,
    'Selenium Automation': seleniumIcon,
    'BrowserStack': browserStackIcon,
    'Browser Stack': browserStackIcon,
    'FastAPI': fastApiIcon,
    'MAUI': 'svg',
    '.NET Framework': 'svg',
  };
  
  const iconSrc = iconMap[skillName];
  
  if (iconSrc === 'svg') {
    // Handle SVG components
    if (skillName === 'MAUI') {
      return <MAUI size={24} />;
    } else if (skillName === '.NET Framework') {
      return <DotNetFramework size={24} />;
    }
  } else if (iconSrc) {
    // Handle PNG icons
    return <img src={iconSrc} alt={skillName} style={{ width: '24px', height: '24px', objectFit: 'contain' }} />;
  }
  
  return null;
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
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      category: t('skills.categories.frontend'),
      skills: [
        { name: t('skills.names.reactjs'), level: 90, iconKey: "React JS" },
        { name: t('skills.names.reactnative'), level: 85, iconKey: "React Native" },
        { name: t('skills.names.nextjs'), level: 85, iconKey: "Next JS" },
        { name: t('skills.names.html'), level: 95, iconKey: "HTML" },
        { name: t('skills.names.css'), level: 90, iconKey: "CSS" },
        { name: t('skills.names.javascript'), level: 90, iconKey: "JavaScript" },
        { name: t('skills.names.typescript'), level: 80, iconKey: "TypeScript" }
      ]
    },
    {
      category: t('skills.categories.backend'),
      skills: [
        { name: t('skills.names.nodejs'), level: 85, iconKey: "Node JS" },
        { name: t('skills.names.python'), level: 80, iconKey: "Python" },
        { name: t('skills.names.fastapi'), level: 75, iconKey: "FastAPI" },
        { name: t('skills.names.restapis'), level: 90, iconKey: "REST APIs" },
        { name: t('skills.names.expressjs'), level: 85, iconKey: "Express JS" }
      ]
    },
    {
      category: t('skills.categories.database'),
      skills: [
        { name: t('skills.names.mongodb'), level: 85, iconKey: "MongoDB" },
        { name: t('skills.names.mysql'), level: 80, iconKey: "MySQL" },
        { name: t('skills.names.aws'), level: 85, iconKey: "AWS" },
        { name: t('skills.names.awsamplify'), level: 80, iconKey: "AWS Amplify" },
        { name: t('skills.names.awslambda'), level: 80, iconKey: "AWS Lambda" },
        { name: t('skills.names.awsappsync'), level: 75, iconKey: "AWS AppSync" }
      ]
    },
    {
      category: t('skills.categories.cloud'),
      skills: [
        { name: t('skills.names.selenium'), level: 75, iconKey: "Selenium Automation" },
        { name: t('skills.names.browserstack'), level: 70, iconKey: "Browser Stack" },
        { name: t('skills.names.maui'), level: 70, iconKey: "MAUI" },
        { name: t('skills.names.dotnet'), level: 75, iconKey: ".NET Framework" },
        { name: t('skills.names.git'), level: 90, iconKey: "Git/Version Control" }
      ]
    }
  ];

  const aiTechnologies = [
    {
      name: t('skills.aitools.names.chatgpt'),
      logo: chatGptLogo,
      description: t('skills.aitools.chatgpt')
    },
    {
      name: t('skills.aitools.names.copilot'),
      logo: githubCopilotLogo,
      description: t('skills.aitools.copilot')
    },
    {
      name: t('skills.aitools.names.claude'),
      logo: claudeLogo,
      description: t('skills.aitools.claude')
    },
    {
      name: t('skills.aitools.names.gemini'),
      logo: geminiLogo,
      description: t('skills.aitools.gemini')
    },
    {
      name: t('skills.aitools.names.cline'),
      logo: clineLogo,
      description: t('skills.aitools.cline')
    },
    {
      name: t('skills.aitools.names.augment'),
      logo: augmentLogo,
      description: t('skills.aitools.augment')
    }
  ];

  return (
    <>
      <SEO 
        title="Skills - Ritesh Rana | Technical Expertise & Technologies"
        description="Explore Ritesh Rana's technical skills including React.js, React Native, Node.js, Python, AWS, and more. View proficiency levels in frontend, backend, and cloud technologies."
        keywords="Ritesh Rana Skills, Technical Skills, React Developer Skills, Full Stack Skills, Programming Languages, Web Development Skills, Cloud Skills, Database Skills, Frontend Skills, Backend Skills"
        url="https://riteshrana.com/skills"
      />
      <Banner $image={bannerImage} $height="60vh" $mdHeight="60vh" style={{ minHeight: '400px', backgroundAttachment: 'fixed' }}>
        <BannerContent>
          <h1>{t('skills.title')}</h1>
          <p>{t('skills.description')}</p>
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
                        {getSkillIcon(skill.iconKey || skill.name)}
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
          <h2>{t('skills.competencies.title')}</h2>
          <CompetenciesGrid>
            <CompetencyItem>
              <h3>{t('skills.competencies.fullstack.title')}</h3>
              <p>{t('skills.competencies.fullstack.description')}</p>
            </CompetencyItem>
            <CompetencyItem>
              <h3>{t('skills.competencies.serverless.title')}</h3>
              <p>{t('skills.competencies.serverless.description')}</p>
            </CompetencyItem>
            <CompetencyItem>
              <h3>{t('skills.competencies.agile.title')}</h3>
              <p>{t('skills.competencies.agile.description')}</p>
            </CompetencyItem>
            <CompetencyItem>
              <h3>{t('skills.competencies.crossplatform.title')}</h3>
              <p>{t('skills.competencies.crossplatform.description')}</p>
            </CompetencyItem>
          </CompetenciesGrid>
        </AdditionalSkills>
      </Container>
    </PageSection>
    
    <AITechnologiesSection>
      <Container>
        <h2>{t('skills.aitools.title')}</h2>
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
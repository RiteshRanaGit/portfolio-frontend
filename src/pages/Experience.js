import React from 'react';
import styled from 'styled-components';
import { Container, Card, Banner, BannerContent } from '../components/common';
import { PageSection, PageTitle } from '../styles/PageStyles';
import { device } from '../styles/theme';
import bannerImage from '../assets/images/remy_loz-3S0INpfREQc-unsplash.jpg';

const ExperienceSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};

  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 20px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const TimelineMarker = styled.div`
  position: absolute;
  left: -34px;
  top: 0;
  width: 12px;
  height: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: -24px;
  }
`;

const TimelineContent = styled(Card)`
  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }

  h4 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: ${({ theme }) => theme.spacing.sm} 0;
    padding-left: ${({ theme }) => theme.spacing.lg};
    position: relative;
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};

    &::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const TimelineMeta = styled.p`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  span {
    color: inherit;
  }
`;

const ProjectsSection = styled.section`
  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Card)`
  transition: transform ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: ${({ theme }) => theme.spacing.sm} 0;
    padding-left: ${({ theme }) => theme.spacing.lg};
    position: relative;
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProjectType = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDuration = styled.p`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "MarsDevs Pvt. Ltd",
      position: "Full Stack Developer",
      location: "Delhi, India",
      duration: "04/2025 - Current",
      responsibilities: [
        "Spearheaded full-stack development for live web and mobile applications in a collaborative Agile environment",
        "Built and maintained applications using React JS, React Native, Next JS, Node JS, Python and TypeScript",
        "Designed and integrated AWS-based serverless architecture using AppSync, Lambda Functions, and related services",
        "Ensured high code quality through modular coding practices, version control, and performance optimization"
      ]
    },
    {
      id: 2,
      company: "Eteam Infoservices Pvt. Ltd",
      position: "Software Engineer",
      location: "Delhi, India",
      duration: "04/2022 - 04/2025",
      responsibilities: [
        "Delivered scalable full-stack solutions by leading the design, development, and deployment of enterprise-level applications",
        "Utilized React JS, React Native, Next JS, Node JS, Python, and .NET MAUI Blazor for development",
        "Designed front-end/back-end architecture and implemented database schemas with clear application flowcharts",
        "Collaborated with cross-functional teams to improve application performance and code reusability"
      ]
    },
    {
      id: 3,
      company: "Experiom Pvt. Ltd",
      position: "JR. Software Developer",
      location: "Delhi, India",
      duration: "04/2021 - 03/2022",
      responsibilities: [
        "Contributed to end-to-end project development and deployment with a focus on full-stack responsibilities",
        "Developed automation scripts using Selenium and integrated them with BrowserStack for testing",
        "Created Applitools UI test scripts and implemented Amplitude & GTM for analytics and event tracking"
      ]
    }
  ];

  const projects = [
    {
      name: "GFY – GoFarmYourself",
      type: "Agritech Platform | Mobile & Web App",
      description: [
        "Developed and deployed a cross-platform React Native mobile app using Expo EAS, integrated with optimized build profiles and native components",
        "Created a scalable Next.js web application powered by AWS Amplify Gen 2, AppSync (GraphQL APIs), Lambda functions, and DynamoDB",
        "Focused on performance and user experience through efficient state management, lazy data loading, native animations, and cloud-based deployment pipelines"
      ]
    },
    {
      name: "Bharee",
      type: "B2B Water Purification Platform",
      description: [
        "Developed a scalable web application for B2B water purification infrastructure and distribution",
        "Built frontend using React JS and SCSS, and backend with Node JS, REST APIs, and MongoDB",
        "Ensured responsive UI and seamless module integration"
      ]
    },
    {
      name: "Totam",
      type: "Multi-tenant Hiring Platform",
      description: [
        "Developed a multi-tenant web application using the .NET Framework for hiring and interview management",
        "Implemented features to enhance communication between managers and candidates",
        "Focused on modular architecture and access control"
      ]
    },
    {
      name: "Ementor",
      type: "Cross-platform Educational App",
      description: [
        "Built a cross-platform application for Windows, Android, iOS, and macOS using .NET MAUI Blazor",
        "Worked as a full stack developer using .NET MAUI for frontend and Node JS with MongoDB for backend",
        "Designed responsive interfaces and optimized database workflows"
      ]
    },
    {
      name: "Lusio",
      type: "Gaming Platform Interface",
      description: [
        "Developed a gaming platform interface using Next JS",
        "Worked as a frontend developer, focusing on component-based UI and performance"
      ]
    },
    {
      name: "Theoceann",
      type: "Maritime-focused Application",
      description: [
        "Maritime-focused project with front-end development using React JS",
        "Development in React JS with Python (Fast-API)"
      ]
    },
    {
      name: "Rocket Streets",
      type: "Stock Market Web Application",
      description: [
        "Developed a stock market-focused web application with dynamic data rendering",
        "Worked as a frontend developer using Next JS, focusing on performance and component-based architecture"
      ]
    },
    {
      name: "InternTrack",
      type: "Internship Management System",
      description: [
        "Developed the frontend using React.js, ensuring a responsive and intuitive user interface",
        "Designed and implemented a serverless backend on AWS using IAM, EC2, API Gateway, Lambda (Python), DynamoDB, and Amazon Cognito",
        "Supported team in ensuring cross-browser compatibility and enhancing product quality through QA processes"
      ]
    }
  ];

  return (
    <>
      <Banner $image={bannerImage} $height="60vh" $mdHeight="60vh" style={{ minHeight: '400px', backgroundAttachment: 'fixed' }}>
        <BannerContent>
          <h1>Work Experience</h1>
          <p>My professional journey and key projects</p>
        </BannerContent>
      </Banner>
      <PageSection>
        <Container>
        
        <ExperienceSection>
          <h2>Professional Experience</h2>
          <Timeline>
            {experiences.map((exp) => (
              <TimelineItem key={exp.id}>
                <TimelineMarker />
                <TimelineContent>
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                  <TimelineMeta>
                    <span>{exp.location}</span> | <span>{exp.duration}</span>
                  </TimelineMeta>
                  <ul>
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ExperienceSection>
        
        <ProjectsSection>
          <h2>Projects</h2>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <h3>{project.name}</h3>
                {project.type && <ProjectType>{project.type}</ProjectType>}
                <ul>
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsSection>
      </Container>
    </PageSection>
    </>
  );
};

export default Experience;
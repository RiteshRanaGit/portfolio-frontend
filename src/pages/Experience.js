import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Card, Banner, BannerContent } from '../components/common';
import { PageSection, PageTitle } from '../styles/PageStyles';
import { device } from '../styles/theme';
import bannerImage from '../assets/images/remy_loz-3S0INpfREQc-unsplash.jpg';
import SEO from '../components/SEO';

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
  const { t } = useTranslation();
  const experiences = [
    {
      id: 1,
      company: t('experience.companies.marsdevs.name'),
      position: t('experience.companies.marsdevs.position'),
      location: t('experience.companies.marsdevs.location'),
      duration: t('experience.companies.marsdevs.duration'),
      responsibilities: [
        t('experience.companies.marsdevs.resp1'),
        t('experience.companies.marsdevs.resp2'),
        t('experience.companies.marsdevs.resp3'),
        t('experience.companies.marsdevs.resp4')
      ]
    },
    {
      id: 2,
      company: t('experience.companies.eteam.name'),
      position: t('experience.companies.eteam.position'),
      location: t('experience.companies.eteam.location'),
      duration: t('experience.companies.eteam.duration'),
      responsibilities: [
        t('experience.companies.eteam.resp1'),
        t('experience.companies.eteam.resp2'),
        t('experience.companies.eteam.resp3'),
        t('experience.companies.eteam.resp4')
      ]
    },
    {
      id: 3,
      company: t('experience.companies.experiom.name'),
      position: t('experience.companies.experiom.position'),
      location: t('experience.companies.experiom.location'),
      duration: t('experience.companies.experiom.duration'),
      responsibilities: [
        t('experience.companies.experiom.resp1'),
        t('experience.companies.experiom.resp2'),
        t('experience.companies.experiom.resp3')
      ]
    }
  ];

  const projects = [
    {
      name: t('experience.projects.gfy.name'),
      type: t('experience.projects.gfy.type'),
      description: [
        t('experience.projects.gfy.desc1'),
        t('experience.projects.gfy.desc2'),
        t('experience.projects.gfy.desc3')
      ]
    },
    {
      name: t('experience.projects.bharee.name'),
      type: t('experience.projects.bharee.type'),
      description: [
        t('experience.projects.bharee.desc1'),
        t('experience.projects.bharee.desc2'),
        t('experience.projects.bharee.desc3')
      ]
    },
    {
      name: t('experience.projects.totam.name'),
      type: t('experience.projects.totam.type'),
      description: [
        t('experience.projects.totam.desc1'),
        t('experience.projects.totam.desc2'),
        t('experience.projects.totam.desc3')
      ]
    },
    {
      name: t('experience.projects.ementor.name'),
      type: t('experience.projects.ementor.type'),
      description: [
        t('experience.projects.ementor.desc1'),
        t('experience.projects.ementor.desc2'),
        t('experience.projects.ementor.desc3')
      ]
    },
    {
      name: t('experience.projects.lusio.name'),
      type: t('experience.projects.lusio.type'),
      description: [
        t('experience.projects.lusio.desc1'),
        t('experience.projects.lusio.desc2')
      ]
    },
    {
      name: t('experience.projects.theoceann.name'),
      type: t('experience.projects.theoceann.type'),
      description: [
        t('experience.projects.theoceann.desc1'),
        t('experience.projects.theoceann.desc2')
      ]
    },
    {
      name: t('experience.projects.rocketstreets.name'),
      type: t('experience.projects.rocketstreets.type'),
      description: [
        t('experience.projects.rocketstreets.desc1'),
        t('experience.projects.rocketstreets.desc2')
      ]
    },
    {
      name: t('experience.projects.interntrack.name'),
      type: t('experience.projects.interntrack.type'),
      description: [
        t('experience.projects.interntrack.desc1'),
        t('experience.projects.interntrack.desc2'),
        t('experience.projects.interntrack.desc3')
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Experience - Ritesh Rana | Professional Work History"
        description="View Ritesh Rana's professional experience as a Full Stack Developer. Projects include HDFC Bank systems, education platforms, and innovative web applications."
        keywords="Ritesh Rana Experience, Professional Experience, Work History, Software Developer Experience, Project Portfolio, HDFC Bank Developer, Full Stack Projects, React Developer Experience"
        url="https://riteshrana.com/experience"
      />
      <Banner $image={bannerImage} $height="60vh" $mdHeight="60vh" style={{ minHeight: '400px', backgroundAttachment: 'fixed' }}>
        <BannerContent>
          <h1>{t('experience.title')}</h1>
          <p>{t('experience.subtitle')}</p>
        </BannerContent>
      </Banner>
      <PageSection>
        <Container>
        
        <ExperienceSection>
          <h2>{t('experience.description')}</h2>
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
          <h2>{t('experience.projects.title')}</h2>
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
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Section, Banner, BannerContent } from '../components/common';
import SEO from '../components/SEO';
import privacyBannerImage from '../assets/images/privacy-policy.jpg';

const PolicyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const PolicySection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
`;

const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const List = styled.ul`
  margin-left: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  
  &:hover {
    text-decoration: underline;
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title="Privacy Policy - Ritesh Rana Portfolio"
        description="Privacy Policy for Ritesh Rana's personal portfolio website. Information about data collection, copyright, and usage terms."
        keywords="Privacy Policy, Terms of Use, Copyright Information, Personal Portfolio"
        url="https://riteshrana.com/privacy-policy"
      />
      <Banner $image={privacyBannerImage} $height="60vh" $mdHeight="60vh" style={{ minHeight: '400px', backgroundAttachment: 'fixed' }}>
        <BannerContent>
          <h1>{t('privacy.title')}</h1>
          <p>{t('privacy.subtitle')}</p>
        </BannerContent>
      </Banner>
      
      <Section>
        <Container>
          <PolicyContent>
            <PolicySection>
              <Title>{t('privacy.sections.overview.title')}</Title>
              <Paragraph>{t('privacy.sections.overview.content1')}</Paragraph>
              <Paragraph>{t('privacy.sections.overview.content2')}</Paragraph>
            </PolicySection>

            <PolicySection>
              <Title>{t('privacy.sections.personalInfo.title')}</Title>
              <Paragraph>{t('privacy.sections.personalInfo.content1')}</Paragraph>
              <List>
                <ListItem>{t('privacy.sections.personalInfo.item1')}</ListItem>
                <ListItem>{t('privacy.sections.personalInfo.item2')}</ListItem>
                <ListItem>{t('privacy.sections.personalInfo.item3')}</ListItem>
              </List>
            </PolicySection>

            <PolicySection>
              <Title>{t('privacy.sections.copyright.title')}</Title>
              
              <SubTitle>{t('privacy.sections.copyright.websiteDesign.title')}</SubTitle>
              <Paragraph>{t('privacy.sections.copyright.websiteDesign.content')}</Paragraph>
              
              <SubTitle>{t('privacy.sections.copyright.images.title')}</SubTitle>
              <Paragraph>{t('privacy.sections.copyright.images.content1')}</Paragraph>
              <List>
                <ListItem>{t('privacy.sections.copyright.images.item1')}</ListItem>
                <ListItem>{t('privacy.sections.copyright.images.item2')}</ListItem>
                <ListItem>{t('privacy.sections.copyright.images.item3')}</ListItem>
              </List>
              <Paragraph>
                {t('privacy.sections.copyright.images.content2')} 
                <ContactLink href="mailto:rana1997ritesh@gmail.com" className="selectable"> rana1997ritesh@gmail.com</ContactLink> 
                {t('privacy.sections.copyright.images.content3')}
              </Paragraph>
              
              <SubTitle>{t('privacy.sections.copyright.originalContent.title')}</SubTitle>
              <Paragraph>{t('privacy.sections.copyright.originalContent.content1')}</Paragraph>
              <List>
                <ListItem>{t('privacy.sections.copyright.originalContent.item1')}</ListItem>
                <ListItem>{t('privacy.sections.copyright.originalContent.item2')}</ListItem>
                <ListItem>{t('privacy.sections.copyright.originalContent.item3')}</ListItem>
              </List>
              
              <SubTitle>{t('privacy.sections.copyright.icons.title')}</SubTitle>
              <Paragraph>{t('privacy.sections.copyright.icons.content')}</Paragraph>
            </PolicySection>

            <PolicySection>
              <Title>{t('privacy.sections.aiContent.title')}</Title>
              <Paragraph>{t('privacy.sections.aiContent.content1')}</Paragraph>
              <Paragraph>
                {t('privacy.sections.aiContent.content2')} 
                <ContactLink href="mailto:rana1997ritesh@gmail.com" className="selectable"> rana1997ritesh@gmail.com</ContactLink> 
                {t('privacy.sections.aiContent.content3')} 
                <ContactLink href="tel:+919871080053" className="selectable"> +91 9871080053</ContactLink>
                {t('privacy.sections.aiContent.content4')}
              </Paragraph>
            </PolicySection>

            <PolicySection>
              <Title>{t('privacy.sections.contactInfo.title')}</Title>
              <Paragraph>{t('privacy.sections.contactInfo.content1')}</Paragraph>
              <Paragraph>{t('privacy.sections.contactInfo.content2')}</Paragraph>
            </PolicySection>

            <PolicySection>
              <Title>{t('privacy.sections.disclaimer.title')}</Title>
              <Paragraph>{t('privacy.sections.disclaimer.content')}</Paragraph>
            </PolicySection>

            <PolicySection>
              <Title>{t('privacy.sections.contact.title')}</Title>
              <Paragraph>{t('privacy.sections.contact.content')}</Paragraph>
              <Paragraph>
                {t('privacy.sections.contact.email')} 
                <ContactLink href="mailto:rana1997ritesh@gmail.com" className="selectable"> rana1997ritesh@gmail.com</ContactLink>
              </Paragraph>
              <Paragraph>
                {t('privacy.sections.contact.phone')} 
                <ContactLink href="tel:+919871080053" className="selectable"> +91 9871080053</ContactLink>
              </Paragraph>
            </PolicySection>

            <LastUpdated>{t('privacy.lastUpdated')}</LastUpdated>
          </PolicyContent>
        </Container>
      </Section>
    </>
  );
};

export default PrivacyPolicy;
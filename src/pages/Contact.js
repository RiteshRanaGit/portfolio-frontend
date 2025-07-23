import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Card, Button, Banner, BannerContent } from '../components/common';
import { PageSection, PageTitle } from '../styles/PageStyles';
import { device } from '../styles/theme';
import bannerImage from '../assets/images/tai-bui-HzVBe-8frwc-unsplash.jpg';

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  > p {
    color: ${({ theme }) => theme.colors.text.light};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ContactItem = styled(Card)`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.base};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const ContactForm = styled(Card).attrs({ as: 'form' })`
  h2 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  label {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }

  input,
  textarea {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: ${({ theme }) => theme.borderRadius.base};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    transition: border-color ${({ theme }) => theme.transitions.base};
    background-color: ${({ theme }) => theme.colors.white};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover {
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Banner $image={bannerImage} $height="60vh" $mdHeight="60vh" style={{ minHeight: '400px', backgroundAttachment: 'fixed' }}>
        <BannerContent>
          <h1>Get In Touch</h1>
          <p>Let's discuss your next project</p>
        </BannerContent>
      </Banner>
      <PageSection>
        <Container>
        
        <ContactContent>
          <ContactInfo>
            <h2>Let's Connect</h2>
            <p>I'm always interested in hearing about new opportunities and exciting projects.</p>
            
            <ContactDetails>
              <ContactItem>
                <h3>Email</h3>
                <a href="mailto:rana1997ritesh@gmail.com">rana1997ritesh@gmail.com</a>
              </ContactItem>
              
              <ContactItem>
                <h3>Phone</h3>
                <a href="tel:+919871080053">+91 9871080053</a>
              </ContactItem>
              
              <ContactItem>
                <h3>Location</h3>
                <p>Delhi, India 110094</p>
              </ContactItem>
              
              <ContactItem>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/ritesh-rana-47a412121" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <h2>Send a Message</h2>
            
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </FormGroup>
            
            <SubmitButton type="submit" variant="primary">Send Message</SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </PageSection>
    </>
  );
};

export default Contact;
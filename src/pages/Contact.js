import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Card, Button, Banner, BannerContent } from '../components/common';
import { PageSection, PageTitle } from '../styles/PageStyles';
import { device } from '../styles/theme';
import bannerImage from '../assets/images/tai-bui-HzVBe-8frwc-unsplash.jpg';

// Import Icon Images
import emailIcon from '../assets/icons/email-64.png';
import phoneIcon from '../assets/icons/phone-.png';
import locationIcon from '../assets/icons/location-64.png';
import linkedinIcon from '../assets/icons/linkedin-240.png';

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
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  transition: transform ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
  }
`;

const ContactIconWrapper = styled.div`
  flex-shrink: 0;
  
  img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray[100]};
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const ContactItemContent = styled.div`
  flex: 1;
`;

const ContactTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const ContactValue = styled.div`
  a {
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.base};
    font-size: ${({ theme }) => theme.typography.fontSize.base};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    background-color: ${({ theme }) => theme.colors.gray[400]} !important;
    color: ${({ theme }) => theme.colors.gray[600]} !important;
    
    &:hover {
      transform: none;
      background-color: ${({ theme }) => theme.colors.gray[400]} !important;
    }
  }
`;


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Validation function to check if all required fields are filled
  const isFormValid = () => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.message.trim() !== '';
  };

  // Formspree Configuration from environment variable
  const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);


    try {
      if (!FORMSPREE_ID || FORMSPREE_ID === 'YOUR_FORM_ID') {
        toast.error('Contact form is not configured. Please contact me directly at rana1997ritesh@gmail.com', {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }

      const emailBody = `Hi Ritesh,

${formData.name} sent you a message through your portfolio website.

From: ${formData.name} (${formData.email})

Message:
${formData.message}

---
Reply directly to this email to respond to ${formData.name}.
      `.trim();

      const payload = {
        name: formData.name,
        email: formData.email,
        message: emailBody,
        _replyto: formData.email,
        _subject: `New message from ${formData.name}`,
      };

      const formspreeURL = `https://formspree.io/f/${FORMSPREE_ID}`;
      

      const response = await fetch(formspreeURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });


      if (response.ok) {
        toast.success('Thank you! Your message has been sent successfully. I will get back to you soon!', {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`Formspree error: ${response.status}`);
      }
      
    } catch (error) {
      toast.error('Sorry, there was an error sending your message. Please try again or contact me directly at rana1997ritesh@gmail.com', {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
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
                <ContactIconWrapper>
                  <img src={emailIcon} alt="Email" />
                </ContactIconWrapper>
                <ContactItemContent>
                  <ContactTitle>Email</ContactTitle>
                  <ContactValue>
                    <a href="mailto:rana1997ritesh@gmail.com">rana1997ritesh@gmail.com</a>
                  </ContactValue>
                </ContactItemContent>
              </ContactItem>
              
              <ContactItem>
                <ContactIconWrapper>
                  <img src={phoneIcon} alt="Phone" />
                </ContactIconWrapper>
                <ContactItemContent>
                  <ContactTitle>Phone</ContactTitle>
                  <ContactValue>
                    <a href="tel:+919871080053">+91 9871080053</a>
                  </ContactValue>
                </ContactItemContent>
              </ContactItem>
              
              <ContactItem>
                <ContactIconWrapper>
                  <img src={locationIcon} alt="Location" />
                </ContactIconWrapper>
                <ContactItemContent>
                  <ContactTitle>Location</ContactTitle>
                  <ContactValue>
                    <p>India</p>
                  </ContactValue>
                </ContactItemContent>
              </ContactItem>
              
              <ContactItem>
                <ContactIconWrapper>
                  <img src={linkedinIcon} alt="LinkedIn" />
                </ContactIconWrapper>
                <ContactItemContent>
                  <ContactTitle>LinkedIn</ContactTitle>
                  <ContactValue>
                    <a href="https://linkedin.com/in/ritesh-rana-47a412121" target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </ContactValue>
                </ContactItemContent>
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
            
            <SubmitButton type="submit" variant="primary" disabled={isLoading || !isFormValid()}>
              {isLoading ? 'Sending...' : (isFormValid() ? 'Send Message' : 'Fill All Fields')}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </PageSection>
    
    {/* Toast Container for notifications */}
    <ToastContainer
      position="top-right"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </>
  );
};

export default Contact;
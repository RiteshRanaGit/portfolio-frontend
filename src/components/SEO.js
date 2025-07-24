import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Ritesh Rana - Full Stack Developer | React Developer | Software Engineer",
  description = "Ritesh Rana is a skilled Full Stack Developer specializing in React, React Native, Next.js, Node.js, and cloud architecture. Hire a professional software developer for web development, mobile apps, and cloud solutions.",
  keywords = "Ritesh Rana, Full Stack Developer, React Developer, Software Developer, Web Developer, React Native Developer, Node.js Developer, JavaScript Developer, TypeScript Developer, Frontend Developer, Backend Developer, Cloud Architect, Software Engineer, Freelance Developer, Delhi Developer, India Developer, Mobile App Developer, MERN Stack Developer, Next.js Developer",
  image = "/og-image.png",
  url = "https://riteshrana.com",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ritesh Rana",
    "alternateName": "Ritesh",
    "url": url,
    "image": `https://riteshrana.com${image}`,
    "logo": "https://riteshrana.com/og-image.png",
    "sameAs": [
      "https://linkedin.com/in/ritesh-rana-47a412121",
      "https://github.com/RiteshRanaGit",
      "https://riteshrana.com"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Professional Full Stack Developer with expertise in React, React Native, Node.js, and cloud architecture",
    "knowsAbout": [
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "AWS",
      "Cloud Architecture",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "REST APIs"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "email": "rana1997ritesh@gmail.com",
    "telephone": "+919871080053",
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Full Stack Development Services",
        "description": "Professional web development, mobile app development, and cloud architecture services"
      }
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://riteshrana.com",
    "name": "Ritesh Rana Portfolio",
    "description": "Professional portfolio of Ritesh Rana - Full Stack Developer",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://riteshrana.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ritesh Rana" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ritesh Rana Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content="Ritesh Rana Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Ritesh Rana" />
      <meta name="theme-color" content="#007bff" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
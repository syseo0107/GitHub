import React, { useState } from 'react';
import AppAccordion from '../src/components/AppAccordion.jsx';
import { Box } from '@mui/material';

export default {
  title: 'Components/AppAccordion',
  component: AppAccordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Custom Accordion component with styled expand icons and smooth transitions',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto' }}>
        <Story />
      </Box>
    ),
  ],
};

// Default story with working state management
export const Default = () => {
  const [expanded, setExpanded] = useState('panel1');
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <Box>
      <AppAccordion
        expandedItem={expanded}
        handleChange={handleChange}
        accordionHeader="General Settings"
      >
        <Box sx={{ p: 2 }}>
          This is the content for general settings. You can add any content here.
        </Box>
      </AppAccordion>
      
      <AppAccordion
        expandedItem={expanded}
        handleChange={handleChange}
        accordionHeader="Advanced Options"
      >
        <Box sx={{ p: 2 }}>
          Advanced configuration options and settings go here.
        </Box>
      </AppAccordion>
      
      <AppAccordion
        expandedItem={expanded}
        handleChange={handleChange}
        accordionHeader="User Preferences"
      >
        <Box sx={{ p: 2 }}>
          User-specific preferences and customization options.
        </Box>
      </AppAccordion>
    </Box>
  );
};

// Multiple Accordions Example
export const MultipleAccordions = () => {
  const [expanded, setExpanded] = useState(false);
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  const items = [
    {
      header: 'What is UKO Dashboard?',
      content: 'UKO Dashboard is a modern, responsive admin dashboard template built with React and Material-UI.',
    },
    {
      header: 'How do I customize the theme?',
      content: 'You can customize the theme by modifying the theme configuration in the theme folder.',
    },
    {
      header: 'Is it mobile responsive?',
      content: 'Yes, UKO Dashboard is fully responsive and works seamlessly on all device sizes.',
    },
    {
      header: 'What features are included?',
      content: 'The dashboard includes charts, forms, tables, authentication pages, and many other components.',
    },
  ];
  
  return (
    <Box>
      {items.map((item, index) => (
        <AppAccordion
          key={index}
          expandedItem={expanded}
          handleChange={handleChange}
          accordionHeader={item.header}
        >
          <Box sx={{ p: 2, color: 'text.secondary' }}>
            {item.content}
          </Box>
        </AppAccordion>
      ))}
    </Box>
  );
};

// FAQ Style Example
export const FAQStyle = () => {
  const [expanded, setExpanded] = useState('faq1');
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 2 }}>
      <AppAccordion
        expandedItem={expanded}
        handleChange={handleChange}
        accordionHeader="How secure is my data?"
      >
        <Box sx={{ p: 2, color: 'text.secondary' }}>
          Your data is encrypted using industry-standard AES-256 encryption. We follow best practices
          for data security and comply with GDPR, CCPA, and other data protection regulations.
        </Box>
      </AppAccordion>
      
      <AppAccordion
        expandedItem={expanded}
        handleChange={handleChange}
        accordionHeader="Can I integrate with third-party services?"
      >
        <Box sx={{ p: 2, color: 'text.secondary' }}>
          Yes! Our dashboard supports integration with popular services like Stripe, PayPal,
          Google Analytics, and many more through our comprehensive API.
        </Box>
      </AppAccordion>
      
      <AppAccordion
        expandedItem={expanded}
        handleChange={handleChange}
        accordionHeader="What kind of support do you provide?"
      >
        <Box sx={{ p: 2, color: 'text.secondary' }}>
          We offer 24/7 email support, comprehensive documentation, video tutorials,
          and priority support for premium customers.
        </Box>
      </AppAccordion>
    </Box>
  );
};
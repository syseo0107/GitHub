import React from 'react';
import AppAccordion from '../src/components/AppAccordion.jsx';

export default {
  title: 'Components/AppAccordion',
  component: AppAccordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppAccordion component from UKO Dashboard',
      },
    },
  },
  argTypes: {
    // Add your prop controls here
    children: {
      control: 'text',
      description: 'Content to be rendered inside the component',
    },
  },
};

// Default story
export const Default = {
  args: {
    children: 'AppAccordion Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'AppAccordion Playground',
  },
};

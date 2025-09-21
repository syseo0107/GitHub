import React from 'react';
import FlexBetween from '../src/components/flexbox/FlexBetween.jsx';

export default {
  title: 'Components/FlexBetween',
  component: FlexBetween,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FlexBetween component from UKO Dashboard',
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
    children: 'FlexBetween Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'FlexBetween Playground',
  },
};

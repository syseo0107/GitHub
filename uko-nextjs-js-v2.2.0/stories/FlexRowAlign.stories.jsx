import React from 'react';
import FlexRowAlign from '../src/components/flexbox/FlexRowAlign.jsx';

export default {
  title: 'Components/FlexRowAlign',
  component: FlexRowAlign,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FlexRowAlign component from UKO Dashboard',
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
    children: 'FlexRowAlign Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'FlexRowAlign Playground',
  },
};

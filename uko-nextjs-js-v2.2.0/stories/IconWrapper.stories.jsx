import React from 'react';
import IconWrapper from '../src/components/IconWrapper.jsx';

export default {
  title: 'Components/IconWrapper',
  component: IconWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'IconWrapper component from UKO Dashboard',
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
    children: 'IconWrapper Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'IconWrapper Playground',
  },
};

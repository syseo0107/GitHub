import React from 'react';
import RTL from '../src/components/RTL.jsx';

export default {
  title: 'Components/RTL',
  component: RTL,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'RTL component from UKO Dashboard',
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
    children: 'RTL Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'RTL Playground',
  },
};

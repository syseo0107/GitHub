import React from 'react';
import ScrollBar from '../src/components/ScrollBar.jsx';

export default {
  title: 'Components/ScrollBar',
  component: ScrollBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ScrollBar component from UKO Dashboard',
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
    children: 'ScrollBar Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'ScrollBar Playground',
  },
};

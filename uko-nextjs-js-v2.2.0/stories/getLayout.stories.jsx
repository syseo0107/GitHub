import React from 'react';
import getLayout from '../src/components/getLayout.jsx';

export default {
  title: 'Components/getLayout',
  component: getLayout,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'getLayout component from UKO Dashboard',
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
    children: 'getLayout Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'getLayout Playground',
  },
};

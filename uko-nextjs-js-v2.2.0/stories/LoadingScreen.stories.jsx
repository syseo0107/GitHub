import React from 'react';
import LoadingScreen from '../src/components/LoadingScreen.jsx';

export default {
  title: 'Components/LoadingScreen',
  component: LoadingScreen,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'LoadingScreen component from UKO Dashboard',
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
    children: 'LoadingScreen Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'LoadingScreen Playground',
  },
};

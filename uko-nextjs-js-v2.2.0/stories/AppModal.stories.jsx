import React from 'react';
import AppModal from '../src/components/AppModal.jsx';

export default {
  title: 'Components/AppModal',
  component: AppModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppModal component from UKO Dashboard',
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
    children: 'AppModal Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'AppModal Playground',
  },
};

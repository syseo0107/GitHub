import React from 'react';
import AppAvatar from '../src/components/avatars/AppAvatar.jsx';

export default {
  title: 'Components/AppAvatar',
  component: AppAvatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppAvatar component from UKO Dashboard',
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
    children: 'AppAvatar Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'AppAvatar Playground',
  },
};

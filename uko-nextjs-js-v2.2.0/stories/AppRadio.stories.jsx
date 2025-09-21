import React from 'react';
import AppRadio from '../src/components/AppRadio.jsx';

export default {
  title: 'Components/AppRadio',
  component: AppRadio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppRadio component from UKO Dashboard',
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
    children: 'AppRadio Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'AppRadio Playground',
  },
};

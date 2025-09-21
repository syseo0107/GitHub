import React from 'react';
import AppTextField from '../src/components/input-fields/AppTextField.jsx';

export default {
  title: 'Components/AppTextField',
  component: AppTextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppTextField component from UKO Dashboard',
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
    children: 'AppTextField Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'AppTextField Playground',
  },
};

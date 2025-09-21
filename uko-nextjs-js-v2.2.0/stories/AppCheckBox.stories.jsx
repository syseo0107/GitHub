import React from 'react';
import AppCheckBox from '../src/components/AppCheckBox.jsx';

export default {
  title: 'Components/AppCheckBox',
  component: AppCheckBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppCheckBox component from UKO Dashboard',
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
    children: 'AppCheckBox Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'AppCheckBox Playground',
  },
};

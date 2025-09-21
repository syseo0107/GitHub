import React from 'react';
import AppSelect from '../src/components/AppSelect.jsx';

export default {
  title: 'Components/AppSelect',
  component: AppSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppSelect component from UKO Dashboard',
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
    children: 'AppSelect Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'AppSelect Playground',
  },
};

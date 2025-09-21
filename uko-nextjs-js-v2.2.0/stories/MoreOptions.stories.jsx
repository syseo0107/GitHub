import React from 'react';
import MoreOptions from '../src/components/MoreOptions.jsx';

export default {
  title: 'Components/MoreOptions',
  component: MoreOptions,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MoreOptions component from UKO Dashboard',
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
    children: 'MoreOptions Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'MoreOptions Playground',
  },
};

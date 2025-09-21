import React from 'react';
import RoundCheckBox from '../src/components/RoundCheckBox.jsx';

export default {
  title: 'Components/RoundCheckBox',
  component: RoundCheckBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'RoundCheckBox component from UKO Dashboard',
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
    children: 'RoundCheckBox Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'RoundCheckBox Playground',
  },
};

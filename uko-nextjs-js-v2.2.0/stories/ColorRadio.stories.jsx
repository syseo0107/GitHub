import React from 'react';
import ColorRadio from '../src/components/ColorRadio.jsx';

export default {
  title: 'Components/ColorRadio',
  component: ColorRadio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ColorRadio component from UKO Dashboard',
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
    children: 'ColorRadio Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'ColorRadio Playground',
  },
};

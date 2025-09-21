import React from 'react';
import FlexBox from '../src/components/flexbox/FlexBox.jsx';

export default {
  title: 'Components/FlexBox',
  component: FlexBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FlexBox component from UKO Dashboard',
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
    children: 'FlexBox Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'FlexBox Playground',
  },
};

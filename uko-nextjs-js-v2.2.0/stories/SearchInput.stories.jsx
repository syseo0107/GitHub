import React from 'react';
import SearchInput from '../src/components/input-fields/SearchInput.jsx';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SearchInput component from UKO Dashboard',
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
    children: 'SearchInput Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'SearchInput Playground',
  },
};

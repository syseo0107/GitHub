import React from 'react';
import AppPagination from '../src/components/AppPagination.jsx';

export default {
  title: 'Components/AppPagination',
  component: AppPagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppPagination component from UKO Dashboard',
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
    children: 'AppPagination Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'AppPagination Playground',
  },
};

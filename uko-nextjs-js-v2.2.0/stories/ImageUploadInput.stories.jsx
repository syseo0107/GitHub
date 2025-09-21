import React from 'react';
import ImageUploadInput from '../src/components/input-fields/ImageUploadInput.jsx';

export default {
  title: 'Components/ImageUploadInput',
  component: ImageUploadInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ImageUploadInput component from UKO Dashboard',
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
    children: 'ImageUploadInput Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'ImageUploadInput Playground',
  },
};

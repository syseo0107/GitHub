import React from 'react';
import AvatarBadge from '../src/components/avatars/AvatarBadge.jsx';

export default {
  title: 'Components/AvatarBadge',
  component: AvatarBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AvatarBadge component from UKO Dashboard',
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
    children: 'AvatarBadge Content',
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    children: 'AvatarBadge Playground',
  },
};

import React from 'react';
import { Button, Stack } from '@mui/material';

export default {
  title: 'Components/Basic/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Material-UI Button component with UKO theme styling',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
      description: 'Button variant',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Button color',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
  },
};

// Default story
export const Default = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
  },
};

// All Variants
export const Variants = () => (
  <Stack spacing={2} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="contained">Contained</Button>
  </Stack>
);

// All Colors
export const Colors = () => (
  <Stack spacing={2}>
    <Stack spacing={2} direction="row">
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="error">Error</Button>
    </Stack>
    <Stack spacing={2} direction="row">
      <Button variant="contained" color="warning">Warning</Button>
      <Button variant="contained" color="info">Info</Button>
      <Button variant="contained" color="success">Success</Button>
    </Stack>
  </Stack>
);

// All Sizes
export const Sizes = () => (
  <Stack spacing={2} direction="row" alignItems="center">
    <Button variant="contained" size="small">Small</Button>
    <Button variant="contained" size="medium">Medium</Button>
    <Button variant="contained" size="large">Large</Button>
  </Stack>
);

// Outlined Variants
export const OutlinedColors = () => (
  <Stack spacing={2}>
    <Stack spacing={2} direction="row">
      <Button variant="outlined" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" color="error">Error</Button>
    </Stack>
    <Stack spacing={2} direction="row">
      <Button variant="outlined" color="warning">Warning</Button>
      <Button variant="outlined" color="info">Info</Button>
      <Button variant="outlined" color="success">Success</Button>
    </Stack>
  </Stack>
);

// Text Variants
export const TextColors = () => (
  <Stack spacing={2}>
    <Stack spacing={2} direction="row">
      <Button variant="text" color="primary">Primary</Button>
      <Button variant="text" color="secondary">Secondary</Button>
      <Button variant="text" color="error">Error</Button>
    </Stack>
    <Stack spacing={2} direction="row">
      <Button variant="text" color="warning">Warning</Button>
      <Button variant="text" color="info">Info</Button>
      <Button variant="text" color="success">Success</Button>
    </Stack>
  </Stack>
);

// Disabled States
export const DisabledStates = () => (
  <Stack spacing={2}>
    <Stack spacing={2} direction="row">
      <Button variant="text" disabled>Text Disabled</Button>
      <Button variant="outlined" disabled>Outlined Disabled</Button>
      <Button variant="contained" disabled>Contained Disabled</Button>
    </Stack>
  </Stack>
);

// Full Width
export const FullWidth = () => (
  <Stack spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
    <Button variant="contained" fullWidth>Full Width Button</Button>
    <Button variant="outlined" fullWidth>Full Width Outlined</Button>
    <Button variant="text" fullWidth>Full Width Text</Button>
  </Stack>
);
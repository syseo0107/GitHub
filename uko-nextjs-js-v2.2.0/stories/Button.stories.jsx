import React from 'react';
import { Button } from '@mui/material';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="text">Text</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="contained">Contained</Button>
  </div>
);

export const AllColors = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="contained" color="primary">Primary</Button>
    <Button variant="contained" color="secondary">Secondary</Button>
    <Button variant="contained" color="error">Error</Button>
    <Button variant="contained" color="warning">Warning</Button>
    <Button variant="contained" color="info">Info</Button>
    <Button variant="contained" color="success">Success</Button>
  </div>
);

export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Button variant="contained" size="small">Small</Button>
    <Button variant="contained" size="medium">Medium</Button>
    <Button variant="contained" size="large">Large</Button>
  </div>
);

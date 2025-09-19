import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import AppSelect from '../components/AppSelect';

export default {
  title: 'UKO/Forms/AppSelect',
  component: AppSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'standard'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Select Option</InputLabel>
        <AppSelect
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Select Option"
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </AppSelect>
      </FormControl>
    );
  },
};

export const WithPreselectedValue = {
  render: () => {
    const [value, setValue] = useState('option2');
    
    return (
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Status</InputLabel>
        <AppSelect
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Status"
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
        </AppSelect>
      </FormControl>
    );
  },
};

export const Multiple = {
  render: () => {
    const [values, setValues] = useState(['option1', 'option3']);
    
    return (
      <FormControl sx={{ minWidth: 250 }}>
        <InputLabel>Multiple Select</InputLabel>
        <AppSelect
          multiple
          value={values}
          onChange={(e) => setValues(e.target.value)}
          label="Multiple Select"
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
          <MenuItem value="option4">Option 4</MenuItem>
        </AppSelect>
      </FormControl>
    );
  },
};

export const Disabled = {
  render: () => (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>Disabled Select</InputLabel>
      <AppSelect
        disabled
        value="option1"
        label="Disabled Select"
      >
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
      </AppSelect>
    </FormControl>
  ),
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Small</InputLabel>
        <AppSelect
          size="small"
          value="option1"
          label="Small"
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </AppSelect>
      </FormControl>
      
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Medium</InputLabel>
        <AppSelect
          size="medium"
          value="option1"
          label="Medium"
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </AppSelect>
      </FormControl>
    </div>
  ),
};
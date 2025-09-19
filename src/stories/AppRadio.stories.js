import { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material';
import AppRadio from '../components/AppRadio';

export default {
  title: 'UKO/Forms/AppRadio',
  component: AppRadio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
    },
  },
};

export const Default = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <AppRadio
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Checked = {
  args: {
    checked: true,
  },
  render: (args) => <AppRadio {...args} />,
};

export const Disabled = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <AppRadio disabled />
      <AppRadio disabled checked />
    </div>
  ),
};

export const RadioGroupExample = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <FormControl>
        <FormLabel>Choose an option</FormLabel>
        <RadioGroup
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <FormControlLabel 
            value="option1" 
            control={<AppRadio />} 
            label="Option 1" 
          />
          <FormControlLabel 
            value="option2" 
            control={<AppRadio />} 
            label="Option 2" 
          />
          <FormControlLabel 
            value="option3" 
            control={<AppRadio />} 
            label="Option 3" 
          />
          <FormControlLabel 
            value="disabled" 
            control={<AppRadio />} 
            label="Disabled option" 
            disabled 
          />
        </RadioGroup>
      </FormControl>
    );
  },
};

export const HorizontalRadioGroup = {
  render: () => {
    const [value, setValue] = useState('yes');

    return (
      <FormControl>
        <FormLabel>Do you agree?</FormLabel>
        <RadioGroup
          row
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <FormControlLabel 
            value="yes" 
            control={<AppRadio />} 
            label="Yes" 
          />
          <FormControlLabel 
            value="no" 
            control={<AppRadio />} 
            label="No" 
          />
          <FormControlLabel 
            value="maybe" 
            control={<AppRadio />} 
            label="Maybe" 
          />
        </RadioGroup>
      </FormControl>
    );
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <FormControlLabel
        control={<AppRadio size="small" defaultChecked />}
        label="Small"
      />
      <FormControlLabel
        control={<AppRadio size="medium" defaultChecked />}
        label="Medium (default)"
      />
    </div>
  ),
};

export const Colors = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <FormControlLabel
        control={<AppRadio color="default" defaultChecked />}
        label="Default"
      />
      <FormControlLabel
        control={<AppRadio color="primary" defaultChecked />}
        label="Primary"
      />
      <FormControlLabel
        control={<AppRadio color="secondary" defaultChecked />}
        label="Secondary"
      />
    </div>
  ),
};
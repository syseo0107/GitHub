import { useState } from 'react';
import { FormGroup, FormControlLabel } from '@mui/material';
import AppCheckBox from '../components/AppCheckBox';

export default {
  title: 'UKO/Forms/AppCheckBox',
  component: AppCheckBox,
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
      <AppCheckBox
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
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <AppCheckBox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
  },
  render: (args) => <AppCheckBox {...args} />,
};

export const DisabledChecked = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => <AppCheckBox {...args} />,
};

export const WithLabels = {
  render: () => {
    const [values, setValues] = useState({
      option1: false,
      option2: true,
      option3: false,
    });

    const handleChange = (name) => (event) => {
      setValues({ ...values, [name]: event.target.checked });
    };

    return (
      <FormGroup>
        <FormControlLabel
          control={
            <AppCheckBox
              checked={values.option1}
              onChange={handleChange('option1')}
            />
          }
          label="Option 1"
        />
        <FormControlLabel
          control={
            <AppCheckBox
              checked={values.option2}
              onChange={handleChange('option2')}
            />
          }
          label="Option 2 (Initially checked)"
        />
        <FormControlLabel
          control={
            <AppCheckBox
              checked={values.option3}
              onChange={handleChange('option3')}
            />
          }
          label="Option 3"
        />
        <FormControlLabel
          control={<AppCheckBox disabled />}
          label="Disabled option"
        />
      </FormGroup>
    );
  },
};

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <FormControlLabel
        control={<AppCheckBox size="small" defaultChecked />}
        label="Small"
      />
      <FormControlLabel
        control={<AppCheckBox size="medium" defaultChecked />}
        label="Medium (default)"
      />
    </div>
  ),
};
import AppCheckBox from '../src/components/AppCheckBox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Form/AppCheckBox',
  component: AppCheckBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'UKO 커스텀 체크박스 컴포넌트입니다. Material-UI Checkbox를 확장하여 UKO 디자인 시스템에 맞게 스타일링되었습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: '체크박스의 체크 상태',
    },
    onChange: {
      action: 'changed',
      description: '체크박스 상태 변경 이벤트 핸들러',
    },
    disabled: {
      control: 'boolean',
      description: '체크박스 비활성화 상태',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '체크박스 크기',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'default'],
      description: '체크박스 색상 테마',
    },
  },
};

export const Default = {
  args: {
    checked: false,
    onChange: action('onChange'),
  },
};

export const Checked = {
  args: {
    checked: true,
    onChange: action('onChange'),
  },
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
    onChange: action('onChange'),
  },
};

export const DisabledChecked = {
  args: {
    checked: true,
    disabled: true,
    onChange: action('onChange'),
  },
};

export const Small = {
  args: {
    checked: false,
    size: 'small',
    onChange: action('onChange'),
  },
};

export const Large = {
  args: {
    checked: false,
    size: 'large',
    onChange: action('onChange'),
  },
};

export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <AppCheckBox checked={false} onChange={action('unchecked')} />
        <span>Unchecked</span>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <AppCheckBox checked={true} onChange={action('checked')} />
        <span>Checked</span>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <AppCheckBox checked={false} disabled onChange={action('disabled unchecked')} />
        <span>Disabled Unchecked</span>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <AppCheckBox checked={true} disabled onChange={action('disabled checked')} />
        <span>Disabled Checked</span>
      </div>
    </div>
  ),
};
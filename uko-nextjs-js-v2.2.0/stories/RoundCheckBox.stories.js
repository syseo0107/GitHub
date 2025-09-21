import RoundCheckBox from '../src/components/RoundCheckBox.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Form/RoundCheckBox',
  component: RoundCheckBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'RoundCheckBox 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Checkbox": {
        "control": "text",
        "description": "Checkbox 속성"
    },
    "return <Checkbox disableRipple checkedIcon": {
        "control": "text",
        "description": "return <Checkbox disableRipple checkedIcon 속성"
    },
    "<OvalIcon fontSize": {
        "control": "text",
        "description": "<OvalIcon fontSize 속성"
    }
},
};

export const Default = {
  args: {
    
    
    
  },
};







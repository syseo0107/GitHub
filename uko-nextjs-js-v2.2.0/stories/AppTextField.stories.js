import AppTextField from '../src/components/input-fields/AppTextField.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Others/AppTextField',
  component: AppTextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppTextField 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "styled": {
        "control": "text",
        "description": "styled 속성"
    },
    "TextField": {
        "control": "text",
        "description": "TextField 속성"
    },
    "theme": {
        "control": "text",
        "description": "theme 속성"
    },
    "\"& .MuiOutlinedInput-input\"": {
        "control": "text",
        "description": "\"& .MuiOutlinedInput-input\" 속성"
    },
    "color": {
        "control": {
            "type": "select"
        },
        "options": [
            "primary",
            "secondary",
            "default",
            "error",
            "warning",
            "info",
            "success"
        ],
        "description": "색상 테마"
    },
    "borderRadius": {
        "control": "text",
        "description": "borderRadius 속성"
    },
    "borderColor": {
        "control": "text",
        "description": "borderColor 속성"
    },
    "fontWeight": {
        "control": "text",
        "description": "fontWeight 속성"
    }
},
};

export const Default = {
  args: {
    
    
    
  },
};







import SearchInput from '../src/components/input-fields/SearchInput.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Others/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SearchInput 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "InputBase": {
        "control": "text",
        "description": "InputBase 속성"
    },
    "styled": {
        "control": "text",
        "description": "styled 속성"
    },
    "theme": {
        "control": "text",
        "description": "theme 속성"
    },
    "bordered": {
        "control": "text",
        "description": "bordered 속성"
    },
    "height": {
        "control": "text",
        "description": "height 속성"
    },
    "fontSize": {
        "control": "text",
        "description": "fontSize 속성"
    },
    "width": {
        "control": "text",
        "description": "width 속성"
    },
    "maxWidth": {
        "control": "text",
        "description": "maxWidth 속성"
    },
    "fontWeight": {
        "control": "text",
        "description": "fontWeight 속성"
    },
    "padding": {
        "control": "text",
        "description": "padding 속성"
    },
    "borderRadius": {
        "control": "text",
        "description": "borderRadius 속성"
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
    "backgroundColor": {
        "control": "text",
        "description": "backgroundColor 속성"
    },
    "border": {
        "control": "text",
        "description": "border 속성"
    },
    "const \n    icon_style": {
        "control": "text",
        "description": "const \n    icon_style 속성"
    },
    "bordered ? 1": {
        "control": "text",
        "description": "bordered ? 1 속성"
    },
    "<SearchIcon sx": {
        "control": "text",
        "description": "<SearchIcon sx 속성"
    },
    "marginRight": {
        "control": "text",
        "description": "marginRight 속성"
    }
},
};

export const Default = {
  args: {
    
    
    
  },
};







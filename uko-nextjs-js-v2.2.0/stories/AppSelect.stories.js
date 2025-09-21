import AppSelect from '../src/components/AppSelect.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Form/AppSelect',
  component: AppSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppSelect 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "styled": {
        "control": "text",
        "description": "styled 속성"
    },
    "theme": {
        "control": "text",
        "description": "theme 속성"
    },
    "border": {
        "control": "text",
        "description": "border 속성"
    },
    "outline": {
        "control": "text",
        "description": "outline 속성"
    },
    "fontSize": {
        "control": "text",
        "description": "fontSize 속성"
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
    "fontFamily": {
        "control": "text",
        "description": "fontFamily 속성"
    },
    "backgroundColor": {
        "control": "text",
        "description": "backgroundColor 속성"
    },
    "children": {
        "control": "text",
        "description": "자식 컴포넌트 또는 텍스트"
    }
},
};

export const Default = {
  args: {
    children: 'AppSelect Content',
    
    
  },
};







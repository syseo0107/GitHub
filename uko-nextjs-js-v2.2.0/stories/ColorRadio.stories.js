import ColorRadio from '../src/components/ColorRadio.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Form/ColorRadio',
  component: ColorRadio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ColorRadio 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Box": {
        "control": "text",
        "description": "Box 속성"
    },
    "Radio": {
        "control": "text",
        "description": "Radio 속성"
    },
    "styled": {
        "control": "text",
        "description": "styled 속성"
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
    "theme": {
        "control": "text",
        "description": "theme 속성"
    },
    "width": {
        "control": "text",
        "description": "width 속성"
    },
    "height": {
        "control": "text",
        "description": "height 속성"
    },
    "padding": {
        "control": "text",
        "description": "padding 속성"
    },
    "borderRadius": {
        "control": "text",
        "description": "borderRadius 속성"
    },
    "border": {
        "control": "text",
        "description": "border 속성"
    },
    "backgroundColor": {
        "control": "text",
        "description": "backgroundColor 속성"
    },
    "<OuterBox>\n        <InnerBox color": {
        "control": "text",
        "description": "<OuterBox>\n        <InnerBox color 속성"
    },
    "<OuterBox color": {
        "control": "text",
        "description": "<OuterBox color 속성"
    },
    "props.icon_color": {
        "control": "text",
        "description": "props.icon_color 속성"
    }
},
};

export const Default = {
  args: {
    
    
    
  },
};







import Typography from '../src/components/Typography.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Data Display/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Typography 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "1": {
        "control": "text",
        "description": "1 속성"
    },
    "13": {
        "control": "text",
        "description": "13 속성"
    },
    "14": {
        "control": "text",
        "description": "14 속성"
    },
    "16": {
        "control": "text",
        "description": "16 속성"
    },
    "18": {
        "control": "text",
        "description": "18 속성"
    },
    "24": {
        "control": "text",
        "description": "24 속성"
    },
    "28": {
        "control": "text",
        "description": "28 속성"
    },
    "500": {
        "control": "text",
        "description": "500 속성"
    },
    "600": {
        "control": "text",
        "description": "600 속성"
    },
    "Box": {
        "control": "text",
        "description": "Box 속성"
    },
    "styled": {
        "control": "text",
        "description": "styled 속성"
    },
    "ellipsis": {
        "control": "text",
        "description": "ellipsis 속성"
    },
    "whiteSpace": {
        "control": "text",
        "description": "whiteSpace 속성"
    },
    "textOverflow": {
        "control": "text",
        "description": "textOverflow 속성"
    },
    "const \n    ellipsis": {
        "control": "text",
        "description": "const \n    ellipsis 속성"
    },
    "children": {
        "control": "text",
        "description": "자식 컴포넌트 또는 텍스트"
    },
    "className": {
        "control": "text",
        "description": "className 속성"
    },
    "ellipsis ? 1": {
        "control": "text",
        "description": "ellipsis ? 1 속성"
    },
    "clsx(\n    [className || \"\"]": {
        "control": "text",
        "description": "clsx(\n    [className || \"\"] 속성"
    },
    "1.6": {
        "control": "text",
        "description": "1.6 속성"
    },
    "1.65": {
        "control": "text",
        "description": "1.65 속성"
    }
},
};

export const Default = {
  args: {
    children: 'Typography Content',
    
    
  },
};







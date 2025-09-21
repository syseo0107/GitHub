import AppModal from '../src/components/AppModal.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Feedback/AppModal',
  component: AppModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppModal 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Box": {
        "control": "text",
        "description": "Box 속성"
    },
    "Modal": {
        "control": "text",
        "description": "Modal 속성"
    },
    "styled": {
        "control": "text",
        "description": "styled 속성"
    },
    "lightTheme": {
        "control": "text",
        "description": "lightTheme 속성"
    },
    "theme": {
        "control": "text",
        "description": "theme 속성"
    },
    "top": {
        "control": "text",
        "description": "top 속성"
    },
    "left": {
        "control": "text",
        "description": "left 속성"
    },
    "padding": {
        "control": "text",
        "description": "padding 속성"
    },
    "maxWidth": {
        "control": "text",
        "description": "maxWidth 속성"
    },
    "width": {
        "control": "text",
        "description": "width 속성"
    },
    "borderRadius": {
        "control": "text",
        "description": "borderRadius 속성"
    },
    "position": {
        "control": "text",
        "description": "position 속성"
    },
    "transform": {
        "control": "text",
        "description": "transform 속성"
    },
    "-50%)\"": {
        "control": "text",
        "description": "-50%)\" 속성"
    },
    "backgroundColor": {
        "control": "text",
        "description": "backgroundColor 속성"
    },
    "children": {
        "control": "text",
        "description": "자식 컴포넌트 또는 텍스트"
    },
    "open": {
        "control": "boolean",
        "description": "open 상태"
    },
    "handleClose": {
        "control": "text",
        "description": "handleClose 속성"
    },
    "return <Modal open": {
        "control": "boolean",
        "description": "return <Modal open 상태"
    }
},
};

export const Default = {
  args: {
    children: 'AppModal Content',
    
    
  },
};







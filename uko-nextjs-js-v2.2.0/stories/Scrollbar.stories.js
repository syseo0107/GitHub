import Scrollbar from '../src/components/ScrollBar.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Others/Scrollbar',
  component: Scrollbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Scrollbar 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "alpha": {
        "control": "text",
        "description": "alpha 속성"
    },
    "styled": {
        "control": "text",
        "description": "styled 속성"
    },
    "theme": {
        "control": "text",
        "description": "theme 속성"
    },
    "maxHeight": {
        "control": "text",
        "description": "maxHeight 속성"
    },
    "\"& .simplebar-scrollbar\"": {
        "control": "text",
        "description": "\"& .simplebar-scrollbar\" 속성"
    },
    "0.6)": {
        "control": "text",
        "description": "0.6) 속성"
    },
    "opacity": {
        "control": "text",
        "description": "opacity 속성"
    },
    "width": {
        "control": "text",
        "description": "width 속성"
    },
    "height": {
        "control": "text",
        "description": "height 속성"
    },
    "zIndex": {
        "control": "text",
        "description": "zIndex 속성"
    },
    "children": {
        "control": "text",
        "description": "자식 컴포넌트 또는 텍스트"
    },
    "style": {
        "control": "text",
        "description": "style 속성"
    },
    "sx": {
        "control": "text",
        "description": "sx 속성"
    },
    "return <StyledScrollBar style": {
        "control": "text",
        "description": "return <StyledScrollBar style 속성"
    }
},
};

export const Default = {
  args: {
    children: 'Scrollbar Content',
    
    
  },
};







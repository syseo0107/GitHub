import IconWrapper from '../src/components/IconWrapper.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Utils/IconWrapper',
  component: IconWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'IconWrapper 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Box": {
        "control": "text",
        "description": "Box 속성"
    },
    "styled": {
        "control": "text",
        "description": "styled 속성"
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
    "display": {
        "control": "text",
        "description": "display 속성"
    },
    "borderRadius": {
        "control": "text",
        "description": "borderRadius 속성"
    },
    "alignItems": {
        "control": "text",
        "description": "alignItems 속성"
    },
    "marginRight": {
        "control": "text",
        "description": "marginRight 속성"
    },
    "justifyContent": {
        "control": "text",
        "description": "justifyContent 속성"
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
    children: 'IconWrapper Content',
    
    
  },
};







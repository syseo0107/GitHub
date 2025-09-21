import AppAvatar from '../src/components/avatars/AppAvatar.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Data Display/AppAvatar',
  component: AppAvatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppAvatar 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Avatar": {
        "control": "text",
        "description": "Avatar 속성"
    },
    "styled": {
        "control": "text",
        "description": "styled 속성"
    },
    "theme": {
        "control": "text",
        "description": "theme 속성"
    },
    "backgroundColor": {
        "control": "text",
        "description": "backgroundColor 속성"
    },
    "borderColor": {
        "control": "text",
        "description": "borderColor 속성"
    },
    "borderWidth": {
        "control": "text",
        "description": "borderWidth 속성"
    }
},
};

export const Default = {
  args: {
    
    
    
  },
};







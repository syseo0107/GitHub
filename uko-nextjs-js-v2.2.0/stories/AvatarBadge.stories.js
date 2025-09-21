import AvatarBadge from '../src/components/avatars/AvatarBadge.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Data Display/AvatarBadge',
  component: AvatarBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AvatarBadge 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Badge": {
        "control": "text",
        "description": "Badge 속성"
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
    "\"& .MuiBadge-badge\"": {
        "control": "text",
        "description": "\"& .MuiBadge-badge\" 속성"
    },
    "borderRadius": {
        "control": "text",
        "description": "borderRadius 속성"
    },
    "backgroundColor": {
        "control": "text",
        "description": "backgroundColor 속성"
    },
    "boxShadow": {
        "control": "text",
        "description": "boxShadow 속성"
    },
    "children": {
        "control": "text",
        "description": "자식 컴포넌트 또는 텍스트"
    },
    "return <StyledBadge width": {
        "control": "text",
        "description": "return <StyledBadge width 속성"
    },
    "vertical": {
        "control": "text",
        "description": "vertical 속성"
    },
    "horizontal": {
        "control": "text",
        "description": "horizontal 속성"
    }
},
};

export const Default = {
  args: {
    children: 'AvatarBadge Content',
    
    
  },
};







import MoreOptions from '../src/components/MoreOptions.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Utils/MoreOptions',
  component: MoreOptions,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MoreOptions 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "500": {
        "control": "text",
        "description": "500 속성"
    },
    "Menu": {
        "control": "text",
        "description": "Menu 속성"
    },
    "MenuItem": {
        "control": "text",
        "description": "MenuItem 속성"
    },
    "Small": {
        "control": "text",
        "description": "Small 속성"
    },
    "anchorEl": {
        "control": "text",
        "description": "anchorEl 속성"
    },
    "handleMoreClose": {
        "control": "text",
        "description": "handleMoreClose 속성"
    },
    "return <Menu anchorEl": {
        "control": "text",
        "description": "return <Menu anchorEl 속성"
    },
    "Boolean(anchorEl)": {
        "control": "text",
        "description": "Boolean(anchorEl) 속성"
    },
    "\"&": {
        "control": "text",
        "description": "\"& 속성"
    },
    "fontSize": {
        "control": "text",
        "description": "fontSize 속성"
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







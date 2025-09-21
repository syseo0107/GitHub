import FlexBetween from '../src/components/flexbox/FlexBetween.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Layout/FlexBetween',
  component: FlexBetween,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FlexBetween 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Box": {
        "control": "text",
        "description": "Box 속성"
    },
    "children": {
        "control": "text",
        "description": "자식 컴포넌트 또는 텍스트"
    }
},
};

export const Default = {
  args: {
    children: 'FlexBetween Content',
    
    
  },
};







import FlexRowAlign from '../src/components/flexbox/FlexRowAlign.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Layout/FlexRowAlign',
  component: FlexRowAlign,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FlexRowAlign 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
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
    children: 'FlexRowAlign Content',
    
    
  },
};







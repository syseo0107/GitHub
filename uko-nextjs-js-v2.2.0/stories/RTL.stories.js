import RTL from '../src/components/RTL.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Others/RTL',
  component: RTL,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'RTL 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "useEffect": {
        "control": "text",
        "description": "useEffect 속성"
    },
    "CacheProvider": {
        "control": "text",
        "description": "CacheProvider 속성"
    },
    "useTheme": {
        "control": "text",
        "description": "useTheme 속성"
    },
    "children": {
        "control": "text",
        "description": "자식 컴포넌트 또는 텍스트"
    },
    "const theme": {
        "control": "text",
        "description": "const theme 속성"
    },
    "key": {
        "control": "text",
        "description": "key 속성"
    },
    "stylisPlugins": {
        "control": "text",
        "description": "stylisPlugins 속성"
    },
    "cacheRtl": {
        "control": "text",
        "description": "cacheRtl 속성"
    }
},
};

export const Default = {
  args: {
    children: 'RTL Content',
    
    
  },
};







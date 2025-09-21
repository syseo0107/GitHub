import LoadingScreen from '../src/components/LoadingScreen.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Feedback/LoadingScreen',
  component: LoadingScreen,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'LoadingScreen 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Box": {
        "control": "text",
        "description": "Box 속성"
    },
    "useEffect": {
        "control": "text",
        "description": "useEffect 속성"
    },
    "NProgress.configure(\n    showSpinner": {
        "control": "boolean",
        "description": "NProgress.configure(\n    showSpinner 상태"
    },
    "NProgress.start();\n    return ()": {
        "control": "text",
        "description": "NProgress.start();\n    return () 속성"
    }
},
};

export const Default = {
  args: {
    
    
    
  },
};







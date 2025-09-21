import AppRadio from '../src/components/AppRadio.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Form/AppRadio',
  component: AppRadio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppRadio 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Radio": {
        "control": "text",
        "description": "Radio 속성"
    },
    "return <Radio checkedIcon": {
        "control": "text",
        "description": "return <Radio checkedIcon 속성"
    },
    "<CircleOut />": {
        "control": "text",
        "description": "<CircleOut /> 속성"
    },
    "return <svg width": {
        "control": "text",
        "description": "return <svg width 속성"
    }
},
};

export const Default = {
  args: {
    
    
    
  },
};







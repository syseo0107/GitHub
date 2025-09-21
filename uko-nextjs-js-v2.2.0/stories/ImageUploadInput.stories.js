import ImageUploadInput from '../src/components/input-fields/ImageUploadInput.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Others/ImageUploadInput',
  component: ImageUploadInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ImageUploadInput 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "IconButton": {
        "control": "text",
        "description": "IconButton 속성"
    },
    "Small": {
        "control": "text",
        "description": "Small 속성"
    },
    "handleOnChange": {
        "control": "text",
        "description": "handleOnChange 속성"
    },
    "return <label htmlFor": {
        "control": "text",
        "description": "return <label htmlFor 속성"
    },
    "padding": {
        "control": "text",
        "description": "padding 속성"
    },
    "display": {
        "control": "text",
        "description": "display 속성"
    },
    "0.5": {
        "control": "text",
        "description": "0.5 속성"
    },
    "minHeight": {
        "control": "text",
        "description": "minHeight 속성"
    },
    "borderRadius": {
        "control": "text",
        "description": "borderRadius 속성"
    },
    "backgroundColor": {
        "control": "text",
        "description": "backgroundColor 속성"
    },
    "fontSize": {
        "control": "text",
        "description": "fontSize 속성"
    },
    "color": {
        "control": {
            "type": "select"
        },
        "options": [
            "primary",
            "secondary",
            "default",
            "error",
            "warning",
            "info",
            "success"
        ],
        "description": "색상 테마"
    }
},
};

export const Default = {
  args: {
    
    
    
  },
};







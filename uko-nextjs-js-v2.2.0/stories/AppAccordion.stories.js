import AppAccordion from '../src/components/AppAccordion.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Others/AppAccordion',
  component: AppAccordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppAccordion 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Accordion as MuiAccordion": {
        "control": "text",
        "description": "Accordion as MuiAccordion 속성"
    },
    "AccordionDetails as MuiAccordionDetails": {
        "control": "text",
        "description": "AccordionDetails as MuiAccordionDetails 속성"
    },
    "AccordionSummary as MuiAccordionSummary": {
        "control": "text",
        "description": "AccordionSummary as MuiAccordionSummary 속성"
    },
    "styled": {
        "control": "text",
        "description": "styled 속성"
    },
    "H6": {
        "control": "text",
        "description": "H6 속성"
    },
    "theme": {
        "control": "text",
        "description": "theme 속성"
    },
    "\"&": {
        "control": "text",
        "description": "\"& 속성"
    },
    "display": {
        "control": "text",
        "description": "display 속성"
    },
    "<ArrowForwardIosSharpIcon sx": {
        "control": "text",
        "description": "<ArrowForwardIosSharpIcon sx 속성"
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
    },
    "padding": {
        "control": "text",
        "description": "padding 속성"
    },
    "\"& .Mui-expanded\"": {
        "control": "text",
        "description": "\"& .Mui-expanded\" 속성"
    },
    "transform": {
        "control": "text",
        "description": "transform 속성"
    },
    "\"& .MuiSvgIcon-root\"": {
        "control": "text",
        "description": "\"& .MuiSvgIcon-root\" 속성"
    },
    "children": {
        "control": "text",
        "description": "자식 컴포넌트 또는 텍스트"
    },
    "expandedItem": {
        "control": "text",
        "description": "expandedItem 속성"
    },
    "handleChange": {
        "control": "text",
        "description": "handleChange 속성"
    },
    "accordionHeader": {
        "control": "text",
        "description": "accordionHeader 속성"
    },
    "return <Accordion square disableGutters elevation": {
        "control": "text",
        "description": "return <Accordion square disableGutters elevation 속성"
    },
    "handleChange(accordionHeader)": {
        "control": "text",
        "description": "handleChange(accordionHeader) 속성"
    },
    "left": {
        "control": "text",
        "description": "left 속성"
    },
    "px": {
        "control": "text",
        "description": "px 속성"
    },
    "py": {
        "control": "text",
        "description": "py 속성"
    }
},
};

export const Default = {
  args: {
    children: 'AppAccordion Content',
    
    
  },
};







import AppPagination from '../src/components/AppPagination.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Navigation/AppPagination',
  component: AppPagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'AppPagination 컴포넌트입니다. UKO 디자인 시스템의 일부입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    "Pagination": {
        "control": "text",
        "description": "Pagination 속성"
    },
    "styled": {
        "control": "text",
        "description": "styled 속성"
    },
    "theme": {
        "control": "text",
        "description": "theme 속성"
    },
    "//   '& .MuiPaginationItem-root'": {
        "control": "text",
        "description": "//   '& .MuiPaginationItem-root' 속성"
    },
    "//     color": {
        "control": "text",
        "description": "//     color 속성"
    },
    "//     backgroundColor": {
        "control": "text",
        "description": "//     backgroundColor 속성"
    },
    "//": {
        "control": "text",
        "description": "// 속성"
    },
    "fontWeight": {
        "control": "text",
        "description": "fontWeight 속성"
    },
    "//   borderRadius": {
        "control": "text",
        "description": "//   borderRadius 속성"
    },
    "//   backgroundColor": {
        "control": "text",
        "description": "//   backgroundColor 속성"
    },
    "//     border": {
        "control": "text",
        "description": "//     border 속성"
    },
    "backgroundColor": {
        "control": "text",
        "description": "backgroundColor 속성"
    },
    "marginLeft": {
        "control": "text",
        "description": "marginLeft 속성"
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







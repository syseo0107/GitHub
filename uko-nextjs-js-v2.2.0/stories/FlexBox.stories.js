import FlexBox from '../src/components/flexbox/FlexBox';
import { Box, Typography } from '@mui/material';

export default {
  title: 'Components/Layout/FlexBox',
  component: FlexBox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'UKO FlexBox 컴포넌트입니다. Material-UI Box 컴포넌트를 확장하여 display: flex가 기본으로 적용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex 방향',
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      description: '주축 정렬',
    },
    alignItems: {
      control: { type: 'select' },
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      description: '교차축 정렬',
    },
    gap: {
      control: { type: 'number' },
      description: '자식 요소간 간격',
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap',
    },
  },
};

const DemoItem = ({ children, ...props }) => (
  <Box
    {...props}
    sx={{
      backgroundColor: 'primary.light',
      color: 'primary.contrastText',
      padding: 1,
      borderRadius: 1,
      minWidth: 60,
      textAlign: 'center',
      ...props.sx,
    }}
  >
    {children}
  </Box>
);

export const Default = {
  args: {
    gap: 2,
  },
  render: (args) => (
    <FlexBox {...args}>
      <DemoItem>Item 1</DemoItem>
      <DemoItem>Item 2</DemoItem>
      <DemoItem>Item 3</DemoItem>
    </FlexBox>
  ),
};

export const Column = {
  args: {
    direction: 'column',
    gap: 2,
  },
  render: (args) => (
    <FlexBox {...args}>
      <DemoItem>Item 1</DemoItem>
      <DemoItem>Item 2</DemoItem>
      <DemoItem>Item 3</DemoItem>
    </FlexBox>
  ),
};

export const SpaceBetween = {
  args: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  render: (args) => (
    <FlexBox {...args}>
      <DemoItem>Start</DemoItem>
      <DemoItem>Center</DemoItem>
      <DemoItem>End</DemoItem>
    </FlexBox>
  ),
};

export const Center = {
  args: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    border: '2px dashed #ccc',
  },
  render: (args) => (
    <FlexBox {...args}>
      <DemoItem>Centered Content</DemoItem>
    </FlexBox>
  ),
};

export const Wrap = {
  args: {
    wrap: 'wrap',
    gap: 1,
    width: 200,
  },
  render: (args) => (
    <FlexBox {...args}>
      <DemoItem>Item 1</DemoItem>
      <DemoItem>Item 2</DemoItem>
      <DemoItem>Item 3</DemoItem>
      <DemoItem>Item 4</DemoItem>
      <DemoItem>Item 5</DemoItem>
      <DemoItem>Item 6</DemoItem>
    </FlexBox>
  ),
};

export const LayoutExamples = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box>
        <Typography variant="h6" gutterBottom>Header Layout</Typography>
        <FlexBox 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ 
            backgroundColor: 'background.paper', 
            padding: 2, 
            borderRadius: 1,
            border: '1px solid #e0e0e0'
          }}
        >
          <Typography variant="h5">Logo</Typography>
          <FlexBox gap={2}>
            <DemoItem sx={{ backgroundColor: 'secondary.main' }}>Menu 1</DemoItem>
            <DemoItem sx={{ backgroundColor: 'secondary.main' }}>Menu 2</DemoItem>
            <DemoItem sx={{ backgroundColor: 'secondary.main' }}>Menu 3</DemoItem>
          </FlexBox>
        </FlexBox>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>Card Grid Layout</Typography>
        <FlexBox wrap="wrap" gap={2}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <Box
              key={num}
              sx={{
                backgroundColor: 'background.paper',
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                padding: 3,
                minWidth: 150,
                flex: '1 1 300px',
              }}
            >
              <Typography variant="h6">Card {num}</Typography>
              <Typography variant="body2" color="text.secondary">
                Content for card {num}
              </Typography>
            </Box>
          ))}
        </FlexBox>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>Sidebar Layout</Typography>
        <FlexBox sx={{ height: 200, border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <Box sx={{ 
            backgroundColor: 'primary.light', 
            width: 200, 
            padding: 2,
            color: 'white'
          }}>
            <Typography>Sidebar</Typography>
          </Box>
          <Box sx={{ 
            flex: 1, 
            padding: 2,
            backgroundColor: 'background.paper'
          }}>
            <Typography>Main Content Area</Typography>
          </Box>
        </FlexBox>
      </Box>
    </Box>
  ),
};
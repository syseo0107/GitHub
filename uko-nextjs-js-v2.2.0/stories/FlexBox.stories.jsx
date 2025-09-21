import React from 'react';
import FlexBox from '../src/components/flexbox/FlexBox';
import { Box, Typography, Paper } from '@mui/material';

export default {
  title: 'Components/Layout/FlexBox',
  component: FlexBox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible Box component with display: flex as default. Extends MUI Box with all its props.',
      },
    },
  },
  argTypes: {
    flexDirection: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Flex direction property',
    },
    justifyContent: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      description: 'Justify content property',
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      description: 'Align items property',
    },
    gap: {
      control: 'number',
      description: 'Gap between flex items (in theme spacing units)',
    },
    flexWrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap property',
    },
  },
};

// Default story
export const Default = {
  args: {
    gap: 2,
    p: 2,
    bgcolor: 'background.paper',
    borderRadius: 1,
    children: (
      <>
        <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: 1 }}>Item 1</Box>
        <Box sx={{ p: 2, bgcolor: 'secondary.main', color: 'white', borderRadius: 1 }}>Item 2</Box>
        <Box sx={{ p: 2, bgcolor: 'success.main', color: 'white', borderRadius: 1 }}>Item 3</Box>
      </>
    ),
  },
};

// Horizontal Layout
export const HorizontalLayout = () => (
  <FlexBox gap={2} alignItems="center">
    <Paper sx={{ p: 3, flex: 1 }}>
      <Typography variant="h6">Left Content</Typography>
      <Typography variant="body2" color="text.secondary">
        This content is on the left side
      </Typography>
    </Paper>
    <Paper sx={{ p: 3, flex: 2 }}>
      <Typography variant="h6">Center Content</Typography>
      <Typography variant="body2" color="text.secondary">
        This content takes up more space in the center
      </Typography>
    </Paper>
    <Paper sx={{ p: 3, flex: 1 }}>
      <Typography variant="h6">Right Content</Typography>
      <Typography variant="body2" color="text.secondary">
        This content is on the right side
      </Typography>
    </Paper>
  </FlexBox>
);

// Vertical Layout
export const VerticalLayout = () => (
  <FlexBox flexDirection="column" gap={2} maxWidth={400}>
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Header Section</Typography>
    </Paper>
    <Paper sx={{ p: 3, flex: 1 }}>
      <Typography variant="h6">Main Content</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        This is the main content area that expands to fill available space.
      </Typography>
    </Paper>
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Footer Section</Typography>
    </Paper>
  </FlexBox>
);

// Centered Content
export const CenteredContent = () => (
  <FlexBox
    justifyContent="center"
    alignItems="center"
    minHeight={300}
    bgcolor="grey.100"
    borderRadius={2}
  >
    <Paper sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Centered Content
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This content is perfectly centered using FlexBox
      </Typography>
    </Paper>
  </FlexBox>
);

// Space Between Items
export const SpaceBetween = () => (
  <FlexBox justifyContent="space-between" p={2} bgcolor="background.paper" borderRadius={1}>
    <Box sx={{ p: 2, bgcolor: 'info.light', color: 'white', borderRadius: 1 }}>
      Start
    </Box>
    <Box sx={{ p: 2, bgcolor: 'warning.light', color: 'white', borderRadius: 1 }}>
      Middle
    </Box>
    <Box sx={{ p: 2, bgcolor: 'error.light', color: 'white', borderRadius: 1 }}>
      End
    </Box>
  </FlexBox>
);

// Responsive Grid
export const ResponsiveGrid = () => (
  <FlexBox flexWrap="wrap" gap={2} p={2}>
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <Paper
        key={item}
        sx={{
          p: 3,
          flex: '1 1 300px',
          minWidth: 250,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6">Card {item}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Responsive card that wraps based on available space
        </Typography>
      </Paper>
    ))}
  </FlexBox>
);

// Nested FlexBoxes
export const NestedLayout = () => (
  <FlexBox flexDirection="column" gap={2} p={2}>
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Header</Typography>
    </Paper>
    
    <FlexBox gap={2} flex={1}>
      <Paper sx={{ flex: '0 0 200px', p: 2 }}>
        <Typography variant="h6">Sidebar</Typography>
        <FlexBox flexDirection="column" gap={1} mt={2}>
          <Box sx={{ p: 1, bgcolor: 'grey.200', borderRadius: 1 }}>Menu 1</Box>
          <Box sx={{ p: 1, bgcolor: 'grey.200', borderRadius: 1 }}>Menu 2</Box>
          <Box sx={{ p: 1, bgcolor: 'grey.200', borderRadius: 1 }}>Menu 3</Box>
        </FlexBox>
      </Paper>
      
      <Paper sx={{ flex: 1, p: 2 }}>
        <Typography variant="h6" gutterBottom>Main Content</Typography>
        <Typography variant="body2" color="text.secondary">
          This demonstrates nested FlexBox components creating a complex layout
        </Typography>
      </Paper>
    </FlexBox>
    
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Footer</Typography>
    </Paper>
  </FlexBox>
);
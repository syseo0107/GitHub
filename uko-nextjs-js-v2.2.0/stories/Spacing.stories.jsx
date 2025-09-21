import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import spacing from '../stories/tokens/spacing.json';

export default {
  title: 'Design System/Spacing',
  parameters: {
    docs: {
      description: {
        component: 'Spacing system from design tokens',
      },
    },
  },
};

export const SpacingScale = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Spacing Scale
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        Consistent spacing values used throughout the design system
      </Typography>
      
      {spacing.values.map((value, index) => (
        <Paper key={index} elevation={1} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ minWidth: 60 }}>
            <Typography variant="subtitle2">
              spacing[{index}]
            </Typography>
          </Box>
          <Box sx={{ mx: 3, minWidth: 60 }}>
            <Typography variant="caption" color="text.secondary">
              {value}px
            </Typography>
          </Box>
          <Box 
            sx={{ 
              width: value, 
              height: 24, 
              backgroundColor: 'primary.main',
              borderRadius: 1,
            }} 
          />
        </Paper>
      ))}
    </Box>
  );
};

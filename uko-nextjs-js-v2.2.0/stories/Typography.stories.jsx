import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import typography from '../stories/tokens/typography.json';

export default {
  title: 'Design System/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Typography styles from Figma design tokens',
      },
    },
  },
};

const TypographyDemo = ({ variant, config }) => {
  const text = `${variant.charAt(0).toUpperCase() + variant.slice(1)} Typography`;
  
  return (
    <Paper elevation={1} sx={{ p: 3, mb: 2 }}>
      <Typography variant={variant} gutterBottom>
        {text}
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Typography variant="caption" color="text.secondary">
          Font Size: {config.fontSize || 'inherit'} | 
          Font Weight: {config.fontWeight || 'normal'} | 
          Line Height: {config.lineHeight || 'normal'}
        </Typography>
      </Box>
    </Paper>
  );
};

export const TypographyScale = () => {
  const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption'];
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Typography Scale
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        Typography system based on design tokens
      </Typography>
      
      {variants.map((variant) => (
        typography[variant] && (
          <TypographyDemo 
            key={variant} 
            variant={variant} 
            config={typography[variant]}
          />
        )
      ))}
    </Box>
  );
};

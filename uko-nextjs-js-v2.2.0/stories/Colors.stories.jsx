import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import colors from '../stories/tokens/colors.json';

export default {
  title: 'Design System/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Color palette from Figma design tokens',
      },
    },
  },
};

const ColorCard = ({ name, value, category }) => (
  <Paper elevation={1} sx={{ p: 2, height: '100%' }}>
    <Box
      sx={{
        width: '100%',
        height: 80,
        backgroundColor: value,
        border: '1px solid #e0e0e0',
        borderRadius: 1,
        mb: 2,
      }}
    />
    <Typography variant="subtitle2" gutterBottom>
      {category} / {name}
    </Typography>
    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
      {value}
    </Typography>
  </Paper>
);

export const Palette = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Color Palette
      </Typography>
      
      {Object.entries(colors).map(([category, categoryColors]) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ textTransform: 'capitalize', mt: 3 }}>
            {category}
          </Typography>
          <Grid container spacing={2}>
            {typeof categoryColors === 'object' && categoryColors !== null ? (
              Object.entries(categoryColors).map(([name, value]) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={name}>
                  <ColorCard name={name} value={value} category={category} />
                </Grid>
              ))
            ) : (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ColorCard name={category} value={categoryColors} category="Base" />
              </Grid>
            )}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

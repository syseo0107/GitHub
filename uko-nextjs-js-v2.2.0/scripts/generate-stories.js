#!/usr/bin/env node

/**
 * Automatic Storybook Story Generation Script
 * This script scans the components directory and generates stories automatically
 */

const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '../src/components');
const STORIES_DIR = path.join(__dirname, '../stories');
const PAGES_DIR = path.join(__dirname, '../src/page-sections');

// Template for generating stories
const storyTemplate = (componentName, componentPath, hasProps = true) => {
  const relativeImportPath = componentPath.replace(/^.*\/src\//, '../src/');
  
  return `import React from 'react';
import ${componentName} from '${relativeImportPath}';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '${componentName} component from UKO Dashboard',
      },
    },
  },
  argTypes: {
    ${hasProps ? `// Add your prop controls here
    children: {
      control: 'text',
      description: 'Content to be rendered inside the component',
    },` : ''}
  },
};

// Default story
export const Default = {
  args: {
    ${hasProps ? `children: '${componentName} Content',` : ''}
  },
};

// Playground story for experimentation
export const Playground = {
  args: {
    ${hasProps ? `children: '${componentName} Playground',` : ''}
  },
};
`;
};

// Template for color palette story
const colorPaletteStory = () => `import React from 'react';
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
`;

// Template for typography story
const typographyStory = () => `import React from 'react';
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
  const text = \`\${variant.charAt(0).toUpperCase() + variant.slice(1)} Typography\`;
  
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
`;

// Template for spacing story
const spacingStory = () => `import React from 'react';
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
`;

// Helper function to find all component files
function findComponentFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    return fileList;
  }

  const files = fs.readdirSync(dir);
  
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively search subdirectories
      findComponentFiles(filePath, fileList);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      // Only include component files (not index files or utils)
      if (!file.includes('index') && !file.includes('utils') && !file.includes('config')) {
        fileList.push({
          name: file.replace(/\.(jsx|js)$/, ''),
          path: filePath,
          dir: path.relative(COMPONENTS_DIR, dir),
        });
      }
    }
  });
  
  return fileList;
}

// Helper function to generate story filename
function getStoryFilename(componentName) {
  return `${componentName}.stories.jsx`;
}

// Main function to generate stories
async function generateStories() {
  try {
    console.log('📚 Starting automatic story generation...');

    // Ensure stories directory exists
    if (!fs.existsSync(STORIES_DIR)) {
      fs.mkdirSync(STORIES_DIR, { recursive: true });
    }

    // Generate design system stories
    console.log('🎨 Generating design system stories...');

    // Color palette story
    fs.writeFileSync(
      path.join(STORIES_DIR, 'Colors.stories.jsx'),
      colorPaletteStory()
    );
    console.log('✅ Color palette story generated');

    // Typography story
    fs.writeFileSync(
      path.join(STORIES_DIR, 'Typography.stories.jsx'),
      typographyStory()
    );
    console.log('✅ Typography story generated');

    // Spacing story
    fs.writeFileSync(
      path.join(STORIES_DIR, 'Spacing.stories.jsx'),
      spacingStory()
    );
    console.log('✅ Spacing story generated');

    // Find all component files
    const componentFiles = findComponentFiles(COMPONENTS_DIR);
    console.log(`📦 Found ${componentFiles.length} components`);

    // Generate stories for each component
    let generatedCount = 0;
    componentFiles.forEach((component) => {
      const storyPath = path.join(STORIES_DIR, getStoryFilename(component.name));
      
      // Skip if story already exists
      if (!fs.existsSync(storyPath)) {
        const storyContent = storyTemplate(
          component.name,
          component.path.replace(/\\/g, '/'), // Ensure forward slashes for imports
          true
        );
        
        fs.writeFileSync(storyPath, storyContent);
        generatedCount++;
        console.log(`✅ Generated story for ${component.name}`);
      } else {
        console.log(`⏭️  Story already exists for ${component.name}`);
      }
    });

    // Create example stories for common patterns
    const exampleStories = [
      {
        name: 'Button.stories.jsx',
        content: `import React from 'react';
import { Button } from '@mui/material';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="text">Text</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="contained">Contained</Button>
  </div>
);

export const AllColors = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="contained" color="primary">Primary</Button>
    <Button variant="contained" color="secondary">Secondary</Button>
    <Button variant="contained" color="error">Error</Button>
    <Button variant="contained" color="warning">Warning</Button>
    <Button variant="contained" color="info">Info</Button>
    <Button variant="contained" color="success">Success</Button>
  </div>
);

export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Button variant="contained" size="small">Small</Button>
    <Button variant="contained" size="medium">Medium</Button>
    <Button variant="contained" size="large">Large</Button>
  </div>
);
`,
      },
      {
        name: 'Card.stories.jsx',
        content: `import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image="https://via.placeholder.com/345x140"
      alt="placeholder"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Card Title
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This is a sample card component with some content to demonstrate the design system.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export const SimpleCard = () => (
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        benevolent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);
`,
      },
    ];

    // Write example stories
    exampleStories.forEach(({ name, content }) => {
      const storyPath = path.join(STORIES_DIR, name);
      if (!fs.existsSync(storyPath)) {
        fs.writeFileSync(storyPath, content);
        console.log(`✅ Generated example story: ${name}`);
      }
    });

    console.log(`\n🎉 Story generation completed!`);
    console.log(`📊 Generated ${generatedCount} new stories`);
    console.log(`📁 Stories location: ${STORIES_DIR}`);
    
  } catch (error) {
    console.error('❌ Error generating stories:', error);
    process.exit(1);
  }
}

// Run the generation
generateStories();
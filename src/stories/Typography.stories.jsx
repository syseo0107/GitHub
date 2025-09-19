import React from 'react';
import { H1, H2, H3, H4, H5, H6, Paragraph, Small, Span, Tiny } from '../components/Typography';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'UKO/Typography',
  component: H1,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text.primary', 'text.secondary', 'error', 'warning', 'success'],
    },
    ellipsis: {
      control: { type: 'boolean' },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Heading1 = {
  args: {
    children: 'Heading 1 - 28px Bold',
  },
  render: (args) => <H1 {...args} />,
};

export const Heading2 = {
  args: {
    children: 'Heading 2 - 24px Bold',
  },
  render: (args) => <H2 {...args} />,
};

export const Heading3 = {
  args: {
    children: 'Heading 3 - 18px Bold',
  },
  render: (args) => <H3 {...args} />,
};

export const Heading4 = {
  args: {
    children: 'Heading 4 - 16px Bold',
  },
  render: (args) => <H4 {...args} />,
};

export const Heading5 = {
  args: {
    children: 'Heading 5 - 14px Bold',
  },
  render: (args) => <H5 {...args} />,
};

export const Heading6 = {
  args: {
    children: 'Heading 6 - 13px Bold',
  },
  render: (args) => <H6 {...args} />,
};

export const BodyText = {
  args: {
    children: 'Body text - 14px Medium',
  },
  render: (args) => <Paragraph {...args} />,
};

export const SmallText = {
  args: {
    children: 'Small text - 13px Medium',
  },
  render: (args) => <Small {...args} />,
};

export const SpanText = {
  args: {
    children: 'Span text - 14px',
  },
  render: (args) => <Span {...args} />,
};

export const TinyText = {
  args: {
    children: 'Tiny text - 13px Secondary',
  },
  render: (args) => <Tiny {...args} />,
};

export const WithEllipsis = {
  args: {
    children: 'This is a very long text that will be truncated with ellipsis when it exceeds the container width',
    ellipsis: true,
    style: { width: 200 },
  },
  render: (args) => <Paragraph {...args} />,
};

export const ColorVariations = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <H3 color="primary">Primary Color Heading</H3>
      <H3 color="secondary">Secondary Color Heading</H3>
      <H3 color="error">Error Color Heading</H3>
      <Paragraph color="text.primary">Primary Text Color</Paragraph>
      <Paragraph color="text.secondary">Secondary Text Color</Paragraph>
    </div>
  ),
};
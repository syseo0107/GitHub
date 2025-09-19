import React, { useState } from 'react';
import AppPagination from '../components/AppPagination';

export default {
  title: 'UKO/Navigation/AppPagination',
  component: AppPagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: { type: 'number', min: 1, max: 100 },
    },
    page: {
      control: { type: 'number', min: 1 },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'outlined'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'standard'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = {
  render: () => {
    const [page, setPage] = useState(1);
    
    return (
      <AppPagination
        count={10}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    );
  },
};

export const ManyPages = {
  render: () => {
    const [page, setPage] = useState(5);
    
    return (
      <AppPagination
        count={50}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    );
  },
};

export const WithSiblings = {
  render: () => {
    const [page, setPage] = useState(10);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h4>Default (siblingCount=1)</h4>
          <AppPagination
            count={20}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
        
        <div>
          <h4>More siblings (siblingCount=2)</h4>
          <AppPagination
            count={20}
            page={page}
            siblingCount={2}
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </div>
    );
  },
};

export const Sizes = {
  render: () => {
    const [page, setPage] = useState(3);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h4>Small</h4>
          <AppPagination
            size="small"
            count={10}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
        
        <div>
          <h4>Medium (default)</h4>
          <AppPagination
            size="medium"
            count={10}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
        
        <div>
          <h4>Large</h4>
          <AppPagination
            size="large"
            count={10}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </div>
    );
  },
};

export const Variants = {
  render: () => {
    const [page, setPage] = useState(3);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h4>Text (default)</h4>
          <AppPagination
            variant="text"
            count={10}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
        
        <div>
          <h4>Outlined</h4>
          <AppPagination
            variant="outlined"
            count={10}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </div>
    );
  },
};

export const Colors = {
  render: () => {
    const [page, setPage] = useState(3);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h4>Primary</h4>
          <AppPagination
            color="primary"
            count={10}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
        
        <div>
          <h4>Secondary</h4>
          <AppPagination
            color="secondary"
            count={10}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
        
        <div>
          <h4>Standard</h4>
          <AppPagination
            color="standard"
            count={10}
            page={page}
            onChange={(event, value) => setPage(value)}
          />
        </div>
      </div>
    );
  },
};

export const Disabled = {
  render: () => (
    <AppPagination
      count={10}
      page={3}
      disabled
    />
  ),
};
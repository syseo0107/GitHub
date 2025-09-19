import React from 'react';
import IconWrapper from '../components/IconWrapper';
import { 
  Home, 
  Settings, 
  Person, 
  Notifications, 
  Search, 
  Dashboard,
  AttachMoney,
  ShoppingCart,
  BarChart
} from '@mui/icons-material';

export default {
  title: 'UKO/Display/IconWrapper',
  component: IconWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    sx: {
      control: { type: 'object' },
      description: 'Custom styles using MUI sx prop',
    },
  },
};

export const Default = {
  render: () => (
    <IconWrapper>
      <Home />
    </IconWrapper>
  ),
};

export const WithCustomStyles = {
  render: () => (
    <IconWrapper sx={{ backgroundColor: 'secondary.main', width: 50, height: 50 }}>
      <Settings fontSize="large" />
    </IconWrapper>
  ),
};

export const DifferentIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <IconWrapper>
        <Home />
      </IconWrapper>
      <IconWrapper>
        <Person />
      </IconWrapper>
      <IconWrapper>
        <Settings />
      </IconWrapper>
      <IconWrapper>
        <Notifications />
      </IconWrapper>
      <IconWrapper>
        <Search />
      </IconWrapper>
    </div>
  ),
};

export const DashboardIcons = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <IconWrapper>
          <Dashboard />
        </IconWrapper>
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Dashboard</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconWrapper>
          <AttachMoney />
        </IconWrapper>
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Finance</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconWrapper>
          <ShoppingCart />
        </IconWrapper>
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Commerce</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <IconWrapper>
          <BarChart />
        </IconWrapper>
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Analytics</div>
      </div>
    </div>
  ),
};

export const ColorVariations = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <IconWrapper sx={{ backgroundColor: 'primary.main' }}>
        <Home style={{ color: 'white' }} />
      </IconWrapper>
      <IconWrapper sx={{ backgroundColor: 'secondary.main' }}>
        <Settings style={{ color: 'white' }} />
      </IconWrapper>
      <IconWrapper sx={{ backgroundColor: 'error.main' }}>
        <Notifications style={{ color: 'white' }} />
      </IconWrapper>
      <IconWrapper sx={{ backgroundColor: 'warning.main' }}>
        <Search style={{ color: 'white' }} />
      </IconWrapper>
      <IconWrapper sx={{ backgroundColor: 'success.main' }}>
        <Person style={{ color: 'white' }} />
      </IconWrapper>
    </div>
  ),
};

export const SizeVariations = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconWrapper sx={{ width: 30, height: 30 }}>
        <Home fontSize="small" />
      </IconWrapper>
      <IconWrapper sx={{ width: 40, height: 40 }}>
        <Home />
      </IconWrapper>
      <IconWrapper sx={{ width: 50, height: 50 }}>
        <Home fontSize="large" />
      </IconWrapper>
      <IconWrapper sx={{ width: 60, height: 60 }}>
        <Home sx={{ fontSize: 32 }} />
      </IconWrapper>
    </div>
  ),
};
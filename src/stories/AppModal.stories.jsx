import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import AppModal from '../components/AppModal';
import { H4, Paragraph } from '../components/Typography';

export default {
  title: 'UKO/Overlays/AppModal',
  component: AppModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <AppModal open={open} handleClose={() => setOpen(false)}>
          <div style={{ padding: '24px', minWidth: '300px' }}>
            <H4 mb={2}>Modal Title</H4>
            <Paragraph mb={2}>
              This is a basic modal dialog. You can include any content here.
            </Paragraph>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </AppModal>
      </>
    );
  },
};

export const WithForm = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Form Modal
        </Button>
        <AppModal open={open} handleClose={() => setOpen(false)}>
          <div style={{ padding: '24px', minWidth: '400px' }}>
            <H4 mb={2}>User Information</H4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('Form submitted:', formData);
                setOpen(false);
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>Name:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>Email:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button type="submit" variant="contained">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </AppModal>
      </>
    );
  },
};

export const ConfirmationModal = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <AppModal open={open} handleClose={() => setOpen(false)}>
          <div style={{ padding: '24px', minWidth: '350px', textAlign: 'center' }}>
            <H4 mb={2} color="error">Confirm Deletion</H4>
            <Paragraph mb={3}>
              Are you sure you want to delete this item? This action cannot be undone.
            </Paragraph>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button 
                variant="contained" 
                color="error" 
                onClick={() => {
                  console.log('Item deleted');
                  setOpen(false);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </AppModal>
      </>
    );
  },
};
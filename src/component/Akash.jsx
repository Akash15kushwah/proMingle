import React, { useState } from 'react';
import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip } from '@mui/material';
import { PersonAdd, Settings, Logout } from '@mui/icons-material';

export default function Akash() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuToggle = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Tooltip title="Account settings">
        <IconButton onClick={handleMenuToggle} size="small" sx={{ml: 2}}>
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.5,
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1 },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}><Avatar /> Profile</MenuItem>
        <MenuItem onClick={handleClose}><Avatar /> My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}><ListItemIcon><PersonAdd fontSize="small" /></ListItemIcon> Add another account</MenuItem>
        <MenuItem onClick={handleClose}><ListItemIcon><Settings fontSize="small" /></ListItemIcon> Settings</MenuItem>
        <MenuItem onClick={handleClose}><ListItemIcon><Logout fontSize="small" /></ListItemIcon> Logout</MenuItem>
      </Menu>
    </Box>
  );
}

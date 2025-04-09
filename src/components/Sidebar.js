import React, { useState } from 'react';
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
} from '@mui/material';
import {
  Home,
  Person,
  BusinessCenter,
  Folder,
  Work,
  ContactMail,
} from '@mui/icons-material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  GitHub,
} from '@mui/icons-material';
import { Link } from 'react-scroll';
import profile from '../assets/image/profile.jpg';
import { styled } from '@mui/system';

const Hamburger = styled('div')(({ theme }) => ({
  width: 24,
  height: 16,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '&::before, &::after, & span': {
    content: '""',
    position: 'absolute',
    height: 2,
    width: 24,
    backgroundColor: 'yellow',
    transition: '0.3s',
  },
  '&::before': {
    top: 0,
  },
  '& span': {
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&::after': {
    bottom: 0,
  },
}));

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const socialIcons = (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3, flexWrap: 'wrap' }}>
      <IconButton
        href="https://www.facebook.com/arefin.reza.saim"
        target="_blank"
        color="inherit"
        sx={{
          animation: 'bounce 2s infinite ease-in-out',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
          },
        }}
      >
        <Facebook />
      </IconButton>

      <IconButton
        color="inherit"
        sx={{
          animation: 'flap 2s infinite ease-in-out',
          '@keyframes flap': {
            '0%, 100%': { transform: 'rotate(0deg)' },
            '50%': { transform: 'rotate(15deg)' },
          },
        }}
      >
        <Twitter />
      </IconButton>

      <IconButton
        href="https://www.linkedin.com/in/arefinreza46/"
        target="_blank"
        color="inherit"
        sx={{
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
          },
        }}
      >
        <LinkedIn />
      </IconButton>

      <IconButton
        href="https://www.instagram.com/arefinsaim/"
        target="_blank"
        color="inherit"
        sx={{
          animation: 'rotate 3s infinite linear',
          '@keyframes rotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        }}
      >
        <Instagram />
      </IconButton>

      <IconButton
        href="https://github.com/ArefinReza"
        target="_blank"
        color="inherit"
        sx={{
          animation: 'pop 2s infinite ease-in-out',
          '@keyframes pop': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.2)' },
          },
        }}
      >
        <GitHub />
      </IconButton>
    </Box>
  );

  const navItems = [
    { label: 'Home', icon: <Home />, to: 'home' },
    { label: 'About', icon: <Person />, to: 'about' },
    { label: 'Skills', icon: <Person />, to: 'skills' },
    { label: 'Resume', icon: <BusinessCenter />, to: 'resume' },
    { label: 'Portfolio', icon: <Folder />, to: 'portfolio' },
    { label: 'Services', icon: <Work />, to: 'services' },
    { label: 'Contact', icon: <ContactMail />, to: 'contact' },
  ];

  const sidebarContent = (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100vw', sm: '300px' },
        bgcolor: '#003049',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        height: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <Avatar src={profile} sx={{ width: 100, height: 100, mb: 2 }} />
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, textAlign: 'center' }}>
        MD. Arefin Reza
      </Typography>
      {socialIcons}
      <List sx={{ width: '100%' }}>
        {navItems.map((item) => (
          <ListItem
            button
            component={Link}
            to={item.to}
            spy
            smooth
            offset={-50}
            duration={500}
            activeClass="active"
            key={item.label}
            sx={{ px: 2, cursor: 'pointer' }}
          >
            <ListItemIcon sx={{ minWidth: 36, color: '#FFD700' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      {/* Custom Hamburger Icon - top-right */}
      <Box
        onClick={toggleDrawer(true)}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          position: 'fixed',
          top: 12,
          right: 16,
          zIndex: 1301,
          cursor: 'pointer',
        }}
      >
        <Hamburger>
          <span />
        </Hamburger>
      </Box>

      {/* Desktop Sidebar */}
      <Box sx={{ display: { xs: 'none', sm: 'block' }, position: 'fixed', left: 0, top: 0 }}>
        <Box
          sx={{
            width: '300px',
            bgcolor: '#003049',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            padding: '20px',
            height: '100vh',
          }}
        >
          <Avatar
            src={profile}
            sx={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              margin: '0 auto',
              mt: 3,
              mb: 2,
            }}
          />
          <Typography variant="h5" fontWeight="bold" sx={{ textAlign: 'center', mb: 2 }}>
            MD. Arefin Reza
          </Typography>
          {socialIcons}
          <List sx={{ width: '100%', cursor: 'pointer' }}>
            {navItems.map((item) => (
              <ListItem
                button
                component={Link}
                to={item.to}
                spy
                smooth
                offset={-50}
                duration={500}
                activeClass="active"
                key={item.label}
              >
                <ListItemIcon sx={{ justifyContent: 'center' }}>
                  {React.cloneElement(item.icon, { sx: { color: '#FFD700' } })}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: '80vw',
            maxWidth: '300px',
            bgcolor: '#003049',
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;

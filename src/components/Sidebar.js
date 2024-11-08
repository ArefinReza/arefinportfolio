import React, { useState } from 'react';
import { Box, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton, Drawer } from '@mui/material';
import { Home, Person, BusinessCenter, Folder, Work, ContactMail, Menu } from '@mui/icons-material';
import { Facebook, Twitter, LinkedIn, Instagram, GitHub } from '@mui/icons-material';
import { Link } from 'react-scroll';
import profile from '../assets/image/profile.jpg'
const Sidebar = () => {
  const [open, setOpen] = useState(false); // State for sidebar visibility

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const sidebarContent = (
    <Box
      sx={{
        width: { xs: '100vw', sm: '300px' },
        bgcolor: 'primary.main',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: '20px',
        height: '100vh',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Avatar
        src={profile}
        sx={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          alignItems: 'center',
          mb: 3,
          margin:'0 auto',
          marginTop: 3,
        marginBottom:2,
        }}
      />
      <Typography variant="h5" fontWeight="bold"
      sx={{

        margin:'0 auto',
        marginTop: 2,
        marginBottom:2,
      }}>
        MD. Arefin Reza
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 2 }}>
        <IconButton color="inherit"><Facebook /></IconButton>
        <IconButton color="inherit"><Twitter /></IconButton>
        <IconButton color="inherit"><LinkedIn /></IconButton>
        <IconButton color="inherit"><Instagram /></IconButton>
        <IconButton color="inherit"><GitHub /></IconButton>
      </Box>

      <List>
        <ListItem button component={Link} to="home" spy smooth offset={-50} activeClass="active">
          <ListItemIcon><Home sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="about" spy smooth offset={-50} activeClass="active">
          <ListItemIcon><Person sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="resume" spy smooth offset={-50} activeClass="active">
          <ListItemIcon><BusinessCenter sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button component={Link} to="portfolio" spy smooth offset={-50} activeClass="active">
          <ListItemIcon><Folder sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button component={Link} to="services" spy smooth offset={-50} activeClass="active">
          <ListItemIcon><Work sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component={Link} to="contact" spy smooth offset={-50} activeClass="active">
          <ListItemIcon><ContactMail sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      {/* Hamburger Menu Icon for Mobile View */}
      <IconButton
        color="inherit"
        edge="start"
        onClick={toggleDrawer(true)}
        sx={{ display: { xs: 'inline', sm: 'none' }, position: 'fixed', top: 10, left: 10 }}
      >
        <Menu />
      </IconButton>

      {/* Permanent Sidebar on Desktop */}
      <Box sx={{ display: { xs: 'none', sm: 'block' }, position: 'fixed', left: 0 }}>
        {sidebarContent}
      </Box>

      {/* Drawer Sidebar for Mobile */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: 'block', sm: 'none' },
        }}
      >
        {sidebarContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;

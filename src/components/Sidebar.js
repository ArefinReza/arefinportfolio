import React, { useState } from 'react';
import {
  Box,
  Avatar,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
  Stack,
} from '@mui/material';

import {
  Home,
  Person,
  BusinessCenter,
  Folder,
  Work,
  ContactMail,
  CodeRounded,
  Facebook,
  LinkedIn,
  Instagram,
  GitHub,
  WhatsApp,
} from '@mui/icons-material';

import { Link } from 'react-scroll';
import profile from '../assets/image/profile.jpg';
import { profileLinks } from './profileLinks';

const navItems = [
  { label: 'Home', icon: <Home />, to: 'home' },
  { label: 'About', icon: <Person />, to: 'about' },
  { label: 'Skills', icon: <CodeRounded />, to: 'skills' },
  { label: 'Resume', icon: <BusinessCenter />, to: 'resume' },
  { label: 'Portfolio', icon: <Folder />, to: 'portfolio' },
  { label: 'Live Projects', icon: <Work />, to: 'live-projects' },
  { label: 'Services', icon: <Work />, to: 'services' },
  { label: 'Contact', icon: <ContactMail />, to: 'contact' },
];

const socialItems = [
  { icon: <Facebook />, href: profileLinks.facebook, color: '#7dd3fc' },
  { icon: <LinkedIn />, href: profileLinks.linkedin, color: '#a78bfa' },
  { icon: <Instagram />, href: profileLinks.instagram, color: '#fb7185' },
  { icon: <GitHub />, href: profileLinks.github, color: '#86efac' },
  { icon: <WhatsApp />, href: profileLinks.whatsapp, color: '#4ade80' },
];

/* ---------------- MOBILE HAMBURGER ---------------- */
function HamburgerButton({ open, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 52,
        height: 52,
        display: { xs: 'grid', sm: 'none' },
        placeItems: 'center',
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1400,
        cursor: 'pointer',
        borderRadius: '14px',
        background: '#0b0f17',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.45)',
      }}
    >
      <Box sx={{ width: 20 }}>
        <Box
          sx={{
            height: 2,
            bgcolor: '#e5e7eb',
            mb: 0.6,
            transform: open ? 'rotate(45deg) translateY(6px)' : 'none',
            transition: '0.25s',
          }}
        />
        <Box
          sx={{
            height: 2,
            bgcolor: '#e5e7eb',
            mb: 0.6,
            opacity: open ? 0 : 1,
            transition: '0.25s',
          }}
        />
        <Box
          sx={{
            height: 2,
            bgcolor: '#e5e7eb',
            transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none',
            transition: '0.25s',
          }}
        />
      </Box>
    </Box>
  );
}

/* ---------------- SIDEBAR CONTENT ---------------- */
function SidebarContent({ onClose }) {
  return (
    <Box
      sx={{
        height: '100%',
        background: '#070b12',
        color: '#e5e7eb',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* SINGLE PREMIUM SIDE BORDER */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: 4,
          height: '100%',
          background:
            'linear-gradient(180deg, transparent, #38bdf8, #a78bfa, transparent)',
          opacity: 0.8,
        }}
      />

      <Stack
        alignItems="center"
        sx={{ height: '100%', px: 2.5, py: 4 }}
      >
        {/* AVATAR */}
        <Box
          sx={{
            width: 120,
            height: 120,
            mb: 2,
            display: 'grid',
            placeItems: 'center',
            borderRadius: '28px',
            border: '1px solid rgba(255,255,255,0.08)',
            background: '#0b1220',
            boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
            transform: 'rotate(45deg)',
          }}
        >
          <Avatar
            src={profile}
            sx={{
              width: 90,
              height: 90,
              transform: 'rotate(-45deg)',
              border: '2px solid rgba(255,255,255,0.7)',
            }}
          />
        </Box>

        {/* NAME */}
        <Typography sx={{ fontWeight: 800, fontSize: '1.2rem' }}>
          MD. Arefin Reza
        </Typography>

        <Typography sx={{ fontSize: '0.8rem', opacity: 0.6, mb: 3 }}>
          Software Engineer
        </Typography>

        {/* SOCIAL */}
        <Stack direction="row" gap={1} sx={{ mb: 3 }}>
          {socialItems.map((s, i) => (
            <IconButton
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              sx={{
                width: 38,
                height: 38,
                color: s.color,
                border: '1px solid rgba(255,255,255,0.08)',
                background: '#0b1220',
                borderRadius: '10px',
                transition: '0.2s',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  borderColor: s.color,
                },
              }}
            >
              {s.icon}
            </IconButton>
          ))}
        </Stack>

        {/* NAV */}
        <List sx={{ width: '100%' }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.label}
              component={Link}
              to={item.to}
              smooth
              duration={400}
              onClick={onClose}
              sx={{
                mb: 1,
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: '#0b1220',
                color: '#cbd5e1',
                transition: '0.2s',
                '&:hover': {
                  transform: 'translateX(6px)',
                  borderColor: 'rgba(56,189,248,0.4)',
                  color: '#fff',
                },
                '&.active': {
                  borderColor: '#38bdf8',
                  color: '#fff',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 35 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Stack>
    </Box>
  );
}

/* ---------------- MAIN SIDEBAR ---------------- */
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE BUTTON */}
      <HamburgerButton open={open} onClick={() => setOpen(!open)} />

      {/* DESKTOP SIDEBAR */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
          position: 'fixed',
          left: 0,
          top: 0,
          width: 300,
          height: '100vh',
          background: '#070b12',
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <SidebarContent />
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: '85vw',
            background: '#070b12',
          },
        }}
      >
        <SidebarContent onClose={() => setOpen(false)} />
      </Drawer>
    </>
  );
}
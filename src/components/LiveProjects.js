import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Typography,
  Stack,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import RefreshIcon from '@mui/icons-material/Refresh';

const liveProjects = [
  {
    name: 'Shokher Ghor BD',
    url: 'https://shokherghorbd.com',
    description: 'Production e-commerce platform with secure checkout and optimized performance.',
    tags: ['E-Commerce', 'Live'],
  },
  {
    name: 'Ordhek Dot Com',
    url: 'https://ordhek.com/',
    description: 'Production Multi-vendor e-commerce platform with Business Logic and optimized performance.',
    tags: ['Multi-Vendor E-Commerce', 'Live'],
  },
  {
    name: 'Furnessia',
    url: 'https://furnessia.netlify.app/',
    description: 'Production Furniture e-commerce platform with Fresh Frontend and optimized performance.',
    tags: ['Furniture E-Commerce', 'Live'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const LiveProjects = () => {
  const [refreshKeys, setRefreshKeys] = useState({});

  const handleRefresh = (index) => {
    setRefreshKeys((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#030305',
        color: '#fff',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 7 },
        fontFamily:
          '"SlitoRegular", Inter, ui-sans-serif, system-ui, sans-serif',
      }}
    >
      {/* Ambient background glow */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 30% 20%, rgba(88,166,255,0.10), transparent 40%),
            radial-gradient(circle at 70% 80%, rgba(255,214,102,0.08), transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(45,212,191,0.06), transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle grid overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1360px',
          mx: 'auto',
        }}
      >
        {/* Section Header */}
        <Stack
          component={motion.div}
          variants={containerReveal}
          initial="hidden"
          animate="show"
          spacing={2}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          <motion.div variants={fadeUp}>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <Chip
                icon={<PublicIcon />}
                label="LIVE DEPLOYMENTS"
                sx={{
                  height: 34,
                  borderRadius: '8px',
                  color: '#050505',
                  bgcolor: '#FFD666',
                  fontSize: '0.78rem',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                  '& .MuiChip-icon': { color: '#050505' },
                }}
              />
              <Chip
                icon={
                  <Box
                    component={motion.div}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: '#4ADE80',
                      boxShadow: '0 0 8px rgba(74,222,128,0.6)',
                    }}
                  />
                }
                label="In Production"
                sx={{
                  height: 34,
                  borderRadius: '8px',
                  color: '#D9F99D',
                  bgcolor: 'rgba(217,249,157,0.08)',
                  border: '1px solid rgba(217,249,157,0.22)',
                  fontSize: '0.78rem',
                  '& .MuiChip-icon': { color: '#D9F99D', ml: 1.2 },
                }}
              />
            </Stack>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#F8FAFC',
                m: 0,
              }}
            >
              Explore My{' '}
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  color: '#050505',
                  bgcolor: '#FFD666',
                  px: { xs: 0.8, md: 1.2 },
                  py: { xs: 0.1, md: 0.2 },
                  lineHeight: 0.95,
                  transform: 'skewX(-5deg)',
                  boxShadow: '8px 8px 0 rgba(125,249,255,0.12)',
                }}
              >
                Production Deployments
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography
              sx={{
                maxWidth: 620,
                color: '#B8C0CC',
                fontSize: { xs: '0.96rem', md: '1.06rem' },
                lineHeight: 1.72,
              }}
            >
              Verified production builds. Browse live websites I have delivered
              and open the full experience when ready.
            </Typography>
          </motion.div>
        </Stack>

        {/* Projects Grid */}
        <Stack
          component={motion.div}
          variants={containerReveal}
          initial="hidden"
          animate="show"
          spacing={4}
        >
          {liveProjects.map((project, index) => (
            <motion.div key={project.url} variants={fadeUp}>
              <Box
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  bgcolor: 'rgba(9,10,14,0.74)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 32px 90px rgba(0,0,0,0.45)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(255,214,102,0.3)',
                    boxShadow: '0 32px 90px rgba(0,0,0,0.55), 0 0 60px rgba(255,214,102,0.08)',
                  },
                }}
              >
                {/* Browser Chrome Header */}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    px: { xs: 1.5, md: 2.5 },
                    py: 1.2,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Stack direction="row" spacing={0.8} alignItems="center">
                    {['#FF5F57', '#FFBD2E', '#28C840'].map((color, i) => (
                      <Box
                        key={color}
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          bgcolor: color,
                        }}
                      />
                    ))}
                  </Stack>

                  {/* URL Bar */}
                  <Box
                    sx={{
                      flex: 1,
                      mx: 2,
                      px: 1.8,
                      py: 0.6,
                      borderRadius: '8px',
                      bgcolor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      maxWidth: 480,
                    }}
                  >
                    <LanguageIcon sx={{ fontSize: 14, color: '#4ADE80' }} />
                    <Typography
                      sx={{
                        color: '#AAB2C0',
                        fontSize: '0.78rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {project.url}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={0.5}>
                    <Tooltip title="Refresh preview" arrow>
                      <IconButton
                        onClick={() => handleRefresh(index)}
                        size="small"
                        sx={{
                          color: '#AAB2C0',
                          '&:hover': { color: '#FFD666' },
                        }}
                      >
                        <RefreshIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Visit website" arrow>
                      <IconButton
                        component="a"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: '#AAB2C0',
                          '&:hover': { color: '#FFD666' },
                        }}
                      >
                        <OpenInNewIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Stack>

                {/* Iframe Container */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 350, sm: 450, md: 560 },
                    bgcolor: '#0A0A0F',
                  }}
                >
                  {/* Loading shimmer */}
                  <Box
                    component={motion.div}
                    animate={{
                      backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.04) 50%, transparent 75%)',
                      backgroundSize: '200% 100%',
                      zIndex: 0,
                    }}
                  />

                  <Box
                    component="iframe"
                    key={refreshKeys[index] || 0}
                    src={project.url}
                    title={project.name}
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                  />
                </Box>

                {/* Project Info Footer */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  justifyContent="space-between"
                  sx={{
                    px: { xs: 1.5, md: 2.5 },
                    py: { xs: 1.5, md: 2 },
                    bgcolor: 'rgba(255,255,255,0.035)',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    gap: 1.5,
                  }}
                >
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: '#F8FAFC',
                          fontSize: { xs: '1.05rem', md: '1.15rem' },
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Stack direction="row" spacing={0.6}>
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              height: 22,
                              borderRadius: '6px',
                              color: tag === 'Live' ? '#4ADE80' : '#AAB2C0',
                              bgcolor:
                                tag === 'Live'
                                  ? 'rgba(74,222,128,0.1)'
                                  : 'rgba(255,255,255,0.06)',
                              border:
                                tag === 'Live'
                                  ? '1px solid rgba(74,222,128,0.25)'
                                  : '1px solid rgba(255,255,255,0.1)',
                              fontSize: '0.72rem',
                            }}
                          />
                        ))}
                      </Stack>
                    </Stack>
                    <Typography
                      sx={{
                        color: '#8892A2',
                        fontSize: '0.88rem',
                        lineHeight: 1.5,
                        maxWidth: 500,
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>

                  <Box
                    component={motion.a}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.8,
                      px: 2.5,
                      py: 1.1,
                      borderRadius: '10px',
                      textDecoration: 'none',
                      color: '#050505',
                      bgcolor: '#FFD666',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      boxShadow: '0 12px 36px rgba(255,214,102,0.2)',
                      transition: 'background 220ms ease',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      willChange: 'transform',
                      '&:hover': {
                        bgcolor: '#FFE08A',
                      },
                    }}
                  >
                    Open Live Site
                    <ArrowOutwardIcon sx={{ fontSize: 18 }} />
                  </Box>
                </Stack>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default LiveProjects;

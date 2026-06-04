import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import {
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  Divider,
  GlobalStyles,
} from '@mui/material';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TerminalIcon from '@mui/icons-material/Terminal';
import LayersIcon from '@mui/icons-material/Layers';
import HubIcon from '@mui/icons-material/Hub';
import VerifiedIcon from '@mui/icons-material/Verified';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import { Link } from 'react-scroll';

const skills = ['React', 'Vue', 'Laravel', 'Node.js', 'REST APIs', 'Full Stack'];

const metrics = [
  { value: '76+', label: 'Projects' },
  { value: '06+', label: 'Years' },
  { value: '99%', label: 'Client Satisfaction' },
];

const serviceCards = [
  {
    icon: <TerminalIcon />,
    title: 'Frontend Engineering',
    text: 'Accessible, responsive interfaces built for performance.',
  },
  {
    icon: <HubIcon />,
    title: 'Backend Engineering',
    text: 'Laravel APIs, dashboards, and systems built to scale.',
  },
  {
    icon: <LayersIcon />,
    title: 'Product UI Systems',
    text: 'Design systems that keep products consistent and usable.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const Home = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          '@font-face': {
            fontFamily: 'SlitoRegular',
            src: `
              url('/fonts/slito-regular.woff2') format('woff2'),
              url('/fonts/slito-regular.woff') format('woff')
            `,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
          'html, body, #root': {
            fontFamily:
              '"SlitoRegular", Inter, ui-sans-serif, system-ui, sans-serif',
          },
          '.MuiTypography-root, .MuiButton-root, .MuiChip-root': {
            fontFamily:
              '"SlitoRegular", Inter, ui-sans-serif, system-ui, sans-serif',
          },
        }}
      />

      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          bgcolor: '#030305',
          color: '#fff',
          fontFamily:
            '"SlitoRegular", Inter, ui-sans-serif, system-ui, sans-serif',
        }}
      >
        {/* Cinematic Static Base */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(circle at 16% 22%, rgba(255,214,102,0.18), transparent 26%),
              radial-gradient(circle at 82% 18%, rgba(88,166,255,0.16), transparent 28%),
              radial-gradient(circle at 74% 82%, rgba(45,212,191,0.12), transparent 30%),
              linear-gradient(180deg, #030305 0%, #090910 48%, #030305 100%)
            `,
          }}
        />

        {/* GPU friendly moving light slabs */}
        <Box
          component={motion.div}
          animate={{ x: ['-18%', '8%', '-18%'], opacity: [0.36, 0.58, 0.36] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            top: '-22%',
            left: '20%',
            width: { xs: 260, md: 520 },
            height: '145%',
            transform: 'rotate(18deg)',
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)',
            willChange: 'transform, opacity',
          }}
        />

        <Box
          component={motion.div}
          animate={{ x: ['12%', '-10%', '12%'], opacity: [0.25, 0.48, 0.25] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            top: '-12%',
            right: '-18%',
            width: { xs: 280, md: 560 },
            height: '128%',
            transform: 'rotate(-16deg)',
            background:
              'linear-gradient(90deg, transparent, rgba(255,214,102,0.16), transparent)',
            willChange: 'transform, opacity',
          }}
        />

        {/* Grid */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
            `,
            backgroundSize: { xs: '48px 48px', md: '72px 72px' },
            opacity: 0.22,
            maskImage:
              'linear-gradient(90deg, black 0%, black 62%, transparent 100%)',
          }}
        />

        {/* Editorial frame lines */}
        <Box
          component={motion.div}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
          sx={{
            position: 'absolute',
            right: { xs: '-54%', md: '-10%' },
            top: { xs: '8%', md: '5%' },
            width: { xs: 360, md: 620 },
            height: { xs: 360, md: 620 },
            borderRadius: '50%',
            border: '1px solid rgba(255,214,102,0.18)',
            opacity: 0.7,
            willChange: 'transform',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 72,
              borderRadius: '50%',
              border: '1px solid rgba(125,249,255,0.14)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 142,
              borderRadius: '50%',
              border: '1px dashed rgba(255,255,255,0.14)',
            },
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1360px',
            mx: 'auto',
            px: { xs: 2.4, sm: 4, md: 7 },
            py: { xs: 6.5, md: 4 },
            minHeight: '100vh',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' },
            gap: { xs: 4, lg: 6 },
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <Stack
            component={motion.div}
            variants={containerReveal}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mb: 2.1, flexWrap: 'wrap', rowGap: 1 }}
              >
                <Chip
                  icon={<AutoAwesomeIcon />}
                  label="FULL STACK ENGINEERING"
                  sx={{
                    height: 34,
                    borderRadius: '8px',
                    color: '#050505',
                    bgcolor: '#FFD666',
                    fontSize: '0.78rem',
                    letterSpacing: '0.08em',
                    '& .MuiChip-icon': { color: '#050505' },
                  }}
                />

                <Chip
                  icon={<VerifiedIcon />}
                  label="Available for work"
                  sx={{
                    height: 34,
                    borderRadius: '8px',
                    color: '#D9F99D',
                    bgcolor: 'rgba(217,249,157,0.08)',
                    border: '1px solid rgba(217,249,157,0.22)',
                    fontSize: '0.78rem',
                    '& .MuiChip-icon': { color: '#D9F99D' },
                  }}
                />
              </Stack>
            </motion.div>

            {/* Name Typography */}
            <motion.div variants={fadeUp}>
              <Box sx={{ mb: { xs: 2.1, md: 2.4 } }}>
                <Typography
                  component="p"
                  sx={{
                    m: 0,
                    color: 'rgba(255,255,255,0.62)',
                    fontSize: { xs: '0.72rem', md: '0.88rem' },
                    letterSpacing: { xs: '0.18em', md: '0.32em' },
                    textTransform: 'uppercase',
                    mb: 0.4,
                  }}
                >
                  Software Engineer | Full Stack
                </Typography>

                <Typography
                  component={motion.h2}
                  animate={{ opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                  sx={{
                    m: 0,
                    fontSize: {
                      xs: '2.6rem',
                      sm: '4.6rem',
                      md: '6.1rem',
                      lg: '6.75rem',
                    },
                    lineHeight: 0.82,
                    letterSpacing: '-0.015em',
                    color: '#fff',
                    textTransform: 'uppercase',
                    textShadow: '0 20px 60px rgba(0,0,0,0.55)',
                    willChange: 'opacity',
                  }}
                >
                  MD. Arefin
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1.4}>
                  <Box
                    component={motion.div}
                    animate={{ scaleX: [0.72, 1, 0.72] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                    sx={{
                      width: { xs: 58, md: 98 },
                      height: 2,
                      transformOrigin: 'left center',
                      borderRadius: '8px',
                      background:
                        'linear-gradient(90deg, #FFD666, rgba(125,249,255,0.9))',
                      willChange: 'transform',
                    }}
                  />

                  <Typography
                    component="span"
                    sx={{
                      color: '#FFD666',
                      fontSize: {
                        xs: '2.45rem',
                        sm: '3.15rem',
                        md: '4rem',
                      },
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Reza
                  </Typography>
                </Stack>
              </Box>
            </motion.div>

            {/* Main Typography */}
            <motion.div variants={fadeUp}>
              <Typography
                component="h1"
                sx={{
                  maxWidth: 720,
                  mb: 2.2,
                  color: '#F8FAFC',
                  fontSize: {
                    xs: '1.75rem',
                    sm: '2.85rem',
                    md: '3.58rem',
                    lg: '3.98rem',
                  },
                  lineHeight: { xs: 1.08, md: 1.01 },
                  letterSpacing: '-0.018em',
                }}
              >
                Engineering full-stack
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    width: 'fit-content',
                    color: '#050505',
                    bgcolor: '#FFD666',
                    px: { xs: 1, md: 1.4 },
                    py: { xs: 0.15, md: 0.3 },
                    my: 0.45,
                    lineHeight: 0.95,
                    transform: 'skewX(-7deg)',
                    boxShadow: '12px 12px 0 rgba(125,249,255,0.12)',
                  }}
                >
                  products that scale
                </Box>
                with clear, reliable delivery.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography
                sx={{
                  maxWidth: 600,
                  color: '#B8C0CC',
                  fontSize: { xs: '0.98rem', md: '1.06rem' },
                  lineHeight: 1.72,
                  mb: 2.5,
                }}
              >
                I build secure, high-performing web applications with modern
                frontends, Laravel backends, and robust API design focused on
                reliability and measurable results.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 1.5,
                  py: 1,
                  mb: 2.8,
                  borderRadius: '8px',
                  bgcolor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.13)',
                  color: '#fff',
                  fontSize: { xs: '0.96rem', md: '1.06rem' },
                  maxWidth: '100%',
                  flexWrap: 'wrap',
                }}
              >
                <Box component="span" sx={{ color: '#FFD666', mr: 1 }}>
                  Specialized in
                </Box>
                <Typed
                  strings={[
                    'Product Engineering',
                    'React Applications',
                    'Vue Interfaces',
                    'Laravel APIs',
                    'System Design',
                    'API Architecture',
                  ]}
                  typeSpeed={54}
                  backSpeed={30}
                  loop
                />
              </Box>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  component={Link}
                  to="portfolio"
                  smooth
                  duration={500}
                  endIcon={<ArrowOutwardIcon />}
                  sx={{
                    px: 3.2,
                    py: 1.45,
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: '0.98rem',
                    color: '#050505',
                    bgcolor: '#FFD666',
                    boxShadow: '0 18px 46px rgba(255,214,102,0.22)',
                    transition: 'transform 220ms ease, background 220ms ease',
                    '&:hover': {
                      bgcolor: '#FFE08A',
                      transform: 'translate3d(0,-3px,0)',
                    },
                  }}
                >
                  View My Work
                </Button>

                <Button
                  component={Link}
                  to="contact"
                  smooth
                  duration={500}
                  endIcon={<RocketLaunchIcon />}
                  sx={{
                    px: 3.2,
                    py: 1.45,
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: '0.98rem',
                    color: '#fff',
                    bgcolor: 'rgba(255,255,255,0.075)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    transition: 'transform 220ms ease, background 220ms ease',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.13)',
                      transform: 'translate3d(0,-3px,0)',
                    },
                  }}
                >
                  Start a Project
                </Button>
              </Stack>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Stack direction="row" sx={{ mt: 3.2, flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      px: 1.35,
                      py: 0.75,
                      borderRadius: '8px',
                      color: '#DDE3EA',
                      fontSize: '0.82rem',
                      bgcolor: 'rgba(255,255,255,0.055)',
                      border: '1px solid rgba(255,255,255,0.11)',
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Stack>

          {/* Right Panel */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            sx={{ display: { xs: 'none', lg: 'block' }, position: 'relative' }}
          >
            <Box
              component={motion.div}
              animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              sx={{
                position: 'absolute',
                inset: -15,
                border: '1px solid rgba(255,214,102,0.16)',
                borderRadius: '8px',
                willChange: 'transform',
              }}
            />

            <Box
              sx={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                bgcolor: 'rgba(9,10,14,0.74)',
                border: '1px solid rgba(255,255,255,0.14)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 32px 90px rgba(0,0,0,0.52)',
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  px: 2.1,
                  py: 1.45,
                  bgcolor: 'rgba(255,255,255,0.055)',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Stack direction="row" spacing={0.8}>
                  {['#FF5F57', '#FFBD2E', '#28C840'].map((color, index) => (
                    <Box
                      key={color}
                      component={motion.div}
                      animate={{ scale: [1, 1.18, 1] }}
                      transition={{
                        duration: 2.4,
                        delay: index * 0.18,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: color,
                        willChange: 'transform',
                      }}
                    />
                  ))}
                </Stack>

                <Typography sx={{ color: '#98A2B3', fontSize: '0.8rem' }}>
                  arefin.interface
                </Typography>
              </Stack>

              <Box sx={{ p: 2.8 }}>
                <Typography
                  sx={{
                    color: '#FFD666',
                    fontSize: '0.78rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    mb: 1.1,
                  }}
                >
                  Engineering Status
                </Typography>

                <Typography
                  sx={{
                    fontSize: '2.15rem',
                    lineHeight: 1.08,
                    letterSpacing: '-0.015em',
                    mb: 2.1,
                    color: '#fff',
                  }}
                >
                  Reliable interfaces with performance and clarity.
                </Typography>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2.2 }} />

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 1,
                    mb: 2.4,
                  }}
                >
                  {metrics.map((item, index) => (
                    <Box
                      key={item.label}
                      component={motion.div}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.22 }}
                      sx={{
                        p: 1.55,
                        borderRadius: '8px',
                        bgcolor:
                          index === 0
                            ? 'rgba(255,214,102,0.11)'
                            : 'rgba(255,255,255,0.055)',
                        border:
                          index === 0
                            ? '1px solid rgba(255,214,102,0.2)'
                            : '1px solid rgba(255,255,255,0.1)',
                        willChange: 'transform',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '1.65rem',
                          color: '#fff',
                          lineHeight: 1,
                        }}
                      >
                        {item.value}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 0.7,
                          color: '#AAB2C0',
                          fontSize: '0.76rem',
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Stack spacing={1.2}>
                  {serviceCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      animate={{ x: [0, index % 2 === 0 ? 8 : -8, 0] }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                        sx={{
                          p: 1.6,
                          borderRadius: '8px',
                          bgcolor:
                            index === 1
                              ? 'rgba(255,214,102,0.1)'
                              : 'rgba(255,255,255,0.045)',
                          border:
                            index === 1
                              ? '1px solid rgba(255,214,102,0.22)'
                              : '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            borderRadius: '8px',
                            display: 'grid',
                            placeItems: 'center',
                            color: index === 1 ? '#FFD666' : '#9DECF9',
                            bgcolor: 'rgba(255,255,255,0.07)',
                            flexShrink: 0,
                          }}
                        >
                          {card.icon}
                        </Box>

                        <Box>
                          <Typography sx={{ fontWeight: 900, color: '#fff' }}>
                            {card.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: '#AAB2C0',
                              fontSize: '0.88rem',
                              lineHeight: 1.55,
                            }}
                          >
                            {card.text}
                          </Typography>
                        </Box>
                      </Stack>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          component={Link}
          to="about"
          smooth
          duration={500}
          sx={{
            position: 'absolute',
            left: '50%',
            bottom: 22,
            transform: 'translateX(-50%)',
            zIndex: 4,
            width: 42,
            height: 42,
            borderRadius: '8px',
            display: { xs: 'none', md: 'grid' },
            placeItems: 'center',
            color: '#FFD666',
            bgcolor: 'rgba(255,255,255,0.055)',
            border: '1px solid rgba(255,255,255,0.13)',
            cursor: 'pointer',
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
            style={{ willChange: 'transform' }}
          >
            <KeyboardDoubleArrowDownIcon />
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default Home;
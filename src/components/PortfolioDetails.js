import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Box,
  Stack,
  useMediaQuery,
  GlobalStyles,
  Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Home as HomeIcon } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';
import Carousel from 'react-material-ui-carousel';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { portfolioData } from './Api';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const accentColors = ['#F5C86A', '#67E8F9', '#A78BFA', '#34D399', '#FB7185'];

const PortfolioDetails = () => {
  const { id } = useParams();
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const service = portfolioData.find((service) => service.id === id);
    setSelectedService(service);
    if (service) {
      setActiveFilter(service.categories[0]);
    }
  }, [id]);

  if (!selectedService) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: '#030305',
          color: '#fff',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: '1.4rem', mb: 2, color: '#AAB8C7' }}>
            Project not found.
          </Typography>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: '#F5C86A',
              fontSize: '1rem',
            }}
          >
            ← Return to Home
          </Link>
        </Box>
      </Box>
    );
  }

  const handleFilter = (category) => {
    setActiveFilter(category);
  };

  const projectIndex = portfolioData.findIndex((p) => p.id === selectedService.id);
  const accent = accentColors[projectIndex % accentColors.length];

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
        }}
      />

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          color: '#F8FAFC',
          fontFamily: '"SlitoRegular", Inter, ui-sans-serif, system-ui, sans-serif',
          background: `
            radial-gradient(circle at 22% 12%, rgba(103,232,249,0.14), transparent 28%),
            radial-gradient(circle at 78% 20%, rgba(245,200,106,0.12), transparent 30%),
            radial-gradient(circle at 50% 90%, rgba(167,139,250,0.1), transparent 34%),
            linear-gradient(180deg, #020617 0%, #031322 48%, #010711 100%)
          `,
        }}
      >
        {/* Grid Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px)
            `,
            backgroundSize: { xs: '54px 54px', md: '86px 86px' },
            opacity: 0.28,
            pointerEvents: 'none',
          }}
        />

        {/* Decorative circle */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: '-55%', md: '-10%' },
            top: { xs: '8%', md: '5%' },
            width: { xs: 360, md: 620 },
            height: { xs: 360, md: 620 },
            borderRadius: '50%',
            border: '1px solid rgba(103,232,249,0.14)',
            opacity: 0.7,
            pointerEvents: 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 80,
              borderRadius: '50%',
              border: '1px dashed rgba(255,209,102,0.12)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 170,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.08)',
            },
          }}
        />

        {/* Left decorative shape */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '-20%', md: '2%' },
            bottom: '12%',
            width: { xs: 200, md: 300 },
            height: { xs: 200, md: 300 },
            borderRadius: '28px',
            transform: 'rotate(18deg)',
            background: 'linear-gradient(135deg, rgba(103,232,249,0.08), rgba(255,255,255,0.02))',
            border: '1px solid rgba(103,232,249,0.08)',
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1200px',
            mx: 'auto',
            px: { xs: 2.2, md: 5 },
            py: { xs: 4, md: 6 },
          }}
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mb: 4, flexWrap: 'wrap' }}
            >
              <Link
                to="/"
                style={{ textDecoration: 'none', color: '#AAB8C7', display: 'flex', alignItems: 'center', gap: 4 }}
              >
                <HomeIcon fontSize="small" sx={{ color: '#67E8F9' }} />
                <Typography sx={{ fontSize: '0.88rem', color: '#AAB8C7', '&:hover': { color: '#67E8F9' } }}>
                  Home
                </Typography>
              </Link>
              <ArrowBackIosIcon sx={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }} />
              <Typography sx={{ fontSize: '0.88rem', color: '#AAB8C7' }}>
                Portfolio
              </Typography>
              <ArrowBackIosIcon sx={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }} />
              <Typography sx={{ fontSize: '0.88rem', color: accent }}>
                {selectedService.title}
              </Typography>
            </Stack>
          </motion.div>

          {/* Header */}
          <Box
            component={motion.div}
            variants={containerReveal}
            initial="hidden"
            animate="show"
            sx={{ mb: 5 }}
          >
            <motion.div variants={fadeUp}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  display: 'inline-flex',
                  px: 1.5,
                  py: 0.85,
                  mb: 2,
                  color: '#67E8F9',
                  bgcolor: 'rgba(103,232,249,0.08)',
                  border: '1px solid rgba(103,232,249,0.18)',
                  borderRadius: '999px',
                }}
              >
                <LayersIcon sx={{ fontSize: 18 }} />
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.22em',
                    fontWeight: 900,
                  }}
                >
                  PROJECT SHOWCASE
                </Typography>
              </Stack>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontSize: { xs: '2.6rem', sm: '3.8rem', md: '5rem' },
                  lineHeight: 0.88,
                  fontWeight: 950,
                  textTransform: 'uppercase',
                  textShadow: '0 18px 40px rgba(6,182,212,0.14)',
                }}
              >
                {selectedService.title.split(' ').slice(0, -1).join(' ')}
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    color: '#FFD166',
                    fontSize: { xs: '2rem', sm: '2.8rem', md: '3.6rem' },
                    letterSpacing: '-0.035em',
                    mt: 0.5,
                  }}
                >
                  {selectedService.title.split(' ').slice(-1)[0]}
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Typography
                sx={{
                  color: '#B7C8D9',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.78,
                  maxWidth: 720,
                  mt: 2,
                }}
              >
                {selectedService.description}
              </Typography>
            </motion.div>

            {selectedService.category && (
              <motion.div variants={fadeUp}>
                <Box
                  sx={{
                    display: 'inline-block',
                    mt: 2,
                    px: 1.5,
                    py: 0.6,
                    borderRadius: '8px',
                    color: accent,
                    bgcolor: `${accent}14`,
                    border: `1px solid ${accent}30`,
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                  }}
                >
                  {selectedService.category}
                </Box>
              </motion.div>
            )}
          </Box>

          {/* Filter Tabs */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}
            >
              {selectedService.categories.map((category, index) => {
                const isActive = activeFilter?.name === category.name;
                return (
                  <Box
                    key={index}
                    onClick={() => handleFilter(category)}
                    sx={{
                      cursor: 'pointer',
                      px: 2,
                      py: 1,
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      color: isActive ? '#050505' : '#DDE3EA',
                      bgcolor: isActive ? accent : 'rgba(255,255,255,0.055)',
                      border: isActive
                        ? `1px solid ${accent}`
                        : '1px solid rgba(255,255,255,0.11)',
                      transition: 'all 220ms ease',
                      '&:hover': {
                        bgcolor: isActive ? accent : 'rgba(255,255,255,0.1)',
                        transform: 'translate3d(0,-2px,0)',
                      },
                    }}
                  >
                    {category.name}
                  </Box>
                );
              })}
            </Stack>
          </motion.div>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />

          {/* Content Area */}
          <Box
            component={motion.div}
            key={activeFilter?.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    p: { xs: 2, md: 2.8 },
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))',
                    border: '1px solid rgba(255,255,255,0.11)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.26)',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#67E8F9',
                      fontSize: '0.76rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      mb: 1.2,
                    }}
                  >
                    Tech Stack
                  </Typography>

                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      fontWeight: 950,
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      mb: 1.5,
                    }}
                  >
                    {activeFilter?.name}
                  </Typography>

                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 1.5 }} />

                  <Typography
                    sx={{
                      color: '#B7C8D9',
                      fontSize: '0.98rem',
                      lineHeight: 1.78,
                    }}
                  >
                    {activeFilter?.description}
                  </Typography>

                  {/* Decorative stat */}
                  <Box
                    sx={{
                      mt: 2.5,
                      p: 1.5,
                      borderRadius: '14px',
                      bgcolor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '10px',
                        display: 'grid',
                        placeItems: 'center',
                        color: accent,
                        bgcolor: `${accent}14`,
                      }}
                    >
                      <AutoAwesomeIcon sx={{ fontSize: 18 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#fff', fontSize: '0.92rem', fontWeight: 700 }}>
                        {activeFilter?.images?.length || 0} Screenshots
                      </Typography>
                      <Typography sx={{ color: '#9FB0C2', fontSize: '0.78rem' }}>
                        Live preview gallery
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    bgcolor: 'rgba(9,10,14,0.74)',
                  }}
                >
                  {/* Browser bar */}
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      px: 2,
                      py: 1.2,
                      bgcolor: 'rgba(255,255,255,0.055)',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Stack direction="row" spacing={0.8}>
                      {['#FF5F57', '#FFBD2E', '#28C840'].map((color) => (
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
                    <Typography sx={{ color: '#98A2B3', fontSize: '0.78rem' }}>
                      {selectedService.title.toLowerCase().replace(/\s+/g, '-')}.preview
                    </Typography>
                  </Stack>

                  <Carousel
                    animation="fade"
                    duration={600}
                    navButtonsAlwaysVisible={!isMobile}
                    indicatorContainerProps={{
                      style: { marginTop: '12px', marginBottom: '12px' },
                    }}
                    indicatorIconButtonProps={{
                      style: { color: 'rgba(255,255,255,0.2)' },
                    }}
                    activeIndicatorIconButtonProps={{
                      style: { color: accent },
                    }}
                    navButtonsProps={{
                      style: {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        borderRadius: '8px',
                      },
                    }}
                  >
                    {activeFilter?.images?.map((image, index) => (
                      <Box
                        key={index}
                        component="img"
                        src={image}
                        alt={`${selectedService.title} - ${activeFilter?.name}`}
                        sx={{
                          width: '100%',
                          height: { xs: 250, md: 400 },
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    ))}
                  </Carousel>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default PortfolioDetails;

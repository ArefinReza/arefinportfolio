import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
  Grid,
  GlobalStyles,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BoltIcon from '@mui/icons-material/Bolt';
import { useNavigate } from 'react-router-dom';
import '../assets/css/services.css';

import { services } from './Api';

function useVisibleOnce(threshold = 0.16) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -70px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, threshold]);

  return [ref, visible];
}

function ServiceRow({ service, index, onClick }) {
  const [ref, visible] = useVisibleOnce(0.18);

  const accents = ['#F5C86A', '#67E8F9', '#A78BFA', '#34D399', '#FB7185'];
  const accent = accents[index % accents.length];

  return (
    <Card
      ref={ref}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter') onClick();
      }}
      sx={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '18px',
        background:
          index === 0
            ? 'linear-gradient(135deg, rgba(245,200,106,0.14), rgba(255,255,255,0.04))'
            : 'linear-gradient(135deg, rgba(255,255,255,0.078), rgba(255,255,255,0.026))',
        border:
          index === 0
            ? '1px solid rgba(245,200,106,0.28)'
            : '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 22px 65px rgba(0,0,0,0.22)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,26px,0)',
        transition: `opacity 600ms ease ${index * 60}ms, transform 600ms ease ${index * 60}ms, border-color 220ms ease, background 220ms ease`,
        willChange: 'transform, opacity',
        '&:hover': {
          transform: 'translate3d(0,-5px,0)',
          borderColor: `${accent}70`,
          '& .serviceIndex': {
            color: accent,
            WebkitTextStroke: `1px ${accent}`,
          },
          '& .serviceIcon': {
            bgcolor: accent,
            color: '#07111F',
            transform: 'rotate(-4deg)',
          },
          '& .serviceArrow': {
            opacity: 1,
            transform: 'translate3d(0,0,0)',
          },
        },
      }}
    >
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={2.2}>
          <Box
            sx={{
              height: '100%',
              minHeight: { xs: 92, md: 170 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'space-between', md: 'center' },
              px: { xs: 2, md: 1 },
              py: { xs: 1.6, md: 0 },
              borderRight: { md: '1px solid rgba(255,255,255,0.08)' },
              borderBottom: { xs: '1px solid rgba(255,255,255,0.08)', md: 'none' },
            }}
          >
            <Typography
              className="serviceIndex"
              sx={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.28)',
                fontSize: { xs: '3.4rem', md: '4.6rem' },
                lineHeight: 0.8,
                fontWeight: 950,
                letterSpacing: '-0.08em',
                transition: 'color 220ms ease, -webkit-text-stroke 220ms ease',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </Typography>

            <IconButton
              className="serviceIcon"
              sx={{
                display: { xs: 'grid', md: 'none' },
                width: 54,
                height: 54,
                borderRadius: '15px',
                color: accent,
                bgcolor: `${accent}14`,
                border: `1px solid ${accent}38`,
                transition: 'transform 220ms ease, background 220ms ease, color 220ms ease',
                '& svg': { fontSize: 27 },
              }}
            >
              {service.icon}
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} md={9.8}>
          <CardContent sx={{ p: { xs: 2.1, md: 2.6 } }}>
            <Stack direction="row" spacing={2.2} alignItems="flex-start">
              <IconButton
                className="serviceIcon"
                sx={{
                  display: { xs: 'none', md: 'grid' },
                  width: 62,
                  height: 62,
                  flexShrink: 0,
                  borderRadius: '18px',
                  color: accent,
                  bgcolor: `${accent}14`,
                  border: `1px solid ${accent}38`,
                  transition: 'transform 220ms ease, background 220ms ease, color 220ms ease',
                  '& svg': { fontSize: 31 },
                }}
              >
                {service.icon}
              </IconButton>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ mb: 1 }}>
                  <Typography
                    sx={{
                      color: accent,
                      fontSize: '0.74rem',
                      letterSpacing: '0.22em',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                    }}
                  >
                    Service Area
                  </Typography>

                  <ArrowOutwardIcon
                    className="serviceArrow"
                    sx={{
                      color: accent,
                      fontSize: 22,
                      opacity: 0,
                      transform: 'translate3d(-7px,7px,0)',
                      transition: 'opacity 220ms ease, transform 220ms ease',
                    }}
                  />
                </Stack>

                <Typography
                  component="h3"
                  sx={{
                    color: '#fff',
                    fontSize: { xs: '1.55rem', md: '2.05rem' },
                    lineHeight: 1.02,
                    fontWeight: 950,
                    letterSpacing: '-0.04em',
                    mb: 1.2,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    color: '#AAB8C7',
                    fontSize: '0.98rem',
                    lineHeight: 1.75,
                    maxWidth: 680,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

function Services() {
  const navigate = useNavigate();
  const [headerRef, headerVisible] = useVisibleOnce(0.2);

  const handleServiceClick = (id) => {
    navigate(`/services/${id}`);
  };

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
        id="services"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          px: { xs: 2.2, md: 5 },
          py: { xs: 8, md: 12 },
          color: '#f1f5f9',
          fontFamily: '"SlitoRegular", var(--font-body), sans-serif',
          background: `
            radial-gradient(circle at 18% 8%, rgba(245,200,106,0.14), transparent 28%),
            radial-gradient(circle at 82% 18%, rgba(103,232,249,0.13), transparent 30%),
            radial-gradient(circle at 50% 100%, rgba(167,139,250,0.1), transparent 34%),
            linear-gradient(180deg, #020617 0%, #06111f 48%, #010611 100%)
          `,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px)
            `,
            backgroundSize: { xs: '54px 54px', md: '86px 86px' },
            opacity: 0.32,
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '1200px', mx: 'auto' }}>
          <Grid
            ref={headerRef}
            container
            spacing={{ xs: 3, md: 5 }}
            alignItems="end"
            sx={{
              mb: 5,
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translate3d(0,0,0)' : 'translate3d(0,28px,0)',
              transition: 'opacity 700ms ease, transform 700ms ease',
              willChange: 'transform, opacity',
            }}
          >
            <Grid item xs={12} md={7.2}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  display: 'inline-flex',
                  px: 1.5,
                  py: 0.85,
                  mb: 1.8,
                  color: '#F5C86A',
                  bgcolor: 'rgba(245,200,106,0.1)',
                  border: '1px solid rgba(245,200,106,0.26)',
                  borderRadius: '8px',
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 18 }} />
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.22em',
                    fontWeight: 900,
                  }}
                >
                  SOFTWARE SERVICES
                </Typography>
              </Stack>

              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontSize: { xs: '3.05rem', sm: '4.5rem', md: '6.3rem' },
                  lineHeight: 0.84,
                  fontWeight: 950,
                  textTransform: 'uppercase',
                  textShadow: '0 28px 80px rgba(0,0,0,0.46)',
                }}
              >
                Service
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    mt: 0.8,
                    color: 'transparent',
                    WebkitTextStroke: {
                      xs: '1px #F5C86A',
                      md: '1.5px #F5C86A',
                    },
                    textShadow: 'none',
                    fontSize: { xs: '2.45rem', sm: '3.5rem', md: '4.7rem' },
                  }}
                >
                  Catalog
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={12} md={4.8}>
              <Box
                sx={{
                  p: { xs: 2, md: 2.4 },
                  borderRadius: '18px',
                  bgcolor: 'rgba(255,255,255,0.055)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.2} sx={{ mb: 1.5 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '14px',
                      display: 'grid',
                      placeItems: 'center',
                      color: '#07111F',
                      bgcolor: '#F5C86A',
                    }}
                  >
                    <BoltIcon />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#fff', fontSize: '1.15rem', fontWeight: 950 }}>
                      Built to deliver
                    </Typography>
                    <Typography sx={{ color: '#9FB0C2', fontSize: '0.9rem' }}>
                      Reliable, scalable, on time
                    </Typography>
                  </Box>
                </Stack>

                <Typography sx={{ color: '#B7C8D9', fontSize: '1rem', lineHeight: 1.72 }}>
                  Each service combines clear UI, scalable engineering, and
                  delivery practices that keep quality consistent.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Stack spacing={2.1}>
            {services.map((service, index) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={index}
                onClick={() => handleServiceClick(service.id)}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Services;
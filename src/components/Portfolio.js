import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Stack,
  Button,
  ButtonBase,
  GlobalStyles,
} from '@mui/material';

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GridViewIcon from '@mui/icons-material/GridView';
import LayersIcon from '@mui/icons-material/Layers';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { useNavigate } from 'react-router-dom';
import '../assets/css/portfolio.css';
import { portfolioData } from './Api';

function useVisibleOnce(threshold = 0.16, rootMargin = '0px 0px -70px 0px') {
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
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, threshold, rootMargin]);

  return [ref, visible];
}

function PortfolioCard({ item, index, onOpen }) {
  const [cardRef, visible] = useVisibleOnce(0.18);

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <ButtonBase
        ref={cardRef}
        onClick={() => onOpen(item.id)}
        className="portfolioItem"
        sx={{
          position: 'relative',
          display: 'block',
          width: '100%',
          height: '100%',
          minHeight: { xs: 330, md: 380 },
          textAlign: 'left',
          overflow: 'hidden',
          borderRadius: '8px',
          isolation: 'isolate',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.13)',
          background: '#070B12',
          boxShadow: `
            0 26px 70px rgba(0,0,0,0.34),
            inset 0 1px 0 rgba(255,255,255,0.1)
          `,
          opacity: visible ? 1 : 0,
          transform: visible
            ? 'translate3d(0,0,0)'
            : 'translate3d(0,26px,0)',
          transition: `opacity 560ms ease ${index * 55}ms, transform 560ms ease ${index * 55}ms, border-color 220ms ease`,
          willChange: 'transform, opacity',
          clipPath:
            'polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 26px 100%, 0 calc(100% - 26px))',
          '&:hover': {
            transform: 'translate3d(0,-7px,0)',
            borderColor: 'rgba(245,200,106,0.72)',
          },
          '&:hover .portfolioImage': {
            transform: 'scale3d(1.045,1.045,1)',
          },
          '&:hover .portfolioShade': {
            opacity: 0.86,
          },
          '&:hover .portfolioAction': {
            transform: 'translate3d(0,0,0)',
            opacity: 1,
          },
          '&:hover .portfolioNumber': {
            color: '#F5C86A',
          },
        }}
      >
        <Box
          component="img"
          src={item.imageUrl}
          alt={item.title}
          className="portfolioImage"
          loading="lazy"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale3d(1,1,1)',
            transition: 'transform 520ms ease',
            willChange: 'transform',
          }}
        />

        <Box
          className="portfolioShade"
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0.72,
            transition: 'opacity 260ms ease',
            background: `
              linear-gradient(180deg, rgba(3,5,10,0.12) 0%, rgba(3,5,10,0.48) 46%, rgba(3,5,10,0.95) 100%),
              linear-gradient(90deg, rgba(3,5,10,0.72), transparent 58%)
            `,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            inset: 14,
            border: '1px solid rgba(255,255,255,0.16)',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        />

        <Typography
          className="portfolioNumber"
          sx={{
            position: 'absolute',
            top: 22,
            left: 22,
            color: 'rgba(255,255,255,0.68)',
            fontSize: '0.78rem',
            fontWeight: 900,
            letterSpacing: '0.16em',
            transition: 'color 220ms ease',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </Typography>

        <Box
          sx={{
            position: 'absolute',
            top: 18,
            right: 18,
            width: 42,
            height: 42,
            display: 'grid',
            placeItems: 'center',
            color: '#07101D',
            bgcolor: '#F5C86A',
            borderRadius: '8px',
            boxShadow: '0 16px 34px rgba(245,200,106,0.22)',
          }}
        >
          <ArrowOutwardIcon sx={{ fontSize: 21 }} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            left: 22,
            right: 22,
            bottom: 22,
          }}
        >
          <Typography
            sx={{
              display: 'inline-flex',
              mb: 1.4,
              px: 1.15,
              py: 0.55,
              color: '#F5C86A',
              bgcolor: 'rgba(245,200,106,0.11)',
              border: '1px solid rgba(245,200,106,0.32)',
              borderRadius: '8px',
              fontSize: '0.72rem',
              fontWeight: 900,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            {item.category}
          </Typography>

          <Typography
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '1.5rem', md: '1.72rem' },
              lineHeight: 1.05,
              fontWeight: 950,
              wordBreak: 'break-word',
            }}
          >
            {item.title}
          </Typography>

          <Stack
            className="portfolioAction"
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              mt: 1.8,
              color: '#DCE8F5',
              opacity: { xs: 1, md: 0 },
              transform: {
                xs: 'translate3d(0,0,0)',
                md: 'translate3d(0,10px,0)',
              },
              transition: 'opacity 240ms ease, transform 240ms ease',
            }}
          >
            <Typography
              sx={{
                fontSize: '0.9rem',
                fontWeight: 800,
              }}
            >
              View details
            </Typography>
            <ArrowOutwardIcon sx={{ fontSize: 17 }} />
          </Stack>
        </Box>
      </ButtonBase>
    </Grid>
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(portfolioData.map((item) => item.category))
    );

    return ['All', ...uniqueCategories];
  }, []);

  const filteredData = useMemo(() => {
    if (activeFilter === 'All') return portfolioData;
    return portfolioData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handlePortfolioClick = (id) => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <>
      <GlobalStyles
        styles={{
          '@media (prefers-reduced-motion: reduce)': {
            '*': {
              animationDuration: '0.001ms !important',
              animationIterationCount: '1 !important',
              transitionDuration: '0.001ms !important',
              scrollBehavior: 'auto !important',
            },
          },
        }}
      />

      <Box
        id="portfolio"
        className="portfolioSection"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          px: { xs: 2.2, md: 5 },
          py: { xs: 8, md: 12 },
          color: '#F4F7FB',
          background: `
            linear-gradient(120deg, rgba(245,200,106,0.14), transparent 25%),
            linear-gradient(245deg, rgba(118,228,247,0.12), transparent 28%),
            linear-gradient(180deg, #05070C 0%, #080D16 52%, #03050A 100%)
          `,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.48,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(135deg, transparent 0 48%, rgba(245,200,106,0.05) 48% 49%, transparent 49% 100%)
            `,
            backgroundSize: {
              xs: '42px 42px, 42px 42px, 120px 120px',
              md: '72px 72px, 72px 72px, 190px 190px',
            },
            maskImage:
              'linear-gradient(180deg, transparent 0%, black 13%, black 87%, transparent 100%)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: { xs: 88, md: 112 },
            right: { xs: -96, md: 48 },
            width: { xs: 230, md: 360 },
            height: { xs: 230, md: 360 },
            pointerEvents: 'none',
            opacity: 0.42,
            border: '1px solid rgba(245,200,106,0.34)',
            background: `
              linear-gradient(90deg, rgba(245,200,106,0.26) 1px, transparent 1px),
              linear-gradient(rgba(118,228,247,0.22) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            transform: 'rotate(7deg)',
            clipPath:
              'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            left: { xs: -110, md: 38 },
            bottom: { xs: 120, md: 170 },
            width: { xs: 220, md: 300 },
            height: { xs: 220, md: 300 },
            pointerEvents: 'none',
            opacity: 0.28,
            border: '1px solid rgba(255,255,255,0.22)',
            background: `
              linear-gradient(135deg, rgba(184,156,255,0.22), transparent 46%),
              linear-gradient(45deg, transparent 0 48%, rgba(94,231,168,0.32) 48% 49%, transparent 49% 100%)
            `,
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 1180,
            mx: 'auto',
          }}
        >
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            alignItems="end"
            sx={{ mb: { xs: 4.5, md: 6 } }}
          >
            <Grid item xs={12} md={7}>
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
                  SELECTED PROJECTS
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
                Project
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
                  Portfolio
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  p: { xs: 2, md: 2.25 },
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.13)',
                  background: `
                    linear-gradient(135deg, rgba(255,255,255,0.105), rgba(255,255,255,0.025)),
                    linear-gradient(90deg, rgba(245,200,106,0.1), transparent)
                  `,
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <Typography
                  sx={{
                    color: '#B9C6D4',
                    fontSize: { xs: '1rem', md: '1.06rem' },
                    lineHeight: 1.8,
                  }}
                >
                  A curated selection of web applications, dashboards, and
                  product interfaces delivered for clients.
                </Typography>

                <Stack direction="row" spacing={1.4} sx={{ mt: 2.2 }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ color: '#F5C86A' }}
                  >
                    <GridViewIcon sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: '0.88rem', fontWeight: 900 }}>
                      {portfolioData.length} Works
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ color: '#76E4F7' }}
                  >
                    <LayersIcon sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: '0.88rem', fontWeight: 900 }}>
                      {categories.length - 1} Categories
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              mb: 2,
              color: '#DDE8F5',
            }}
          >
            <FilterAltIcon sx={{ fontSize: 18, color: '#F5C86A' }} />
            <Typography
              sx={{
                fontSize: '0.78rem',
                fontWeight: 900,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Filter Projects
            </Typography>
          </Stack>

          <Box
            className="filterOptions"
            sx={{
              display: 'flex',
              gap: 1.1,
              mb: { xs: 3.5, md: 5 },
              flexWrap: 'wrap',
              p: 1,
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.11)',
              background: 'rgba(255,255,255,0.035)',
            }}
          >
            {categories.map((category) => {
              const active = activeFilter === category;

              return (
                <Button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`filterItem ${active ? 'active' : ''}`}
                  sx={{
                    minHeight: 40,
                    px: 1.8,
                    borderRadius: '8px',
                    color: active ? '#05070C' : '#CBD5E1',
                    bgcolor: active ? '#F5C86A' : 'rgba(255,255,255,0.04)',
                    border: '1px solid',
                    borderColor: active
                      ? '#F5C86A'
                      : 'rgba(255,255,255,0.11)',
                    textTransform: 'none',
                    fontSize: '0.86rem',
                    fontWeight: 900,
                    transition:
                      'background 220ms ease, color 220ms ease, border-color 220ms ease, transform 220ms ease',
                    '&:hover': {
                      bgcolor: active ? '#FFE09A' : 'rgba(245,200,106,0.1)',
                      borderColor: '#F5C86A',
                      color: active ? '#05070C' : '#FFFFFF',
                      transform: 'translate3d(0,-2px,0)',
                    },
                  }}
                >
                  {category}
                </Button>
              );
            })}
          </Box>

          <Grid container spacing={{ xs: 2, md: 2.4 }}>
            {filteredData.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                onOpen={handlePortfolioClick}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Portfolio;
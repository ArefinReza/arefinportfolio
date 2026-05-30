import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  GlobalStyles,
} from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VerifiedIcon from '@mui/icons-material/Verified';
import TimelineIcon from '@mui/icons-material/Timeline';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import '../assets/css/resume.css';

import {
  educationData,
  certificationData,
  experienceData,
  coursesData,
} from './Api';

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

const sectionList = [
  {
    title: 'Education',
    eyebrow: 'Education Background',
    icon: <SchoolIcon />,
    data: educationData,
    accent: '#76E4F7',
    accentDeep: '#164E63',
    soft: 'rgba(118,228,247,0.12)',
    type: 'degree',
    org: 'institution',
  },
  {
    title: 'Experience',
    eyebrow: 'Professional Experience',
    icon: <WorkIcon />,
    data: experienceData,
    accent: '#F5C86A',
    accentDeep: '#6B4E16',
    soft: 'rgba(245,200,106,0.13)',
    type: 'title',
    org: 'company',
  },
  {
    title: 'Certification',
    eyebrow: 'Certifications',
    icon: <VerifiedIcon />,
    data: certificationData,
    accent: '#B89CFF',
    accentDeep: '#4C1D95',
    soft: 'rgba(184,156,255,0.13)',
    type: 'title',
    org: 'company',
  },
  {
    title: 'Courses',
    eyebrow: 'Professional Development',
    icon: <AutoAwesomeIcon />,
    data: coursesData,
    accent: '#5EE7A8',
    accentDeep: '#14532D',
    soft: 'rgba(94,231,168,0.12)',
    type: 'title',
    org: 'company',
  },
];

function ResumeCard({ item, index, accent, accentDeep, soft, type, org }) {
  const [cardRef, visible] = useVisibleOnce(0.2);

  return (
    <Grid item xs={12} md={6}>
      <Box
        ref={cardRef}
        sx={{
          position: 'relative',
          height: '100%',
          minHeight: 248,
          p: { xs: 2.4, md: 2.8 },
          overflow: 'hidden',
          borderRadius: '8px',
          isolation: 'isolate',
          background: `
            linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035) 46%, rgba(255,255,255,0.07)),
            linear-gradient(180deg, rgba(7,11,20,0.92), rgba(8,13,24,0.98))
          `,
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: `
            0 26px 70px rgba(0,0,0,0.34),
            inset 0 1px 0 rgba(255,255,255,0.11)
          `,
          opacity: visible ? 1 : 0,
          transform: visible
            ? 'translate3d(0,0,0)'
            : 'translate3d(0,24px,0)',
          transition: `opacity 560ms ease ${index * 70}ms, transform 560ms ease ${index * 70}ms, border-color 220ms ease`,
          willChange: 'transform, opacity',
          clipPath:
            'polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 26px 100%, 0 calc(100% - 26px))',
          '&:hover': {
            transform: 'translate3d(0,-7px,0)',
            borderColor: `${accent}88`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            background: `
              linear-gradient(90deg, ${soft}, transparent 45%),
              linear-gradient(135deg, transparent 0 64%, ${soft} 64% 65%, transparent 65%)
            `,
            opacity: 0.95,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: 96,
            height: 96,
            background: `
              linear-gradient(135deg, ${accent} 0 2px, transparent 2px),
              linear-gradient(225deg, ${accent} 0 2px, transparent 2px)
            `,
            opacity: 0.48,
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Stack direction="row" spacing={1.2} alignItems="center">
            <Box
              sx={{
                width: 42,
                height: 42,
                display: 'grid',
                placeItems: 'center',
                color: accent,
                bgcolor: soft,
                border: `1px solid ${accent}55`,
                borderRadius: '8px',
              }}
            >
              <NorthEastIcon sx={{ fontSize: 20 }} />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.52)',
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                }}
              >
                Record
              </Typography>

              <Typography
                sx={{
                  color: accent,
                  fontSize: '0.88rem',
                  fontWeight: 800,
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </Typography>
            </Box>
          </Stack>

          <Typography
            sx={{
              color: '#07101D',
              bgcolor: accent,
              px: 1.2,
              py: 0.55,
              borderRadius: '8px',
              fontSize: '0.76rem',
              fontWeight: 900,
              boxShadow: `0 12px 32px ${soft}`,
            }}
          >
            {item.year}
          </Typography>
        </Stack>

        <Typography
          sx={{
            mt: 2.6,
            color: '#FFFFFF',
            fontSize: { xs: '1.38rem', md: '1.62rem' },
            lineHeight: 1.08,
            fontWeight: 900,
            wordBreak: 'break-word',
          }}
        >
          {item[type]}
        </Typography>

        <Typography
          sx={{
            mt: 1.1,
            color: '#D8E5F2',
            fontSize: '1rem',
            fontWeight: 600,
          }}
        >
          {item[org]}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '52px 1fr',
            gap: 1.3,
            alignItems: 'center',
            my: 1.9,
          }}
        >
          <Box sx={{ height: 2, bgcolor: accent }} />
          <Box
            sx={{
              height: 1,
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.24), transparent)',
            }}
          />
        </Box>

        <Typography
          sx={{
            color: '#AEBFD0',
            fontSize: '0.95rem',
            lineHeight: 1.78,
          }}
        >
          {item.description}
        </Typography>

        <Box
          sx={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '46%',
            height: 4,
            bgcolor: accentDeep,
          }}
        />
      </Box>
    </Grid>
  );
}

function ResumeCategory({ section, index }) {
  const [categoryRef, visible] = useVisibleOnce(0.14);

  return (
    <Box
      ref={categoryRef}
      sx={{
        position: 'relative',
        mt: index === 0 ? 0 : { xs: 5.5, md: 7 },
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,28px,0)',
        transition: 'opacity 620ms ease, transform 620ms ease',
        willChange: 'transform, opacity',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'flex-end' }}
        spacing={2}
        sx={{
          mb: 2.5,
          p: { xs: 2, md: 2.2 },
          borderRadius: '8px',
          background: `
            linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.025)),
            linear-gradient(90deg, ${section.soft}, transparent 56%)
          `,
          border: '1px solid rgba(255,255,255,0.13)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 60,
              height: 60,
              display: 'grid',
              placeItems: 'center',
              color: '#05070C',
              bgcolor: section.accent,
              borderRadius: '8px',
              boxShadow: `0 18px 45px ${section.soft}`,
              '& svg': { fontSize: 29 },
            }}
          >
            {section.icon}
          </Box>

          <Box>
            <Typography
              sx={{
                color: section.accent,
                fontSize: '0.74rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                mb: 0.6,
                fontWeight: 800,
              }}
            >
              {section.eyebrow}
            </Typography>

            <Typography
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '2rem', md: '2.9rem' },
                lineHeight: 0.95,
                fontWeight: 950,
              }}
            >
              {section.title}
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            px: 1.35,
            py: 0.85,
            color: section.accent,
            bgcolor: 'rgba(0,0,0,0.2)',
            border: `1px solid ${section.accent}45`,
            borderRadius: '8px',
          }}
        >
          <TimelineIcon sx={{ fontSize: 18 }} />
          <Typography sx={{ fontSize: '0.86rem', fontWeight: 800 }}>
            {String(section.data.length).padStart(2, '0')} records
          </Typography>
        </Stack>
      </Stack>

      <Grid container spacing={2.2}>
        {section.data.map((item, itemIndex) => (
          <ResumeCard
            key={`${section.title}-${itemIndex}`}
            item={item}
            index={itemIndex}
            accent={section.accent}
            accentDeep={section.accentDeep}
            soft={section.soft}
            type={section.type}
            org={section.org}
          />
        ))}
      </Grid>
    </Box>
  );
}

function Resume() {
  const [headerRef, headerVisible] = useVisibleOnce(0.2);

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
        id="resume"
        className="resumeSection"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          px: { xs: 2.2, md: 5 },
          py: { xs: 8, md: 12 },
          color: '#F4F7FB',
          fontFamily: '"SlitoRegular", var(--font-body), sans-serif',
          background: `
            linear-gradient(115deg, rgba(118,228,247,0.12), transparent 24%),
            linear-gradient(245deg, rgba(245,200,106,0.13), transparent 26%),
            linear-gradient(180deg, #05070C 0%, #080D16 48%, #03050A 100%)
          `,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px),
              linear-gradient(135deg, transparent 0 48%, rgba(245,200,106,0.045) 48% 49%, transparent 49% 100%)
            `,
            backgroundSize: {
              xs: '42px 42px, 42px 42px, 120px 120px',
              md: '72px 72px, 72px 72px, 180px 180px',
            },
            opacity: 0.5,
            maskImage:
              'linear-gradient(180deg, transparent 0%, black 14%, black 86%, transparent 100%)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: { xs: 90, md: 104 },
            right: { xs: -90, md: 52 },
            width: { xs: 220, md: 340 },
            height: { xs: 220, md: 340 },
            pointerEvents: 'none',
            opacity: 0.55,
            background: `
              linear-gradient(90deg, rgba(118,228,247,0.34) 1px, transparent 1px),
              linear-gradient(rgba(245,200,106,0.28) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            transform: 'rotate(8deg)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            left: { xs: -120, md: 36 },
            top: { xs: 500, md: 430 },
            width: { xs: 240, md: 310 },
            height: { xs: 240, md: 310 },
            pointerEvents: 'none',
            opacity: 0.34,
            border: '1px solid rgba(255,255,255,0.22)',
            background: `
              linear-gradient(135deg, rgba(184,156,255,0.22), transparent 46%),
              linear-gradient(45deg, transparent 0 48%, rgba(94,231,168,0.38) 48% 49%, transparent 49% 100%)
            `,
            clipPath:
              'polygon(16% 0, 100% 0, 100% 84%, 84% 100%, 0 100%, 0 16%)',
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1180px',
            mx: 'auto',
          }}
        >
          <Stack
            ref={headerRef}
            alignItems="center"
            sx={{
              mb: { xs: 5.5, md: 7.5 },
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible
                ? 'translate3d(0,0,0)'
                : 'translate3d(0,28px,0)',
              transition: 'opacity 680ms ease, transform 680ms ease',
              willChange: 'transform, opacity',
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                px: 1.55,
                py: 0.85,
                mb: 1.8,
                color: '#F5C86A',
                bgcolor: 'rgba(245,200,106,0.1)',
                border: '1px solid rgba(245,200,106,0.26)',
                borderRadius: '8px',
              }}
            >
              <WorkspacePremiumIcon sx={{ fontSize: 18 }} />
              <Typography
                sx={{
                  fontSize: '0.76rem',
                  letterSpacing: '0.22em',
                  fontWeight: 900,
                }}
              >
                CAREER SUMMARY
              </Typography>
            </Stack>

            <Typography
              align="center"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '3.25rem', sm: '5rem', md: '7.15rem' },
                lineHeight: 0.84,
                fontWeight: 950,
                textTransform: 'uppercase',
                textShadow: '0 28px 80px rgba(0,0,0,0.46)',
              }}
            >
              Resume
              <Box
                component="span"
                sx={{
                  display: 'block',
                  mt: 1,
                  color: 'transparent',
                  WebkitTextStroke: {
                    xs: '1px #F5C86A',
                    md: '1.5px #F5C86A',
                  },
                  textShadow: 'none',
                  fontSize: { xs: '2.5rem', sm: '3.75rem', md: '4.95rem' },
                }}
              >
                  Overview
              </Box>
            </Typography>

            <Typography
              sx={{
                textAlign: 'center',
                maxWidth: 780,
                mt: 2.6,
                color: '#B9C6D4',
                fontSize: { xs: '1rem', md: '1.09rem' },
                lineHeight: 1.85,
              }}
            >
              A concise timeline of education, professional experience,
              certifications, and courses presented in a clear format.
            </Typography>
          </Stack>

          {sectionList.map((section, index) => (
            <ResumeCategory
              key={section.title}
              section={section}
              index={index}
            />
          ))}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 5.5, md: 7 },
            }}
          >
            <Button
              component="a"
              href="https://drive.google.com/file/d/1t1PxhQjMfpdoVhNMBlCnVT5vV5w7b3cm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              endIcon={<FileDownloadIcon />}
              sx={{
                px: 4.2,
                py: 1.55,
                borderRadius: '8px',
                textTransform: 'none',
                color: '#05070C',
                bgcolor: '#F5C86A',
                fontSize: '1rem',
                fontWeight: 950,
                fontFamily: '"SlitoRegular", var(--font-body), sans-serif',
                boxShadow: '0 20px 48px rgba(245,200,106,0.22)',
                transition: 'transform 220ms ease, background 220ms ease',
                willChange: 'transform',
                '&:hover': {
                  bgcolor: '#FFE09A',
                  transform: 'translate3d(0,-4px,0)',
                },
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Resume;
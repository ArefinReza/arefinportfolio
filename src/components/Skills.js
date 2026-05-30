import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Stack,
  LinearProgress,
  GlobalStyles,
} from '@mui/material';

import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PythonIcon from '@mui/icons-material/PsychologyAlt';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Language';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import WavesIcon from '@mui/icons-material/Waves';
import StyleIcon from '@mui/icons-material/Style';
import PhpIcon from '@mui/icons-material/Php';
import HubIcon from '@mui/icons-material/Hub';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RadarIcon from '@mui/icons-material/Radar';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';

import '../assets/css/skills.css';

const skills = [
  {
    category: 'Programming Languages',
    accent: '#FFD166',
    skills: [
      { name: 'Python', icon: <PythonIcon />, percentage: 60 },
      { name: 'JavaScript', icon: <JavascriptIcon />, percentage: 70 },
      { name: 'TypeScript', icon: <JavascriptIcon />, percentage: 65 },
      { name: 'PHP', icon: <PhpIcon />, percentage: 60 },
    ],
  },
  {
    category: 'Frontend Development',
    accent: '#67E8F9',
    skills: [
      { name: 'React', icon: <DeveloperModeIcon />, percentage: 85 },
      { name: 'Vue.js', icon: <DeveloperModeIcon />, percentage: 65 },
      { name: 'HTML/CSS', icon: <HtmlIcon />, percentage: 95 },
      { name: 'Bootstrap CSS', icon: <ViewModuleIcon />, percentage: 70 },
      { name: 'Tailwind CSS', icon: <WavesIcon />, percentage: 70 },
      { name: 'MUI CSS', icon: <StyleIcon />, percentage: 60 },
    ],
  },
  {
    category: 'Backend Development',
    accent: '#A78BFA',
    skills: [
      { name: 'Node.js', icon: <HubIcon />, percentage: 75 },
      { name: 'Laravel', icon: <CodeOffIcon />, percentage: 70 },
      { name: 'Django', icon: <IntegrationInstructionsIcon />, percentage: 70 },
    ],
  },
  {
    category: 'Databases',
    accent: '#34D399',
    skills: [
      { name: 'MySQL', icon: <StorageIcon />, percentage: 80 },
      { name: 'MongoDB', icon: <DataObjectIcon />, percentage: 70 },
      { name: 'SQLite', icon: <StorageIcon />, percentage: 70 },
    ],
  },
];

const totalSkills = skills.reduce((total, category) => total + category.skills.length, 0);

const averageSkill = Math.round(
  skills.reduce(
    (total, category) =>
      total + category.skills.reduce((sum, skill) => sum + skill.percentage, 0),
    0
  ) / totalSkills
);

function useVisibleOnce(options = {}) {
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
      {
        threshold: 0.18,
        rootMargin: '0px 0px -70px 0px',
        ...options,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [visible, options]);

  return [ref, visible];
}

function SkillCard({ skill, accent, delay = 0 }) {
  const [cardRef, visible] = useVisibleOnce({ threshold: 0.28 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;

    let frame;
    const duration = 1150;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(skill.percentage * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [visible, skill.percentage]);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        ref={cardRef}
        className="skillBox"
        sx={{
          height: '100%',
          p: 2,
          borderRadius: '22px',
          background:
            'linear-gradient(135deg, rgba(2,15,28,0.82), rgba(255,255,255,0.035))',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,28px,0)',
          transition: `opacity 650ms ease ${delay}ms, transform 650ms ease ${delay}ms, border-color 220ms ease`,
          willChange: 'transform, opacity',
          '&:hover': {
            transform: 'translate3d(0,-7px,0)',
            borderColor: `${accent}66`,
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.4} sx={{ mb: 1.8 }}>
          <Box
            className="skillIcon"
            sx={{
              width: 48,
              height: 48,
              borderRadius: '16px',
              display: 'grid',
              placeItems: 'center',
              color: accent,
              bgcolor: `${accent}14`,
              border: `1px solid ${accent}30`,
              '& svg': { fontSize: 25 },
            }}
          >
            {skill.icon}
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ color: '#F8FAFC', fontSize: '1.08rem', lineHeight: 1.1 }}>
              {skill.name}
            </Typography>
            <Typography sx={{ color: '#93A4B8', fontSize: '0.82rem', mt: 0.35 }}>
              Proficiency
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              width: 76,
              height: 76,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
              background: `conic-gradient(${accent} ${value * 3.6}deg, rgba(255,255,255,0.08) 0deg)`,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 7,
                borderRadius: '50%',
                bgcolor: '#06111f',
                border: '1px solid rgba(255,255,255,0.08)',
              },
            }}
          >
            <Typography sx={{ position: 'relative', zIndex: 1, color: '#fff', fontSize: '1.05rem' }}>
              {value}%
            </Typography>
          </Box>

          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant="determinate"
              value={value}
              sx={{
                height: 8,
                borderRadius: 99,
                bgcolor: 'rgba(255,255,255,0.07)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 99,
                  background: `linear-gradient(90deg, ${accent}, #ffffff)`,
                  transition: 'transform 260ms ease',
                },
              }}
            />

            <Typography sx={{ mt: 1, color: '#AAB8C7', fontSize: '0.82rem', lineHeight: 1.55 }}>
              Production-ready, proven in delivery.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
}

function MetricCard({ item, index }) {
  const [ref, visible] = useVisibleOnce();

  return (
    <Grid item xs={12} md={4}>
      <Box
        ref={ref}
        sx={{
          p: 2.4,
          borderRadius: '22px',
          background:
            index === 0
              ? 'linear-gradient(135deg, rgba(255,209,102,0.15), rgba(255,255,255,0.045))'
              : 'linear-gradient(135deg, rgba(103,232,249,0.085), rgba(255,255,255,0.035))',
          border:
            index === 0
              ? '1px solid rgba(255,209,102,0.24)'
              : '1px solid rgba(255,255,255,0.1)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,26px,0)',
          transition: `opacity 650ms ease ${index * 90}ms, transform 650ms ease ${index * 90}ms`,
          willChange: 'transform, opacity',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.4}>
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '16px',
              display: 'grid',
              placeItems: 'center',
              color: index === 0 ? '#FFD166' : '#67E8F9',
              bgcolor: 'rgba(255,255,255,0.07)',
              '& svg': { fontSize: 24 },
            }}
          >
            {item.icon}
          </Box>
          <Box>
            <Typography sx={{ color: '#fff', fontSize: '2rem', lineHeight: 1 }}>
              {item.value}
            </Typography>
            <Typography sx={{ color: '#AAB8C7', mt: 0.4 }}>
              {item.label}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
}

function CategoryBlock({ category, catIndex }) {
  const [ref, visible] = useVisibleOnce({ threshold: 0.12 });

  return (
    <Box
      ref={ref}
      className="categoryskill"
      sx={{
        position: 'relative',
        mb: 3,
        p: { xs: 2, md: 2.8 },
        borderRadius: '28px',
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.095), rgba(255,255,255,0.035))',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 30px 90px rgba(0,0,0,0.34)',
        backdropFilter: 'blur(18px)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0,0,0)' : 'translate3d(0,34px,0)',
        transition: 'opacity 750ms ease, transform 750ms ease',
        willChange: 'transform, opacity',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={1.5}
        sx={{ mb: 2.8 }}
      >
        <Box>
          <Typography
            sx={{
              color: category.accent,
              fontSize: '0.76rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              mb: 0.8,
            }}
          >
            Domain 0{catIndex + 1}
          </Typography>

          <Typography
            sx={{
              color: '#fff',
              fontSize: { xs: '1.75rem', md: '2.35rem' },
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
            }}
          >
            {category.category}
          </Typography>
        </Box>

        <Box
          sx={{
            px: 1.4,
            py: 0.75,
            borderRadius: '999px',
            color: category.accent,
            bgcolor: `${category.accent}14`,
            border: `1px solid ${category.accent}35`,
            fontSize: '0.85rem',
          }}
        >
          {category.skills.length} technologies
        </Box>
      </Stack>

      <Grid container spacing={2}>
        {category.skills.map((skill, skillIndex) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            accent={category.accent}
            delay={skillIndex * 45}
          />
        ))}
      </Grid>
    </Box>
  );
}

function Skills() {
  const [headerRef, headerVisible] = useVisibleOnce({ threshold: 0.2 });

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
            '.skillsSection *': {
              animation: 'none !important',
              transition: 'none !important',
            },
          },
        }}
      />

      <Box
        id="skills"
        className="skillsSection"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          px: { xs: 2.2, md: 5 },
          py: { xs: 8, md: 12 },
          color: '#f1f5f9',
          fontFamily: '"SlitoRegular", var(--font-body), sans-serif',
          background: `
            radial-gradient(circle at 18% 14%, rgba(103,232,249,0.16), transparent 28%),
            radial-gradient(circle at 82% 20%, rgba(255,209,102,0.12), transparent 30%),
            radial-gradient(circle at 50% 100%, rgba(167,139,250,0.14), transparent 34%),
            linear-gradient(180deg, #020617 0%, #06111f 48%, #010611 100%)
          `,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(103,232,249,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(103,232,249,0.035) 1px, transparent 1px)
            `,
            backgroundSize: '78px 78px',
            opacity: 0.28,
            maskImage:
              'linear-gradient(180deg, transparent 0%, black 14%, black 86%, transparent 100%)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '-18%',
            left: '16%',
            width: { xs: 280, md: 560 },
            height: '138%',
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
            opacity: 0.22,
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            right: { xs: '-62%', md: '-12%' },
            top: { xs: '10%', md: '4%' },
            width: { xs: 420, md: 760 },
            height: { xs: 420, md: 760 },
            borderRadius: '50%',
            border: '1px solid rgba(103,232,249,0.16)',
            opacity: 0.72,
            pointerEvents: 'none',

            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 92,
              borderRadius: '50%',
              border: '1px dashed rgba(255,209,102,0.16)',
            },

            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 190,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '1220px', mx: 'auto' }}>
          <Stack
            ref={headerRef}
            alignItems="center"
            sx={{
              mb: 6,
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translate3d(0,0,0)' : 'translate3d(0,28px,0)',
              transition: 'opacity 700ms ease, transform 700ms ease',
              willChange: 'transform, opacity',
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                px: 1.6,
                py: 0.85,
                mb: 1.5,
                borderRadius: '999px',
                color: '#67E8F9',
                bgcolor: 'rgba(103,232,249,0.08)',
                border: '1px solid rgba(103,232,249,0.2)',
              }}
            >
              <RadarIcon sx={{ fontSize: 18 }} />
              <Typography sx={{ fontSize: '0.76rem', letterSpacing: '0.24em' }}>
                SKILL SUMMARY
              </Typography>
            </Stack>

            <Typography
              align="center"
              sx={{
                color: '#fff',
                fontSize: { xs: '3.35rem', sm: '5rem', md: '6.8rem' },
                lineHeight: 0.82,
                letterSpacing: '-0.06em',
                textTransform: 'uppercase',
                textShadow: '0 30px 90px rgba(6,182,212,0.24)',
              }}
            >
              Technical
              <Box
                component="span"
                sx={{
                  display: 'block',
                  color: '#FFD166',
                  fontSize: { xs: '2.4rem', sm: '3.35rem', md: '4.45rem' },
                  letterSpacing: '-0.04em',
                }}
              >
                Toolkit
              </Box>
            </Typography>

            <Typography
              sx={{
                textAlign: 'center',
                maxWidth: 760,
                mt: 2.4,
                color: '#B7C8D9',
                fontSize: { xs: '1rem', md: '1.12rem' },
                lineHeight: 1.85,
              }}
            >
              A balanced stack covering frontend engineering, backend systems,
              databases, and UI foundations for production software.
            </Typography>
          </Stack>

          <Grid container spacing={2} sx={{ mb: 5 }}>
            {[
              { value: totalSkills, label: 'Core Skills', icon: <AutoAwesomeIcon /> },
              { value: skills.length, label: 'Skill Domains', icon: <TerminalIcon /> },
              { value: `${averageSkill}%`, label: 'Average Proficiency', icon: <RadarIcon /> },
            ].map((item, index) => (
              <MetricCard key={item.label} item={item} index={index} />
            ))}
          </Grid>

          {skills.map((category, catIndex) => (
            <CategoryBlock
              key={category.category}
              category={category}
              catIndex={catIndex}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Skills;
import React, { memo, useMemo } from 'react';
import {
    Box,
    Typography,
    Grid,
    Link,
    Stack,
    Divider,
    GlobalStyles,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import WebIcon from '@mui/icons-material/Web';
import SchoolIcon from '@mui/icons-material/School';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WavesIcon from '@mui/icons-material/Waves';
import RadarIcon from '@mui/icons-material/Radar';

import profileImage from '../assets/image/profileImage.jpg';
import '../assets/css/about.css';

const detailsLeft = [
    { icon: <CakeIcon />, label: 'Birthday', value: 'December 23, 1998' },
    {
        icon: <WebIcon />,
        label: 'Website',
        value: 'arefinreza.netlify.app',
        href: 'https://arefinreza.netlify.app',
    },
    {
        icon: <FacebookIcon />,
        label: 'Facebook',
        value: 'arefin.reza.saim',
        href: 'https://www.facebook.com/arefin.reza.saim',
    },
    {
        icon: <InstagramIcon />,
        label: 'Instagram',
        value: '@arefinsaim',
        href: 'https://www.instagram.com/arefinsaim/',
    },
];

const detailsRight = [
    { icon: <PersonIcon />, label: 'Father', value: 'MD. Erfan Reza' },
    { icon: <SchoolIcon />, label: 'Degree', value: 'Bachelor of Science' },
    {
        icon: <LinkedInIcon />,
        label: 'LinkedIn',
        value: 'arefinreza46',
        href: 'https://www.linkedin.com/in/arefinreza46/',
    },
    {
        icon: <GitHubIcon />,
        label: 'Github',
        value: 'ArefinReza',
        href: 'https://github.com/ArefinReza',
    },
];

const stats = [
    { value: '60+', label: 'Clients Served' },
    { value: '40+', label: 'Projects Delivered' },
    { value: '06+', label: 'Years Experience' },
];

const DetailItem = memo(function DetailItem({ item }) {
    return (
        <Stack
            direction="row"
            spacing={1.35}
            alignItems="center"
            sx={{
                p: 1.35,
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 180ms ease, border-color 180ms ease, background 180ms ease',
                willChange: 'transform',
                '&:hover': {
                    transform: 'translateX(5px)',
                    borderColor: 'rgba(103,232,249,0.22)',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))',
                },
            }}
        >
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '12px',
                    display: 'grid',
                    placeItems: 'center',
                    color: '#67E8F9',
                    bgcolor: 'rgba(103,232,249,0.1)',
                    flexShrink: 0,
                    '& svg': { fontSize: 20 },
                }}
            >
                {item.icon}
            </Box>

            <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ color: '#67E8F9', fontSize: '0.76rem', letterSpacing: '0.1em' }}>
                    {item.label}
                </Typography>

                {item.href ? (
                    <Link
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            color: '#F8FAFC',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            wordBreak: 'break-word',
                            transition: 'color 160ms ease',
                            '&:hover': { color: '#FFD166' },
                        }}
                    >
                        {item.value}
                    </Link>
                ) : (
                    <Typography sx={{ color: '#F8FAFC', fontSize: '0.95rem' }}>
                        {item.value}
                    </Typography>
                )}
            </Box>
        </Stack>
    );
});

function About() {
    const sectionStyles = useMemo(
        () => ({
            display: 'block',
            opacity: 1,
            visibility: 'visible',
            position: 'relative',
            overflow: 'hidden',
            px: { xs: 2.2, md: 5 },
            py: { xs: 8, md: 12 },
            color: '#f1f5f9',
            fontFamily: '"SlitoRegular", var(--font-body), sans-serif',
            background: `
                radial-gradient(circle at 18% 16%, rgba(45,212,191,0.16), transparent 28%),
                radial-gradient(circle at 82% 22%, rgba(59,130,246,0.12), transparent 30%),
                linear-gradient(180deg, #020617 0%, #031322 50%, #010711 100%)
            `,
            contain: 'layout paint style',
            contentVisibility: 'auto',
            transform: 'translateZ(0)',
        }),
        []
    );

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

            <Box id="about" className="aboutSection" sx={sectionStyles}>
                {/* subtle static overlay only */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        backgroundImage: `
                            linear-gradient(rgba(103,232,249,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(103,232,249,0.035) 1px, transparent 1px)
                        `,
                        backgroundSize: '76px 76px',
                        opacity: 0.18,
                        maskImage: 'linear-gradient(180deg, transparent 0%, black 15%, black 84%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 15%, black 84%, transparent 100%)',
                    }}
                />

                {/* static decor shapes, no animation */}
                <Box
                    sx={{
                        position: 'absolute',
                        right: { xs: '-55%', md: '-10%' },
                        top: { xs: '14%', md: '4%' },
                        width: { xs: 340, md: 640 },
                        height: { xs: 340, md: 640 },
                        borderRadius: '50%',
                        border: '1px solid rgba(103,232,249,0.14)',
                        opacity: 0.7,
                        pointerEvents: 'none',
                        transform: 'translateZ(0)',
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

                <Box
                    sx={{
                        position: 'absolute',
                        left: { xs: '-20%', md: '5%' },
                        bottom: '8%',
                        width: { xs: 220, md: 340 },
                        height: { xs: 220, md: 340 },
                        borderRadius: '28px',
                        transform: 'rotate(18deg) translateZ(0)',
                        background: 'linear-gradient(135deg, rgba(103,232,249,0.1), rgba(255,255,255,0.025))',
                        border: '1px solid rgba(103,232,249,0.1)',
                        pointerEvents: 'none',
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
                    <Stack alignItems="center" sx={{ mb: 6 }}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            sx={{
                                px: 1.55,
                                py: 0.85,
                                borderRadius: '999px',
                                bgcolor: 'rgba(103,232,249,0.08)',
                                border: '1px solid rgba(103,232,249,0.18)',
                                color: '#67E8F9',
                                mb: 1.5,
                            }}
                        >
                            <WavesIcon sx={{ fontSize: 18 }} />
                            <Typography sx={{ fontSize: '0.76rem', letterSpacing: '0.24em' }}>
                                ABOUT PROFILE
                            </Typography>
                        </Stack>

                        <Typography
                            align="center"
                            sx={{
                                color: '#fff',
                                fontSize: { xs: '3.5rem', sm: '5rem', md: '6.4rem' },
                                lineHeight: 0.82,
                                letterSpacing: '-0.055em',
                                textTransform: 'uppercase',
                                textShadow: '0 18px 40px rgba(6,182,212,0.14)',
                            }}
                        >
                            About
                            <Box
                                component="span"
                                sx={{
                                    display: 'block',
                                    color: '#FFD166',
                                    fontSize: { xs: '2.35rem', sm: '3.25rem', md: '4.2rem' },
                                    letterSpacing: '-0.035em',
                                }}
                            >
                                MD. Arefin Reza
                            </Box>
                        </Typography>

                        <Typography
                            sx={{
                                textAlign: 'center',
                                maxWidth: 780,
                                mt: 2.3,
                                color: '#B7C8D9',
                                fontSize: { xs: '1rem', md: '1.12rem' },
                                lineHeight: 1.85,
                            }}
                        >
                            I design and engineer full-stack web products with clean architecture,
                            measurable performance, and maintainable code.
                        </Typography>
                    </Stack>

                    <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
                        <Grid item xs={12} md={4.6} display="flex" justifyContent="center">
                            <Box sx={{ position: 'relative' }}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        p: 1.2,
                                        borderRadius: '34px',
                                        background: 'linear-gradient(135deg, rgba(103,232,249,0.22), rgba(255,209,102,0.12), rgba(255,255,255,0.05))',
                                        border: '1px solid rgba(255,255,255,0.14)',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.32)',
                                        transform: 'translateZ(0)',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        alt="MD. Arefin Reza"
                                        src={profileImage}
                                        loading="lazy"
                                        decoding="async"
                                        sx={{
                                            display: 'block',
                                            width: '100%',
                                            maxWidth: 315,
                                            aspectRatio: '4 / 5',
                                            objectFit: 'cover',
                                            borderRadius: '26px',
                                            filter: 'saturate(1.04) contrast(1.02)',
                                            transform: 'translateZ(0)',
                                        }}
                                    />
                                </Box>

                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={1}
                                    sx={{
                                        position: 'absolute',
                                        right: -18,
                                        bottom: 28,
                                        px: 1.5,
                                        py: 1,
                                        borderRadius: '14px',
                                        bgcolor: 'rgba(2, 15, 28, 0.88)',
                                        border: '1px solid rgba(103,232,249,0.18)',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.24)',
                                    }}
                                >
                                    <RadarIcon sx={{ color: '#67E8F9', fontSize: 20 }} />
                                    <Typography sx={{ color: '#E2E8F0', fontSize: '0.86rem' }}>
                                        Full Stack Engineering
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7.4}>
                            <Box
                                sx={{
                                    p: { xs: 2.1, md: 3 },
                                    borderRadius: '24px',
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))',
                                    border: '1px solid rgba(255,255,255,0.11)',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.26)',
                                    // blur removed for performance stability on low-end GPUs
                                    backdropFilter: 'none',
                                    transform: 'translateZ(0)',
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#FFFFFF',
                                        fontSize: { xs: '2rem', md: '2.85rem' },
                                        lineHeight: 0.95,
                                        letterSpacing: '-0.03em',
                                        mb: 0.8,
                                    }}
                                >
                                    Full Stack Software Engineer
                                </Typography>

                                <Typography sx={{ color: '#67E8F9', mb: 2.4, fontSize: '1rem' }}>
                                    React frontends, Laravel backends, API design, and UI systems.
                                </Typography>

                                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2.4 }} />

                                <Grid container spacing={1.35}>
                                    <Grid item xs={12} sm={6}>
                                        <Stack spacing={1.2}>
                                            {detailsLeft.map((item) => (
                                                <DetailItem key={item.label} item={item} />
                                            ))}
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Stack spacing={1.2}>
                                            {detailsRight.map((item) => (
                                                <DetailItem key={item.label} item={item} />
                                            ))}
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 5 }}>
                        {stats.map((item, index) => (
                            <Grid item xs={12} sm={4} key={item.label}>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        p: 2.5,
                                        borderRadius: '20px',
                                        background:
                                            index === 0
                                                ? 'linear-gradient(135deg, rgba(255,209,102,0.14), rgba(255,255,255,0.04))'
                                                : 'linear-gradient(135deg, rgba(103,232,249,0.075), rgba(255,255,255,0.03))',
                                        border:
                                            index === 0
                                                ? '1px solid rgba(255,209,102,0.22)'
                                                : '1px solid rgba(255,255,255,0.1)',
                                        boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
                                        transition: 'transform 180ms ease, border-color 180ms ease, background 180ms ease',
                                        willChange: 'transform',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            borderColor: index === 0 ? 'rgba(255,209,102,0.32)' : 'rgba(103,232,249,0.18)',
                                        },
                                    }}
                                >
                                    <DoneAllIcon
                                        sx={{
                                            fontSize: 34,
                                            color: index === 0 ? '#FFD166' : '#67E8F9',
                                            mb: 0.8,
                                        }}
                                    />
                                    <Typography sx={{ color: '#fff', fontSize: '2.25rem', lineHeight: 1 }}>
                                        {item.value}
                                    </Typography>
                                    <Typography sx={{ color: '#AAB8C7', mt: 0.8 }}>
                                        {item.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default About;
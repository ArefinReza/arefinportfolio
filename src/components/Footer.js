import React from 'react';
import {
    Box,
    Typography,
    IconButton,
    Grid,
    Stack,
    Button,
    GlobalStyles,
} from '@mui/material';

import {
    Facebook,
    LinkedIn,
    Instagram,
    WhatsApp,
    AutoAwesome,
    ArrowOutward,
    Email,
    Phone,
    LocationOn,
    Code,
    DesignServices,
    WorkOutline,
} from '@mui/icons-material';

import { profileLinks } from './profileLinks';

const socialLinks = [
    {
        label: 'Facebook',
        icon: <Facebook />,
        href: profileLinks.facebook,
        color: '#67E8F9',
    },
    {
        label: 'LinkedIn',
        icon: <LinkedIn />,
        href: profileLinks.linkedin,
        color: '#A78BFA',
    },
    {
        label: 'Instagram',
        icon: <Instagram />,
        href: profileLinks.instagram,
        color: '#FB7185',
    },
    {
        label: 'WhatsApp',
        icon: <WhatsApp />,
        href: profileLinks.whatsapp,
        color: '#86EFAC',
    },
];

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Live Projects', href: '#live-projects' },
    { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
    'Frontend Engineering',
    'Backend Systems',
    'Full Stack Web Apps',
    'Product Design',
    'API Architecture',
];

const contactItems = [
    {
        icon: <Phone />,
        label: 'Phone',
        value: '01751030446 / 01819222446',
    },
    {
        icon: <Email />,
        label: 'Email',
        value: 'arefinsaim@gmail.com',
    },
    {
        icon: <LocationOn />,
        label: 'Location',
        value: 'Dhaka 1229, Bangladesh',
    },
];

const Footer = () => {
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
                component="footer"
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    color: '#F8FAFC',
                    px: { xs: 2.2, md: 5 },
                    pt: { xs: 8, md: 10 },
                    pb: 3,
                    fontFamily: '"SlitoRegular", var(--font-body), sans-serif',
                    background: `
            radial-gradient(circle at 16% 6%, rgba(245,200,106,0.18), transparent 30%),
            radial-gradient(circle at 86% 18%, rgba(103,232,249,0.14), transparent 28%),
            radial-gradient(circle at 50% 105%, rgba(167,139,250,0.12), transparent 34%),
            linear-gradient(180deg, #030712 0%, #06111f 48%, #01040a 100%)
          `,
                    borderTop: '1px solid rgba(255,255,255,0.1)',
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
                        backgroundSize: { xs: '54px 54px', md: '88px 88px' },
                        opacity: 0.26,
                        pointerEvents: 'none',
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        right: { xs: '-56%', md: '-12%' },
                        top: { xs: 40, md: 20 },
                        width: { xs: 380, md: 680 },
                        height: { xs: 380, md: 680 },
                        borderRadius: '50%',
                        border: '1px solid rgba(245,200,106,0.13)',
                        opacity: 0.72,
                        pointerEvents: 'none',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: { xs: 82, md: 150 },
                            borderRadius: '50%',
                            border: '1px dashed rgba(103,232,249,0.14)',
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: { xs: 164, md: 310 },
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.08)',
                        },
                    }}
                />

                <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 1240, mx: 'auto' }}>
                    {/* Fat Footer CTA */}
                    <Box
                        sx={{
                            mb: { xs: 5, md: 6 },
                            p: { xs: 2.4, md: 4 },
                            border: '1px solid rgba(255,255,255,0.12)',
                            background:
                                'linear-gradient(135deg, rgba(255,255,255,0.095), rgba(255,255,255,0.028))',
                            boxShadow: '0 26px 80px rgba(0,0,0,0.28)',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                width: { xs: 110, md: 180 },
                                height: { xs: 110, md: 180 },
                                bgcolor: '#F5C86A',
                                opacity: 0.1,
                                clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                            },
                        }}
                    >
                        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="end">
                            <Grid item xs={12} md={8}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={1}
                                    sx={{
                                        display: 'inline-flex',
                                        px: 1.5,
                                        py: 0.85,
                                        mb: 2,
                                        color: '#F5C86A',
                                        bgcolor: 'rgba(245,200,106,0.1)',
                                        border: '1px solid rgba(245,200,106,0.26)',
                                        borderRadius: '8px',
                                    }}
                                >
                                    <AutoAwesome sx={{ fontSize: 18 }} />
                                    <Typography sx={{ fontSize: '0.74rem', letterSpacing: '0.22em', fontWeight: 900 }}>
                                        SOFTWARE ENGINEER
                                    </Typography>
                                </Stack>

                                <Typography
                                    sx={{
                                        color: '#fff',
                                        fontSize: { xs: '3.05rem', sm: '4.7rem', md: '7rem' },
                                        lineHeight: 0.78,
                                        fontWeight: 950,
                                        textTransform: 'uppercase',
                                        textShadow: '0 28px 80px rgba(0,0,0,0.48)',
                                    }}
                                >
                                    Build Your
                                    <Box
                                        component="span"
                                        sx={{
                                            display: 'block',
                                            mt: 1,
                                            color: 'transparent',
                                            WebkitTextStroke: {
                                                xs: '1px #F5C86A',
                                                md: '1.6px #F5C86A',
                                            },
                                            textShadow: 'none',
                                            fontSize: { xs: '2.25rem', sm: '3.5rem', md: '5.1rem' },
                                        }}
                                    >
                                        Next Product
                                    </Box>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Typography
                                    sx={{
                                        color: '#B7C8D9',
                                        fontSize: { xs: '1rem', md: '1.08rem' },
                                        lineHeight: 1.78,
                                        mb: 2.4,
                                    }}
                                >
                                    Full stack web applications, dashboards, APIs, and digital products built
                                    with clean architecture and reliable delivery.
                                </Typography>

                                <Button
                                    component="a"
                                    href="#contact"
                                    endIcon={<ArrowOutward />}
                                    sx={{
                                        px: 3,
                                        py: 1.35,
                                        borderRadius: '8px',
                                        textTransform: 'none',
                                        color: '#07111F',
                                        bgcolor: '#F5C86A',
                                        fontSize: '1rem',
                                        fontWeight: 950,
                                        transition: 'transform 200ms ease, background 200ms ease',
                                        '&:hover': {
                                            bgcolor: '#FFE08A',
                                            transform: 'translate3d(0,-3px,0)',
                                        },
                                    }}
                                >
                                    Start a Project
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Footer Columns */}
                    <Grid container spacing={{ xs: 4, md: 5 }}>
                        <Grid item xs={12} md={4.2}>
                            <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontSize: { xs: '2.4rem', md: '3.25rem' },
                                    lineHeight: 0.86,
                                    fontWeight: 950,
                                    textTransform: 'uppercase',
                                    mb: 2,
                                }}
                            >
                                MD. Arefin
                                <Box
                                    component="span"
                                    sx={{
                                        display: 'block',
                                        color: '#F5C86A',
                                        fontSize: { xs: '1.9rem', md: '2.45rem' },
                                    }}
                                >
                                    Reza
                                </Box>
                            </Typography>

                            <Typography sx={{ color: '#AAB8C7', lineHeight: 1.78, maxWidth: 430 }}>
                                Full stack software engineer building scalable web applications,
                                reliable backend systems, and clean user experiences.
                            </Typography>

                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2.5 }}>
                                {socialLinks.map((item) => (
                                    <IconButton
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={item.label}
                                        sx={{
                                            width: 46,
                                            height: 46,
                                            borderRadius: '8px',
                                            color: item.color,
                                            bgcolor: `${item.color}12`,
                                            border: `1px solid ${item.color}30`,
                                            transition: 'transform 200ms ease, background 200ms ease, color 200ms ease',
                                            '&:hover': {
                                                transform: 'translate3d(0,-4px,0)',
                                                bgcolor: item.color,
                                                color: '#07111F',
                                            },
                                        }}
                                    >
                                        {item.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2.4}>
                            <Typography sx={{ color: '#F5C86A', fontSize: '0.78rem', letterSpacing: '0.22em', mb: 2 }}>
                                NAVIGATION
                            </Typography>

                            <Stack spacing={1.1}>
                                {navLinks.map((item) => (
                                    <Typography
                                        key={item.label}
                                        component="a"
                                        href={item.href}
                                        sx={{
                                            color: '#D8E3EF',
                                            textDecoration: 'none',
                                            fontSize: '1rem',
                                            transition: 'color 180ms ease, transform 180ms ease',
                                            '&:hover': {
                                                color: '#F5C86A',
                                                transform: 'translate3d(4px,0,0)',
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={6} md={2.6}>
                            <Typography sx={{ color: '#F5C86A', fontSize: '0.78rem', letterSpacing: '0.22em', mb: 2 }}>
                                EXPERTISE
                            </Typography>

                            <Stack spacing={1.1}>
                                {serviceLinks.map((item, index) => (
                                    <Stack key={item} direction="row" spacing={1} alignItems="center">
                                        {index % 2 === 0 ? (
                                            <Code sx={{ color: '#67E8F9', fontSize: 18 }} />
                                        ) : (
                                            <DesignServices sx={{ color: '#A78BFA', fontSize: 18 }} />
                                        )}
                                        <Typography sx={{ color: '#D8E3EF', fontSize: '1rem' }}>
                                            {item}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={2.8}>
                            <Typography sx={{ color: '#F5C86A', fontSize: '0.78rem', letterSpacing: '0.22em', mb: 2 }}>
                                CONTACT
                            </Typography>

                            <Stack spacing={1.2}>
                                {contactItems.map((item) => (
                                    <Stack
                                        key={item.label}
                                        direction="row"
                                        spacing={1.1}
                                        alignItems="center"
                                        sx={{
                                            p: 1.25,
                                            borderRadius: '8px',
                                            bgcolor: 'rgba(255,255,255,0.045)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: '8px',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: '#67E8F9',
                                                bgcolor: 'rgba(103,232,249,0.1)',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {item.icon}
                                        </Box>

                                        <Box sx={{ minWidth: 0 }}>
                                            <Typography sx={{ color: '#67E8F9', fontSize: '0.68rem', letterSpacing: '0.14em' }}>
                                                {item.label}
                                            </Typography>
                                            <Typography sx={{ color: '#E2E8F0', fontSize: '0.86rem', wordBreak: 'break-word' }}>
                                                {item.value}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>

                    <Box
                        sx={{
                            mt: { xs: 5, md: 6 },
                            pt: 2.2,
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-between',
                            alignItems: { xs: 'flex-start', md: 'center' },
                            gap: 1.2,
                        }}
                    >
                        <Typography sx={{ color: '#9FB0C2', fontSize: '0.9rem' }}>
                            © 2024 - {new Date().getFullYear()} Arefin Reza. All rights reserved.
                        </Typography>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <WorkOutline sx={{ color: '#F5C86A', fontSize: 18 }} />
                            <Typography sx={{ color: '#F5C86A', fontSize: '0.9rem' }}>
                                Available for software and web projects
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
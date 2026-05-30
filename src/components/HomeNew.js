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

const skills = ['React', 'Laravel', 'API Systems', 'Creative UI', 'Full Stack'];

const metrics = [
    { value: '40+', label: 'Projects' },
    { value: '06+', label: 'Years' },
    { value: '99%', label: 'Trust' },
];

const serviceCards = [
    {
        icon: <TerminalIcon />,
        title: 'Frontend Experiences',
        text: 'Sharp, smooth, responsive interfaces with premium motion.',
    },
    {
        icon: <HubIcon />,
        title: 'Backend Architecture',
        text: 'Scalable logic, APIs, dashboards, and business workflows.',
    },
    {
        icon: <LayersIcon />,
        title: 'Luxury UI Direction',
        text: 'Visual systems that feel polished, rare, and memorable.',
    },
];

const Home = () => {
    return (
        <Box
            id="home"
            sx={{
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#030305',
                color: '#fff',
            }}
        >
            {/* Cinematic Background */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `
            linear-gradient(115deg, rgba(255,214,102,0.16) 0%, transparent 28%),
            linear-gradient(245deg, rgba(0,224,255,0.13) 0%, transparent 34%),
            linear-gradient(180deg, #030305 0%, #090910 48%, #030305 100%)
          `,
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
                    backgroundSize: '76px 76px',
                    opacity: 0.28,
                    maskImage: 'linear-gradient(90deg, black 0%, black 58%, transparent 100%)',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 7px)',
                    opacity: 0.12,
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    right: { xs: '-70%', md: '-22%' },
                    top: '-25%',
                    width: { xs: '130%', md: '62%' },
                    height: '145%',
                    background:
                        'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,214,102,0.08), rgba(0,224,255,0.08), transparent)',
                    clipPath: 'polygon(24% 0, 100% 0, 76% 100%, 0 100%)',
                    borderLeft: '1px solid rgba(255,255,255,0.14)',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '34%',
                    background:
                        'linear-gradient(180deg, transparent 0%, rgba(3,3,5,0.75) 54%, #030305 100%)',
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    maxWidth: '1440px',
                    mx: 'auto',
                    px: { xs: 2.5, sm: 4, md: 8 },
                    pt: { xs: 9, md: 11 },
                    pb: { xs: 7, md: 6 },
                    minHeight: '100vh',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', lg: '1.08fr 0.92fr' },
                    gap: { xs: 5, lg: 7 },
                    alignItems: 'center',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ mb: 3, flexWrap: 'wrap', rowGap: 1 }}
                    >
                        <Chip
                            icon={<AutoAwesomeIcon />}
                            label="PREMIUM DIGITAL CRAFT"
                            sx={{
                                height: 38,
                                borderRadius: '8px',
                                color: '#050505',
                                fontWeight: 900,
                                bgcolor: '#FFD666',
                                '& .MuiChip-icon': { color: '#050505' },
                            }}
                        />

                        <Chip
                            icon={<VerifiedIcon />}
                            label="Available for work"
                            sx={{
                                height: 38,
                                borderRadius: '8px',
                                color: '#D9F99D',
                                fontWeight: 800,
                                bgcolor: 'rgba(217,249,157,0.08)',
                                border: '1px solid rgba(217,249,157,0.22)',
                                '& .MuiChip-icon': { color: '#D9F99D' },
                            }}
                        />
                    </Stack>

                    {/* Name Typography */}
                    <Box sx={{ mb: 2.6 }}>
                        <Typography
                            component={motion.div}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            sx={{
                                fontFamily:
                                    '"Playfair Display", "Cormorant Garamond", Georgia, serif',
                                fontSize: {
                                    xs: '2.35rem',
                                    sm: '3.2rem',
                                    md: '4.45rem',
                                    lg: '5.15rem',
                                },
                                lineHeight: 0.95,
                                fontWeight: 900,
                                letterSpacing: 0,
                                display: 'inline-block',
                                color: 'transparent',
                                WebkitTextStroke: {
                                    xs: '1px rgba(255,255,255,0.78)',
                                    md: '1.2px rgba(255,255,255,0.86)',
                                },
                                background:
                                    'linear-gradient(90deg, #FFFFFF 0%, #FFD666 42%, #9DECF9 72%, #FFFFFF 100%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                filter: 'drop-shadow(0 18px 34px rgba(255,214,102,0.16))',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 4,
                                    bottom: { xs: -8, md: -12 },
                                    width: { xs: 150, md: 240 },
                                    height: 3,
                                    borderRadius: '8px',
                                    background:
                                        'linear-gradient(90deg, #FFD666, rgba(157,236,249,0.8), transparent)',
                                },
                            }}
                        >
                            MD. Arefin Reza
                        </Typography>
                    </Box>

                    {/* Main Typography */}
                    <Typography
                        component="h1"
                        sx={{
                            maxWidth: 900,
                            fontSize: {
                                xs: '2.72rem',
                                sm: '3.85rem',
                                md: '5.35rem',
                                lg: '6.18rem',
                            },
                            lineHeight: {
                                xs: 1.02,
                                md: 0.96,
                            },
                            fontWeight: 950,
                            letterSpacing: 0,
                            mb: 3,
                            color: '#fff',
                            textWrap: 'balance',
                        }}
                    >
                        Build digital products that look{' '}
                        <Box
                            component="span"
                            sx={{
                                color: '#FFD666',
                                fontFamily:
                                    '"Playfair Display", "Cormorant Garamond", Georgia, serif',
                                fontStyle: 'italic',
                                fontWeight: 900,
                                textShadow: '0 18px 55px rgba(255,214,102,0.24)',
                            }}
                        >
                            expensive
                        </Box>{' '}
                        and work beautifully.
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 720,
                            color: '#C7CBD6',
                            fontSize: { xs: '1rem', md: '1.18rem' },
                            lineHeight: 1.8,
                            mb: 3.5,
                        }}
                    >
                        Full stack developer crafting cinematic interfaces, scalable backend
                        systems, and memorable web experiences for ambitious brands.
                    </Typography>

                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            px: 2,
                            py: 1.35,
                            mb: 4,
                            borderRadius: '8px',
                            bgcolor: 'rgba(255,255,255,0.055)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            backdropFilter: 'blur(18px)',
                            color: '#fff',
                            fontSize: { xs: '1rem', md: '1.22rem' },
                            fontWeight: 800,
                            maxWidth: '100%',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Box component="span" sx={{ color: '#FFD666', mr: 1 }}>
                            Specialized in
                        </Box>
                        <Typed
                            strings={[
                                'React Experiences',
                                'Laravel Backends',
                                'Premium UI Design',
                                'API Architecture',
                                'Interactive Portfolios',
                            ]}
                            typeSpeed={54}
                            backSpeed={32}
                            loop
                        />
                    </Box>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button
                            component={Link}
                            to="portfolio"
                            smooth
                            duration={500}
                            endIcon={<ArrowOutwardIcon />}
                            sx={{
                                px: 4,
                                py: 1.65,
                                borderRadius: '8px',
                                textTransform: 'none',
                                fontWeight: 900,
                                fontSize: '1rem',
                                color: '#050505',
                                bgcolor: '#FFD666',
                                boxShadow: '0 18px 55px rgba(255,214,102,0.28)',
                                '&:hover': {
                                    bgcolor: '#FFE08A',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 24px 70px rgba(255,214,102,0.36)',
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
                                px: 4,
                                py: 1.65,
                                borderRadius: '8px',
                                textTransform: 'none',
                                fontWeight: 850,
                                fontSize: '1rem',
                                color: '#fff',
                                bgcolor: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.14)',
                                backdropFilter: 'blur(16px)',
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.12)',
                                    transform: 'translateY(-3px)',
                                },
                            }}
                        >
                            Start a Project
                        </Button>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            mt: 5,
                            flexWrap: 'wrap',
                            gap: 1,
                        }}
                    >
                        {skills.map((skill) => (
                            <Box
                                key={skill}
                                sx={{
                                    px: 1.6,
                                    py: 0.9,
                                    borderRadius: '8px',
                                    color: '#DDE3EA',
                                    fontWeight: 800,
                                    fontSize: '0.86rem',
                                    bgcolor: 'rgba(255,255,255,0.055)',
                                    border: '1px solid rgba(255,255,255,0.11)',
                                }}
                            >
                                {skill}
                            </Box>
                        ))}
                    </Stack>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 46 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.95, ease: 'easeOut', delay: 0.1 }}
                >
                    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                overflow: 'hidden',
                                bgcolor: 'rgba(9,10,14,0.72)',
                                border: '1px solid rgba(255,255,255,0.14)',
                                backdropFilter: 'blur(24px)',
                                boxShadow: '0 32px 90px rgba(0,0,0,0.58)',
                            }}
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                sx={{
                                    px: 2.2,
                                    py: 1.7,
                                    bgcolor: 'rgba(255,255,255,0.055)',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <Stack direction="row" spacing={0.8}>
                                    {['#FF5F57', '#FFBD2E', '#28C840'].map((color) => (
                                        <Box
                                            key={color}
                                            sx={{
                                                width: 11,
                                                height: 11,
                                                borderRadius: '50%',
                                                bgcolor: color,
                                            }}
                                        />
                                    ))}
                                </Stack>

                                <Typography
                                    sx={{
                                        color: '#98A2B3',
                                        fontWeight: 800,
                                        fontSize: '0.82rem',
                                    }}
                                >
                                    arefin.system
                                </Typography>
                            </Stack>

                            <Box sx={{ p: 3 }}>
                                <Typography
                                    sx={{
                                        color: '#FFD666',
                                        fontWeight: 900,
                                        fontSize: '0.82rem',
                                        mb: 1.2,
                                    }}
                                >
                                    CREATIVE ENGINE ONLINE
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: '2.35rem',
                                        lineHeight: 1.08,
                                        fontWeight: 950,
                                        letterSpacing: 0,
                                        mb: 2.2,
                                    }}
                                >
                                    Designing interfaces with motion, clarity, and premium detail.
                                </Typography>

                                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2.5 }} />

                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: 1.2,
                                        mb: 2.8,
                                    }}
                                >
                                    {metrics.map((item) => (
                                        <Box
                                            key={item.label}
                                            sx={{
                                                p: 1.8,
                                                borderRadius: '8px',
                                                bgcolor: 'rgba(255,255,255,0.055)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: '1.8rem',
                                                    fontWeight: 950,
                                                    color: '#fff',
                                                    lineHeight: 1,
                                                }}
                                            >
                                                {item.value}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mt: 0.8,
                                                    color: '#AAB2C0',
                                                    fontSize: '0.78rem',
                                                    fontWeight: 800,
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
                </motion.div>
            </Box>

            <Box
                component={Link}
                to="about"
                smooth
                duration={500}
                sx={{
                    position: 'absolute',
                    left: '50%',
                    bottom: 24,
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
                    transition={{ duration: 1.6, repeat: Infinity }}
                >
                    <KeyboardDoubleArrowDownIcon />
                </motion.div>
            </Box>
        </Box>
    );
};

export default Home;
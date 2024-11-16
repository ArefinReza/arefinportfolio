import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import WebIcon from '@mui/icons-material/Web';
import SchoolIcon from '@mui/icons-material/School';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/css/about.css';
import profileImage from '../assets/image/profileImage.jpg'
function About() {
    return (
        <Box className="aboutSection" sx={{ padding: '20px', color: 'text.primary' }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ color: '#003049' }}>
                About Me
            </Typography>

            <Typography className="aboutMe" variant="body1" paragraph>
                I am passionate about collaborating with like-minded professionals to tackle complex technical challenges and contribute to the growth and success of dynamic organizations. Open to new opportunities and excited about driving innovation in a collaborative and forward-thinking environment. I have a strong background in both frontend and backend development, having contributed to the creation of robust web applications and services. Let's connect and explore possibilities!
            </Typography>

            <Grid container spacing={4} sx={{ marginTop: '20px' }}>
                {/* Left Section - Avatar */}
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <Box
                        component="img"
                        alt="Your Name"
                        src={profileImage}
                        sx={{
                            width: '100%',
                            borderRadius: 0
                        }}
                    />
                </Grid>

                {/* Right Section - Details */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ position: 'relative', display: 'inline-block', paddingBottom: 1 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#00458b',
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                <PersonIcon sx={{ marginRight: 1 }} />
                                MD. Arefin Reza
                            </Typography>
                            {/* Stylized rectangle background */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 189,
                                    width: '25px', // Slightly wider
                                    height: '25px', // Slightly taller
                                    background: 'linear-gradient(135deg, #FFD700, #FFA500)', // Gradient color
                                    zIndex: 0,
                                    borderRadius: '8px 2px 8px 2px', // Custom border radius for an angular look
                                    transform: 'translateY(-6px) rotate(15deg)', // Adds a slight rotation for style
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
                                }}
                            />
                        </Box>
                        <Typography variant="body2" color="textSecondary">
                            A professionals Full Stack Web Developer and Programmer
                        </Typography>

                        <Box className="details" sx={{ display: 'flex', gap: 4, mt: 2 }}>
                            {/* Left Column */}
                            <Box>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CakeIcon
                                        sx={{
                                            marginRight: 1,
                                            color: '#00458b',
                                            animation: 'bounce 2s infinite',
                                            '@keyframes bounce': {
                                                '0%, 100%': { transform: 'translateY(0)' },
                                                '50%': { transform: 'translateY(-4px)' },
                                            },
                                        }}
                                    />{' '}
                                    Birthday: December 23, 1998
                                </Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <WebIcon
                                        sx={{
                                            marginRight: 1,
                                            color: '#00458b',
                                            animation: 'spin 4s linear infinite',
                                            '@keyframes spin': {
                                                '0%': { transform: 'rotate(0deg)' },
                                                '100%': { transform: 'rotate(360deg)' },
                                            },
                                        }}
                                    />{' '}
                                    Website: www.arefin.com
                                </Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FacebookIcon
                                        sx={{
                                            marginRight: 1,
                                            color: '#00458b',
                                            animation: 'bounce 2s infinite',
                                            '@keyframes bounce': {
                                                '0%, 100%': { transform: 'translateY(0)' },
                                                '50%': { transform: 'translateY(-4px)' },
                                            },
                                        }}
                                    />{' '}
                                    <Link href="https://www.facebook.com/arefin.reza.saim" target="_blank" sx={{textDecoration:'none', color:'text.primary'}}> Facebook
                                    </Link>
                                </Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <InstagramIcon
                                        sx={{
                                            marginRight: 1,
                                            color: '#00458b',
                                            animation: 'spin 4s linear infinite',
                                            '@keyframes spin': {
                                                '0%': { transform: 'rotate(0deg)' },
                                                '100%': { transform: 'rotate(360deg)' },
                                            },
                                        }}
                                    />{' '}
                                    <Link href="https://www.instagram.com/arefinsaim/" target="_blank" sx={{textDecoration:'none', color:'text.primary'}}> Instagram
                                    </Link>
                                </Typography>
                            </Box>

                            {/* Right Column */}
                            <Box>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PersonIcon
                                        sx={{
                                            marginRight: 1,
                                            color: '#00458b',
                                            animation: 'pulse 2s infinite',
                                            '@keyframes pulse': {
                                                '0%, 100%': { transform: 'scale(1)' },
                                                '50%': { transform: 'scale(1.1)' },
                                            },
                                        }}
                                    />{' '}
                                    Father: MD. Erfan Reza
                                </Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <SchoolIcon
                                        sx={{
                                            marginRight: 1,
                                            color: '#00458b',
                                            animation: 'shake 1.5s infinite',
                                            '@keyframes shake': {
                                                '0%, 100%': { transform: 'translateX(0)' },
                                                '25%': { transform: 'translateX(-2px)' },
                                                '75%': { transform: 'translateX(2px)' },
                                            },
                                        }}
                                    />{' '}
                                    Degree: Bachelor of Science
                                </Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <LinkedInIcon
                                        sx={{
                                            marginRight: 1,
                                            color: '#00458b',
                                            animation: 'pulse 2s infinite',
                                            '@keyframes pulse': {
                                                '0%, 100%': { transform: 'scale(1)' },
                                                '50%': { transform: 'scale(1.1)' },
                                            },
                                        }}
                                    />{' '}
                                    <Link href="https://www.linkedin.com/in/arefinreza46/" target="_blank" sx={{textDecoration:'none', color:'text.primary'}}> LinkedIn
                                    </Link>
                                </Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <GitHubIcon
                                        sx={{
                                            marginRight: 1,
                                            color: '#00458b',
                                            animation: 'shake 1.5s infinite',
                                            '@keyframes shake': {
                                                '0%, 100%': { transform: 'translateX(0)' },
                                                '25%': { transform: 'translateX(-2px)' },
                                                '75%': { transform: 'translateX(2px)' },
                                            },
                                        }}
                                    />{' '}
                                    <Link href="https://github.com/ArefinReza" target="_blank" sx={{textDecoration:'none', color:'text.primary'}}> Github
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>

                    </Box>
                </Grid>
            </Grid>

            {/* Client Stats Section */}
            <Box className="clientStats" sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <DoneAllIcon sx={{ fontSize: 40, color: '#00458b' }} />
                    <Typography variant="h5">60+</Typography>
                    <Typography variant="body2">Happy Clients</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <DoneAllIcon sx={{ fontSize: 40, color: '#00458b' }} />
                    <Typography variant="h5">40+</Typography>
                    <Typography variant="body2">Projects Done</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default About;

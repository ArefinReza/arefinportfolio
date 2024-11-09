import React from 'react';
import { Box, Typography, Avatar, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import WebIcon from '@mui/icons-material/Web';
import SchoolIcon from '@mui/icons-material/School';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import '../assets/css/about.css';
import profileImage from '../assets/image/profileImage.jpg'
function About() {
    return (
        <Box className="aboutSection" sx={{ padding: '20px', color: 'text.primary' }}>
            <Typography variant="h3" align="center" gutterBottom>
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
                        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                            <PersonIcon sx={{ marginRight: 1, color: 'primary.main' }} /> UI/UX Designer
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula enim in dui fringilla...
                        </Typography>

                        <Box className="details" sx={{ display: 'flex', gap: 4, mt: 2 }}>
                            {/* Left Column */}
                            <Box>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CakeIcon sx={{ marginRight: 1, color: 'primary.main' }} /> Birthday: December 23, 1998
                                </Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <WebIcon sx={{ marginRight: 1, color: 'primary.main' }} /> Website: www.arefin.com
                                </Typography>
                            </Box>

                            {/* Right Column */}
                            <Box>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PersonIcon sx={{ marginRight: 1, color: 'primary.main' }} /> Age: 25
                                </Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <SchoolIcon sx={{ marginRight: 1, color: 'primary.main' }} /> Degree: Bachelor of Science
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* Client Stats Section */}
            <Box className="clientStats" sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <DoneAllIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                    <Typography variant="h5">100+</Typography>
                    <Typography variant="body2">Happy Clients</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <DoneAllIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                    <Typography variant="h5">50+</Typography>
                    <Typography variant="body2">Projects Done</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default About;

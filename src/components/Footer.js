import React from 'react';
import { Box, Typography, IconButton, Grid} from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#1d2225',
                color: 'white',
                py: 4,
                px: 2,
            }}
        >
            <Grid container spacing={3}>
                {/* About Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                        We are a team of passionate developers dedicated to building high-quality websites and applications. Contact us for any web development needs.
                    </Typography>
                </Grid>

                {/* Quick Links Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Quick Links
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, '& a': { fontSize: '16px' } }}>
                        <IconButton
                            sx={{
                                color: '#3b5998', // Facebook color
                                '&:hover': { color: '#8b9dc3' },
                            }}
                            aria-label="Facebook"
                            href="https://www.facebook.com/arefin.reza.saim" target='_blank'
                        >
                            <Facebook />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: '#00acee', // Twitter color
                                '&:hover': { color: '#b3d8f2' },
                            }}
                            aria-label="Twitter"
                            href="https://twitter.com"
                        >
                            <Twitter />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: '#0e76a8', // LinkedIn color
                                '&:hover': { color: '#c0deed' },
                            }}
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/arefinreza46/" target='_blank'
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: '#c13584', // Instagram color
                                '&:hover': { color: '#f7b2c7' },
                            }}
                            aria-label="Instagram"
                            href="https://www.instagram.com/arefinsaim/" target='_blank'
                        >
                            <Instagram />
                        </IconButton>
                    </Box>
                </Grid>

                {/* Contact Info Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Contact Info
                    </Typography>
                    <Typography variant="body2">
                        Phone: +880 1819 222 446
                    </Typography>
                    <Typography variant="body2">
                        Email: arefinsaim@gmail.com
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Address: Dhaka, 1229, Bangladesh
                    </Typography>

                    {/* Social Media Icons */}
                    <Box sx={{ display: 'flex', gap: 1, }}>
                        {/*  */}
                    </Box>
                </Grid>
            </Grid>

            {/* Footer Bottom */}
            <Box
                sx={{
                    textAlign: 'center',
                    mt: 4,
                    borderTop: '1px solid #444',
                    pt: 2,
                }}
            >
                <Typography variant="body2">
                    © 2024 - {new Date().getFullYear()} Arefin Reza. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;

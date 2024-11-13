import React, { useEffect, useState } from 'react';
import { ReactTyped as Typed } from 'react-typed';
import { Box, Typography } from '@mui/material';
import coverImage from '../assets/image/coverImage.JPG';
import mobileCoverImage from '../assets/image/coverImageMobile.jpg';


const Home = () => {
  const [showScrollDown, setShowScrollDown] = useState(false);

  // Show "scroll down" message after a 3-second delay
  useEffect(() => {
    const timer = setTimeout(() => setShowScrollDown(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Hide "scroll down" text on scroll
  useEffect(() => {
    const handleScroll = () => setShowScrollDown(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Box
        id="home"
        sx={{
          height: { xs: '700px', sm: '780px' },
          backgroundImage: {
            xs: `url(${mobileCoverImage})`, 
            sm: `url(${coverImage})`
          },
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center right', sm: 'center' },
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: 'white',
          textAlign: 'left',
          padding: { xs: '0 10px', sm: '0 20px' },
          mb: 4,
          position: 'relative',
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            transform: 'scale(1)',
            animation: 'scaleIn 1.5s ease forwards',
            '@keyframes scaleIn': {
              '0%': { transform: 'scale(0.8)', opacity: 0 },
              '100%': { transform: 'scale(1)', opacity: 1 },
            },
          }}
        >
          <Typography
            className="covername"
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: '2.5rem', sm: '4rem' },
              mb: 2,
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.6)',
              animation: 'fadeIn 1.5s ease forwards',
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(-20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            Arefin Reza
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
            }}
          >
            <Typed
              strings={["Web Developer", "Programmer", "Freelancer", "IT Specialist"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </Typography>
        </Box>

        {/* Scroll Down Message */}
        {/* {showScrollDown && (
          <Typography
            variant="body1"
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'flex-start',
              fontSize: { xs: '1rem', sm: '1.2rem' },
              animation: 'colorShift 1.5s infinite',
              '@keyframes colorShift': {
                '0%': { color: '#FFFFFF' },
                '50%': { color: '#FFD700' },
                '100%': { color: '#FFFFFF' },
              },
              opacity: 0,
              animation: 'fadeInScrollDown 1s forwards, colorShift 1.5s infinite',
              '@keyframes fadeInScrollDown': {
                '0%': { opacity: 0, transform: 'translateY(10px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            Scroll Down
          </Typography>
        )} */}
      </Box>
    </div>
  );
};

export default Home;
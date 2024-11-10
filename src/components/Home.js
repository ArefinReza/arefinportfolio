import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import { Box, Typography } from '@mui/material';
import coverImage from '../assets/image/coverImage.JPG';

const Home =() =>{
  return (
    <div>
      <Box
        id="home"
        sx={{
          height: { xs: '600px', sm: '780px' },
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',  // Ensure the image covers the entire area
          backgroundPosition: { xs: 'center right', sm: 'center' },  // Focus on the right side for mobile
          backgroundAttachment: 'fixed',  // Create a parallax effect
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
            backgroundColor: 'rgba(0, 0, 0, 0.3)',  // Light overlay for readability
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
      </Box>
    </div>
  );
}
export default Home;
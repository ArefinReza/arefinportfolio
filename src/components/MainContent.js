import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import { Box, Typography } from '@mui/material';
import coverImage from '../assets/image/coverImage.JPG'
import '../assets/css/maincontent.css'
import About from './About';
import Skills from './Skills';
import Resume from './Resume';
const MainContent = () => {
  return (
    <Box sx={{ flex: 1, padding: { xs: '0px', sm: '0px 20px 20px 300px' }, bgcolor: 'background.default' }}>
      <Box
        id="home"
        sx={{
          height: '780px',
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          width:'100%',
          overflow:'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: 'white',
          textAlign: 'left',
          padding: '0 20px',
          mb: 4,
        }}
      >
        <Typography className='covername' variant="h2" fontWeight="bold">Arefin Reza</Typography>
        <Typography variant="h5">
          <Typed
            strings={["Web Developer", "Designer", "Freelancer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ my: 4 }}>
        {/* <Typography variant="h4" fontWeight="bold">About Me</Typography> */}
        <Typography>
          <About/>
        </Typography>
      </Box>

      {/* Skills Sections  */}
      <Box id="skills" sx={{ my: 4 }}>
        {/* <Typography variant="h4" fontWeight="bold">About Me</Typography> */}
        <Typography>
          <Skills/>
        </Typography>
      </Box>

      {/* Resume Section */}
      <Box id="resume" sx={{ my: 4 }}>
        <Typography>
          <Resume/>
        </Typography>
      </Box>

      {/* Portfolio Section */}
      <Box id="portfolio" sx={{ my: 4 }}>
        <Typography variant="h4" fontWeight="bold">Portfolio</Typography>
        {/* Add your portfolio items here */}
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ my: 4 }}>
        <Typography variant="h4" fontWeight="bold">Services</Typography>
        {/* Add your services here */}
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ my: 4 }}>
        <Typography variant="h4" fontWeight="bold">Contact</Typography>
        {/* Add your contact form or contact information here */}
      </Box>

      {/* Additional Sections... */}
    </Box>
  );
};

export default MainContent;

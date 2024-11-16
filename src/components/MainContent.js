import React from 'react';
import { Box, Typography } from '@mui/material';
import '../assets/css/maincontent.css'
import About from './About';
import Skills from './Skills';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import Reviews from './Reviews';
const MainContent = () => {
  return (
    <Box sx={{ flex: 1, padding: { xs: '0px', sm: '0px 20px 0px 300px' }, bgcolor: 'background.default' }}>

      {/* Home Section */}
      <Box id="home">
        <Typography>
          <Home/>
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
        <Typography variant="h4" fontWeight="bold">
        <Portfolio/>
        </Typography>
        
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ my: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          <Services/>
          </Typography>
        
      </Box>
      <Box id="footer" >
        <Typography variant="h4" fontWeight="bold">
          <Reviews/>
        </Typography>
      </Box>
      {/* Contact Section */}
      <Box id="contact" sx={{ my: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          <Contact/>
        </Typography>
      </Box>
      <Box id="footer" >
        <Typography variant="h4" fontWeight="bold">
          <Footer/>
        </Typography>
      </Box>
    </Box>
  );
};

export default MainContent;

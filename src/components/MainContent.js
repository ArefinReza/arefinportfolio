import React from 'react';
import { Box, Typography } from '@mui/material';
import '../assets/css/maincontent.css'
import About from './About';
import Skills from './Skills';
import Resume from './Resume';
import Portfolio from './Portfolio';
import LiveProjects from './LiveProjects';
import Services from './Services';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import Reviews from './Reviews';
import ScrollReveal from './ScrollReveal';

const MainContent = () => {
  return (
    <Box sx={{ flex: 1, padding: { xs: '0px', sm: '0px 20px 0px 300px' }, bgcolor: 'transparent' }}>

      {/* Home Section */}
      <Box id="home">
        <Home/>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ my: 8 }}>
        <ScrollReveal variant="reveal-blur-in">
          <About/>
        </ScrollReveal>
      </Box>

      {/* Skills Sections  */}
      <Box id="skills" sx={{ my: 8 }}>
        <ScrollReveal variant="reveal-zoom-in">
          <Skills/>
        </ScrollReveal>
      </Box>

      {/* Resume Section */}
      <Box id="resume" sx={{ my: 8 }}>
        <ScrollReveal variant="reveal">
          <Resume/>
        </ScrollReveal>
      </Box>

      {/* Portfolio Section */}
      <Box id="portfolio" sx={{ my: 8 }}>
        <ScrollReveal variant="reveal">
          <Portfolio/>
        </ScrollReveal>
      </Box>

      {/* Live Projects Section */}
      <Box id="live-projects" sx={{ my: 8 }}>
        <ScrollReveal variant="reveal">
          <LiveProjects/>
        </ScrollReveal>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ my: 8 }}>
        <ScrollReveal variant="reveal-zoom-in">
          <Services/>
        </ScrollReveal>
      </Box>

      <Box id="reviews" sx={{ my: 8 }}>
        <ScrollReveal variant="reveal">
          <Reviews/>
        </ScrollReveal>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ my: 8 }}>
        <ScrollReveal variant="reveal-blur-in">
          <Contact/>
        </ScrollReveal>
      </Box>

      <Box id="footer">
        <Footer/>
      </Box>
    </Box>
  );
};

export default MainContent;

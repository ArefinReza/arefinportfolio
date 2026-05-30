import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ServiceDetails from './components/ServiceDetails';
import PortfolioDetails from './components/PortfolioDetails';
import Seo from './components/Seo';

const App = () => {
  const location = useLocation();

  const siteUrl = 'https://arefinreza.netlify.app';
  const description =
    'Explore the portfolio of MD. Arefin Reza, a professional Full-Stack Developer specializing in robust Laravel backends and high-performance React/Vue.js frontends. Crafting premium, scalable, and SEO-optimized web applications that drive real business growth.';
  const ogImage = 'https://arefinreza446.netlify.app/static/media/profile.55430921fcc11aebf13d.jpg';
  const keywords =
    'Arefin Reza, Full-Stack Developer, Laravel Developer, Vue.js Specialist, React JS Engineer, Web Developer in Bangladesh, Premium Web Design, Software Engineer Portfolio, E-commerce Website Developer, Custom CMS Builder, MD. Arefin Reza, PHP Laravel Expert, Frontend Developer';

  const path = location.pathname;
  const canonicalUrl = path === '/' ? siteUrl : `${siteUrl}${path}`;

  const titleByPath = {
    '/': 'MD. Arefin Reza | Full-Stack Developer Portfolio',
    '/services': 'Services | MD. Arefin Reza',
    '/portfolio': 'Portfolio | MD. Arefin Reza',
  };

  const fallbackTitle = 'MD. Arefin Reza | Full-Stack Developer Portfolio';
  const title = titleByPath[path] || fallbackTitle;
  return (
    <Box sx={{ display: 'flex' }}>
      <Seo
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        imageUrl={ogImage}
        keywords={keywords}
      />
      <CssBaseline />
      {location.pathname === '/' && <Sidebar />}
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/services/" element={<MainContent />} />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />
          <Route path="/portfolio/" element={<MainContent />} />

        </Routes>
      </Box>
    </Box>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

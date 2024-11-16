import React,{useEffect} from 'react';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ServiceDetails from './components/ServiceDetails';
import PortfolioDetails from './components/PortfolioDetails';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Arefin Reza Portfolio',
      '/services': 'Services - Arefin Reza Portfolio',
      '/portfolio': 'Portfolio - Arefin Reza Portfolio',
    };
    const currentPath = location.pathname.split('/')[1];
    document.title = titles[`/${currentPath}`] || 'Arefin Reza Portfolio';

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Come back to Arefin';
      } else {
        document.title = titles[`/${currentPath}`] || 'Arefin Reza Portfolio';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location.pathname]);
  return (
    <Box sx={{ display: 'flex' }}>
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

import React from 'react';
import { Box, CssBaseline } from '@mui/material';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
// import PortfolioDetails from './components/PortfolioDetails';
// import ServiceDetails from './components/ServiceDetails';
const HomePage = () => {
  return (

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <Box sx={{ flex: 1 }}>
          <MainContent/>
        </Box>
      </Box>

  );
};

export default HomePage;

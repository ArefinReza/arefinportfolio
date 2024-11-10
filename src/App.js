import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
// import PortfolioDetails from './components/PortfolioDetails';
import ServiceDetails from './components/ServiceDetails';
const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            {/* <Route path="/portfolio/:id" element={<PortfolioDetails />} /> */}
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;

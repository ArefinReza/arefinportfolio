import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ServiceDetails from './components/ServiceDetails';

const App = () => {
  const location = useLocation(); // Get the current location

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Conditionally render Sidebar only on the '/' route */}
      {location.pathname === '/' && <Sidebar />}
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
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

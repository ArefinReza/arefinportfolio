import React from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../assets/css/services.css'

import { services } from './Api';
function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3, py: 5 }}>
      {/* Header */}
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#003049' }}>
        Services
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          mb: 4,
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.25rem',
          fontWeight: 500,
          lineHeight: 1.6,
          color: '#333',
          letterSpacing: '0.5px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        We provide a wide range of services to help you grow and succeed in your business. Our team is dedicated to delivering the best solutions tailored to your needs.
      </Typography>


      {/* Services Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr' },
          gap: 3,
        }}
      >
        {services.map((service) => (
          <Card
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: 3,
              p: 2,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
              borderRadius: 2,
              backgroundColor: '#f9f9f9'
            }}
          >
            {/* Icon Circle */}
            <IconButton
              sx={{
                backgroundColor: '#00458b',
                color: '#fff',
                fontSize: '2rem',
                p: 2,
                mr: 3,
                borderRadius: '50%',
                '& svg': { fontSize: '1.8rem' },
                transition: 'background-color 0.3s, color 0.3s', // Smooth transition effect
                '&:hover': {
                  backgroundColor: '#003366', // Change to a darker shade on hover
                  color: '#FFD700', // Change icon color on hover
                },
              }}
            >
              {service.icon}
            </IconButton>


            {/* Content */}
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h6" component="div" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      {/* <Reviews/> */}
    </Box>
  );
}

export default Services;

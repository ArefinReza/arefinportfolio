import React from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ExtensionIcon from '@mui/icons-material/Extension';
import '../assets/css/services.css'
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and scalable websites with modern technologies.",
    icon: <CodeIcon />
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating user-friendly and visually appealing designs.",
    icon: <DesignServicesIcon />
  },
  {
    id: 3,
    title: "Business Analysis",
    description: "Providing data-driven insights for better decision-making.",
    icon: <AssessmentIcon />
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Improving search engine ranking and online visibility.",
    icon: <QueryStatsIcon />
  },
  {
    id: 5,
    title: "Consulting",
    description: "Offering expert advice to enhance your business strategy.",
    icon: <BusinessCenterIcon />
  },
  {
    id: 6,
    title: "Custom Solutions",
    description: "Tailoring solutions to meet specific business needs.",
    icon: <ExtensionIcon />
  },
];

function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3, py: 5 }}>
      {/* Header */}
      <Typography variant="h3" gutterBottom>
        Services
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px' }}>
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
                backgroundColor: '#1976d2',
                color: '#fff',
                fontSize: '2rem',
                p: 2,
                mr: 3,
                borderRadius: '50%',
                '& svg': { fontSize: '1.8rem' },
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
    </Box>
  );
}

export default Services;

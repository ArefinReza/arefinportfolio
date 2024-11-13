import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Box,
  Paper,
  useMediaQuery,
  Breadcrumbs,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Home as HomeIcon, ArrowForwardIos as ArrowIcon } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Carousel from 'react-material-ui-carousel';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import '../assets/css/ServiceDetails.css';
import { services } from './Services';
import Contact from './Contact'
import Footer from './Footer'
const ServiceDetails = () => {
  const { id } = useParams();
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null); // Active category filter

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const service = services.find((service) => service.id === Number(id));
    setSelectedService(service);
    if (service) {
      setActiveFilter(service.categories[0]);
    }
  }, [id]);

  if (!selectedService) {
    return (
      <div>
        Service not found. <Link to="/services">Return to Services</Link>
      </div>
    );
  }

  const handleFilter = (category) => {
    setActiveFilter(category);
  };

  return (
    <Box>
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', padding: 2 }}>
      <Box sx={{ flexGrow: 1, margin: '20px' }}>
        <Breadcrumbs
          separator={<ArrowBackIosIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{
            '& .MuiBreadcrumbs-separator': { color: 'primary.main' },
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: '#00458b' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon fontSize="small" sx={{ mr: 0.5 }} /> Home
            </Box>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none', color: '#00458b' }}>
            Services
          </Link>
          <Typography color="#00458b">{selectedService.title}</Typography>
        </Breadcrumbs>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 3, flexWrap: 'wrap' }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#003049" }}>
            {selectedService.title}
          </Typography>
        </Box>
        <Box
          className="filterOptions"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            marginBottom: 3,
            flexWrap: 'wrap',
          }}
        >
          {selectedService.categories.map((category, index) => (
            <Typography
              key={index}
              variant="button"
              className={`filterItem ${activeFilter?.name === category.name ? 'active' : ''}`}
              onClick={() => handleFilter(category)}
              sx={{
                cursor: 'pointer',
                padding: '5px 10px',
                backgroundColor: activeFilter?.name === category.name ? '#003366' : 'transparent',
                color: activeFilter?.name === category.name ? '#FFD700' : '#000',
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: '#003366',
                  color: '#FFD700',
                },
              }}
            >
              {category.name}
            </Typography>
          ))}
        </Box>

        <Grid container spacing={2} >
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              {selectedService.description}
            </Typography>
          </Grid>

          {activeFilter?.name === 'Pricing' ? (
            <Grid container spacing={2} mt={2}>
              {activeFilter.pricingDetails.map((plan, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', 
                    
                      cursor: 'pointer',
                      boxShadow: 3,
                      p: 2,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 6,
                      },
                      borderRadius: 2,
                      backgroundColor: '#f9f9f9',
                      height:'240px'
                   
                  }}>
                    <WorkspacePremiumIcon/>
                    <Typography variant="h6" fontWeight="bold" color="#003049">
                      {plan.type}
                    </Typography>
                    <Typography sx={{
                      width: '80px',
                      margin:'auto',
                      marginTop: '4px',
                      background: '#00458b',
                      color: 'white',
                      fontWeight: 'bold',
                      py: 1.5,
                        transform: 'skew(-10deg)',
                       
                        overflow: 'hidden',
                        transition: 'color 0.3s ease',
                        zIndex: 1,
                        '&:hover': {
                          color: '#FFD700',},
                      py: 1.5,
                    }} variant="h5" color="#FFD700" fontWeight="bold" gutterBottom>
                      {plan.price}
                    </Typography>
                    <Box>
                      {plan.features.map((feature, i) => (
                        <Typography key={i} variant="body2" sx={{ color: "#555" }}>
                          • {feature}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              ))}
              <Contact/>
            </Grid>
          ) : (
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} md={5}>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#003049", padding: "10px" }}>
                  {activeFilter?.name}
                </Typography>
                <Typography variant="body2" sx={{ padding: '10px' }}>
                  {activeFilter?.description}
                </Typography>
              </Grid>

              <Grid item xs={12} md={7}>
                <Paper>
                  <Carousel>
                    {activeFilter?.images.map((image, index) => (
                      <Box
                        key={index}
                        component="img"
                        src={image}
                        alt={`${selectedService.title} - ${activeFilter?.name}`}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: 1,
                        }}
                      />
                    ))}
                  </Carousel>
                </Paper>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
      <Footer/>
    </Box>
  );
};

export default ServiceDetails;


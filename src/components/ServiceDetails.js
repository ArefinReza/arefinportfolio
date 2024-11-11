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
import '../assets/css/ServiceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null); // Active category filter

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Web development services...',
      categories: [
        { name: 'Frontend', description: 'Frontend development details.', images: ['https://mdbcdn.b-cdn.net/wp-content/uploads/2017/12/carousel.jpg', 'https://s3-alpha.figma.com/hub/file/4640124499/85354f41-8eba-4ceb-ae49-55195943c4c7-cover.png'] },
        { name: 'Backend', description: 'Backend development details.', images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'] },
        { name: 'Database', description: 'Database management and optimization.', images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'] }
      ]
    },
    {
      id: '2',
      title: 'Software Development',
      description: 'Detailed information about software development.',
      categories: [
        { name: 'Desktop', description: 'Desktop software development details.', images: ['https://via.placeholder.com/300x200'] },
        { name: 'Mobile', description: 'Mobile software solutions.', images: ['https://via.placeholder.com/300x200'] },
        { name: 'Web', description: 'Web applications development.', images: ['https://via.placeholder.com/300x200'] }
      ]
    },
    // More services with similar structures
  ];

  useEffect(() => {
    const service = services.find((service) => service.id === id);
    setSelectedService(service);
    if (service) {
      // Set the initial category to the first one
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
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', padding: 2 }}>
      {/* Main Content */}
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
          <Link to="/" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon fontSize="small" sx={{ mr: 0.5 }} /> Home
            </Box>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
            Services
          </Link>
          <Typography color="text.primary">{selectedService.title}</Typography>
        </Breadcrumbs>
        <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              marginBottom: 3,
              flexWrap: 'wrap',
            }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
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
                  backgroundColor: activeFilter?.name === category.name ? theme.palette.primary.main : 'transparent',
                  color: activeFilter?.name === category.name ? 'white' : theme.palette.text.primary,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                    color: 'white',
                  },
                }}
              >
                {category.name}
              </Typography>
            ))}
          </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            
            <Typography variant="body1" gutterBottom>
              {selectedService.description}
            </Typography>
          </Grid>

          {/* Category Filter */}
          

          {/* Filtered Output */}
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} md={5}>
              <Typography variant="h6" gutterBottom>
                Selected Category: {activeFilter?.name}
              </Typography>
              <Typography variant="body2">
                {activeFilter?.description}
              </Typography>
            </Grid>

            {/* Image Slider Section */}
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
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceDetails;

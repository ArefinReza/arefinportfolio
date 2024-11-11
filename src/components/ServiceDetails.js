import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
  useMediaQuery,
  Breadcrumbs,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Home as HomeIcon, ArrowForwardIos as ArrowIcon } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../assets/css/ServiceDetails.css';
import Sidebar from './Sidebar';

const ServiceDetails = () => {
  const { id } = useParams();
  const [selectedService, setSelectedService] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is small (mobile)

  const services = [
    { id: '1', title: 'Web Design', description: 'Enim qui eos rerum in delectus Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.' },
    { id: '2', title: 'Software Development', description: 'Detailed information about software development.' },
    { id: '3', title: 'Product Management', description: 'Insights on product management.' },
    { id: '4', title: 'Graphic Design', description: 'Details about graphic design services.' },
    { id: '5', title: 'Marketing', description: 'All about marketing strategies.' }
  ];

  useEffect(() => {
    const service = services.find((service) => service.id === id);
    setSelectedService(service);
  }, [id]);

  if (!selectedService) {
    return <div>Service not found.</div>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          marginLeft: isMobile ? 0 : '0px', // Apply left margin only on larger screens
          margin: '20px',
        }}
      >
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


        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {selectedService.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {selectedService.description}
            </Typography>
          </Grid>

          {/* Image and Text Content */}
          <Grid container spacing={2} mt={2} direction={isMobile ? 'row' : 'row'}>
            {/* List of services */}
            <Grid item xs={12} md={5}>
              <List>
                {services.map((service) => (
                  <ListItem
                    key={service.id}
                    component={Link}
                    to={`/services/${service.id}`}
                    selected={selectedService.id === service.id}
                    sx={{
                      color: 'black',
                      '&.Mui-selected': {
                        backgroundColor: 'primary.main',
                      },
                      textDecoration: 'none',
                    }}
                    button
                  >
                    <ListItemText primary={service.title} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={7}>
              <Paper>
                <Box
                  component="img"
                  src="https://via.placeholder.com/300x200"
                  alt={selectedService.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 1,
                  }}
                />
              </Paper>
              <Typography variant="h6" gutterBottom>
                Temporibus et in vero dicta aut
              </Typography>
              <Typography variant="body2">
                Temporibus et in vero dicta aut eius lidero plastis trand lined
                voluptas dolorem ut voluptas.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceDetails;

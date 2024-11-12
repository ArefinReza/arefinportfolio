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
import moonit1 from '../assets/image/portfolioDetails/moonit1.png'
import moonit2 from '../assets/image/portfolioDetails/moonit2.png'
import moonit3 from '../assets/image/portfolioDetails/moonit3.png'
import moonit4 from '../assets/image/portfolioDetails/moonit4.png'
import moonit5 from '../assets/image/portfolioDetails/moonit5.png'
import moonit6 from '../assets/image/portfolioDetails/moonit6.png'
import moonit7 from '../assets/image/portfolioDetails/moonit7.png'
import moonit8 from '../assets/image/portfolioDetails/moonit8.png'
import moonit9 from '../assets/image/portfolioDetails/moonit9.png'
import moonit10 from '../assets/image/portfolioDetails/moonit10.png'

import mt1 from '../assets/image/portfolioDetails/mt1.png'
import mt2 from '../assets/image/portfolioDetails/mt2.png'
import mt3 from '../assets/image/portfolioDetails/mt3.png'
import mt4 from '../assets/image/portfolioDetails/mt4.png'
import mt5 from '../assets/image/portfolioDetails/mt5.png'
import mt6 from '../assets/image/portfolioDetails/mt6.png'
import mt7 from '../assets/image/portfolioDetails/mt7.png'
import mt8 from '../assets/image/portfolioDetails/mt8.png'
import mt9 from '../assets/image/portfolioDetails/mt9.png'
import mta1 from '../assets/image/portfolioDetails/mta1.png'
import mta2 from '../assets/image/portfolioDetails/mta2.png'
import mta3 from '../assets/image/portfolioDetails/mta3.png'
import mta4 from '../assets/image/portfolioDetails/mta4.png'
import mta5 from '../assets/image/portfolioDetails/mta5.png'

import gen1 from '../assets/image/portfolioDetails/gen1.png'
import gen2 from '../assets/image/portfolioDetails/gen2.png'
import gen3 from '../assets/image/portfolioDetails/gen3.png'
import gen4 from '../assets/image/portfolioDetails/gen4.png'
import gen5 from '../assets/image/portfolioDetails/gen5.png'
import gen6 from '../assets/image/portfolioDetails/gen6.png'
import gen7 from '../assets/image/portfolioDetails/gen7.png'
import gen8 from '../assets/image/portfolioDetails/gen8.png'
import gen9 from '../assets/image/portfolioDetails/gen9.png'
import gen10 from '../assets/image/portfolioDetails/gen10.png'
import gen11 from '../assets/image/portfolioDetails/gen11.png'
import gen12 from '../assets/image/portfolioDetails/gen12.png'
import gen13 from '../assets/image/portfolioDetails/gen13.png'
import gena1 from '../assets/image/portfolioDetails/gena1.png'
import gena2 from '../assets/image/portfolioDetails/gena2.png'
import gena3 from '../assets/image/portfolioDetails/gena3.png'
import gena4 from '../assets/image/portfolioDetails/gena4.png'
import gena5 from '../assets/image/portfolioDetails/gena5.png'


const portfolioData = [
  {
    id: '1',
    title: 'Digital Marketing Agency Portfolio',
    category:'Portfolio',
    description: 'I created many Portfolio site using Laravel and React',
     imageUrl: moonit1,
    categories: [
      { name: 'Frontend', description: 'I used React for Frontend.', images: [moonit2, moonit3,moonit4,moonit5,moonit6,moonit7,moonit8,moonit9,moonit10] },
      { name: 'Backend', description: 'I develop backend using Laravel.', images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'] },
      { name: 'Database', description: 'I give api connections both of phase and I stored data in MySql', images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'] }
    ]
  },
  {
    id: '2',
    title: 'Coffee Shop Digital Menu Cart',
    category:'ECommerce',
    description: 'I developed Digital Menu Cart For a Coffee Shop',
     imageUrl: mt1,
    categories: [
      { name: 'Frontend', description: 'I used Raw HTML and CSS and JavaScript', images: [mt1,mt2,mt3,mt4,mt5,mt6,mt7,mt8,mt9] },
      { name: 'Backend', description: 'I used Raw PHP for backend and Admin Panel.', images: [mta1,mta2,mta3,mta4,mta5] },
      { name: 'Database', description: 'I used MySql to store data.', images: [mt1,mt2,mta1,mta3] }
    ]
  },
  {
    id: '3',
    title: 'Gen-z Bazar',
    category:'ECommerce',
    description: 'I developed ECommerce website named Gen-z Bazar. A full complete website with authentications.',
     imageUrl: gen1,
    categories: [
      { name: 'Frontend', description: 'I used React and BootStrap for Frontend.', images: [gen1,gen2,gen3,gen4,gen5,gen6,gen7,gen8,gen9,gen10,gen11,gen12,gen13] },
      { name: 'Backend', description: 'I develop backend using Laravel. A custome Admin panel with Bootstrap.', images: [gena1,gena2,gena3,gena4,gena5] },
      { name: 'Database', description: 'I give api connections both of phase and I stored data in MySql.', images: [gen1,gen10,gen4,gena3,gena4] }
    ]
  },
  // More services with similar structures
];

export {portfolioData};
const PortfolioDetails = () => {
  const { id } = useParams();
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null); // Active category filter

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const service = portfolioData.find((service) => service.id === id);
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
          <Link to="/" style={{ textDecoration: 'none', color: '#00458b' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <HomeIcon fontSize="small" sx={{ mr: 0.5, color: '#00458b' }} /> Home
            </Box>
          </Link>
          <Link style={{ textDecoration: 'none', color: '#00458b' }}>
            Portfolio
          </Link>
          <Typography color= '#00458b'>{selectedService.title}</Typography>
        </Breadcrumbs>
        <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              marginBottom: 3,
              flexWrap: 'wrap',
            }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{color: "#003049"}}>
              {selectedService.title}
            </Typography>
        </Box>
        {/* filter options  */}
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
                  color: activeFilter?.name === category.name ? '#FFD700'  : '#000',
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
              <Typography variant="h6" fontWeight="bold" gutterBottom sx={{color: "#003049", padding:"10px"}}>
                {activeFilter?.name}
              </Typography>
              <Typography variant="body2" sx={{padding:'10px'}}>
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

export default PortfolioDetails;

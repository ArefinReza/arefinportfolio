import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import '../assets/css/portfolio.css';
import { portfolioData } from './Api';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredData, setFilteredData] = useState(portfolioData);
  const [categories, setCategories] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(portfolioData.map(item => item.category))
    );
    setCategories(['All', ...uniqueCategories]);
  }, []);

  const handleFilter = (category) => {
    setActiveFilter(category);
    setFilteredData(
      category === 'All' ? portfolioData : portfolioData.filter(item => item.category === category)
    );
  };

  const handlePortfolioClick = (id) => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <Box className="portfolioSection" sx={{ padding: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#003049' }}>
        Some of My Portfolios
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ marginBottom: '20px' }}>
        Here are a few projects that I've worked on recently. Use the filter options to browse.
      </Typography>

      {/* Filter options */}
      <Box
        className="filterOptions"
        sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 3, flexWrap: 'wrap' }}
      >
        {categories.map((category, index) => (
          <Typography
            key={index}
            variant="button"
            className={`filterItem ${activeFilter === category ? 'active' : ''}`}
            onClick={() => handleFilter(category)}
            sx={{
              cursor: 'pointer',
              padding: '5px 10px',
              backgroundColor: activeFilter === category ? '#003366' : 'transparent',
              color: activeFilter === category ? '#FFD700' : '#000',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#003366',
                color: '#FFD700',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {category}
          </Typography>
        ))}
      </Box>

      {/* Portfolio grid */}
      <Grid container spacing={isMobile ? 2 : 4}>
        {filteredData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id} className="portfolioItem">
            <Box
              className="portfolioImageWrapper"
              onClick={() => handlePortfolioClick(item.id)}
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                cursor: 'pointer',
                '&:hover .portfolioHoverOverlay': {
                  opacity: 1
                },
                '&:hover .viewDetailsText': {
                  transform: 'translateY(1.1)'
                }
              }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="portfolioImage"
                style={{ width: '100%' }}
              />
              <Box
                className="portfolioHoverOverlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 51, 102, 0.8)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.4s ease',
                }}
              >
                <Typography
                  className="viewDetailsText"
                  variant="h5"
                  sx={{
                    color: '#FFD700',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    transform: 'translateY(20px)',
                    transition: 'transform 0.3s ease 0.1s',
                    '&:hover': {
                      transform: 'translateY(0)'
                    }
                  }}
                >
                  View Details →
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;
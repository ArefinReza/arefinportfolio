import React, { useState } from 'react';
import { Box, Typography, Grid, IconButton, Modal, Fade } from '@mui/material';
import { OpenInFull, Info } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/css/portfolio.css';
import { portfolioData } from './Api';

const categories = ['All', 'ECommerce', 'Portfolio', 'Apps', 'Photo Design', 'Templates'];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredData, setFilteredData] = useState(portfolioData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle filtering by category
  const handleFilter = (category) => {
    setActiveFilter(category);
    setFilteredData(
      category === 'All' ? portfolioData : portfolioData.filter(item => item.category === category)
    );
  };

  // Open image modal
  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close image modal
  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Handle portfolio item click
  const handlePortfolioClick = (id) => {
    navigate(`/portfolio/${id}`); // Navigate to the portfolio details page
  };

  return (
    <Box className="portfolioSection" sx={{ padding: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#003049' }}>
        Some of My Portfolios
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ marginBottom: '20px' }}>
        Here are a few projects that I’ve worked on recently. Use the filter options to browse.
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
              sx={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}
            >
              <img src={item.imageUrl} alt={item.title} className="portfolioImage" />

              {/* Hover overlay with icons */}
              <Box
                className="portfolioHoverOverlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 3,
                  transition: 'opacity 0.3s',
                  '&:hover': { opacity: 1 },
                }}
              >
                <IconButton
                  onClick={() => openImageModal(item.imageUrl)}
                  sx={{ color: '#fff', backgroundColor: '#1976d2', borderRadius: '50%' }}
                >
                  <OpenInFull fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={() => handlePortfolioClick(item.id)}
                  sx={{ color: '#fff', backgroundColor: '#1976d2', borderRadius: '50%' }}
                >
                  <Info fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Image Modal */}
      <Modal open={isModalOpen} onClose={closeImageModal}>
        <Fade in={isModalOpen}>
          <Box
            className="modalContent"
            sx={{
              width: '90%',
              maxWidth: '700px',
              margin: 'auto',
              mt: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={selectedImage} alt="Selected Portfolio" className="modalImage" />
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default Portfolio;

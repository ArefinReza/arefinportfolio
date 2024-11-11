import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, p: 4 }}>
      {/* Contact Info Section */}
      <Box sx={{ flex: 1, backgroundColor: '#f5f5f5', p: 3, borderRadius: 2 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Contact Info
        </Typography>
        
        {/* WhatsApp */}
        <Box display="flex" alignItems="center" mb={2} paddingLeft={2}>
          <WhatsAppIcon 
            sx={{ color: 'green', mr: 1, transition: 'color 0.3s', '&:hover': { color: '#25D366' } }} 
          />
          <Typography variant="body1">+880 1819 222 446</Typography>
        </Box>
        
        {/* Email */}
        <Box display="flex" alignItems="center" mb={2} paddingLeft={2}>
          <EmailIcon 
            sx={{ color: '#d93025', mr: 1, transition: 'color 0.3s', '&:hover': { color: '#FF5722' } }} 
          />
          <Typography variant="body1">arefinsaim.com</Typography>
        </Box>
        
        {/* Address */}
        <Box display="flex" alignItems="center" mb={2} paddingLeft={2}>
          <LocationOnIcon 
            sx={{ color: '#4285F4', mr: 1, transition: 'color 0.3s', '&:hover': { color: '#1E88E5' } }} 
          />
          <Typography variant="body1">1230 Khilkhet, Dhaka, Bangladesh</Typography>
        </Box>
        
        {/* Map */}
        <Box mt={3}>
          <Typography variant="body2" color="textSecondary">
            Location Map
          </Typography>
          <Box
            sx={{
              mt: 2,
              border: '1px solid #ccc',
              borderRadius: 2,
              overflow: 'hidden'
            }}
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153187!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df0c09fdf%3A0x5045675218ce6e0!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1616025506140!5m2!1sen!2sau"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </Box>

      {/* Contact Us Section */}
      <Box sx={{ flex: 1, backgroundColor: '#f5f5f5', p: 3, borderRadius: 2 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={2}>
          {/* Name and Email */}
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email Address" variant="outlined" />
          </Grid>

          {/* Subject */}
          <Grid item xs={12}>
            <TextField fullWidth label="Subject" variant="outlined" />
          </Grid>

          {/* Message */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>

          {/* Submit Button with Hover Effect */}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                background: '#016A70', // Primary color
                color: 'white',
                fontWeight: 'bold',
                py: 1.5,
                position: 'relative',
                overflow: 'hidden',
                transition: 'color 0.3s ease',
                zIndex: 1,
                '&:hover': {
                  color: 'white',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#1976d2', // Hover color
                  transition: 'left 0.3s ease',
                  zIndex: -1,
                },
                '&:hover::before': {
                  left: 0,
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
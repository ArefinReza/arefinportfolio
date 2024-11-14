import React from 'react';
import '../assets/css/reviews.css';
import { Box, Typography, Grid, IconButton, Modal, Fade } from '@mui/material';
const reviews = [
  { id: 1, rating: 4.5, comment: "Amazing service!", name: "Tusirul Kobir", img: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/420181800_1518626452323642_541937670196233716_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFszimrcp1PH-fGzPernDaFGwB6l8hxaIUbAHqXyHFohYnsdrP5diX54jiwgYAFeG7-5FV42qNf5m9MGXZiV3XO&_nc_ohc=n5MfBEkMJKQQ7kNvgE9LY1n&_nc_zt=24&_nc_ht=scontent.fdac24-1.fna&_nc_gid=Afq8Tb23yRBFE6MHxXCDJg3&oh=00_AYCZLHKGv0Fh7LKtztVwuw0IUx0WMIX8dSYb7c1tLZgqtA&oe=673B815E" },
  { id: 1, rating: 4.5, comment: "Amazing service!", name: "Abdul Moonna Aziz", img: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/434733795_3405466073076835_210126892732609005_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeGATqcV0hZlLWhdbhnin7LoX0aWgyDwk15fRpaDIPCTXql0MxUXDB1NPssPIuH9ZcLC3MGfTKZ2fBdZJUSTh9vD&_nc_ohc=atJln-zLRBAQ7kNvgHAJx8l&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AGoPZ0rIGiTkyVkYMQOD-oz&oh=00_AYAtQIKshOqhWsds49IQDN-fwsLXskMoVeAVanm-h0ou8g&oe=673B678D" },
  { id: 2, rating: 4.0, comment: "Very satisfied with the experience.", name: "Sohel Rana", img: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/460027266_3368335923472697_6173095582563154119_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFnbi__eQPqftzj1sc_Y_OvRjYPIf5F0GNGNg8h_kXQYyFQxycZs8X4Zd9ivFFVLl206nTCJxXTgRe2DVEm3v_1&_nc_ohc=HPMhUFqKGzoQ7kNvgFsy_Lb&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AZuRhVb4c2j6RbjMwMz11em&oh=00_AYBj7CHP6s8cAZfEv2kbOKeLt-vsetWwChfBB4wJ2IQ5sg&oe=673B8034" },
  { id: 3, rating: 5.0, comment: "Exceeded my expectations!", name: "Faisal Hasan Emon ", img: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/435957423_2409854079402714_7934057213616439698_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHJ38PjK_RqhNeQrJZrNuniGfdineLufogZ92Kd4u5-iGqdLyzGODnjEj-HMwBtt2zB7j4aoUgMZI2TYVR5kv82&_nc_ohc=O0vCpOfEdMYQ7kNvgGm__BK&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AH-sODinkPuIDHijjD0ul3-&oh=00_AYBQi79GPytw1hkTEKIpl7lVNWawwnV6O3SURjCtL_JTEA&oe=673B5B91" },
  // Add more reviews as needed
];

const Reviews = () => {
  // Duplicate the reviews array for continuous scrolling
  const scrollingReviews = [...reviews, ...reviews];

  return (
    <div>
      <Typography variant="h3" align="center" gutterBottom sx={{color:'#003049'}}>
        Some Reviews
      </Typography>
      <div className="reviews-container">
        <div className="reviews-list">
          {scrollingReviews.map((review, index) => (
            <div className="review-item" key={`${review.id}-${index}`}>
              <div className="review-rating">⭐ {review.rating}</div>
              <p className="review-comment">{review.comment}</p>
              <div className="reviewer-info">
                <img src={review.img} alt={review.name} className="reviewer-img" />
                <span className="reviewer-name">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

import React from 'react';
import '../assets/css/reviews.css';
import { Box, Typography, Grid, IconButton, Modal, Fade } from '@mui/material';
const reviews = [
  { id: 1, rating: 4.5, comment: "Amazing service!", name: "John Doe", img: "https://via.placeholder.com/50" },
  { id: 2, rating: 4.0, comment: "Very satisfied with the experience.", name: "Jane Smith", img: "https://via.placeholder.com/50" },
  { id: 3, rating: 5.0, comment: "Exceeded my expectations!", name: "Emily Johnson", img: "https://via.placeholder.com/50" },
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

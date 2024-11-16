import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { reviews } from "./Api";

const Reviews = () => {
  const chunkedReviews = reviews.reduce((acc, _, i) => {
    if (i % 4 === 0) acc.push(reviews.slice(i, i + 4));
    return acc;
  }, []);

  const renderStars = (rating) => {
    const maxStars = 5; // Total stars to show
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        {Array.from({ length: maxStars }, (_, index) => (
          <StarIcon
            key={index}
            sx={{
              fontSize: "1.2rem",
              color: index < Math.floor(rating) ? "#FFD700" : "#D3D3D3",
              fontWeight: index < rating ? "bold" : "normal",
            }}
          />
        ))}
      </Box>
    );
  };

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: "#003049" }}>
        Some Reviews
      </Typography>
      <Carousel
        autoPlay
        interval={3000}
        animation="fade"
        indicators={false}
        navButtonsAlwaysInvisible
      >
        {/* Map through each chunk of reviews */}
        {chunkedReviews.map((chunk, idx) => (
          <Grid
            container
            key={idx}
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              "@media (max-width: 600px)": {
                flexDirection: "row",
                justifyContent: "center",
              },
            }}
          >
            {chunk.map((review) => (
              <Grid item key={review.id} xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    p: 2,
                    textAlign: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fff",
                  }}
                >
                  <Avatar
                    src={review.img}
                    alt={review.name}
                    sx={{ width: 60, height: 60, margin: "0 auto 10px" }}
                  />
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {review.name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: "italic", color: "#555" }}>
                    {review.comment}
                  </Typography>
                  {/* Render Stars */}
                  {renderStars(review.rating)}
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default Reviews;

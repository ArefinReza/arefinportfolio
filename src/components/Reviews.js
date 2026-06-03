import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Stack,
  GlobalStyles,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import { reviews } from "./Api";

const Reviews = () => {
  const chunkedReviews = reviews.reduce((acc, _, i) => {
    if (i % 4 === 0) acc.push(reviews.slice(i, i + 4));
    return acc;
  }, []);

  const renderStars = (rating) => {
    const maxStars = 5;

    return (
      <Stack direction="row" justifyContent="center" spacing={0.35} sx={{ mt: 1.4 }}>
        {Array.from({ length: maxStars }, (_, index) => (
          <StarIcon
            key={index}
            sx={{
              fontSize: "1rem",
              color: index < Math.floor(rating) ? "#F5C86A" : "rgba(255,255,255,0.18)",
            }}
          />
        ))}
      </Stack>
    );
  };

  return (
    <>
      <GlobalStyles
        styles={{
          "@font-face": {
            fontFamily: "SlitoRegular",
            src: `
              url('/fonts/slito-regular.woff2') format('woff2'),
              url('/fonts/slito-regular.woff') format('woff')
            `,
            fontWeight: "normal",
            fontStyle: "normal",
            fontDisplay: "swap",
          },
        }}
      />

      <Box
        id="reviews"
        sx={{
          position: "relative",
          overflow: "hidden",
          px: { xs: 2.2, md: 5 },
          py: { xs: 8, md: 10 },
          color: "#f1f5f9",
          fontFamily: '"SlitoRegular", var(--font-body), sans-serif',
          background: `
            radial-gradient(circle at 50% 8%, rgba(245,200,106,0.14), transparent 30%),
            radial-gradient(circle at 18% 24%, rgba(103,232,249,0.1), transparent 28%),
            radial-gradient(circle at 82% 78%, rgba(167,139,250,0.1), transparent 30%),
            linear-gradient(180deg, #020617 0%, #06111f 50%, #010611 100%)
          `,
          borderRadius: { xs: "0px", md: "28px" },
          border: { xs: "none", md: "1px solid rgba(255,255,255,0.1)" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.024) 1px, transparent 1px)
            `,
            backgroundSize: { xs: "54px 54px", md: "84px 84px" },
            opacity: 0.24,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: 78,
            width: { xs: 260, md: 460 },
            height: { xs: 260, md: 460 },
            transform: "translateX(-50%)",
            borderRadius: "50%",
            border: "1px solid rgba(245,200,106,0.13)",
            opacity: 0.62,
            pointerEvents: "none",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: { xs: 58, md: 108 },
              borderRadius: "50%",
              border: "1px dashed rgba(103,232,249,0.12)",
            },
          }}
        />

        <Box sx={{ position: "relative", zIndex: 2, maxWidth: "1200px", mx: "auto" }}>
          <Stack alignItems="center" sx={{ mb: 5 }}>
            <Typography
              align="center"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "2.8rem", sm: "4.5rem", md: "6.3rem" },
                lineHeight: 0.84,
                fontWeight: 950,
                textTransform: "uppercase",
                textShadow: "0 22px 60px rgba(0,0,0,0.38)",
              }}
            >
              Client
              <Box
                component="span"
                sx={{
                  display: "block",
                  mt: 0.8,
                  color: "transparent",
                  WebkitTextStroke: {
                    xs: "1px #F5C86A",
                    md: "1.5px #F5C86A",
                  },
                  textShadow: "none",
                  fontSize: { xs: "2rem", sm: "3.5rem", md: "4.7rem" },
                }}
              >
                Feedback
              </Box>
            </Typography>
          </Stack>

          <Carousel
            autoPlay
            interval={4800}
            animation="fade"
            duration={500}
            indicators
            navButtonsAlwaysInvisible
            swipe
            indicatorContainerProps={{
              style: { marginTop: "26px" },
            }}
            indicatorIconButtonProps={{
              style: {
                color: "rgba(255,255,255,0.24)",
                padding: "4px",
              },
            }}
            activeIndicatorIconButtonProps={{
              style: { color: "#F5C86A" },
            }}
          >
            {chunkedReviews.map((chunk, idx) => (
              <Grid container key={idx} spacing={2.2} justifyContent="center">
                {chunk.map((review, index) => (
                  <Grid item key={review.id} xs={12} sm={6} md={3}>
                    <Box
                      sx={{
                        position: "relative",
                        minHeight: 260,
                        p: 2.25,
                        textAlign: "center",
                        overflow: "hidden",
                        borderRadius: "20px",
                        background:
                          index === 0
                            ? "linear-gradient(135deg, rgba(245,200,106,0.13), rgba(255,255,255,0.035))"
                            : "linear-gradient(135deg, rgba(255,255,255,0.075), rgba(255,255,255,0.026))",
                        border:
                          index === 0
                            ? "1px solid rgba(245,200,106,0.24)"
                            : "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 18px 45px rgba(0,0,0,0.2)",
                        transition: "transform 200ms ease, border-color 200ms ease",
                        willChange: "transform",
                        "&:hover": {
                          transform: "translate3d(0,-5px,0)",
                          borderColor: "#F5C86A",
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          right: 0,
                          width: 62,
                          height: 62,
                          bgcolor: "#F5C86A",
                          opacity: 0.09,
                          clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                        },
                      }}
                    >
                      <FormatQuoteIcon
                        sx={{
                          position: "absolute",
                          left: 18,
                          top: 18,
                          color: "rgba(245,200,106,0.18)",
                          fontSize: 30,
                        }}
                      />

                      <Avatar
                        src={review.img}
                        alt={review.name}
                        sx={{
                          width: 66,
                          height: 66,
                          mx: "auto",
                          mb: 1.35,
                          border: "2px solid rgba(245,200,106,0.4)",
                        }}
                      />

                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "1.08rem",
                          fontWeight: 950,
                          lineHeight: 1.1,
                        }}
                      >
                        {review.name}
                      </Typography>

                      {renderStars(review.rating)}

                      <Typography
                        sx={{
                          color: "#AAB8C7",
                          mt: 1.55,
                          fontSize: "0.92rem",
                          lineHeight: 1.65,
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        "{review.comment}"
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default Reviews;
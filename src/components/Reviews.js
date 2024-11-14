import React from 'react';
import '../assets/css/reviews.css';
import { Box, Typography, Grid, IconButton, Modal, Fade } from '@mui/material';
const reviews = [
  { id: 1, rating: 4.5, comment: "You gave me more than I asked for.", name: "Tusirul Kobir", img: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-1/420181800_1518626452323642_541937670196233716_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFszimrcp1PH-fGzPernDaFGwB6l8hxaIUbAHqXyHFohYnsdrP5diX54jiwgYAFeG7-5FV42qNf5m9MGXZiV3XO&_nc_ohc=n5MfBEkMJKQQ7kNvgE9LY1n&_nc_zt=24&_nc_ht=scontent.fdac24-1.fna&_nc_gid=Afq8Tb23yRBFE6MHxXCDJg3&oh=00_AYCZLHKGv0Fh7LKtztVwuw0IUx0WMIX8dSYb7c1tLZgqtA&oe=673B815E" },
  { id: 1, rating: 4.5, comment: "Amazing service!", name: "Abdul Moonna Aziz", img: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/434733795_3405466073076835_210126892732609005_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeGATqcV0hZlLWhdbhnin7LoX0aWgyDwk15fRpaDIPCTXql0MxUXDB1NPssPIuH9ZcLC3MGfTKZ2fBdZJUSTh9vD&_nc_ohc=atJln-zLRBAQ7kNvgHAJx8l&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AGoPZ0rIGiTkyVkYMQOD-oz&oh=00_AYAtQIKshOqhWsds49IQDN-fwsLXskMoVeAVanm-h0ou8g&oe=673B678D" },
  { id: 2, rating: 4.0, comment: "Very satisfied with the experience.", name: "Sohel Rana", img: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/460027266_3368335923472697_6173095582563154119_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFnbi__eQPqftzj1sc_Y_OvRjYPIf5F0GNGNg8h_kXQYyFQxycZs8X4Zd9ivFFVLl206nTCJxXTgRe2DVEm3v_1&_nc_ohc=HPMhUFqKGzoQ7kNvgFsy_Lb&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AZuRhVb4c2j6RbjMwMz11em&oh=00_AYBj7CHP6s8cAZfEv2kbOKeLt-vsetWwChfBB4wJ2IQ5sg&oe=673B8034" },
  { id: 3, rating: 5.0, comment: "Exceeded my expectations!", name: "Faisal Hasan Emon", img: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/435957423_2409854079402714_7934057213616439698_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHJ38PjK_RqhNeQrJZrNuniGfdineLufogZ92Kd4u5-iGqdLyzGODnjEj-HMwBtt2zB7j4aoUgMZI2TYVR5kv82&_nc_ohc=O0vCpOfEdMYQ7kNvgGm__BK&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AH-sODinkPuIDHijjD0ul3-&oh=00_AYBQi79GPytw1hkTEKIpl7lVNWawwnV6O3SURjCtL_JTEA&oe=673B5B91" },
  { id: 4, rating: 5.0, comment: "You are legend bro!", name: "Aiub Ali Khan", img: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/461870955_1202145381049772_6378211846268146642_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeFLJn7K9cfypv1pGV2mJAghFBzrnCoUmYIUHOucKhSZgitTtW65s3QblNFs6SWW0d9_xFZAZjnFseqkzzxpb1l-&_nc_ohc=FJsh052bbb4Q7kNvgHfNUXn&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=Alaxquv8a0x0EYPe2co2Ibh&oh=00_AYDaT2tVJ9C0wmXu1lKOSn9E_z7lVaIiUv3zAjVMOLYaUw&oe=673BC3DD" },
  { id: 5, rating: 5.0, comment: "Nice work.", name: "Šhãmîm Pařvěj Mõíňe", img: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-1/456776962_2092879777773349_3027485524231997694_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGMrxN2LgQjxj9lCDvI38rtWL_8TtoN2kVYv_xO2g3aRf_p9C_P2LDSOrluOLQZmZAwLIrnGLtu5qDNl1B8wZSg&_nc_ohc=rRVzvwwKltEQ7kNvgEdEe5U&_nc_zt=24&_nc_ht=scontent.fdac24-5.fna&_nc_gid=A4Wnin2cIsCQlzcMKAXzhyh&oh=00_AYCH3gT0jtnDWHFLdr3E8WF8zWA-6ESBiSnJSfvmymJb9Q&oe=673BB80A" },
  { id: 6, rating: 5.0, comment: "Keep it up bro..", name: "Mehedi Hasan ", img: "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-1/357024466_1967083236980882_9145667147037912954_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFc6EhDqOvJSqkxmA-UmNaSydS_bZxHnA3J1L9tnEecDRWz4Cc-Qq8wT-qC3T7g_0W2yOOXU2W1pdTTzHpJlHgC&_nc_ohc=r5jwnZo5YBgQ7kNvgEQ9Sqn&_nc_zt=24&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AfgownAxuGY1TqFKCX3yHhr&oh=00_AYAAGNr4kY2SKmkz4kjkxoJyhGK3vAQvS-bKeEXXglrD-g&oe=673BCBE7" },
  { id: 7, rating: 5.0, comment: "Nice Work. Recommended for every one", name: "Rabiul Awal", img: "https://scontent.fdac24-3.fna.fbcdn.net/v/t1.6435-1/190160745_3818135844981129_2077450056009746228_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHiL62JHHQpdqjob2B5q09iyfNmCm3WDoHJ82YKbdYOgXaekWddF3TSE_Fj7K7w0xFwE3ea7u2YCHXjz8O0O5FF&_nc_ohc=HeM0sDXFtyUQ7kNvgGhBMnk&_nc_zt=24&_nc_ht=scontent.fdac24-3.fna&_nc_gid=A5gRHPbkCJgGGh6DByFMZau&oh=00_AYC2wAw8psuYr-9ZR6eAN2b30su6ePQYIM7hQqcquvkHtA&oe=675D6D2E" },
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

import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import '../assets/css/resume.css';

const educationData = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'XYZ University',
    year: '2018 - 2022',
    description: 'Graduated with honors in Computer Science.',
  },
  {
    degree: 'High School Diploma',
    institution: 'ABC High School',
    year: '2016 - 2018',
    description: 'Specialized in Science and Mathematics.',
  },
];

const experienceData = [
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    year: '2022 - Present',
    description: 'Developed responsive user interfaces with React and Material-UI.',
  },
  {
    title: 'Intern Software Engineer',
    company: 'Web Innovators',
    year: '2021 - 2022',
    description: 'Assisted in the development of web applications using JavaScript and Node.js.',
  },
];

const certificationData = [
  {
    title: 'Python Basic',
    company: 'Tech Solutions Inc.',
    year: '2022 - Present',
    description: 'Developed responsive user interfaces with React and Material-UI.',
  },
  {
    title: 'Database Programming',
    company: 'Web Innovators',
    year: '2021 - 2022',
    description: 'Assisted in the development of web applications using JavaScript and Node.js.',
  },
];

const coursesData = [
  {
    title: 'Full Stack Web Development',
    company: 'Web Innovators',
    year: '2021 - 2022',
    description: 'Assisted in the development of web applications using JavaScript and Node.js.',
  },
  {
    title: 'Cybersecurity',
    company: 'Tech Solutions Inc.',
    year: '2022 - Present',
    description: 'Developed responsive user interfaces with React and Material-UI.',
  },
];

function Resume() {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true); // Ensure animation only runs once
        }
      },
      { threshold: 0.1 }
    );

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <Box ref={resumeRef} className="resumeSection" sx={{ padding: '20px', color: "#003049" }}>
      <Typography variant="h3" align="center" gutterBottom>
        My Resume
      </Typography>

      {/* Education Section */}
      <Box className="resumeCategory" sx={{ color: '#393d3f' }}>
        <Typography variant="h4" className="resumeTitle">
          <SchoolIcon sx={{ marginRight: '10px', color: '#00458b' }} />
          <Typography variant="h4" sx={{ color: '#002f6c' }}>

            Education
          </Typography>
        </Typography>
        <Divider sx={{ marginBottom: '20px' }} />
        <Grid container spacing={4}>
          {educationData.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              className={`resumeItem ${isInView ? 'animate' : ''}`}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                {item.degree}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                {item.institution} | {item.year}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box className="resumeCategory" sx={{ marginTop: '40px', color: '#393d3f' }}>
        <Typography variant="h4" className="resumeTitle">
          <WorkIcon sx={{ marginRight: '10px', color: '#00458b' }} />
          <Typography variant="h4" sx={{ color: '#002f6c' }}>

            Experience
          </Typography>
        </Typography>
        <Divider sx={{ marginBottom: '20px' }} />
        <Grid container spacing={4}>
          {experienceData.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              className={`resumeItem ${isInView ? 'animate' : ''}`}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                {item.company} | {item.year}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Certification Section */}
      <Box className="resumeCategory" sx={{ marginTop: '40px', color: '#393d3f' }}>
        <Typography variant="h4" className="resumeTitle">
          <WorkIcon sx={{ marginRight: '10px', color: '#00458b' }} />
          <Typography variant="h4" sx={{ color: '#002f6c' }}>

            Certification
          </Typography>
        </Typography>
        <Divider sx={{ marginBottom: '20px' }} />
        <Grid container spacing={4}>
          {certificationData.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              className={`resumeItem ${isInView ? 'animate' : ''}`}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                {item.company} | {item.year}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Courses Section */}
      <Box className="resumeCategory" sx={{ marginTop: '40px', color: '#393d3f' }}>
        <Typography variant="h4" className="resumeTitle">
          <WorkIcon sx={{ marginRight: '10px', color: '#00458b' }} />
          <Typography variant="h4" sx={{ color: '#002f6c' }}>

            Courses
          </Typography>
        </Typography>
        <Divider sx={{ marginBottom: '20px' }} />
        <Grid container spacing={4}>
          {coursesData.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              className={`resumeItem ${isInView ? 'animate' : ''}`}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                {item.company} | {item.year}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
  <Button
    component="a"
    href="https://drive.google.com/file/d/1bCEjxJ160JGbEg9S1P7OBYoAAAIL9t5M/view?usp=sharing" // Replace with your Google Drive link
    target="_blank"
    variant="contained"
    sx={{
      width: '200px',
      marginTop: '40px',
      background: '#00458b',
      color: 'white',
      fontWeight: 'bold',
      py: 1.5,
      transform: 'skew(-20deg)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'color 0.3s ease',
      zIndex: 1,
      '&:hover': {
        color: '#FFD700',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        backgroundColor: '#003366',
        transition: 'left 0.3s ease',
        zIndex: -1,
      },
      '&:hover::before': {
        left: 0,
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'none',
      '& span': {
        transform: 'skew(20deg)',
      },
    }}
  >
    <span style={{ fontSize: '18px' }}>Download Resume</span>
  </Button>
</Grid>


      </Box>
    </Box>
  );
}

export default Resume;

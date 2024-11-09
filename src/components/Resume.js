import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
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

function Resume() {
  const [isInView, setIsInView] = useState(false);
  const resumeRef = useRef(null);

  // Intersection Observer to trigger animations when items come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={resumeRef} className="resumeSection" sx={{ padding: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        My Resume
      </Typography>

      {/* Education Section */}
      <Box className="resumeCategory">
        <Typography variant="h4" className="resumeTitle">
          <SchoolIcon sx={{ marginRight: '10px' }} /> Education
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
      <Box className="resumeCategory" sx={{ marginTop: '40px' }}>
        <Typography variant="h4" className="resumeTitle">
          <WorkIcon sx={{ marginRight: '10px' }} /> Experience
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
    </Box>
  );
}

export default Resume;

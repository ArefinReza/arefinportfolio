import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, LinearProgress, Grid } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PythonIcon from '@mui/icons-material/PsychologyAlt';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Language';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import WavesIcon from '@mui/icons-material/Waves';
import StyleIcon from '@mui/icons-material/Style';
import PhpIcon from '@mui/icons-material/Php';
import HubIcon from '@mui/icons-material/Hub';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';


import '../assets/css/skills.css';

const skills = [
  {
    category: "Programming Languages",
    skills: [
      { name: 'Python', icon: <PythonIcon />, percentage: 60 },
      { name: 'JavaScript', icon: <JavascriptIcon />, percentage: 70 },
      { name: 'PHP', icon: <PhpIcon />, percentage: 60 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: 'React', icon: <DeveloperModeIcon />, percentage: 85 },
      { name: 'HTML/CSS', icon: <HtmlIcon />, percentage: 95 },
      { name: 'Bootstrap CSS', icon: <ViewModuleIcon  />, percentage: 70 },
      { name: 'Tailwind CSS', icon: <WavesIcon  />, percentage: 70 },
      { name: 'MUI CSS', icon: <StyleIcon  />, percentage: 60 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: 'Node.js', icon: <HubIcon  />, percentage: 75 },
      { name: 'Laravel', icon: <CodeOffIcon  />, percentage: 70 },
      { name: 'Django', icon: <IntegrationInstructionsIcon  />, percentage: 70 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: 'MySQL', icon: <StorageIcon />, percentage: 80 },
      { name: 'SQLite', icon: <StorageIcon />, percentage: 70 },
    ],
  },
];

function Skills() {
  const [progressValues, setProgressValues] = useState(
    skills.map(category => category.skills.map(() => 0))
  );
  const [isInView, setIsInView] = useState(false);
  const skillsRef = useRef(null);

  // Fixed Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      {
        threshold: 0.1, // Lowered threshold to trigger sooner
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before in-view
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate progress bars
  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setProgressValues((prevValues) =>
          prevValues.map((category, i) =>
            category.map((value, j) =>
              Math.min(value + 2, skills[i].skills[j].percentage)
            )
          )
        );
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <Box
      ref={skillsRef}
      className="skillsSection"
      sx={{ padding: '20px', color: '#003049' }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        My Skills
      </Typography>

      {skills.map((category, catIndex) => (
        <Box
          className="categoryskill"
          key={category.category}
          sx={{
            marginBottom: '30px',
            padding: '20px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', mb: 2, color: '#003049' }}
          >
            {category.category}
          </Typography>

          <Grid container spacing={4}>
            {category.skills.map((skill, skillIndex) => (
              <Grid item xs={12} sm={6} md={4} key={skill.name}>
                <Box
                  className="skillBox"
                  sx={{ textAlign: 'center', marginBottom: '20px' }}
                >
                  <Box
                    className="skillIcon"
                    sx={{
                      fontSize: 10,
                      marginBottom: '10px',
                      color: '#003049',
                    }}
                  >
                    {skill.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    {skill.name}
                  </Typography>

                  <Box sx={{ width: '100%', mt: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={progressValues[catIndex][skillIndex]}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#003566',
                          transition: 'width 0.3s ease',
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ textAlign: 'right' }}
                    >
                      {progressValues[catIndex][skillIndex]}%
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default Skills;

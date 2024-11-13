import React from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ExtensionIcon from '@mui/icons-material/Extension';
import '../assets/css/services.css'
import moonit1 from '../assets/image/portfolioDetails/moonit1.png'
import moonit2 from '../assets/image/portfolioDetails/moonit2.png'
import moonit3 from '../assets/image/portfolioDetails/moonit3.png'

import mt1 from '../assets/image/portfolioDetails/mt1.png'
import mt2 from '../assets/image/portfolioDetails/mt2.png'
import mt3 from '../assets/image/portfolioDetails/mt3.png'
import mt4 from '../assets/image/portfolioDetails/mt4.png'
import mt5 from '../assets/image/portfolioDetails/mt5.png'

import gen1 from '../assets/image/portfolioDetails/gen1.png'
import gen2 from '../assets/image/portfolioDetails/gen2.png'
import gen3 from '../assets/image/portfolioDetails/gen3.png'
import gen4 from '../assets/image/portfolioDetails/gen4.png'


import mta1 from '../assets/image/portfolioDetails/mta1.png'
import mta2 from '../assets/image/portfolioDetails/mta2.png'
import mta3 from '../assets/image/portfolioDetails/mta3.png'
import mta4 from '../assets/image/portfolioDetails/mta4.png'
import mta5 from '../assets/image/portfolioDetails/mta5.png'
import gen11 from '../assets/image/portfolioDetails/gen11.png'
import gen12 from '../assets/image/portfolioDetails/gen12.png'
import gen13 from '../assets/image/portfolioDetails/gen13.png'
import gena1 from '../assets/image/portfolioDetails/gena1.png'
import gena2 from '../assets/image/portfolioDetails/gena2.png'
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive, high-performance websites tailored to your needs. Utilizing the latest technologies to ensure scalability, security, and excellent user experience.",
    icon: <CodeIcon />,
    categories: [
      {
        name: 'Frontend',
        description: 'Creating visually appealing, interactive, and responsive user interfaces using modern frameworks such as React, Vue, and Angular. We prioritize both aesthetics and functionality to ensure a seamless user experience.',
        images: [
          moonit1, moonit2, moonit3, mt1, mt2, mt3, mt4, mt5, gen1, gen2, gen3, gen4,
        ]
      },
      {
        name: 'Backend',
        description: 'Developing robust, scalable server-side solutions with Node.js, Django, and Laravel. We focus on clean architecture, security, and efficiency to handle complex business logic.',
        images: [
          gen11, gen12, gen13, gena1, gena2, mta5, mta1, mta2, mta3, mta4
        ]
      },
      {
        name: 'Database',
        description: 'Ensuring data is stored securely and accessed efficiently with MySQL, MongoDB, and PostgreSQL. We implement optimized, well-structured databases to handle both large and small datasets.',
        images: [
          gen11, gen12, gen13, gena1, gena2, mta5, mta1, mta2, mta3, mta4
        ]
      },
      {
        name: 'Pricing',
        description: 'Choose the right package for your project’s needs. Each package offers various features tailored to different requirements.',
        pricingDetails: [
          {
            type: 'Basic',
            price: '$500',
            features: ['Responsive Design', '5 Pages', 'SEO Optimized'],
          },
          {
            type: 'Standard',
            price: '$1000',
            features: ['Responsive Design', '10 Pages', 'SEO & Analytics Integration', 'Basic E-commerce'],
          },
          {
            type: 'Premium',
            price: '$2000',
            features: ['Custom Design', 'Unlimited Pages', 'Advanced E-commerce', 'SEO & Analytics Integration', 'Premium Support'],
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Crafting intuitive, aesthetically pleasing designs that resonate with users. Our designs focus on usability, brand consistency, and a seamless experience across devices.",
    icon: <DesignServicesIcon />,
    categories: [
      {
        name: 'Frontend',
        description: 'Front-end UI design and development focused on aesthetic and functional elements, ensuring smooth and interactive user interfaces across devices.',
        images: [
          'https://mdbcdn.b-cdn.net/wp-content/uploads/2017/12/carousel.jpg',
          'https://s3-alpha.figma.com/hub/file/4640124499/85354f41-8eba-4ceb-ae49-55195943c4c7-cover.png'
        ]
      },
      {
        name: 'Figma',
        description: 'Designing engaging user interfaces using Figma, incorporating wireframes, prototypes, and mockups to visualize and refine the end product.',
        images: [
          'https://via.placeholder.com/300x200?text=Figma+Design',
          'https://via.placeholder.com/300x200?text=Prototyping'
        ]
      },
      {
        name: 'Illustrator',
        description: 'Creating custom illustrations, icons, and graphics that enhance the visual identity of your brand and elevate user engagement.',
        images: [
          'https://via.placeholder.com/300x200?text=Custom+Illustrations',
          'https://via.placeholder.com/300x200?text=Brand+Graphics'
        ]
      },
      {
        name: 'Pricing',
        description: 'Choose the right package for your project’s needs. Each package offers various features tailored to different requirements.',
        pricingDetails: [
          {
            type: 'Basic',
            price: '$500',
            features: ['Responsive Design', '5 Pages', 'SEO Optimized'],
          },
          {
            type: 'Standard',
            price: '$1000',
            features: ['Responsive Design', '10 Pages', 'SEO & Analytics Integration', 'Basic E-commerce'],
          },
          {
            type: 'Premium',
            price: '$2000',
            features: ['Custom Design', 'Unlimited Pages', 'Advanced E-commerce', 'SEO & Analytics Integration', 'Premium Support'],
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Data Analysis",
    description: "Providing data-driven insights and actionable analytics to empower business decision-making. Leveraging tools like Python, SQL, and Excel to uncover trends and optimize performance.",
    icon: <AssessmentIcon />,
    categories: [
      {
        name: 'Python',
        description: 'Conducting advanced data analysis and machine learning tasks using Python, from data cleaning to predictive modeling, for precise, actionable insights.',
        images: [
          'https://mdbcdn.b-cdn.net/wp-content/uploads/2017/12/carousel.jpg',
          'https://s3-alpha.figma.com/hub/file/4640124499/85354f41-8eba-4ceb-ae49-55195943c4c7-cover.png'
        ]
      },
      {
        name: 'Excel',
        description: 'Using Excel for data visualization, pivot tables, and statistical analysis, ideal for small and mid-sized data projects requiring quick insights.',
        images: [
          'https://via.placeholder.com/300x200?text=Excel+Analytics',
          'https://via.placeholder.com/300x200?text=Data+Visualization'
        ]
      },
      {
        name: 'MySQL',
        description: 'Managing and querying large datasets with MySQL for efficient data storage, analysis, and retrieval across different applications.',
        images: [
          'https://via.placeholder.com/300x200?text=Data+Management',
          'https://via.placeholder.com/300x200?text=SQL+Analysis'
        ]
      },
      {
        name: 'Pricing',
        description: 'Choose the right package for your project’s needs. Each package offers various features tailored to different requirements.',
        pricingDetails: [
          {
            type: 'Basic',
            price: '$500',
            features: ['Responsive Design', '5 Pages', 'SEO Optimized'],
          },
          {
            type: 'Standard',
            price: '$1000',
            features: ['Responsive Design', '10 Pages', 'SEO & Analytics Integration', 'Basic E-commerce'],
          },
          {
            type: 'Premium',
            price: '$2000',
            features: ['Custom Design', 'Unlimited Pages', 'Advanced E-commerce', 'SEO & Analytics Integration', 'Premium Support'],
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Data Entry",
    description: "Accurate and efficient data entry services across multiple platforms and software, ensuring high-quality data management with attention to detail.",
    icon: <QueryStatsIcon />,
    categories: [
      {
        name: 'Data Collection',
        description: 'Gathering and compiling data from various sources to maintain structured, high-quality databases for easy access and analysis.',
        images: [
          'https://mdbcdn.b-cdn.net/wp-content/uploads/2017/12/carousel.jpg',
          'https://s3-alpha.figma.com/hub/file/4640124499/85354f41-8eba-4ceb-ae49-55195943c4c7-cover.png'
        ]
      },
      {
        name: 'Data Cleaning',
        description: 'Performing data cleaning tasks to ensure accuracy, consistency, and completeness of datasets for reliable insights and reporting.',
        images: [
          'https://via.placeholder.com/300x200?text=Data+Cleaning',
          'https://via.placeholder.com/300x200?text=Consistency+Checks'
        ]
      },
      {
        name: 'Data Organization',
        description: 'Structuring and organizing data effectively within databases or spreadsheets, enabling easy access and data management.',
        images: [
          'https://via.placeholder.com/300x200?text=Data+Organization',
          'https://via.placeholder.com/300x200?text=Efficient+Structure'
        ]
      },
      {
        name: 'Pricing',
        description: 'Choose the right package for your project’s needs. Each package offers various features tailored to different requirements.',
        pricingDetails: [
          {
            type: 'Basic',
            price: '$500',
            features: ['Responsive Design', '5 Pages', 'SEO Optimized'],
          },
          {
            type: 'Standard',
            price: '$1000',
            features: ['Responsive Design', '10 Pages', 'SEO & Analytics Integration', 'Basic E-commerce'],
          },
          {
            type: 'Premium',
            price: '$2000',
            features: ['Custom Design', 'Unlimited Pages', 'Advanced E-commerce', 'SEO & Analytics Integration', 'Premium Support'],
          }
        ]
      }
    ]
  }
];

export { services }

function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3, py: 5 }}>
      {/* Header */}
      <Typography variant="h3" align="center" gutterBottom sx={{ color: '#003049' }}>
        Services
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          mb: 4,
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.25rem',
          fontWeight: 500,
          lineHeight: 1.6,
          color: '#333',
          letterSpacing: '0.5px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        We provide a wide range of services to help you grow and succeed in your business. Our team is dedicated to delivering the best solutions tailored to your needs.
      </Typography>


      {/* Services Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr' },
          gap: 3,
        }}
      >
        {services.map((service) => (
          <Card
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: 3,
              p: 2,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
              borderRadius: 2,
              backgroundColor: '#f9f9f9'
            }}
          >
            {/* Icon Circle */}
            <IconButton
              sx={{
                backgroundColor: '#00458b',
                color: '#fff',
                fontSize: '2rem',
                p: 2,
                mr: 3,
                borderRadius: '50%',
                '& svg': { fontSize: '1.8rem' },
                transition: 'background-color 0.3s, color 0.3s', // Smooth transition effect
                '&:hover': {
                  backgroundColor: '#003366', // Change to a darker shade on hover
                  color: '#FFD700', // Change icon color on hover
                },
              }}
            >
              {service.icon}
            </IconButton>


            {/* Content */}
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h6" component="div" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      {/* <Reviews/> */}
    </Box>
  );
}

export default Services;

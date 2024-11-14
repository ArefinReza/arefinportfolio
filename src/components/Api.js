import React from 'react';

import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AssessmentIcon from '@mui/icons-material/Assessment';


import moonit1 from '../assets/image/portfolioDetails/moonit1.png'
import moonit2 from '../assets/image/portfolioDetails/moonit2.png'
import moonit3 from '../assets/image/portfolioDetails/moonit3.png'
import moonit4 from '../assets/image/portfolioDetails/moonit4.png'
import moonit5 from '../assets/image/portfolioDetails/moonit5.png'
import moonit6 from '../assets/image/portfolioDetails/moonit6.png'
import moonit7 from '../assets/image/portfolioDetails/moonit7.png'
import moonit8 from '../assets/image/portfolioDetails/moonit8.png'
import moonit9 from '../assets/image/portfolioDetails/moonit9.png'
import moonit10 from '../assets/image/portfolioDetails/moonit10.png'

import mt1 from '../assets/image/portfolioDetails/mt1.png'
import mt2 from '../assets/image/portfolioDetails/mt2.png'
import mt3 from '../assets/image/portfolioDetails/mt3.png'
import mt4 from '../assets/image/portfolioDetails/mt4.png'
import mt5 from '../assets/image/portfolioDetails/mt5.png'
import mt6 from '../assets/image/portfolioDetails/mt6.png'
import mt7 from '../assets/image/portfolioDetails/mt7.png'
import mt8 from '../assets/image/portfolioDetails/mt8.png'
import mt9 from '../assets/image/portfolioDetails/mt9.png'
import mta1 from '../assets/image/portfolioDetails/mta1.png'
import mta2 from '../assets/image/portfolioDetails/mta2.png'
import mta3 from '../assets/image/portfolioDetails/mta3.png'
import mta4 from '../assets/image/portfolioDetails/mta4.png'
import mta5 from '../assets/image/portfolioDetails/mta5.png'

import gen1 from '../assets/image/portfolioDetails/gen1.png'
import gen2 from '../assets/image/portfolioDetails/gen2.png'
import gen3 from '../assets/image/portfolioDetails/gen3.png'
import gen4 from '../assets/image/portfolioDetails/gen4.png'
import gen5 from '../assets/image/portfolioDetails/gen5.png'
import gen6 from '../assets/image/portfolioDetails/gen6.png'
import gen7 from '../assets/image/portfolioDetails/gen7.png'
import gen8 from '../assets/image/portfolioDetails/gen8.png'
import gen9 from '../assets/image/portfolioDetails/gen9.png'
import gen10 from '../assets/image/portfolioDetails/gen10.png'
import gen11 from '../assets/image/portfolioDetails/gen11.png'
import gen12 from '../assets/image/portfolioDetails/gen12.png'
import gen13 from '../assets/image/portfolioDetails/gen13.png'
import gena1 from '../assets/image/portfolioDetails/gena1.png'
import gena2 from '../assets/image/portfolioDetails/gena2.png'
import gena3 from '../assets/image/portfolioDetails/gena3.png'
import gena4 from '../assets/image/portfolioDetails/gena4.png'
import gena5 from '../assets/image/portfolioDetails/gena5.png'
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
                { type: 'Basic', price: '$400', features: ['Landing Page Design', 'Mobile-Friendly'] },
                { type: 'Standard', price: '$800', features: ['5-10 Pages', 'Responsive Design', 'Basic Animations'] },
                { type: 'Premium', price: '$1500', features: ['Full Custom Design', 'Unlimited Pages', 'Advanced Interactivity'] }
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
                { type: 'Basic', price: '$600', features: ['Data Cleaning', 'Exploratory Analysis'] },
                { type: 'Standard', price: '$1200', features: ['Data Analysis & Visualization', 'Statistical Testing'] },
                { type: 'Premium', price: '$2000', features: ['Machine Learning Models', 'Comprehensive Report'] }
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
                { type: 'Basic', price: '$200', features: ['Up to 500 Entries', 'Data Structuring'] },
                { type: 'Standard', price: '$400', features: ['Up to 2000 Entries', 'Error Checking'] },
                { type: 'Premium', price: '$800', features: ['Unlimited Entries','Standardization', 'Data Formatting & Validation'] }
            ]
          }
        ]
      }
      
  ];
  
  export { services }


  



const portfolioData = [
  {
    id: '1',
    title: 'Digital Marketing Agency Portfolio',
    category:'Portfolio',
    description: 'I created many Portfolio site using Laravel and React',
     imageUrl: moonit1,
    categories: [
      { name: 'Frontend', description: 'I used React for Frontend.', images: [moonit2, moonit3,moonit4,moonit5,moonit6,moonit7,moonit8,moonit9,moonit10] },
      { name: 'Backend', description: 'I develop backend using Laravel.', images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'] },
      { name: 'Database', description: 'I give api connections both of phase and I stored data in MySql', images: ['https://via.placeholder.com/300x200', 'https://via.placeholder.com/300x200'] }
    ]
  },
  {
    id: '2',
    title: 'Coffee Shop Digital Menu Cart',
    category:'ECommerce',
    description: 'I developed Digital Menu Cart For a Coffee Shop',
     imageUrl: mt1,
    categories: [
      { name: 'Frontend', description: 'I used Raw HTML and CSS and JavaScript', images: [mt1,mt2,mt3,mt4,mt5,mt6,mt7,mt8,mt9] },
      { name: 'Backend', description: 'I used Raw PHP for backend and Admin Panel.', images: [mta1,mta2,mta3,mta4,mta5] },
      { name: 'Database', description: 'I used MySql to store data.', images: [mt1,mt2,mta1,mta3] }
    ]
  },
  {
    id: '3',
    title: 'Gen-z Bazar',
    category:'ECommerce',
    description: 'I developed ECommerce website named Gen-z Bazar. A full complete website with authentications.',
     imageUrl: gen1,
    categories: [
      { name: 'Frontend', description: 'I used React and BootStrap for Frontend.', images: [gen1,gen2,gen3,gen4,gen5,gen6,gen7,gen8,gen9,gen10,gen11,gen12,gen13] },
      { name: 'Backend', description: 'I develop backend using Laravel. A custome Admin panel with Bootstrap.', images: [gena1,gena2,gena3,gena4,gena5] },
      { name: 'Database', description: 'I give api connections both of phase and I stored data in MySql.', images: [gen1,gen10,gen4,gena3,gena4] }
    ]
  },
  // More services with similar structures
];

export {portfolioData};
function Api(){

}
export default Api
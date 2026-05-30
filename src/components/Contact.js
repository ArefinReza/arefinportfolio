import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  GlobalStyles,
} from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const contactItems = [
  {
    icon: <WhatsAppIcon />,
    label: 'WhatsApp',
    value: '01751030446 / 01819222446',
    href: 'https://wa.me/8801751030446',
    color: '#34D399',
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'arefinsaim@gmail.com',
    href: 'mailto:arefinsaim@gmail.com',
    color: '#F5C86A',
  },
  {
    icon: <LocationOnIcon />,
    label: 'Location',
    value: 'Khilkhet, Dhaka 1229',
    href: 'https://www.google.com/maps/search/?api=1&query=Khilkhet,Dhaka,1229',
    color: '#67E8F9',
  },
];

const fieldStyle = {
  '& .MuiOutlinedInput-root': {
    color: '#F8FAFC',
    borderRadius: '0px',
    background: 'transparent',
    '& fieldset': {
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: 'rgba(255,255,255,0.18)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(245,200,106,0.65)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F5C86A',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#9FB0C2',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#F5C86A',
  },
};

const Contact = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          '@font-face': {
            fontFamily: 'SlitoRegular',
            src: `
              url('/fonts/slito-regular.woff2') format('woff2'),
              url('/fonts/slito-regular.woff') format('woff')
            `,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
        }}
      />

      <Box
        id="contact"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          px: { xs: 2.2, md: 5 },
          py: { xs: 8, md: 12 },
          color: '#F8FAFC',
          fontFamily: '"SlitoRegular", var(--font-body), sans-serif',
          background: `
            radial-gradient(circle at 18% 10%, rgba(245,200,106,0.12), transparent 28%),
            radial-gradient(circle at 82% 22%, rgba(103,232,249,0.11), transparent 30%),
            linear-gradient(180deg, #020617 0%, #06111f 50%, #010611 100%)
          `,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
            `,
            backgroundSize: { xs: '54px 54px', md: '86px 86px' },
            opacity: 0.28,
            pointerEvents: 'none',
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '1480px', mx: 'auto' }}>
          <Grid container spacing={{ xs: 4, md: 5 }} alignItems="end" sx={{ mb: 5 }}>
            <Grid item xs={12} md={7}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  display: 'inline-flex',
                  px: 1.5,
                  py: 0.85,
                  mb: 1.8,
                  color: '#F5C86A',
                  bgcolor: 'rgba(245,200,106,0.1)',
                  border: '1px solid rgba(245,200,106,0.26)',
                  borderRadius: '8px',
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 18 }} />
                <Typography sx={{ fontSize: '0.75rem', letterSpacing: '0.22em', fontWeight: 900 }}>
                  CONTACT
                </Typography>
              </Stack>

              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontSize: { xs: '3.05rem', sm: '4.5rem', md: '6.3rem' },
                  lineHeight: 0.84,
                  fontWeight: 950,
                  textTransform: 'uppercase',
                  textShadow: '0 28px 80px rgba(0,0,0,0.46)',
                }}
              >
                Let’s
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    mt: 0.8,
                    color: 'transparent',
                    WebkitTextStroke: {
                      xs: '1px #F5C86A',
                      md: '1.5px #F5C86A',
                    },
                    textShadow: 'none',
                    fontSize: { xs: '2.45rem', sm: '3.5rem', md: '4.7rem' },
                  }}
                >
                  Talk
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Typography
                sx={{
                  color: '#B7C8D9',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  maxWidth: 500,
                }}
              >
                Share your project scope, timeline, and goals.
                I will reply with a clear plan and next steps.
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              position: 'relative',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.045)',
              borderRadius: '26px',
              overflow: 'hidden',
              boxShadow: '0 24px 70px rgba(0,0,0,0.22)',
            }}
          >
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: '100%',
                    p: { xs: 2.2, md: 3 },
                    borderRight: { md: '1px solid rgba(255,255,255,0.1)' },
                    borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', md: 'none' },
                    background:
                      'linear-gradient(180deg, rgba(245,200,106,0.09), rgba(255,255,255,0.015))',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#F5C86A',
                      fontSize: '0.78rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      mb: 2.2,
                    }}
                  >
                    Direct Contact
                  </Typography>

                  <Stack spacing={1.4}>
                    {contactItems.map((item) => (
                      <Box
                        key={item.label}
                        component="a"
                        href={item.href}
                        target={item.label === 'Email' ? undefined : '_blank'}
                        rel="noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 1.4,
                          p: 1.45,
                          borderRadius: '16px',
                          textDecoration: 'none',
                          color: '#F8FAFC',
                          background: 'rgba(255,255,255,0.045)',
                          border: '1px solid rgba(255,255,255,0.09)',
                          transition: 'transform 200ms ease, border-color 200ms ease',
                          '&:hover': {
                            transform: 'translate3d(0,-4px,0)',
                            borderColor: `${item.color}66`,
                          },
                        }}
                      >
                        <Stack direction="row" alignItems="center" spacing={1.2} sx={{ minWidth: 0 }}>
                          <Box
                            sx={{
                              width: 42,
                              height: 42,
                              borderRadius: '14px',
                              display: 'grid',
                              placeItems: 'center',
                              color: item.color,
                              bgcolor: `${item.color}14`,
                              border: `1px solid ${item.color}35`,
                              flexShrink: 0,
                            }}
                          >
                            {item.icon}
                          </Box>

                          <Box sx={{ minWidth: 0 }}>
                            <Typography
                              sx={{
                                color: item.color,
                                fontSize: '0.72rem',
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                              }}
                            >
                              {item.label}
                            </Typography>
                            <Typography
                              sx={{
                                color: '#E2E8F0',
                                fontSize: '0.94rem',
                                whiteSpace: 'normal',
                                wordBreak: 'break-word',
                              }}
                            >
                              {item.value}
                            </Typography>
                          </Box>
                        </Stack>

                        <ArrowOutwardIcon sx={{ color: item.color, fontSize: 18, flexShrink: 0 }} />
                      </Box>
                    ))}
                  </Stack>

                  <Box sx={{ mt: 2.4 }}>
                    <Typography
                      sx={{
                        color: '#F5C86A',
                        fontSize: '0.78rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        mb: 1.1,
                      }}
                    >
                      Location
                    </Typography>

                    <Box
                      sx={{
                        overflow: 'hidden',
                        borderRadius: '18px',
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'rgba(255,255,255,0.04)',
                      }}
                    >
                      <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53453.03658804763!2d90.38358161639019!3d23.8289281419639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c643853bbba1%3A0xd8499cf6c4609682!2zVElPMDA3LCDgpqbgpoMg4Kau4Kan4KeN4KavIOCmquCmvuCnnOCmviDgprDgp4vgpqEsIERoYWth!5e1!3m2!1sen!2sbd!4v1731608617639!5m2!1sen!2sbd"
                        width="100%"
                        height="210"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen=""
                        loading="lazy"
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={8}>
                <Box sx={{ p: { xs: 2.2, md: 3.2 } }}>
                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: { xs: '2rem', md: '2.9rem' },
                      lineHeight: 0.95,
                      fontWeight: 950,
                      letterSpacing: '-0.045em',
                      mb: 1,
                    }}
                  >
                    Start the conversation.
                  </Typography>

                  <Typography sx={{ color: '#9FB0C2', fontSize: '1rem', lineHeight: 1.7, mb: 3 }}>
                    Share what you want to build, improve, or launch. I will respond with next steps.
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField fullWidth label="Name" variant="outlined" sx={fieldStyle} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField fullWidth label="Email Address" variant="outlined" sx={fieldStyle} />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField fullWidth label="Subject" variant="outlined" sx={fieldStyle} />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={5}
                        sx={fieldStyle}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        endIcon={<SendRoundedIcon />}
                        sx={{
                          mt: 1,
                          py: 1.55,
                          borderRadius: '14px',
                          color: '#07111F',
                          bgcolor: '#F5C86A',
                          fontSize: '1rem',
                          fontWeight: 950,
                          textTransform: 'none',
                          boxShadow: '0 18px 45px rgba(245,200,106,0.16)',
                          transition: 'transform 200ms ease, background 200ms ease',
                          '&:hover': {
                            bgcolor: '#FFE08A',
                            transform: 'translate3d(0,-3px,0)',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
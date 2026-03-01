"use client";

import React from "react";
import { 
  Container, 
  Typography, 
  Box,
  Paper,
  Grid,
  Fade,
  useTheme
} from "@mui/material";
import { 
  Groups, 
  School, 
  VolunteerActivism, 
  Business,
  HistoryEdu,
  MedicalServices
} from "@mui/icons-material";

const leadershipRoles = [
  {
    icon: <Groups />,
    title: "Departmental Head - Revival & Reformation",
    organization: "Zimmerman SDA Church",
    period: "2026 - 2027",
    description: "Appointed by the Holy Spirit to lead the Revival and Reformation department, focusing on spiritual renewal, discipleship programs, and implementing church-wide transformation initiatives."
  },
  {
    icon: <VolunteerActivism />,
    title: "Prayer Ministry Leader",
    organization: "Kasarani Prayer Cell",
    period: "2024 - Present",
    description: "Leading weekly intercessory prayer sessions and spiritual warfare initiatives, fostering a culture of sustained prayer and community spiritual support."
  },
  {
    icon: <School />,
    title: "Ambassadors Club Teacher",
    organization: "Youth Development Ministry",
    period: "2026 - Present",
    description: "Educating and mentoring young ambassadors in Christian leadership, public speaking, and community service, preparing them for effective ministry and societal impact."
  },
  {
    icon: <MedicalServices />,
    title: "Medical Missionary & Technical Lead",
    organization: "Nature's Kitchen Medical Missionary",
    period: "2024 - Present",
    description: "Leading medical missionary initiatives that integrate holistic health education, community wellness programs, and sustainable health practices, while providing technical direction for digital platforms and content strategy."
  },
  {
    icon: <Business />,
    title: "Lead Developer & Technical Director",
    organization: "Mine the Word Academy",
    period: "2024 - Present",
    description: "Leading technology initiatives for an online Bible school training Christian missionaries across Kenya through digital theological education and leadership development."
  },
  {
    icon: <HistoryEdu />,
    title: "Morning Devotion Facilitator",
    organization: "Audience Chamber Prayer Group",
    period: "2024 - Present",
    description: "Facilitating daily morning devotion sessions (5:00 AM - 6:00 AM) via Google Meet, creating consistent spiritual discipline and community connection."
  }
];

export default function Leadership() {
  const theme = useTheme();

  return (
    <Container id="leadership" sx={{ py: 8 }}>
      {/* Header Section */}
      <Fade in timeout={800}>
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h2" 
            gutterBottom 
            align="center" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, primary.main 0%, secondary.main 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Community Leadership & Ministry
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph 
            align="center" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              fontSize: '1.1rem',
              color: 'text.secondary'
            }}
          >
            Integrating technical expertise with spiritual leadership to drive transformation 
            in communities, churches, and organizations through strategic ministry and servant leadership.
          </Typography>
        </Box>
      </Fade>

      {/* Leadership Cards */}
      <Grid container spacing={3}>
        {leadershipRoles.map((role, index) => (
          <Grid 
            size={{ xs: 12, md: 6 }}
            key={index}
          >
            <Fade in timeout={500 + index * 100}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
                      borderRadius: '12px',
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      color: 'white',
                      '& svg': {
                        fontSize: 28,
                      }
                    }}
                  >
                    {role.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {role.title}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 500 }}>
                      {role.organization} • {role.period}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {role.description}
                </Typography>
              </Paper>
            </Fade>
          </Grid>
        ))}
      </Grid>

      {/* Leadership Philosophy */}
      <Fade in timeout={1000}>
        <Box sx={{ 
          mt: 8, 
          p: 4, 
          bgcolor: 'background.default', 
          borderRadius: 3,
          borderLeft: '6px solid',
          borderColor: 'primary.main',
          boxShadow: theme.shadows[4],
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -30,
            right: -30,
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
            pointerEvents: 'none',
          }
        }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, position: 'relative', zIndex: 1 }}>
            Leadership Philosophy
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
            &ldquo;I believe in servant leadership that empowers others through mentorship, 
            strategic vision that transforms communities, and faithful stewardship 
            that leverages both spiritual gifts and professional skills.&rdquo;
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              opacity: 0.1,
              transform: 'rotate(-10deg)',
              fontSize: '6rem',
              fontWeight: 900,
              color: 'primary.main',
              pointerEvents: 'none',
            }}
          >
            &ldquo;
          </Box>
        </Box>
      </Fade>
    </Container>
  );
}
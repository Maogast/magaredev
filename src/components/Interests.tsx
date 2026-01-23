// src/components/Interests.tsx
import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

export default function Interests() {
  const interests = [
    {
      title: "Guitar Performance & Composition",
      description: "Creating and performing music across various genres, focusing on emotional expression through strings"
    },
    {
      title: "Spiritual Teaching",
      description: "Preaching the present truth—connecting modern life with scriptural wisdom for practical living"
    },
    {
      title: "Swimming",
      description: "Regular swimming for fitness, mental clarity, and as a meditative form of exercise"
    },
    {
      title: "Singing",
      description: "Vocal expression in both solo and group settings, exploring harmony and musical storytelling"
    },
    {
      title: "Meaningful Conversations",
      description: "Engaging in candid discussions that foster understanding, growth, and genuine human connection"
    }
  ];

  return (
    <Container id="interests" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Typography 
        variant="h2" 
        gutterBottom 
        align="center"
        sx={{ 
          fontWeight: 800,
          mb: 6,
          color: 'primary.main',
          fontSize: { xs: '2.5rem', md: '3rem' },
          textTransform: 'uppercase',
          letterSpacing: 1
        }}
      >
        Interests & Passions
      </Typography>
      
      {/* Using CSS Grid instead of MUI Grid to avoid version conflicts */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 4,
        justifyContent: 'center',
        mb: 4
      }}>
        {interests.map((interest, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 4,
              height: '100%',
              border: '2px solid',
              borderColor: 'divider',
              borderRadius: 4,
              backgroundColor: 'background.paper',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                backgroundColor: 'primary.main',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.4s ease'
              },
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                borderColor: 'primary.light',
                '&:before': {
                  transform: 'scaleX(1)'
                }
              }
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: 'primary.light',
                opacity: 0.1,
                position: 'absolute',
                top: -20,
                right: -20
              }}
            />
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mb: 2
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    display: 'inline-block',
                    flexShrink: 0
                  }}
                />
                {interest.title}
              </Typography>
              
              <Typography 
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  pl: 4
                }}
              >
                {interest.description}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
      
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary',
            fontStyle: 'italic',
            maxWidth: 600,
            mx: 'auto',
            px: 2
          }}
        >
          &ldquo;These passions shape my perspective and drive my creativity, 
          blending technical discipline with artistic expression and human connection.&rdquo;
        </Typography>
      </Box>
    </Container>
  );
}
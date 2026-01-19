"use client";

import React from "react";
import { Container, Typography, Box, Paper, Chip } from "@mui/material";

const categories: Record<string, string[]> = {
  "Frontend & UI": [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5/CSS3",
    "Tailwind CSS",
    "Material-UI",
    "Framer Motion",
    "Redux/ Zustand",
  ],
  "Backend & API": [
    "Node.js",
    "Express",
    "GraphQL",
    "REST APIs",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ],
  "Cloud & DevOps": [
    "AWS",
    "Vercel",
    "Docker",
    "GitHub Actions",
    "CI/CD",
    "Firebase",
    "Supabase",
    "Netlify",
    "Cloudflare",
  ],
  "Tools & Workflow": [
    "Git/GitHub",
    "VS Code",
    "Figma",
    "Jest/Testing",
    "Webpack/Vite",
    "Postman",
    "Prisma",
    "Storybook",
    "Notion",
  ],
};

export default function Skills() {
  return (
    <Container id="skills" sx={{ py: 8 }}>
      <Typography 
        variant="h2" 
        gutterBottom 
        sx={{ 
          mb: 6,
          textAlign: "center",
          color: "primary.main"
        }}
      >
        Technical Expertise
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { 
            xs: "1fr", 
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)" 
          }
        }}
      >
        {Object.entries(categories).map(([group, items]) => (
          <Paper 
            key={group} 
            elevation={2}
            sx={{ 
              p: 3,
              borderRadius: 2,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              }
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                color: "primary.dark",
                mb: 3
              }}
            >
              {group}
            </Typography>
            <Box sx={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: 1.5,
              "& .MuiChip-root": {
                borderRadius: 1,
                fontWeight: 500,
                fontSize: "0.875rem",
                transition: "all 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                }
              }
            }}>
              {items.map((skill) => (
                <Chip 
                  key={skill} 
                  label={skill}
                  color="primary"
                  variant="outlined"
                  size="medium"
                />
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
// src/components/About.tsx - Server Component Version
"use client";

import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Chip,
  Paper,
} from "@mui/material";

export default function About() {
  const skillCategories = [
    {
      title: "Testing & Quality Engineering",
      skills: [
        "API Testing (Postman, RestAssured)",
        "Mobile Testing (Espresso, XCUITest)",
        "Contract Testing (Pact, OpenAPI)",
        "Unit Testing (JUnit, Jest, React Testing Library)",
        "Test Automation Frameworks",
        "Shift-Left Testing Strategy",
        "Test Pyramid Implementation",
        "SonarCloud & Code Quality",
      ],
    },
    {
      title: "Development & Frameworks",
      skills: [
        "Next.js & React (TypeScript)",
        "Java (Spring Boot, Vert.x)",
        "Node.js & Express",
        "Mobile Development (React Native)",
        "WordPress & PHP",
        "RESTful API Development",
        "Microservices Architecture",
      ],
    },
    {
      title: "DevOps & CI/CD",
      skills: [
        "GitLab CI & Jenkins Pipelines",
        "Docker & Containerization",
        "Kubernetes (k8s/k9s)",
        "AWS EKS & Cloud Services",
        "YAML Scripting",
        "Infrastructure as Code",
        "Monitoring (Grafana)",
      ],
    },
    {
      title: "Systems & Infrastructure",
      skills: [
        "Network Design (LAN/WAN, VLANs)",
        "Server & Database Management",
        "Security & Compliance",
        "Hardware Diagnostics",
        "Asset Tracking Systems",
        "Backup & Disaster Recovery",
        "IT Support & User Training",
      ],
    },
  ];

  return (
    <Container id="about" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom sx={{ mb: 4 }}>
        About Me
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: "1.1rem" }}>
        I&apos;m a <strong>Full-Stack Developer transitioning into Quality Engineering</strong> with 
        hands-on experience in modern web development and a growing expertise in test automation. 
        My background in systems architecture provides a holistic view of software quality—from 
        infrastructure to user experience.
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: "1.1rem" }}>
        As a <strong>Developer in Test candidate</strong>, I&apos;m passionate about driving quality 
        through code, implementing shift-left practices, and building scalable test automation 
        frameworks. My experience with React/Next.js development gives me unique insight into 
        frontend-backend integration points, making me effective at contract testing and API 
        validation.
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 3 }}>
        Core Competencies
      </Typography>

      {/* Option 1: Use Grid2 (MUI v6+) */}
      <Grid container spacing={3}>
        {skillCategories.map((category, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <Paper 
              elevation={1} 
              sx={{ 
                p: 2, 
                mb: 2, 
                backgroundColor: "background.paper",
                height: "100%",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {category.title}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
                {category.skills.map((skill, skillIndex) => (
                  <Chip
                    key={skillIndex}
                    label={skill}
                    variant="outlined"
                    color="primary"
                    sx={{ 
                      margin: 0.5, 
                      fontWeight: 500 
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, p: 3, bgcolor: "action.hover", borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          🎯 Career Transition Focus
        </Typography>
        <Typography variant="body1">
          Currently upskilling in <strong>Java for test automation</strong>, 
          <strong> mobile testing frameworks (Espresso/XCUITest)</strong>, and 
          <strong> contract testing with Pact</strong> to complement my existing 
          React/Next.js expertise. Actively building test automation projects 
          and contributing to open-source testing tools.
        </Typography>
      </Box>
    </Container>
  );
}
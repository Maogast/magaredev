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
  Link as MuiLink,
} from "@mui/material";
import NextLink from "next/link";

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
    {
      title: "Technical Content & Prompt Engineering",
      skills: [
        "AI-Powered Content Generation (DeepSeek, Gemini)",
        "SEO Blog Writing & Optimization",
        "Product Description & Marketing Copy",
        "Technical Documentation & SOPs",
        "Medical & Herbal Wellness Writing",
        "Church & Ministry Communication",
        "Poster & Graphic Design Prompting",
        "Devotion & Spiritual Reflection Writing",
      ],
    },
    {
      title: "Ministry & Organizational Leadership",
      skills: [
        "Church Administration (Board Proposals, Budgets)",
        "Prayer Cell Coordination & Leadership",
        "Event Planning (Vespers, Fasting, Vigils)",
        "Departmental Strategy (Revival & Reformation)",
        "Master Guide Program Support",
        "Volunteer & Team Coordination",
        "Public Communication (WhatsApp, Announcements)",
        "Spiritual Curriculum Development",
      ],
    },
    {
      title: "Medical Missionary & Natural Health",
      skills: [
        <MuiLink
          key="nk-link"
          component={NextLink}
          href="https://nkmm.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="inherit"
          sx={{ textDecoration: 'none' }}
        >
          NK-Organics Product Management
        </MuiLink>,
        "Herbal & Natural Remedy Knowledge",
        "Customer Health Consultation Support",
        "Product Image Prompting & Branding",
        "E-commerce Content Strategy",
        "Wellness Blog Creation",
        "Natural Remedy Education (Diabetes, Detox, etc.)",
        "Faith-Based Health Messaging",
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

      <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: "1.1rem", fontStyle: "italic", color: "primary.main" }}>
        Beyond code, I actively apply my technical skills in real-world ministry and business contexts. 
        I lead the <strong>Revival & Reformation department</strong> at Zimmerman SDA Church, coordinate 
        prayer cells and events, and serve at <strong> NK-Organics Medical Missionaries</strong>, 
        where I blend software development with content creation, product strategy, and natural health education. 
        This unique blend of technical, organizational, and communicative expertise allows me to solve complex 
        problems and create impactful solutions across domains.
      </Typography>

      <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 3 }}>
        Core Competencies
      </Typography>

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
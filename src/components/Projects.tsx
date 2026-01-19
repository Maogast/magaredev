"use client";

import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { ArrowRightAlt, GitHub } from "@mui/icons-material";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Container id="projects" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 8,
          maxWidth: 800,
          mx: "auto",
          px: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "primary.main",
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Portfolio Showcase
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: "2.5rem", md: "3rem" },
            background: "linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Featured Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1.1rem",
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          A collection of my recent work showcasing full-stack development,
          modern UI/UX design, and scalable solutions.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Box
        sx={{
          display: "grid",
          gap: { xs: 4, md: 6 },
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
        }}
      >
        {projects.map((proj) => (
          <ProjectCard key={proj.slug} project={proj} />
        ))}
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          textAlign: "center",
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
        >
          Want to see more of my work?
        </Typography>
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRightAlt />}
            href="https://github.com/Maogast"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            View All Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<GitHub />}
            href="https://github.com/Maogast"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            GitHub Profile
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
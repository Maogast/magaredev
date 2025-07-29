import React from "react";
import { Container, Typography, Box } from "@mui/material";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Container id="projects" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" }
        }}
      >
        {projects.map((proj) => (
          <ProjectCard key={proj.slug} project={proj} />
        ))}
      </Box>
    </Container>
  );
}
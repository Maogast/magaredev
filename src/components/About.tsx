import React from "react";
import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container id="about" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography>
        I’m a systems architect and full-stack developer passionate about
        building scalable solutions and empowering communities through
        technology. Rooted in faith-driven leadership, I bring clarity,
        adaptability, and collaboration to every project.
      </Typography>
    </Container>
  );
}
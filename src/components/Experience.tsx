import React from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const experiences = [
  "2024–Present: Systems Architect at Mine the Word Academy",
  "2021–2024: Full-Stack Developer at FaithTech",
  "2018–2021: IT Hardware Specialist at Nairobi Solutions"
];

export default function Experience() {
  return (
    <Container id="experience" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Experience & Achievements
      </Typography>
      <List>
        {experiences.map((exp) => (
          <ListItem key={exp}>
            <ListItemText primary={exp} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
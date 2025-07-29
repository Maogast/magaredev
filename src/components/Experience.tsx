import React from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const experiences = [
  "Mar 2025 – Present: Software Developer & IT Specialist at NK-Organics, Nairobi",
  "Jan 2024 – Apr 2025: IT Support Technician & Data Entry Specialist at Private Client (Mr. Paul Musyoka), Nairobi",
  "Sep 2023 – Dec 2023: Network & System Admin (Attachment) at National Treasury of Kenya, Nairobi",
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
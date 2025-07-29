import React from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function Education() {
  return (
    <Container id="education" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Education
      </Typography>

      <List>
        <ListItem disableGutters>
          <ListItemText
            primary="Bachelor in Information Technology"
            secondary="Technical University of Kenya, Nairobi · Completed – Nov 2024"
          />
        </ListItem>

        <ListItem disableGutters>
          <ListItemText
            primary="Secondary School"
            secondary="St. Teresa’s Bikeke Boys, Kenya · Completed Nov 2017"
          />
        </ListItem>

        <ListItem disableGutters>
          <ListItemText
            primary="Primary School"
            secondary="Hill School Kitale, Kenya · Completed Nov 2013"
          />
        </ListItem>
      </List>

      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
        Certifications
      </Typography>

      <List>
        <ListItem disableGutters>
          <ListItemText primary="Responsive Web Design (freeCodeCamp, 2024)" />
        </ListItem>

        <ListItem disableGutters>
          <ListItemText primary="Advanced React & TypeScript (Self-taught, 2025)" />
        </ListItem>

        <ListItem disableGutters>
          <ListItemText primary="CompTIA Network+ (in progress)" />
        </ListItem>
      </List>
    </Container>
  );
}
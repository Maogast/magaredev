import React from "react";
import { Container, Typography, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Leadership() {
  return (
    <Container id="leadership" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Community Leadership & Mentorship
      </Typography>

      <Box>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary="Lead Developer at Mine the Word Academy, an online Bible school and community initiative focused on training young people across Kenya to become effective Christian missionaries through theological education, leadership development, and practical outreach."
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary="Mentored junior developers in React, Next.js, and workflow best practices."
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary="Facilitated conflict resolution and inclusive communication workshops."
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary="Co-founded and lead “Audience Chamber” prayer group, meeting Monday–Friday 5:20 am–6:00 am via Google Meet for morning devotion and sharing the Word of God."
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary="Spiritual Leader of youth choir, overseeing worship direction and pastoral support."
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemText
              primary="Bible Teacher at local church, crafting and delivering weekly Bible studies to deepen congregational faith."
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
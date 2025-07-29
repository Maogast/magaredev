import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function Leadership() {
  return (
    <Container id="leadership" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Community Leadership & Mentorship
      </Typography>
      <Box>
        <Typography gutterBottom>
          • Organized and led weekly vespers ministries for 100+ members.
        </Typography>
        <Typography gutterBottom>
          • Mentored junior developers in React, Next.js, and workflow best practices.
        </Typography>
        <Typography>
          • Facilitated conflict resolution and inclusive communication workshops.
        </Typography>
      </Box>
    </Container>
  );
}
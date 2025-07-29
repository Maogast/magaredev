// src/pages/contact.tsx
import React from "react";
import { Container, Typography } from "@mui/material";
import Social from "@/components/Social";

export default function Contact() {
  return (
    <Container id="contact" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="body1" paragraph>
        You can email me directly or find me on socials:
      </Typography>
      <Social />
    </Container>
  );
}
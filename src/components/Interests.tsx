// src/components/Interests.tsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function Interests() {
  return (
    <Container id="interests" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Interests & Passions
      </Typography>
      <Box>
        <Typography gutterBottom>
          • Guitar performance and composition
        </Typography>
        <Typography>
          • Preaching the present truth—connecting modern life with Scripture
        </Typography>
      </Box>
    </Container>
  );
}
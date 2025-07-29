// src/components/Footer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Social from "@/components/Social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ textAlign: "center", py: 4 }}>
      {/* Social links at the top of the footer */}
      <Box mb={2}>
        <Social />
      </Box>

      <Typography variant="body2">
        &copy; {year} Stephen Magare Ogaro
      </Typography>
    </Box>
  );
}
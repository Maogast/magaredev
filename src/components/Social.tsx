// src/components/Social.tsx
"use client";

import React from "react";
import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const socialLinks = [
  {
    href: "https://github.com/Maogast",
    label: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    href: "https://www.linkedin.com/in/stephen-ogaro-370893211/",
    label: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    href: "https://twitter.com/your-username",
    label: "Twitter",
    icon: <TwitterIcon />,
  },
  {
    href: "https://wa.me/254768564580",
    label: "WhatsApp",
    icon: <WhatsAppIcon />,
  },
];

export default function Social() {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {socialLinks.map(({ href, label, icon }) => (
        <IconButton
          key={href}
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          color="inherit"      // <- use inherit instead of primary
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  );
}
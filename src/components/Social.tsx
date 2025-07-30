// src/components/Social.tsx
"use client";

import React, { ReactNode } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

type SocialLink = {
  href: string;
  label: string;
  icon: ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    href:
      "mailto:stevemagare4@gmail.com?subject=Portfolio%20Inquiry&utm_source=portfolio&utm_medium=link",
    label: "Email",
    icon: <EmailIcon />,
  },
  {
    href:
      "https://github.com/Maogast?utm_source=portfolio&utm_medium=link",
    label: "GitHub",
    icon: <GitHubIcon />,
  },
  {
    href:
      "https://www.linkedin.com/in/stephen-ogaro-370893211/?utm_source=portfolio&utm_medium=link",
    label: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    href:
      "https://twitter.com/your_twitter_handle?utm_source=portfolio&utm_medium=link",
    label: "Twitter",
    icon: <TwitterIcon />,
  },
  {
    href:
      "https://wa.me/254768564580?text=Hi%20Stephen!%20I%20saw%20your%20portfolio&utm_source=portfolio&utm_medium=link",
    label: "WhatsApp",
    icon: <WhatsAppIcon />,
  },
];

export default function Social() {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        gap: theme.spacing(1),
        alignItems: "center",
      }}
      aria-label="Social links"
    >
      {socialLinks.map(({ href, label, icon }) => (
        <IconButton
          key={href}
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          color="inherit"
          size="large"
          sx={{
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.1)" },
          }}
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  );
}
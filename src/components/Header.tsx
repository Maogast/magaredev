// src/components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";

// 1) Keep your gradient AppBar
const GradientAppBar = styled(AppBar)({
  background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
});

// 2) Re-apply ButtonProps so TS knows about `component`, `href`, etc.
const NavButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#fff",
  textTransform: "capitalize",
  fontWeight: 500,
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
}));

export default function Header() {
  const leftSections = ["about", "skills", "experience"];
  const rightSections = [
    "leadership",
    "education",
    "interests",
    "projects",
    "contact",
  ];

  const renderNav = (sec: string) => (
    <NavButton key={sec} component={Link} href={`#${sec}`} disableRipple>
      {sec}
    </NavButton>
  );

  return (
    <GradientAppBar position="sticky" elevation={4}>
      <Toolbar>
        <Typography variant="h6" sx={{ mr: 2, color: "#fff" }}>
          Stephen Magare Ogaro
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {leftSections.map(renderNav)}
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: "flex", gap: 1 }}>
          {rightSections.map(renderNav)}
        </Box>
      </Toolbar>
    </GradientAppBar>
  );
}
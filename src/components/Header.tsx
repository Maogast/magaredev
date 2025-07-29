import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
  const sections = ["about", "skills", "experience", "leadership", "projects", "contact"];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Stephen Magare Ogaro
        </Typography>
        {sections.map((sec) => (
          <Button key={sec} color="inherit" component={Link} href={`#${sec}`}>
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
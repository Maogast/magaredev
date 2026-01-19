// src/components/Hero.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Button,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Social from "@/components/Social";

export default function Hero() {
  const [showSocial, setShowSocial] = useState(false);
  const socialRef = useRef<HTMLDivElement | null>(null);

  const handleConnectClick = () => {
    setShowSocial((prev) => !prev);
  };

  useEffect(() => {
    if (showSocial && socialRef.current) {
      socialRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showSocial]);

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        bgcolor: "primary.main",
        color: "common.white",
        py: 8,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        {/* Profile image */}
        <Box
          sx={{
            width: 150,
            height: 150,
            mx: "auto",
            mb: 4,
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Stephen Magare Ogaro"
            fill
            priority
            style={{ objectFit: "cover" }}
            onError={(e) =>
              (e.currentTarget.src = "/images/placeholder.jpg")
            }
          />
        </Box>

        <Typography variant="h2" component="h1" gutterBottom>
          Stephen Magare Ogaro
        </Typography>
        <Typography variant="h4" component="p" sx={{ mb: 2, fontWeight: 500 }}>
          Full-Stack Developer & Quality Engineering Specialist
        </Typography>
        
        <Typography variant="h6" component="p" sx={{ mb: 4, color: "rgba(255,255,255,0.8)" }}>
          Next.js • React • Java • Test Automation • API & Mobile Testing
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}>
          Passionate about driving quality through code. Experienced in contract testing, 
          mobile automation, and shift-left testing practices. Currently transitioning into 
          Developer in Test roles with focus on building scalable test frameworks.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleConnectClick}
          aria-expanded={showSocial}
          endIcon={showSocial ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{ mb: 2 }}
        >
          {showSocial ? "Hide Connections" : "Let's Connect"}
        </Button>

        <Collapse
          in={showSocial}
          timeout={{ enter: 300, exit: 200 }}
          unmountOnExit
        >
          <Box mt={4} ref={socialRef}>
            <Typography variant="subtitle1" gutterBottom>
              Connect with me:
            </Typography>
            <Social />
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}
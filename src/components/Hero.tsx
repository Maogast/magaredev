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
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
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
        <Typography variant="h5" component="p" sx={{ mb: 4 }}>
          Full-Stack React/Next.js Developer & Architect
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleConnectClick}
          aria-expanded={showSocial}
          endIcon={showSocial ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {showSocial ? "Hide Connections" : "Let’s Connect"}
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
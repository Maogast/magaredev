// src/components/Hero.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  Collapse,
  Stack,
  Chip,
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern/gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
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
            border: "3px solid white",
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
        
        {/* Expanded title with ministry roles */}
        <Typography variant="h5" component="p" sx={{ mb: 1, fontWeight: 500 }}>
          Full-Stack Developer & Quality Engineering Specialist
        </Typography>
        
        <Typography variant="h6" component="p" sx={{ mb: 3, color: "rgba(255,255,255,0.9)" }}>
          Revival & Reformation Leader • Medical Missionary • AI Content Creator
        </Typography>

        <Typography variant="subtitle1" component="p" sx={{ mb: 2, color: "rgba(255,255,255,0.8)" }}>
          Next.js • React • Java • Test Automation • API & Mobile Testing
        </Typography>

        {/* Quick impact badges */}
        <Stack 
          direction="row" 
          spacing={2} 
          justifyContent="center" 
          sx={{ mb: 3 }}
        >
          <Chip 
            label="4+ Years Experience" 
            variant="outlined" 
            sx={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}
          />
          <Chip 
            label="20+ Projects" 
            variant="outlined" 
            sx={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}
          />
          <Chip 
            label="Church Leadership" 
            variant="outlined" 
            sx={{ color: "white", borderColor: "rgba(255,255,255,0.5)" }}
          />
        </Stack>

        <Typography variant="body1" sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}>
          Passionate about driving quality through code and transforming communities through servant leadership. 
          Experienced in contract testing, mobile automation, and shift-left practices. 
          Currently serving as Departmental Head for Revival & Reformation and Technical Lead at NK-Organics Medical Missionaries.
        </Typography>

        {/* Dual CTAs */}
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleConnectClick}
            aria-expanded={showSocial}
            endIcon={showSocial ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            {showSocial ? "Hide Connections" : "Let's Connect"}
          </Button>
          
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            component={Link}
            href="https://nkmm.co.ke"
            target="_blank"
            sx={{ borderColor: "white", color: "white", '&:hover': { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" } }}
          >
            Visit NK-Organics
          </Button>
        </Stack>

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
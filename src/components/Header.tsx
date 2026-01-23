// src/components/Header.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Fade,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Custom AppBar with scroll effect
const CustomAppBar = styled(AppBar)({
  background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease-in-out",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
});

// Animated NavButton with hover effects
const NavButton = styled(Button)({
  color: "#fff",
  textTransform: "capitalize",
  fontWeight: 600,
  padding: "6px 16px",
  borderRadius: "20px",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.1)",
    transition: "left 0.4s ease",
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    transform: "translateY(-2px)",
    "&::before": {
      left: "100%",
    },
  },
  "&.active": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 15px rgba(28, 181, 224, 0.3)",
  },
});

// Active indicator dot
const ActiveIndicator = styled("span")({
  position: "absolute",
  bottom: "4px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: "#fff",
});

export default function Header() {
  const isMobile = useMediaQuery('(max-width:900px)'); // Using media query without theme
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  
  // Use useMemo to prevent recreating navItems on every render
  const navItems = useMemo(() => [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "leadership", label: "Leadership" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "interests", label: "Interests" },
    { id: "contact", label: "Contact" },
  ], []); // Empty dependency array means this is created once

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]); // navItems is now stable due to useMemo

  // Scroll trigger for AppBar elevation
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  // Handle mobile drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Smooth scroll function
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileOpen(false);
  };

  // Mobile drawer content
  const drawer = (
    <Box sx={{ width: 280, bgcolor: "background.paper", height: "100%" }}>
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 700 }}>
          Stephen Magare
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={activeSection === item.id}
              onClick={() => handleNavClick(item.id)}
              sx={{
                py: 1.5,
                "&.Mui-selected": {
                  backgroundColor: "primary.light",
                  color: "primary.contrastText",
                },
              }}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{
                  fontWeight: activeSection === item.id ? 700 : 500,
                }}
              />
              {activeSection === item.id && <ActiveIndicator />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CustomAppBar 
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? "rgba(28, 181, 224, 0.95)" : undefined,
          backdropFilter: trigger ? "blur(10px)" : undefined,
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          {/* Logo/Name with fade-in animation */}
          <Fade in={!trigger} timeout={500}>
            <Typography
              variant="h6"
              sx={{
                mr: 3,
                color: "#fff",
                fontWeight: 800,
                letterSpacing: "0.5px",
                background: "linear-gradient(90deg, #fff 30%, #a1e9ff 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Stephen Magare
            </Typography>
          </Fade>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
              {navItems.map((item) => (
                <Box key={item.id} sx={{ position: "relative" }}>
                  <NavButton
                    onClick={() => handleNavClick(item.id)}
                    className={activeSection === item.id ? "active" : ""}
                    disableRipple
                  >
                    {item.label}
                  </NavButton>
                  {activeSection === item.id && <ActiveIndicator />}
                </Box>
              ))}
            </Box>
          ) : (
            // Mobile menu button
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </CustomAppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from hiding under fixed header */}
      <Toolbar />
    </>
  );
}
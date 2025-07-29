import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function About() {
  return (
    <Container id="about" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>

      <Typography variant="body1" paragraph>
        I’m a Full-Stack React/Next.js Developer & Systems Architect and a
        seasoned Hardware & Systems Engineer with hands-on experience
        optimizing server infrastructures, network topologies, and end-to-end
        web applications. As a committed Christian, my faith in Christ shapes
        my leadership and collaboration style—guiding me to serve with
        integrity, empathy, and a community-focused mindset.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Core Competencies
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemText primary="Full-Stack Web Development (React/Next.js, TypeScript, Firebase, Supabase, WordPress)" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Network design & segmentation (LAN/WAN, VLANs, firewall policies)" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Server & database management (Windows/Linux, AWS S3 backups)" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Hardware diagnostics & optimization (motherboard, CPU/GPU, storage)" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Security protocols & compliance (vulnerability scans, MFA rollout)" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Asset tracking & real-time inventory (RFID/barcode, WebUSB)" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Backup & disaster recovery strategies (on-premises + cloud)" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="User training & support (workshops, SOP documentation)" />
        </ListItem>
      </List>
    </Container>
  );
}
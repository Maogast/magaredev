import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Box, Paper, Divider } from "@mui/material";

const experiences = [
  {
    period: "Mar 2025 – Present",
    title: "Software Developer & IT Specialist",
    organization: "NK-Organics Medical Missionaries, Nairobi",
    achievements: [
      "Develop and maintain the NK-Organics e-commerce platform (nkmm.co.ke) using modern web technologies",
      "Create product image prompts and manage visual content strategy for 50+ herbal and wellness products",
      "Write SEO-optimized blog content on natural remedies, health benefits, and product guides",
      "Provide IT support and technical consultation for the medical missionary team",
      "Manage product data entry, inventory tracking, and e-commerce operations",
    ],
  },
  {
    period: "Jan 2024 – Apr 2025",
    title: "IT Support Technician & Data Entry Specialist",
    organization: "Private Client, Nairobi",
    achievements: [
      "Provided technical support and troubleshooting for hardware and software issues",
      "Managed data entry, asset tracking, and documentation systems",
      "Assisted with network configuration and system maintenance",
      "Developed internal processes for efficient data management",
    ],
  },
  {
    period: "Sep 2023 – Dec 2023",
    title: "Network & System Administrator (Attachment)",
    organization: "National Treasury of Kenya, Nairobi",
    achievements: [
      "Assisted in network design and infrastructure maintenance",
      "Supported system administration and server management tasks",
      "Participated in security compliance and backup procedures",
      "Gained hands-on experience in enterprise IT environments",
    ],
  },
];

const ministryRoles = [
  {
    role: "Departmental Head - Revival & Reformation",
    organization: "Zimmerman SDA Church",
    period: "2026 – 2027",
    description: "Appointed to lead the Revival and Reformation department, focusing on spiritual renewal, discipleship programs, and implementing church-wide transformation initiatives.",
  },
  {
    role: "Prayer Ministry Leader",
    organization: "Kasarani Prayer Cell",
    period: "2024 – Present",
    description: "Leading weekly intercessory prayer sessions and spiritual warfare initiatives, fostering a culture of sustained prayer and community spiritual support.",
  },
  {
    role: "Ambassadors Club Teacher",
    organization: "Youth Development Ministry",
    period: "2026 – Present",
    description: "Educating and mentoring young ambassadors in Christian leadership, public speaking, and community service, preparing them for effective ministry and societal impact.",
  },
  {
    role: "Co-Manager, Medical Missionary Operations",
    organization: "Nature's Kitchen Medical Missionary",
    period: "2024 – Present",
    description: "Co-leading medical missionary initiatives that integrate holistic health education, community wellness programs, and sustainable health practices.",
  },
  {
    role: "Lead Developer & Technical Director",
    organization: "Mine the Word Academy",
    period: "2024 – Present",
    description: "Leading technology initiatives for an online Bible school training Christian missionaries across Kenya through digital theological education and leadership development.",
  },
  {
    role: "Morning Devotion Facilitator",
    organization: "Audience Chamber Prayer Group",
    period: "2024 – Present",
    description: "Facilitating daily morning devotion sessions (5:00 AM - 6:00 AM) via Google Meet, creating consistent spiritual discipline and community connection.",
  },
];

const technicalContentRoles = [
  {
    role: "AI Prompt Engineer & Content Creator",
    organization: "Freelance / Self-Employed",
    period: "2025 – Present",
    description: [
      "Generate high-quality content using AI tools (DeepSeek, Gemini) for blogs, devotionals, and marketing materials",
      "Create poster and graphic design prompts for church events, wellness products, and social media campaigns",
      "Write SEO-optimized product descriptions and wellness blogs for NK-Organics",
      "Develop technical documentation and standard operating procedures",
      "Craft devotionals and spiritual reflections for Master Guides, youth groups, and prayer bands",
    ],
  },
];

export default function Experience() {
  return (
    <Container id="experience" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Experience & Achievements
      </Typography>

      {/* Professional Experience */}
      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Professional Experience
      </Typography>
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        {experiences.map((exp, index) => (
          <Box key={index} sx={{ mb: index < experiences.length - 1 ? 3 : 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {exp.title}
            </Typography>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              {exp.organization} • {exp.period}
            </Typography>
            <List dense disablePadding>
              {exp.achievements.map((achievement, i) => (
                <ListItem key={i} sx={{ py: 0.5 }}>
                  <ListItemText primary={`• ${achievement}`} />
                </ListItem>
              ))}
            </List>
            {index < experiences.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}
      </Paper>

      {/* Technical Content & AI Prompt Engineering */}
      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Technical Content & AI Prompt Engineering
      </Typography>
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        {technicalContentRoles.map((role, index) => (
          <Box key={index}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {role.role}
            </Typography>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              {role.organization} • {role.period}
            </Typography>
            <List dense disablePadding>
              {role.description.map((item, i) => (
                <ListItem key={i} sx={{ py: 0.5 }}>
                  <ListItemText primary={`• ${item}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Paper>

      {/* Ministry & Community Leadership */}
      <Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Ministry & Community Leadership
      </Typography>
      <Paper elevation={2} sx={{ p: 3 }}>
        {ministryRoles.map((role, index) => (
          <Box key={index} sx={{ mb: index < ministryRoles.length - 1 ? 3 : 0 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {role.role}
            </Typography>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              {role.organization} • {role.period}
            </Typography>
            <Typography variant="body2" paragraph>
              {role.description}
            </Typography>
            {index < ministryRoles.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}
      </Paper>
    </Container>
  );
}
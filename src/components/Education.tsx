// src/components/Education.tsx
"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
  Divider,
  alpha,
} from "@mui/material";
import {
  School,
  MenuBook,
  Verified,
  WorkspacePremium,
  TrendingUp,
  ArrowForward,
} from "@mui/icons-material";

const educationData = [
  {
    degree: "Bachelor in Information Technology",
    institution: "Technical University of Kenya, Nairobi",
    period: "2018 - 2024",
    status: "Completed",
    description: "Specialized in Software Development. Graduated with honors.",
    courses: [
      "Software Engineering",
      "Database Management",
      "Network Security",
      "Web Development",
      "Mobile App Development",
    ],
    achievements: ["Graduated with a degree in Information Technology"],
    icon: <School />,
    color: "#1CB5E0",
  },
  {
    degree: "Secondary Education - KCSE",
    institution: "St. Teresa's Bikeke Boys, Kenya",
    period: "2014 - 2017",
    status: "Completed",
    description: "Science and Mathematics stream. Developed foundational technical and analytical skills.",
    subjects: ["Mathematics", "Physics", "Computer Studies", "Business Studies"],
    achievements: [
      "Top overall student in KCSE results for the school",
      "Batch best in CRE & Mathematics",
      "Science Club President",
      "Computer Studies Award"
    ],
    icon: <MenuBook />,
    color: "#4A00E0",
  },
  {
    degree: "Primary Education - KCPE",
    institution: "Hill School Kitale, Kenya",
    period: "2006 - 2013",
    status: "Completed",
    description: "Built strong academic foundation with emphasis on mathematics and sciences.",
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    achievements: ["Mathematics Excellence Award", "Science Fair Winner"],
    icon: <School />,
    color: "#8E2DE2",
  },
];

const certificationsData = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2024",
    credentialId: "FCC-RWD-2024",
    skills: ["HTML5", "CSS3", "Accessibility", "Responsive Design"],
    verified: true,
    icon: <Verified />,
    color: "#00B09B",
    link: "https://www.freecodecamp.org/certification/fccfca49e5a-34f2-4887-83cd-d885c1e5ca1b/responsive-web-design",
  },
  {
    title: "Advanced React & TypeScript",
    issuer: "Self-Directed Learning",
    year: "2025",
    status: "Ongoing Projects",
    skills: ["React Hooks", "TypeScript", "Next.js", "State Management"],
    projects: ["Portfolio Website", "Church Management System"],
    icon: <TrendingUp />,
    color: "#667EEA",
  },
  {
    title: "Mobile Automation with Jenkins & JUnit in Java",
    issuer: "Edureka",
    year: "In Progress",
    target: "Q2 2026",
    skills: ["Testing Tools for Mobile App", "API Testing", "Kubernetes", "Principles of Software Testing"],
    progress: 90,
    icon: <WorkspacePremium />,
    color: "#FF416C",
  },
];

export default function Education() {
  return (
    <Container id="education" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "primary.main",
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Academic Journey
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 3,
            fontSize: { xs: "2.5rem", md: "3rem" },
            background: "linear-gradient(45deg, #1CB5E0 30%, #000851 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Education & Certifications
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: "1.1rem",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          A journey of continuous learning and skill development, blending formal education with 
          self-directed mastery in modern web technologies.
        </Typography>
      </Box>

      {/* Education Timeline - Using CSS Grid instead of MUI Grid */}
      <Box sx={{ mb: 10 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "primary.dark",
          }}
        >
          <School sx={{ fontSize: "2rem" }} />
          Academic Timeline
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4,
        }}>
          {educationData.map((edu, index) => (
            <Card
              key={index}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 20px 40px ${alpha(edu.color, 0.2)}`,
                  "&::before": {
                    width: "100%",
                  },
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "6px",
                  height: "100%",
                  backgroundColor: edu.color,
                  transition: "width 0.3s ease",
                },
              }}
            >
              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                {/* Header */}
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Avatar
                    sx={{
                      backgroundColor: alpha(edu.color, 0.1),
                      color: edu.color,
                      mr: 2,
                      width: 56,
                      height: 56,
                    }}
                  >
                    {edu.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {edu.institution}
                    </Typography>
                  </Box>
                </Box>

                {/* Status & Period */}
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip
                    label={edu.status}
                    size="small"
                    sx={{
                      backgroundColor: alpha("#4CAF50", 0.1),
                      color: "#4CAF50",
                      fontWeight: 600,
                    }}
                  />
                  <Chip
                    label={edu.period}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: alpha(edu.color, 0.3), color: edu.color }}
                  />
                </Stack>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    color: "text.secondary",
                    lineHeight: 1.6,
                  }}
                >
                  {edu.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* Courses/Skills */}
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                  Key Focus Areas:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {edu.courses?.map((course, idx) => (
                    <Chip
                      key={idx}
                      label={course}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: "0.75rem" }}
                    />
                  ))}
                  {edu.subjects?.map((subject, idx) => (
                    <Chip
                      key={idx}
                      label={subject}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: "0.75rem" }}
                    />
                  ))}
                </Box>

                {/* Achievements */}
                {edu.achievements && (
                  <>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Achievements:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {edu.achievements.map((achievement, idx) => (
                        <Typography
                          component="li"
                          variant="body2"
                          key={idx}
                          sx={{
                            color: "text.secondary",
                            mb: 0.5,
                            fontSize: "0.875rem",
                          }}
                        >
                          {achievement}
                        </Typography>
                      ))}
                    </Box>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Certifications Section */}
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "primary.dark",
          }}
        >
          <WorkspacePremium sx={{ fontSize: "2rem" }} />
          Certifications & Professional Development
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 3,
        }}>
          {certificationsData.map((cert, index) => (
            <Card
              key={index}
              sx={{
                height: "100%",
                borderRadius: 3,
                border: `1px solid ${alpha(cert.color, 0.2)}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 10px 30px ${alpha(cert.color, 0.2)}`,
                  borderColor: alpha(cert.color, 0.4),
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* Certification Header */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    sx={{
                      backgroundColor: alpha(cert.color, 0.1),
                      color: cert.color,
                      mr: 2,
                    }}
                  >
                    {cert.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cert.issuer} • {cert.year}
                    </Typography>
                  </Box>
                </Box>

                {/* Credential ID */}
                {cert.credentialId && (
                  <Chip
                    label={`ID: ${cert.credentialId}`}
                    size="small"
                    sx={{
                      backgroundColor: alpha("#2196F3", 0.1),
                      color: "#2196F3",
                      mb: 2,
                      fontSize: "0.75rem",
                    }}
                  />
                )}

                {/* Progress Bar for In Progress */}
                {cert.progress && (
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                      <Typography variant="body2" color="text.secondary">
                        Progress
                      </Typography>
                      <Typography variant="body2" fontWeight={600}>
                        {cert.progress}%
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: 6,
                        backgroundColor: alpha(cert.color, 0.1),
                        borderRadius: 3,
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${cert.progress}%`,
                          height: "100%",
                          backgroundColor: cert.color,
                          borderRadius: 3,
                        }}
                      />
                    </Box>
                    {cert.target && (
                      <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                        Target completion: {cert.target}
                      </Typography>
                    )}
                  </Box>
                )}

                {/* Skills */}
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Skills Gained:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                  {cert.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: alpha(cert.color, 0.1),
                        color: cert.color,
                        fontSize: "0.75rem",
                      }}
                    />
                  ))}
                </Box>

                {/* Projects for Self-Directed */}
                {cert.projects && (
                  <>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Applied Projects:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0, mb: 2 }}>
                      {cert.projects.map((project, idx) => (
                        <Typography
                          component="li"
                          variant="body2"
                          key={idx}
                          sx={{
                            color: "text.secondary",
                            mb: 0.5,
                            fontSize: "0.875rem",
                          }}
                        >
                          {project}
                        </Typography>
                      ))}
                    </Box>
                  </>
                )}

                {/* Verified Badge */}
                {cert.verified && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 2,
                      p: 1,
                      backgroundColor: alpha("#4CAF50", 0.1),
                      borderRadius: 2,
                    }}
                  >
                    <Verified sx={{ color: "#4CAF50", fontSize: "1rem" }} />
                    <Typography variant="body2" sx={{ color: "#4CAF50", fontWeight: 600 }}>
                      Verified Certification
                    </Typography>
                  </Box>
                )}

                {/* View Certification Link */}
                {cert.link && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 2,
                      color: "primary.main",
                      cursor: "pointer",
                      "&:hover": { color: "primary.dark" },
                    }}
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      View Certification
                    </Typography>
                    <ArrowForward sx={{ fontSize: "1rem" }} />
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Learning Philosophy */}
      <Box
        sx={{
          mt: 10,
          p: 4,
          borderRadius: 3,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
          }}
        />
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, position: "relative" }}>
          Learning Philosophy
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8, position: "relative", maxWidth: 800 }}>
          &ldquo;Education is not the learning of facts, but the training of the mind to think. 
          I believe in <strong>continuous, hands-on learning</strong> that bridges academic theory with 
          real-world application. Every certification and course is a stepping stone toward 
          solving meaningful problems through technology.&rdquo;
        </Typography>
      </Box>
    </Container>
  );
}
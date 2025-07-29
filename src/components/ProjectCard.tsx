// src/components/ProjectCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Box,
  Button,
} from "@mui/material";
import { Project } from "@/data/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Card>
      {/* navigates to your detail‐page */}
      <CardActionArea component={Link} href={`/projects/${project.slug}`}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {project.role}
          </Typography>

          <Box sx={{ mb: 1 }}>
            {project.stack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{ mr: 0.5, mb: 0.5 }}
              />
            ))}
          </Box>

          <Typography noWrap>{project.challenge}</Typography>
        </CardContent>
      </CardActionArea>

      {/* optional external “Live Demo” button */}
      {project.liveDemoUrl && (
        <CardActions>
          <Button
            size="small"
            component="a"
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
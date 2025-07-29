// src/app/projects/[slug]/page.tsx

import projects from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import Link from "next/link";

// 1) static params as before
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

// 2) The harness expects P extends Promise<any>. We declare it explicitly:
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // await unwraps the object at runtime
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Project Not Found", description: "No project matches this slug." };
  }
  return {
    title: `${project.title} | Projects`,
    description: project.challenge,
  };
}

// 3) Same trick on the page component
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <Container sx={{ py: 8 }}>
      <Button component={Link} href="/#projects" sx={{ mb: 4 }}>
        ← Back to Projects
      </Button>

      <Typography variant="h3" gutterBottom>
        {project.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Role: {project.role}
      </Typography>

      <Box sx={{ mb: 2 }}>
        {project.stack.map((tech) => (
          <Chip key={tech} label={tech} size="small" sx={{ mr: 1, mb: 1 }} />
        ))}
      </Box>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6">Challenge</Typography>
          <Typography>{project.challenge}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Solution</Typography>
          <Typography>{project.solution}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Result</Typography>
          <Typography>{project.result}</Typography>
        </Box>
      </Stack>

      {project.liveDemoUrl && (
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            component="a"
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        </Box>
      )}
    </Container>
  );
}
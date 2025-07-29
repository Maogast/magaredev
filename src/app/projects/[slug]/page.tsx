// src/app/projects/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import Link from "next/link";

interface Props { params: { slug: string } }

// 1) Pre-build only known slugs
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// 2) Disallow any other slug → 404
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found", description: "" };
  }
  return {
    title: `${project.title} | Projects`,
    description: project.challenge,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
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
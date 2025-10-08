import React from "react";
import { Container, Typography, Box, Paper, Chip } from "@mui/material";

const categories: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "WordPress", "MUI", "TypeScript"],
  Backend: ["Node.js", "Express", "GraphQL","Firebase","Supabase"],
  Tools: ["Git", "VS Code", "Vercel"]
};

export default function Skills() {
  return (
    <Container id="skills" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Skills & Tools
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" }
        }}
      >
        {Object.entries(categories).map(([group, items]) => (
          <Paper key={group} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {group}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {items.map((skill) => (
                <Chip key={skill} label={skill} />
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
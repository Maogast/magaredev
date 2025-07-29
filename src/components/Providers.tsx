// src/components/Providers.tsx
"use client";

import React, { PropsWithChildren } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme/theme";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
// app/layout.tsx

import "@/styles/globals.scss";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// static metadata (no viewport here!)
export const metadata: Metadata = {
  title: "Stephen Magare Ogaro | Full-Stack Developer",
  description:
    "Systems architect and full-stack React/Next.js developer passionate about scalable solutions and community leadership.",
};

// static viewport export (replaces metadata.viewport)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />    {/* ← Next.js injects <meta> tags here */}
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
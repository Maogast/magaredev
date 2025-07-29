// src/pages/index.tsx (or wherever your HomePage lives)

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Interests from "@/components/Interests";
import Projects from "@/components/Projects";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Leadership />

        {/* NEW Interests Section */}
        <Interests />

        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
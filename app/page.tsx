"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Capabilities } from "@/components/Capabilities";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#080B14] text-white selection:bg-brand-primary/30 selection:text-white overflow-hidden">
      {/* Ambient Aurora Gradient Orbs for Frosted Glass Refraction */}
      <div className="fixed top-20 left-[-10%] w-[550px] h-[550px] rounded-full bg-brand-primary/10 blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="fixed top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-accent/10 blur-[150px] pointer-events-none -z-10" />
      <div className="fixed top-[65%] left-[15%] w-[650px] h-[650px] rounded-full bg-brand-secondary/10 blur-[160px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="fixed bottom-10 right-[20%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none -z-10" />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setResumeModalOpen(true)} />

      {/* About Me & Education */}
      <About />

      {/* Technical Skills Categorized */}
      <Skills />

      {/* 6 Technical Capabilities */}
      <Capabilities />

      {/* Featured Projects (All 7 Projects) */}
      <Projects />

      {/* Experience & Involvement */}
      <Experience />

      {/* Certifications & Problem Solving */}
      <Certifications />

      {/* Contact Section */}
      <Contact onOpenResume={() => setResumeModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </main>
  );
}

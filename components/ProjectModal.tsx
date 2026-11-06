"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Cpu,
  Sparkles,
} from "lucide-react";
import { Project } from "@/lib/project-data";
import { Button } from "@/components/ui/Button";
import { ProjectMockup } from "@/components/ProjectMockup";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-xl"
        />

        {/* Elevated Heavy Frosted Glass Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel-elevated rounded-3xl shadow-2xl z-10 custom-scrollbar border border-white/20 glass-specular-top"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0a0f1d]/80 backdrop-blur-2xl border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {project.categoryLabel}
              </span>
              {project.isFeatured && (
                <span className="text-[10px] font-semibold text-white bg-brand-primary px-2.5 py-0.5 rounded-full shadow-glow-sm border border-white/20">
                  Featured Project
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors border border-white/10 backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Visual Mockup Header */}
          <ProjectMockup type={project.mockupType} title={project.title} />

          {/* Main Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-sm font-medium text-cyan-300">{project.tagline}</p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            {/* Metrics highlight in Frosted Glass Box */}
            {project.metrics && (
              <div className="p-4 rounded-2xl bg-brand-primary/15 border border-brand-primary/30 backdrop-blur-xl flex items-center gap-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                <Sparkles className="w-5 h-5 text-brand-primary shrink-0" />
                <div>
                  <div className="text-xs text-indigo-200 font-semibold uppercase tracking-wider">
                    Evaluated Results / Performance Metric
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{project.metrics}</div>
                </div>
              </div>
            )}

            {/* Problem Statement Frosted Box */}
            <div className="space-y-2 p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                The Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {project.problemStatement}
              </p>
            </div>

            {/* Solution Architecture Frosted Box */}
            <div className="space-y-2 p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Technical Solution & Architecture
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {project.solutionArchitecture}
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Key Engineered Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl text-xs font-mono bg-white/[0.05] backdrop-blur-md text-slate-200 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions / Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button
                    variant="primary"
                    size="md"
                    icon={<Github className="w-4 h-4" />}
                  >
                    View Code on GitHub
                  </Button>
                </a>
              ) : (
                <span className="text-xs text-slate-400 italic">
                  Repository available upon request
                </span>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button
                    variant="glass"
                    size="md"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Live Demonstration
                  </Button>
                </a>
              ) : (
                <span className="text-xs text-slate-300 bg-white/[0.04] backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  Demo: Streamlit / local pipeline configuration
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

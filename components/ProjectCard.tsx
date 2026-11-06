"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";
import { Project } from "@/lib/project-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectMockup } from "@/components/ProjectMockup";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <GlassCard
        glow="subtle"
        variant="standard"
        spotlight={true}
        className="h-full flex flex-col justify-between overflow-hidden p-0 border-white/[0.12] hover:border-brand-primary/50 group transition-all duration-300"
      >
        <div>
          {/* Custom Interactive UI Mockup Header with Frosted Glass Overlay */}
          <div className="relative">
            <ProjectMockup type={project.mockupType} title={project.title} />

            {/* Featured Badge if applicable */}
            {project.isFeatured && (
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-brand-primary/80 text-white shadow-glow-sm backdrop-blur-xl border border-white/20">
                  <Sparkles className="w-3 h-3 text-cyan-300" />
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Project Details Content */}
          <div className="p-6">
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                {project.categoryLabel}
              </span>
              {project.metrics && (
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-md border border-emerald-500/30 backdrop-blur-sm">
                  {project.metrics}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Key Features List Preview */}
            <div className="space-y-1.5 mb-5">
              {project.keyFeatures.slice(0, 3).map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.08]">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-200 border border-white/[0.08] backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3">
          <Button
            variant="glass"
            size="sm"
            onClick={() => onSelect(project)}
            icon={<ArrowUpRight className="w-3.5 h-3.5 text-cyan-300" />}
            iconPosition="right"
            className="w-full justify-between hover:border-brand-accent/60 hover:text-white"
          >
            Explore Project Deep Dive
          </Button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-slate-300 hover:text-white transition-colors backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

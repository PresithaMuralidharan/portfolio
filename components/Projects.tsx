"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Sparkles, Filter } from "lucide-react";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  Project,
  ProjectCategory,
} from "@/lib/project-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All Projects");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (selectedCategory === "AI / ML") return p.category === "AI / ML";
          if (selectedCategory === "NLP") return p.category === "NLP";
          if (selectedCategory === "Big Data") return p.category === "Big Data";
          if (selectedCategory === "Data Analytics")
            return p.category === "Data Analytics" || p.category === "Big Data";
          if (selectedCategory === "Software Development")
            return p.category === "Software Development";
          return true;
        });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Projects"
          title="Engineered Applications & Research Systems"
          subtitle="A showcase of all seven completed applications across Machine Learning, NLP, Distributed Big Data, and Full-Stack Engineering."
        />

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-transparent shadow-glow-sm"
                  : "bg-white/[0.03] text-slate-400 border-white/10 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {category}
              {category === "All Projects" && (
                <span className="ml-2 text-xs opacity-75 font-mono">({PROJECTS.length})</span>
              )}
            </button>
          ))}
        </div>

        {/* 7 Projects Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
              index={index}
            />
          ))}
        </div>

        {/* Informative Note for Recruiters */}
        <div className="mt-14 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            💡 <strong className="text-white">Note for Recruiters:</strong> All 7 projects were
            conceived, developed, and evaluated as part of my practical MSc curriculum and technical
            explorations. Source code repositories and live demos can be configured or shared upon request.
          </p>
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}


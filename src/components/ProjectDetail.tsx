/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, Code, ExternalLink, ArrowUpRight } from "lucide-react";
import { Project } from "../types";
import { motion } from "motion/react";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  // We can make sure we have specific links or mock details as needed
  const displayTags = project.tags || ["React", "Typescript", "Tailwind CSS"];

  // Custom process steps based on selected project
  const steps = project.processSteps || [
    { number: "01", title: "Architecture Audit", description: "Identifying bottlenecks in legacy pipelines." },
    { number: "02", title: "WebGL Prototyping", description: "Validating performance benchmarks." },
    { number: "03", title: "UI Optimization", description: "Refining visual states and micro-interactions." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-20"
    >
      {/* Back button */}
      <div className="mb-10">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-widest text-stone-400 hover:text-white cursor-pointer transition-colors"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform" />
          Back to Home
        </button>
      </div>

      {/* Project Title & Intro */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h1 
            className="text-3xl sm:text-4xl text-white mb-4 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h1>
          <p className="text-stone-400 font-sans text-sm sm:text-base leading-relaxed">
            {project.detailSubtitle || project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-stone-900 border border-[#27272a] font-mono text-[9px] uppercase tracking-widest text-[#a1a1aa] rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Image displaying exact grayscale aesthetics */}
      <div className="w-full aspect-video md:aspect-[21/9] bg-[#121214] border border-[#27272a] overflow-hidden rounded mb-16 relative group shadow-2xl">
        <img
          alt={project.title}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.01] select-none"
          src={project.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/55 via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Column: Narrative details */}
        <div className="md:col-span-8 space-y-12">
          
          {/* Client Problem */}
          <section className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex items-center gap-3 md:w-32 shrink-0 pt-1.5">
              <span className="w-6 h-[1px] bg-[#27272a]"></span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 font-bold whitespace-nowrap">
                Client Problem
              </span>
            </div>
            <div className="font-serif text-[15px] sm:text-base text-stone-300 leading-relaxed max-w-prose">
              {project.clientProblem}
            </div>
          </section>

          {/* Solution */}
          <section className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex items-center gap-3 md:w-32 shrink-0 pt-1.5">
              <span className="w-6 h-[1px] bg-[#27272a]"></span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 font-bold whitespace-nowrap">
                Solution
              </span>
            </div>
            <div className="font-serif text-[15px] sm:text-base text-stone-300 leading-relaxed max-w-prose">
              {project.solution}
            </div>
          </section>
        </div>

        {/* Right Column: Cards info */}
        <div className="md:col-span-4 space-y-8">
          
          {/* Action Card */}
          <div className="p-6 bg-[#121214] border border-[#27272a] rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold text-white tracking-tight mb-3">
              Ready to deploy?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mb-6 leading-relaxed">
              Explore the source code, implementation details, and documentation for the {project.title} project on GitHub.
            </p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#fafafa] hover:bg-[#fafafa]/90 text-stone-900 py-3.5 rounded font-mono text-[10px] tracking-wider uppercase font-semibold transition-all active:scale-98"
            >
              <Code size={13} />
              View on GitHub
            </a>
          </div>

          {/* Execution steps */}
          <div className="p-6 bg-[#121214]/40 border border-[#27272a]/70 rounded-lg">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 font-bold mb-6">
              The Process
            </h3>
            <div className="space-y-6">
              {steps.map((item) => (
                <div key={item.number} className="flex gap-4 items-start">
                  <span className="font-mono text-xs text-white font-bold shrink-0">{item.number}</span>
                  <div>
                    <h4 className="font-sans text-xs sm:text-sm font-semibold text-stone-200 mb-1">{item.title}</h4>
                    <p className="font-mono text-[10px] text-stone-400 leading-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Additional high-fidelity layout displays at bottom of Detail Page */}
      {project.showcaseImages && project.showcaseImages.length > 0 && (
        <div className="mt-16 pt-16 border-t border-[#27272a]/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Detail showcase image 1 */}
            <div className="bg-[#121214] border border-[#27272a] rounded overflow-hidden group shadow-lg aspect-video">
              <img
                alt="Detailed User Interface view"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 select-none"
                src={project.showcaseImages[0]}
              />
            </div>

            {/* Showcase detail element - fallback display to showcase layout */}
            <div className="bg-[#121214] border border-[#27272a] rounded overflow-hidden group shadow-lg aspect-video">
              <img
                alt="System hardware server components"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 select-none"
                src={
                  project.showcaseImages[1] ||
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDPn4wvjSnAZacmC0i0iyzWC7PCicfhlhUGwmdXRiULpj8GTHllVTfkzxykSlLHcvioUEg_Z4pr2YLPNwOZ5FUGvbByaFlLM6ri3zKrqjgerht64zrycTiAPbGmOtSKxRAMCPMF9qR2oyCCLXLx7XreNQy4TmpQ4akeMTo73P0vXqXfngTv8QexVHoy77J_Bs6aprZgzDurKpuA_LLJ8rhdUXIZ6WW8MrmVlwzyz31E1qVJmR5MXh4i038_lgzIMbC56ugDGkGuxDvA"
                }
              />
            </div>

          </div>
        </div>
      )}
    </motion.div>
  );
}

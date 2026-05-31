/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowUpRight, CheckSquare, Calendar, Compass, Briefcase } from "lucide-react";
import { Project } from "../types";
import { PROJECTS_DATA, EXPERIENCE_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface SelectedWorkProps {
  onSelectProject: (id: string) => void;
}

type TabType = "projects" | "experience";

export default function SelectedWork({ onSelectProject }: SelectedWorkProps) {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  return (
    <section id="work" className="max-w-5xl mx-auto px-6 md:px-12 py-16">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 pb-6 border-b border-[#27272a]/20">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            Selected Work
          </h2>
          <p className="font-sans text-sm text-stone-400">
            A collection of web applications and technical experiments.
          </p>
        </div>

        {/* Tab Switcher identical to the screenshot */}
        <div className="flex bg-[#121214] border border-[#27272a] rounded-md p-1 relative">
          <button
            onClick={() => setActiveTab("projects")}
            className={`relative px-6 py-1.5 rounded-md font-mono text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer z-10 ${
              activeTab === "projects"
                ? "text-[#09090b]"
                : "text-stone-400 hover:text-white"
            }`}
          >
            {activeTab === "projects" && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-[#fafafa] rounded-md -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Projects
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`relative px-6 py-1.5 rounded-md font-mono text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer z-10 ${
              activeTab === "experience"
                ? "text-[#09090b]"
                : "text-stone-400 hover:text-white"
            }`}
          >
            {activeTab === "experience" && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-[#fafafa] rounded-md -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            Experience
          </button>
        </div>
      </div>

      {/* Render based on selected Tab */}
      <AnimatePresence mode="wait">
        {activeTab === "projects" ? (
          <motion.div
            key="projects-grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {PROJECTS_DATA.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group flex flex-col h-full bg-[#121214]/40 border border-[#27272a] hover:border-stone-400 rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Media frame */}
                <div 
                  onClick={() => onSelectProject(project.id)}
                  className="w-full aspect-[16/10] bg-[#1a1a1c] border-b border-[#27272a]/75 overflow-hidden relative cursor-pointer"
                >
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-103 group-hover:grayscale-0 select-none"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/40 to-transparent pointer-events-none" />
                </div>

                {/* Content body */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 
                      onClick={() => onSelectProject(project.id)}
                      className="text-xl font-medium tracking-tight text-white group-hover:text-[#fafafa] transition-colors cursor-pointer hover:underline underline-offset-4"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {project.title}
                    </h3>
                    <span className="px-2.5 py-0.5 border border-[#27272a] bg-stone-900 rounded font-mono text-[9px] uppercase tracking-widest text-[#a1a1aa]">
                      {project.technology}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-stone-400 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="w-full mt-auto py-3 px-4 border border-[#27272a] group-hover:border-stone-400 hover:bg-stone-900 rounded font-mono text-[10px] tracking-widest uppercase font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    View Details <ArrowUpRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Experience Timeline for "Experience" Active Tab */
          <motion.div
            key="experience-timeline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {/* Timeline Element 1 */}
            <div className="relative border-l-2 border-[#27272a] pl-8 pb-8 ml-4">
              {/* timeline point */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border border-[#27272a] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c0c0e]" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-[#27272a] bg-[#121214]/50">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      <Briefcase size={16} className="text-stone-400" />
                      Content Specialist / Intern
                    </h3>
                    <p className="text-sm font-sans text-stone-400">PT Fajar Network</p>
                  </div>
                  <span className="px-3 py-1 self-start sm:self-center font-mono text-[10px] uppercase bg-stone-900 border border-[#27272a] text-[#fafafa] rounded">
                    6 Months
                  </span>
                </div>

                <p className="text-stone-400 text-sm mb-4">
                  Led visual storytelling, cameraman operations, and audio production workflows in a high-throughput broadcaster environment. Assisted in mixing digital podcasts.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Visual Storytelling", "Podcast Mix", "Media Production", "Audio Gear"].map((skill) => (
                    <span key={skill} className="px-2 py-0.5 border border-[#27272a] bg-stone-950 font-mono text-[9px] uppercase tracking-wider text-stone-300 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Element 2 (Academic Activities) */}
            <div className="relative border-l-2 border-[#27272a] pl-8 pb-4 ml-4">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-stone-800 border border-[#27272a] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c0c0e]" />
              </div>

              <div className="glass-panel p-6 rounded-lg border border-[#27272a] bg-[#121214]/50">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
                      <Compass size={16} className="text-stone-400" />
                      IT Academic Projects Stream
                    </h3>
                    <p className="text-sm font-sans text-stone-400">PNUP Engineering Lab</p>
                  </div>
                  <span className="px-3 py-1 self-start sm:self-center font-mono text-[10px] uppercase bg-stone-900 border border-[#27272a] text-stone-300 rounded">
                    2022 - present
                  </span>
                </div>

                <p className="text-stone-400 text-sm mb-4">
                  Designed web application blueprints, client routers, and database indexing solutions. Specialized in utilizing modern tools such as React, REST APIs, and client-side intelligence systems.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Algorithms", "SQL Databases", "UI Engineering", "Systems Design"].map((skill) => (
                    <span key={skill} className="px-2 py-0.5 border border-[#27272a] bg-stone-950 font-mono text-[9px] uppercase tracking-wider text-stone-300 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

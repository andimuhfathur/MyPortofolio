/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onViewProjects: () => void;
  onContactMe: () => void;
}

export default function Hero({ onViewProjects, onContactMe }: HeroProps) {
  return (
    <section className="relative max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-16 md:py-32 flex flex-col items-center text-center overflow-hidden">
      
      {/* "Available for projects" chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#27272a] rounded-full bg-[#121214]"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-300"></span>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 font-medium">
          Available for projects
        </span>
      </motion.div>

      {/* Main Heading styled mimicking the serif layout */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ fontFamily: "var(--font-display)" }}
        className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 max-w-4xl tracking-tight leading-[1.12]"
      >
        Fathur Ramadhan — <span className="text-stone-400 font-light italic">Crafting Digital Solutions through Precise Web Development.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22 }}
        className="font-sans text-sm sm:text-base md:text-[17px] text-stone-400 max-w-2xl leading-relaxed mb-10"
      >
        IT Student at PNUP specializing in AI and modern Full-stack Engineering. Turning complex problems into elegant interfaces.
      </motion.p>

      {/* Hero Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <button
          onClick={onViewProjects}
          className="px-8 py-3.5 rounded-md bg-[#fafafa] hover:bg-[#fafafa]/90 text-stone-900 font-mono text-xs uppercase tracking-[0.1em] font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-xl hover:shadow-white/5 active:scale-[0.98] cursor-pointer"
        >
          View Projects <ArrowUpRight size={14} />
        </button>
        <button
          onClick={onContactMe}
          className="px-8 py-3.5 rounded-md border border-[#27272a] hover:bg-stone-900 text-stone-300 hover:text-white font-mono text-xs uppercase tracking-[0.1em] font-medium transition-all duration-200 flex items-center justify-center cursor-pointer"
        >
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}

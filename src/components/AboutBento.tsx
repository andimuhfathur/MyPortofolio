/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Video, Mic, Film } from "lucide-react";
import { EXPERIENCE_DATA } from "../data";
import { motion } from "motion/react";

export default function AboutBento() {
  const exp = EXPERIENCE_DATA[0];

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* About Narrative Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-10 rounded-lg flex flex-col justify-between border border-[#27272a] bg-[#121214]/60"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-500 font-semibold mb-4 block">
              About Me
            </span>
            <h2 className="text-2xl md:text-3xl text-white mb-6 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
              Bridging code and creativity at PNUP.
            </h2>
            <div className="space-y-4 font-sans text-sm md:text-[15px] text-stone-400 leading-relaxed">
              <p>
                Currently pursuing Information Technology at Politeknik Negeri Ujung Pandang. My journey is fueled by a deep fascination with AI and its potential to revolutionize software engineering.
              </p>
              <p>
                I focus on building high-performance full-stack applications that are not only functional but also deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience / PKL Highlight Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-lg border border-[#27272a] overflow-hidden group min-h-[350px] flex flex-col justify-end p-8 md:p-10"
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#09090b]/85 z-10 transition-colors duration-500 group-hover:bg-[#09090b]/75" />
            <img
              alt="Studio media setup background"
              className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-all duration-700 select-none"
              src={exp.bgImage}
            />
          </div>

          {/* Content */}
          <div className="relative z-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 font-semibold mb-3 block">
              Experience
            </span>
            
            <h3 className="text-2xl md:text-3xl text-white mb-1 tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
              {exp.company}
            </h3>
            
            <p className="font-mono text-[10px] text-stone-300 font-medium tracking-[0.12em] uppercase mb-6 pb-2 border-b border-[#27272a]/40 max-w-xs">
              {exp.duration} • {exp.role}
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-sans text-xs sm:text-sm text-stone-300">
                <span className="p-1.5 bg-stone-900 border border-[#27272a]/50 text-stone-300 rounded">
                  <Video size={13} />
                </span>
                Cameraman &amp; Visual Storytelling
              </li>
              <li className="flex items-center gap-3 font-sans text-xs sm:text-sm text-stone-300">
                <span className="p-1.5 bg-stone-900 border border-[#27272a]/50 text-stone-300 rounded">
                  <Mic size={13} />
                </span>
                Podcast Production Assistant
              </li>
              <li className="flex items-center gap-3 font-sans text-xs sm:text-sm text-stone-300">
                <span className="p-1.5 bg-stone-900 border border-[#27272a]/50 text-stone-300 rounded">
                  <Film size={13} />
                </span>
                Digital Content Creation
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ChevronDown, Monitor, Database, Sparkles } from "lucide-react";
import { SKILL_CATEGORIES } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function TechnicalArsenal() {
  // Track open indexes - multiple opening is allowed or single accordion lock. Let's do single lock.
  const [openId, setOpenId] = useState<string | null>("frontend");

  const toggleSection = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor":
        return <Monitor size={20} className="text-white" />;
      case "Database":
        return <Database size={20} className="text-white" />;
      case "Sparkles":
        return <Sparkles size={20} className="text-white" />;
      default:
        return <Monitor size={20} className="text-white" />;
    }
  };

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 md:px-12 py-16">
      
      {/* Title */}
      <h2 
        className="text-3xl font-semibold tracking-tight text-white mb-10"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Technical Arsenal
      </h2>

      {/* Accordion List */}
      <div className="space-y-4">
        {SKILL_CATEGORIES.map((category) => {
          const isOpen = openId === category.id;

          return (
            <div
              key={category.id}
              className="glass-panel rounded-lg border border-[#27272a]/80 bg-[#121214]/30 overflow-hidden"
            >
              {/* Header trigger button */}
              <button
                onClick={() => toggleSection(category.id)}
                className="w-full flex justify-between items-center p-6 hover:bg-stone-900/35 transition-colors cursor-pointer text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-stone-900 border border-[#27272a] rounded">
                    {getIcon(category.iconName)}
                  </span>
                  <h3 className="text-lg md:text-xl font-medium tracking-tight text-white font-serif">
                    {category.title}
                  </h3>
                </div>
                
                {/* Rotating Chevron */}
                <span className={`text-stone-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  <ChevronDown size={18} />
                </span>
              </button>

              {/* Dynamic Expandable body using simple Framer Motion Height Transition */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 pt-2 border-t border-[#27272a]/45">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {category.skills.map((skill) => (
                          <div
                            key={skill}
                            className="p-4 border border-[#27272a] bg-[#0c0c0e] rounded text-center hover:border-stone-400 transition-colors"
                          >
                            <p className="font-mono text-[11px] uppercase tracking-widest text-[#fafafa] font-medium">
                              {skill}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}
      </div>

    </section>
  );
}

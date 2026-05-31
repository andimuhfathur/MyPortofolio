/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowUpRight, Menu, X, FileText, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onNavigateHome: () => void;
  currentProjectId: string | null;
}

export default function Navbar({ onNavigateHome, currentProjectId }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (currentProjectId) {
      onNavigateHome();
      // small timeout for render home view, then scroll
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 w-full z-40 bg-[#09090b]/80 backdrop-blur-md border-b border-[#27272a]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={onNavigateHome}
            className="font-mono text-lg font-bold tracking-tight text-white cursor-pointer hover:opacity-80 transition-all flex items-center"
          >
            FR.DEV
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm font-sans text-stone-400 hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white/30 cursor-pointer transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-5 py-2 rounded-md bg-[#fafafa] hover:bg-[#fafafa]/90 font-mono text-xs text-[#09090b] tracking-wider uppercase font-medium transition-all cursor-pointer hover:shadow-lg active:scale-95"
            >
              Resume
            </button>
          </div>

          {/* Mobile Nav Trigger */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 w-full z-30 bg-[#09090b]/95 border-b border-[#27272a]/80 py-6 px-6 md:hidden flex flex-col gap-5 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2 font-sans text-base text-stone-300 hover:text-white border-b border-[#27272a]/20 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsResumeOpen(true);
              }}
              className="w-full py-3 h-12 rounded-md bg-[#fafafa] hover:bg-[#fafafa]/90 font-mono text-xs text-[#09090b] tracking-wider uppercase font-medium transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              Resume <ArrowUpRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-[#121214] border border-[#27272a] rounded-lg p-6 md:p-8 max-h-[85vh] overflow-y-auto shadow-2xl scrollbar-thin"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsResumeOpen(false)}
                className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-stone-800 rounded-md text-white">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Fathur Ramadhan</h3>
                  <p className="font-mono text-xs text-stone-400 tracking-wider uppercase">IT Student - Web Developer & AI Enthusiast</p>
                </div>
              </div>

              {/* Resume Details Section */}
              <div className="space-y-6 mt-6 font-sans text-sm text-stone-300">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2 border-b border-[#27272a] pb-1">Education</h4>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-white">Politeknik Negeri Ujung Pandang (PNUP)</span>
                    <span className="font-mono text-xs text-stone-400">2022 - Present</span>
                  </div>
                  <p className="text-stone-400">Bachelor of Information Technology (AI & Full-Stack Stream) - GPA: 3.82/4.00</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2 border-b border-[#27272a] pb-1">Core Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Full-Stack Design Systems", "Gemini AI API"].map((tool) => (
                      <span key={tool} className="px-2.5 py-1 bg-stone-900 border border-[#27272a] text-xs font-mono text-stone-300 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2 border-b border-[#27272a] pb-1">Recent Highlight Projects</h4>
                  <ul className="space-y-3">
                    <li>
                      <span className="font-medium text-white block">Quantum Dynamics Dashboard</span>
                      <span className="text-stone-400 text-xs block">React, TypeScript, Rust, WebGL renderer</span>
                      <p className="text-stone-300 mt-1">Built high-performance observability pipelines reducing telemetry render overhead on clusters by 94%.</p>
                    </li>
                    <li>
                      <span className="font-medium text-white block">Nexus AI Dashboard</span>
                      <span className="text-stone-400 text-xs block">Next.js, Tailwind, Gemini SDK</span>
                      <p className="text-stone-300 mt-1">Synthesized deep LLM intelligence into telemetry feeds for dynamic explanation scripts.</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-[#27272a]">
                <a
                  href="https://wa.me/628123456789" // placeholder wa.me link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3 rounded bg-white text-[#09090b] font-mono text-xs font-semibold uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer"
                >
                  Hire Fathur <ArrowUpRight size={14} />
                </a>
                <button
                  onClick={() => alert("Resume PDF downloaded successfully! (Demo payload ready.)")}
                  className="flex-1 px-5 py-3 rounded border border-[#27272a] text-stone-300 hover:text-white hover:bg-stone-900 font-mono text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download size={14} /> Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "GitHub", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Email", href: "mailto:fathur@example.com" }
  ];

  return (
    <footer className="border-t border-[#27272a]/45 mt-20 bg-[#09090b]/80 z-10 relative">
      <div className="max-w-7xl mx-auto py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo label */}
        <div className="font-mono text-sm font-bold text-stone-200 uppercase tracking-wider">
          FR.DEV
        </div>

        {/* Copy text */}
        <p className="font-mono text-[10px] tracking-widest text-stone-500 text-center uppercase">
          © {currentYear} Fathur Ramadhan. Built with precision.
        </p>

        {/* Social interactions links */}
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest uppercase text-stone-400 hover:text-white transition-colors duration-200 relative group"
            >
              {link.name}
              
              {/* Highlight underline anchor */}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

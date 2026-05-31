/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Harap isi Nama dan Pesan Anda terlebih dahulu.");
      return;
    }

    // Compose custom Indonesian/English greeting message
    const waNumber = "6282194553255"; // Pre-set Indonesian mobile country code placeholder
    const textPreset = `Halo Fathur! Nama saya *${name}*.%0A%0A*Pesan:*%0A${encodeURIComponent(message)}`;
    
    // Open in a new window/tab safely bypassing standard iframe constraints on real clicks
    const waUrl = `https://wa.me/${waNumber}?text=${textPreset}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Direct contact details */}
        <div>
          <h2 
            className="text-3xl md:text-4xl text-white mb-6 leading-tight" 
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ready to start your next project?
          </h2>
          <p className="font-sans text-stone-400 text-sm md:text-base leading-relaxed mb-8">
            I'm always looking for interesting collaborations. Send me a message and I'll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-4 text-stone-300 hover:text-white transition-colors duration-200">
              <span className="p-2.5 bg-stone-900 border border-[#27272a] rounded">
                <Mail size={16} className="text-stone-300" />
              </span>
              <a href="mailto:fathur@example.com" className="font-sans text-sm md:text-[15px] hover:underline">
                fathur@example.com
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 text-stone-300 hover:text-white transition-colors duration-200">
              <span className="p-2.5 bg-stone-900 border border-[#27272a] rounded">
                <MapPin size={16} className="text-stone-300" />
              </span>
              <span className="font-sans text-sm md:text-[15px]">
                Makassar, Indonesia
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Form Composites */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-6 md:p-8 rounded-lg bg-[#121214]/40 border border-[#27272a]"
        >
          <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-[#0c0c0e] border border-[#27272a] hover:border-stone-500 focus:border-white focus:outline-none rounded-md px-4 py-3 font-sans text-sm text-white placeholder-stone-600 transition-colors"
              />
            </div>

            {/* Message Text area */}
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project"
                className="w-full bg-[#0c0c0e] border border-[#27272a] hover:border-stone-500 focus:border-white focus:outline-none rounded-md px-4 py-3 font-sans text-sm text-white placeholder-stone-600 transition-colors resize-none"
              />
            </div>

            {/* Submit redirect API triggers */}
            <button
              type="submit"
              className="w-full h-12 bg-white hover:bg-stone-200 text-stone-900 font-mono text-xs uppercase tracking-widest font-semibold rounded-md flex items-center justify-center gap-2.5 transition-all cursor-pointer active:scale-98 shadow-md"
            >
              Send via WhatsApp <Send size={13} />
            </button>
            <p className="text-center font-mono text-[10px] text-stone-500">
              Redirects to wa.me
            </p>

          </form>
        </motion.div>

      </div>
    </section>
  );
}

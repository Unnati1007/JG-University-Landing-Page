"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "TCS", abbr: "TCS", color: "#1e40af" },
  { name: "Infosys", abbr: "INFY", color: "#4338ca" },
  { name: "Deloitte", abbr: "DTT", color: "#2563eb" },
  { name: "KPMG", abbr: "KPMG", color: "#1d4ed8" },
  { name: "Amazon", abbr: "AMZ", color: "#f59e0b" },
  { name: "Google", abbr: "GOOG", color: "#ea4335" },
  { name: "Wipro", abbr: "WPR", color: "#7c3aed" },
  { name: "HCL Tech", abbr: "HCL", color: "#0891b2" },
  { name: "Reliance", abbr: "RIL", color: "#1e3a8a" },
  { name: "Zydus", abbr: "ZYD", color: "#059669" },
  { name: "Torrent", abbr: "TRP", color: "#dc2626" },
  { name: "Adani Group", abbr: "ADA", color: "#0ea5e9" },
];

// Duplicate for seamless infinite scroll
const doubled = [...partners, ...partners];

export default function Partners() {
  return (
    <section id="partners" className="pt-12 pb-8 md:pt-16 md:pb-10 bg-white border-y border-gray-100 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-8 relative z-10">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#10B981] mb-3 font-mono"
          >
            Trusted Recruiters
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-gray-900 font-heading"
          >
            Our Students Work At <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#4F46E5]">The Best</span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-4 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
        >
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Logo placeholder — initials in brand color */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xs shrink-0"
                style={{ background: `linear-gradient(135deg, ${partner.color}, ${partner.color}88)` }}
              >
                {partner.abbr.slice(0, 3)}
              </div>
              <span className="font-bold text-gray-700 text-sm whitespace-nowrap group-hover:text-gray-900 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row going reverse */}
      <div className="relative flex overflow-hidden mt-4">
        <motion.div
          className="flex gap-4 shrink-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: { duration: 30, repeat: Infinity, ease: "linear" },
          }}
        >
          {[...doubled].reverse().map((partner, i) => (
            <div
              key={`rev-${partner.name}-${i}`}
              className="shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl bg-gray-50/80 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xs shrink-0"
                style={{ background: `linear-gradient(135deg, ${partner.color}, ${partner.color}88)` }}
              >
                {partner.abbr.slice(0, 3)}
              </div>
              <span className="font-bold text-gray-600 text-sm whitespace-nowrap group-hover:text-gray-900 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

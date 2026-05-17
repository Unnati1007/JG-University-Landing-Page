"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lightbulb,
  Rocket,
  Trophy,
} from "lucide-react";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

const successPillars = [
  {
    title: "Interdisciplinary Approach",
    subtitle: "Connecting Diverse Minds",
    description: "Students from a wide range of backgrounds connect, ideate and solve problems with different conceptual structures.",
    icon: ShieldCheck,
    color: "bg-[#ec4899]",
    shadow: "rgba(236,72,153,0.4)",
    textColor: "text-white",
    height: 80,
  },
  {
    title: "Immersive Learning",
    subtitle: "Hands-on Expertise",
    description: "Exposure to real-life projects to develop hands-on expertise through practical engagement and industry immersion.",
    icon: Lightbulb,
    color: "bg-[#8b5cf6]",
    shadow: "rgba(139,92,246,0.4)",
    textColor: "text-white",
    height: 140,
  },
  {
    title: "Whole Brain Pedagogy",
    subtitle: "Creative Thinkers",
    description: "Pedagogy that empowers learners to acquire future-proof technical skills and moulds them into creative thinkers.",
    icon: Rocket,
    color: "bg-[#0ea5e9]",
    shadow: "rgba(14,165,233,0.4)",
    textColor: "text-white",
    height: 200,
  },
  {
    title: "Faculty from Industry",
    subtitle: "Brilliant Scholars",
    description: "Inspiration by dynamic scholars with vast academic knowledge and real-world experience across sectors.",
    icon: Trophy,
    color: "bg-[#f59e0b]",
    shadow: "rgba(245,158,11,0.4)",
    textColor: "text-white",
    height: 260,
  },
];

export default function Strengths() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-red-50 border border-red-100 shadow-sm mx-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-red-700">Core Values</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-heading font-[900] text-[#1e1b4b] leading-[1.1] tracking-tight"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-800 drop-shadow-sm px-2">
              Strengths
            </span>
          </motion.h2>
        </div>

        {/* ── MOBILE: Simple vertical card stack ── */}
        <div className="flex flex-col gap-4 lg:hidden">
          {successPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden ${pillar.color} p-5 shadow-lg`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <pillar.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-[9px] font-black uppercase tracking-widest">{pillar.title}</p>
                  <h4 className="text-white font-black text-lg leading-tight">{pillar.subtitle}</h4>
                </div>
              </div>
              <p className="text-white/85 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ── DESKTOP: Staircase layout — fixed z-index and sizing ── */}
        <div className="hidden lg:block relative">
          {/* Reserve top space for the floating info panels */}
          <div className="h-52" />

          <div className="flex items-end justify-between gap-5">
            {successPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial="initial"
                whileHover="hover"
                viewport={{ once: true }}
                className="relative flex-1 group"
                style={{ zIndex: idx + 1 }}
              >
                {/* Floating info panel — positioned above the stair */}
                <motion.div
                  variants={{
                    initial: { y: 0, opacity: 0.85 },
                    hover: { y: -12, opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-full left-0 right-0 mb-4 px-1"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-2 rounded-lg ${pillar.color} shadow-md shrink-0`}>
                      <pillar.icon size={16} className="text-white group-hover:animate-bounce" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-500 leading-tight">
                      {pillar.title}
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-[#1e1b4b] mb-1 leading-tight group-hover:text-red-600 transition-colors">
                    {pillar.subtitle}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {pillar.description}
                  </p>
                </motion.div>

                {/* The stair block */}
                <motion.div
                  variants={{
                    initial: { y: 0, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
                    hover: {
                      y: -10,
                      boxShadow: `0 20px 40px -10px ${pillar.shadow}`,
                    },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-full ${pillar.color} rounded-t-xl border-t-4 border-white/30 relative overflow-hidden cursor-pointer`}
                  style={{ height: `${pillar.height}px` }}
                >
                  {/* Large ghost icon */}
                  <motion.div
                    variants={{
                      initial: { opacity: 0.08, scale: 0.9 },
                      hover: { opacity: 0.2, scale: 1.1 },
                    }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <pillar.icon size={80} className="text-white" />
                  </motion.div>
                  {/* Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/50" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

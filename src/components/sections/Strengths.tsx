"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lightbulb, 
  Rocket, 
  Trophy, 
  Target 
} from "lucide-react";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

const successPillars = [
  {
    title: "Interdisciplinary Approach",
    subtitle: "Connecting Diverse Minds",
    description: "Students from a wide range of backgrounds connect, ideate and solve problems with different conceptual structures and methods of understanding.",
    icon: ShieldCheck,
    color: "bg-[#ec4899]", // Pink 500
    textColor: "text-[#500724]",
    delay: 0.1
  },
  {
    title: "Immersive & Experiential Learning",
    subtitle: "Hands-on Expertise",
    description: "Exposure to real-life projects to develop hands-on expertise through practical engagement and industry immersion.",
    icon: Lightbulb,
    color: "bg-[#8b5cf6]", // Purple 500
    textColor: "text-[#2e1065]",
    delay: 0.3
  },
  {
    title: "Whole Brain Learning Pedagogy",
    subtitle: "Creative Thinkers",
    description: "Pedagogy that empower learners to acquire future-proof technical skills and moulds them into creative thinkers for the modern world.",
    icon: Rocket,
    color: "bg-[#0ea5e9]", // Blue 500
    textColor: "text-[#082f49]",
    delay: 0.5
  },
  {
    title: "Faculty from Academia & Industry",
    subtitle: "Brilliant Scholars",
    description: "Inspiration by dynamic, brilliant scholars with vast academic knowledge and real-world experience across sectors.",
    icon: Trophy,
    color: "bg-[#f59e0b]", // Amber 500
    textColor: "text-[#451a03]",
    delay: 0.7
  }
];

export default function Strengths() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-red-50 border border-red-100 shadow-sm mx-auto"
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-800 drop-shadow-sm px-4">Strengths</span>
          </motion.h2>
        </div>

        {/* Staircase Container */}
        <div className="relative min-h-[500px] flex flex-col items-start lg:flex-row lg:items-end justify-between gap-4 lg:gap-0 mt-20">
          {successPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial="initial"
              whileHover="hover"
              viewport={{ once: true }}
              className="relative w-full lg:w-[20%] group"
            >
              {/* Step Info (Top) */}
              <motion.div 
                variants={{
                  initial: { y: 0, scale: 1, opacity: 0.8 },
                  hover: { y: -20, scale: 1.1, opacity: 1 }
                }}
                className="mb-8 lg:absolute lg:bottom-full lg:left-0 lg:mb-12 w-full lg:w-[280px] transition-all duration-500"
              >
                 <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${pillar.color} ${pillar.textColor} shadow-lg`}>
                       <pillar.icon size={22} className="group-hover:animate-bounce" />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${pillar.textColor}`}>
                      {pillar.title}
                    </span>
                 </div>
                 <h4 className="text-2xl font-black text-[#1e1b4b] mb-3 leading-tight group-hover:text-red-600 transition-colors">
                   {pillar.subtitle}
                 </h4>
                 <p className="text-gray-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                   {pillar.description}
                 </p>
              </motion.div>

              {/* Step Visual (The Stair) */}
              <motion.div 
                variants={{
                  initial: { y: 0, scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
                  hover: { 
                    y: -15, 
                    scale: 1.02,
                    boxShadow: `0 20px 40px -10px ${pillar.color === 'bg-[#ec4899]' ? 'rgba(236,72,153,0.4)' : 
                                  pillar.color === 'bg-[#8b5cf6]' ? 'rgba(139,92,246,0.4)' : 
                                  pillar.color === 'bg-[#0ea5e9]' ? 'rgba(14,165,233,0.4)' : 
                                  'rgba(245,158,11,0.4)'}`
                  }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`w-full ${pillar.color} rounded-t-2xl lg:rounded-t-none border-t-8 border-white/30 relative overflow-hidden cursor-pointer`}
                style={{ height: `${(idx + 1) * 80 + 20}px` }}
              >
                {/* Silhouette Effect on Hover */}
                <motion.div 
                  variants={{
                    initial: { opacity: 0.1, scale: 0.8, y: 20 },
                    hover: { opacity: 0.3, scale: 1.2, y: 0 }
                  }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                   <pillar.icon size={120} className={`${pillar.textColor}`} />
                </motion.div>
                
                {/* Shine / Glass Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40" />
              </motion.div>

              {/* Vertical Connector (Mobile only) */}
              {idx < successPillars.length - 1 && (
                <div className="lg:hidden w-1 h-8 bg-gray-100 mx-auto" />
              )}
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}

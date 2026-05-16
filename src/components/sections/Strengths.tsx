"use client";

import { motion } from "framer-motion";
import {
  Globe, GraduationCap, FlaskConical, Users,
  Trophy, Lightbulb, Building2, Handshake,
} from "lucide-react";

const bentoItems = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Ranked among Gujarat's top universities with NAAC accreditation and UGC recognition.",
    accent: "#4F46E5",
    size: "lg", // large card — spans 2 rows
    stat: "A+",
    statLabel: "NAAC Grade",
  },
  {
    icon: Handshake,
    title: "Industry Partnerships",
    description: "50+ MoUs with industry leaders ensuring real-world exposure and placement support.",
    accent: "#F59E0B",
    size: "sm",
    stat: "50+",
    statLabel: "MoU Partners",
  },
  {
    icon: Trophy,
    title: "98% Placements",
    description: "Near-perfect placement record with top recruiters across India and abroad.",
    accent: "#10B981",
    size: "sm",
    stat: "98%",
    statLabel: "Placement Rate",
  },
  {
    icon: FlaskConical,
    title: "Research & Innovation",
    description: "State-of-the-art labs, incubation centres, and active research programmes.",
    accent: "#8B5CF6",
    size: "md",
    stat: "30+",
    statLabel: "Research Centres",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Student exchange programmes, international collaborations, and global faculty.",
    accent: "#0EA5E9",
    size: "md",
    stat: "20+",
    statLabel: "Partner Countries",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "A vibrant ecosystem for entrepreneurs, innovators, and change-makers.",
    accent: "#F43F5E",
    size: "sm",
    stat: "5+",
    statLabel: "Startup Exits",
  },
  {
    icon: Building2,
    title: "Modern Campus",
    description: "60+ acre Wi-Fi campus with smart classrooms, hostels, and world-class facilities.",
    accent: "#d97706",
    size: "sm",
    stat: "60+",
    statLabel: "Acres Campus",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "250+ qualified faculty members with PhDs, industry experience, and global exposure.",
    accent: "#ec4899",
    size: "sm",
    stat: "250+",
    statLabel: "Expert Faculty",
  },
];

export default function Strengths() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#4F46E5]/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#4F46E5] mb-4 font-mono"
          >
            Why JG University
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 font-heading"
          >
            Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6]">Leaders</span> of Tomorrow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Discover the strengths that make JG University the preferred destination for ambitious students across Gujarat.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[160px] gap-4">

          {/* Large card — Academic Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden group cursor-default"
            style={{ background: `linear-gradient(135deg, ${bentoItems[0].accent}08, ${bentoItems[0].accent}15)`, border: `1px solid ${bentoItems[0].accent}20` }}
          >
            <div className="absolute top-6 right-6 w-24 h-24 rounded-full opacity-10 blur-2xl" style={{ background: bentoItems[0].accent }} />
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-5" style={{ background: bentoItems[0].accent }} />
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ background: `${bentoItems[0].accent}20` }}>
                  <GraduationCap className="w-8 h-8" style={{ color: bentoItems[0].accent }} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 font-heading">{bentoItems[0].title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{bentoItems[0].description}</p>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-6xl font-black font-heading" style={{ color: bentoItems[0].accent }}>{bentoItems[0].stat}</span>
                <span className="text-sm font-mono uppercase tracking-widest text-gray-400 pb-3">{bentoItems[0].statLabel}</span>
              </div>
            </div>
          </motion.div>

          {/* Remaining cards */}
          {bentoItems.slice(1).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.07 }}
              className="relative rounded-3xl overflow-hidden group cursor-default"
              style={{
                background: `linear-gradient(135deg, ${item.accent}06, ${item.accent}12)`,
                border: `1px solid ${item.accent}18`
              }}
            >
              <div className="p-6 h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-sm" style={{ background: `${item.accent}20` }}>
                    <item.icon className="w-5 h-5" style={{ color: item.accent }} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 font-heading">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                </div>
                <div className="flex items-baseline gap-1.5 mt-2">
                  <span className="text-2xl font-black font-heading" style={{ color: item.accent }}>{item.stat}</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">{item.statLabel}</span>
                </div>
              </div>
              {/* Hover accent dot */}
              <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{ background: item.accent }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import {
  FileCheck,
  Users,
  Globe2,
  Zap,
  Briefcase,
  Shapes,
  Rocket,
  Clock
} from "lucide-react";

const features = [
  {
    title: "NEP 2020 Compliant",
    desc: "UGC approved programmes fully aligned with the National Education Policy 2020.",
    icon: FileCheck,
    accent: "#3b82f6",
    bg: "from-blue-50 to-blue-100/50",
    iconBg: "bg-blue-100 text-blue-600",
    number: "01"
  },
  {
    title: "Expert Faculty",
    desc: "Experienced faculty members with deep industry roots and academic excellence.",
    icon: Users,
    accent: "#a855f7",
    bg: "from-purple-50 to-purple-100/50",
    iconBg: "bg-purple-100 text-purple-600",
    number: "02"
  },
  {
    title: "Global Collaboration",
    desc: "Partnerships with foreign universities for curriculum delivery and student exchange.",
    icon: Globe2,
    accent: "#6366f1",
    bg: "from-indigo-50 to-indigo-100/50",
    iconBg: "bg-indigo-100 text-indigo-600",
    number: "03"
  },
  {
    title: "Hands-on Learning",
    desc: "Practical experience using real-world industry use-cases and emerging technologies.",
    icon: Zap,
    accent: "#f59e0b",
    bg: "from-amber-50 to-amber-100/50",
    iconBg: "bg-amber-100 text-amber-600",
    number: "04"
  },
  {
    title: "On-the-Job Training",
    desc: "Full-pay OJT opportunities to bridge the gap between classroom and career.",
    icon: Briefcase,
    accent: "#10b981",
    bg: "from-emerald-50 to-emerald-100/50",
    iconBg: "bg-emerald-100 text-emerald-600",
    number: "05"
  },
  {
    title: "Global Internships",
    desc: "Cross-cultural and cross-sectoral internships for wide-ranging exposure.",
    icon: Shapes,
    accent: "#ec4899",
    bg: "from-pink-50 to-pink-100/50",
    iconBg: "bg-pink-100 text-pink-600",
    number: "06"
  },
  {
    title: "Capstone Projects",
    desc: "Course-embedded projects that solve complex, real-world problems.",
    icon: Rocket,
    accent: "#f97316",
    bg: "from-orange-50 to-orange-100/50",
    iconBg: "bg-orange-100 text-orange-600",
    number: "07"
  },
  {
    title: "24/7 Accessibility",
    desc: "Round-the-clock access to campus facilities for both students and faculty.",
    icon: Clock,
    accent: "#06b6d4",
    bg: "from-cyan-50 to-cyan-100/50",
    iconBg: "bg-cyan-100 text-cyan-600",
    number: "08"
  }
];

function FeatureCard({ feature, idx }: { feature: typeof features[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.08, duration: 0.5 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative bg-gradient-to-br ${feature.bg} p-6 md:p-7 rounded-2xl border border-white shadow-lg cursor-default overflow-hidden group`}
    >
      {/* Animated background glow on hover */}
      <motion.div
        animate={hovered ? { opacity: 1, scale: 1.2 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${feature.accent}15, transparent 70%)`,
        }}
      />

      {/* Feature number watermark */}
      <div
        className="absolute top-3 right-4 text-5xl font-black opacity-[0.06] select-none"
        style={{ color: feature.accent }}
      >
        {feature.number}
      </div>

      {/* Icon with bounce animation */}
      <motion.div
        animate={hovered ? { y: -4, scale: 1.15 } : { y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 shadow-sm relative z-10`}
      >
        {/* Rotating ring on hover */}
        <motion.div
          animate={hovered ? { rotate: 360, opacity: 1 } : { rotate: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 rounded-xl border-2 border-dashed"
          style={{ borderColor: feature.accent + "60" }}
        />
        <feature.icon size={24} />
      </motion.div>

      {/* Title with underline animation */}
      <div className="relative z-10 mb-2">
        <h3 className="text-base md:text-lg font-black text-gray-900 leading-tight">
          {feature.title}
        </h3>
        <motion.div
          animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: feature.accent, transformOrigin: "left" }}
          className="h-0.5 w-12 mt-1.5 rounded-full"
        />
      </div>

      <p className="text-gray-700 text-xs md:text-sm leading-relaxed relative z-10">
        {feature.desc}
      </p>

      {/* Bottom corner accent */}
      <motion.div
        animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl"
        style={{ background: `${feature.accent}12` }}
      />
    </motion.div>
  );
}

export default function SalientFeatures() {
  return (
    <section className="pt-16 pb-10 md:pt-20 md:pb-12 bg-gray-50/50 relative overflow-hidden">
      {/* Subtle animated background blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-red-50 border border-red-100 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-red-700">The JG Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-heading font-[900] text-[#1e1b4b] leading-tight"
          >
            Salient{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 px-2">
              Features
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-xl mx-auto text-sm md:text-base"
          >
            Eight pillars that make JG University a truly future-ready institution.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

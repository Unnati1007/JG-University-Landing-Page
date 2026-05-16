"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { GraduationCap, Handshake, TrendingUp, BookOpen } from "lucide-react";

const statsData = [
  {
    icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-[#4F46E5]" />,
    value: 5000,
    suffix: "+",
    label: "Students Enrolled",
  },
  {
    icon: <Handshake className="w-8 h-8 md:w-10 md:h-10 text-[#F59E0B]" />,
    value: 50,
    suffix: "+",
    label: "Industry Partners",
  },
  {
    icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-[#10B981]" />,
    value: 98,
    suffix: "%",
    label: "Placement Rate",
  },
  {
    icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-[#8B5CF6]" />,
    value: 17,
    suffix: "",
    label: "UG/PG Programs",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-surface border-y border-border py-16 overflow-hidden">
      {/* Subtle shimmer effect on load */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#4F46E5]/5 to-transparent skew-x-[-45deg]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-border">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 bg-black/5 p-4 rounded-2xl glass">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-textPrimary font-heading mb-2 flex items-baseline justify-center">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span className="text-[#F59E0B] text-3xl md:text-4xl ml-1">{stat.suffix}</span>
              </div>
              <p className="text-textSecondary font-bold tracking-widest uppercase text-xs md:text-sm font-mono">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, BookOpen, Award, Building2, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Students Enrolled", color: "text-violet-400", bg: "bg-violet-400/10" },
  { icon: BookOpen, value: "50+", label: "Academic Programs", color: "text-amber-400", bg: "bg-amber-400/10" },
  { icon: Building2, value: "17+", label: "Colleges in Network", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: Award, value: "60+", label: "Years of Excellence", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Globe, value: "200+", label: "Industry Partners", color: "text-rose-400", bg: "bg-rose-400/10" },
  { icon: TrendingUp, value: "95%", label: "Placement Rate", color: "text-teal-400", bg: "bg-teal-400/10" },
];

const partners = [
  "Google", "Microsoft", "TCS", "Infosys", "Wipro", "IBM", "Deloitte",
  "KPMG", "EY", "Accenture", "Amazon", "Flipkart", "HDFC", "ICICI",
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* ─── Stats Counter Section ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}
        ref={ref}
      >
        {/* Animated background dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <p className={`stat-number text-3xl md:text-4xl font-black ${stat.color} mb-1`}>
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partners Marquee ─── */}
      <section className="py-14 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest"
          >
            Trusted by Leading Industry Partners
          </motion.p>
        </div>
        {/* Marquee row 1 */}
        <div className="flex overflow-hidden mb-4" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="marquee-track flex gap-8 items-center flex-shrink-0">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p}-${i}`}
                className="flex-shrink-0 px-8 py-3 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <span className="font-['Outfit'] font-bold text-gray-400 text-sm tracking-wide whitespace-nowrap">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Marquee row 2 (reverse) */}
        <div className="flex overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="marquee-track-reverse flex gap-8 items-center flex-shrink-0">
            {[...partners.slice().reverse(), ...partners.slice().reverse()].map((p, i) => (
              <div
                key={`${p}-r-${i}`}
                className="flex-shrink-0 px-8 py-3 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <span className="font-['Outfit'] font-bold text-gray-300 text-sm tracking-wide whitespace-nowrap">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

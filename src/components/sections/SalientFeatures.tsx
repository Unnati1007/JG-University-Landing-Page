"use client";

import { motion } from "framer-motion";
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
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Expert Faculty",
    desc: "Experienced faculty members with deep industry roots and academic excellence.",
    icon: Users,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Global Collaboration",
    desc: "Partnerships with foreign universities for curriculum delivery and student exchange.",
    icon: Globe2,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Hands-on Learning",
    desc: "Practical experience using real-world industry use-cases and emerging technologies.",
    icon: Zap,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "On-the-Job Training",
    desc: "Full-pay OJT opportunities to bridge the gap between classroom and career.",
    icon: Briefcase,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Global Internships",
    desc: "Cross-cultural and cross-sectoral internships for wide-ranging exposure.",
    icon: Shapes,
    color: "bg-pink-50 text-pink-600"
  },
  {
    title: "Capstone Projects",
    desc: "Course-embedded projects that solve complex, real-world problems.",
    icon: Rocket,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "24/7 Accessibility",
    desc: "Round-the-clock access to campus facilities for both students and faculty.",
    icon: Clock,
    color: "bg-cyan-50 text-cyan-600"
  }
];

export default function SalientFeatures() {
  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
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
            className="text-5xl md:text-6xl font-heading font-[900] text-[#1e1b4b] leading-tight"
          >
            Salient <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 px-2">Features</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-[#1e1b4b] mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

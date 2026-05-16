"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, Clock, BookOpen } from "lucide-react";

const categories = ["All", "Management", "Commerce", "Computing", "Engineering", "Science & Law"];

const programs = [
  // Management
  { name: "BBA", full: "Bachelor of Business Administration", years: "3 years", sem: "6 semesters", category: "Management", level: "UG", hot: false },
  { name: "BBA (Hons)", full: "Bachelor of Business Administration (Honours)", years: "4 years", sem: "8 semesters", category: "Management", level: "UG", hot: false },
  { name: "iMBA", full: "Integrated MBA", years: "5 years", sem: "10 semesters", category: "Management", level: "Integrated", hot: true },
  { name: "iMBA — Aviation & Hospitality", full: "Integrated MBA in Aviation, Hospitality & Travel", years: "5 years", sem: "10 semesters", category: "Management", level: "Integrated", hot: false },
  { name: "iMBA — International Trade", full: "Integrated MBA in International Trade & Finance", years: "5 years", sem: "10 semesters", category: "Management", level: "Integrated", hot: false },
  { name: "MBA", full: "Master of Business Administration", years: "2 years", sem: "4 semesters", category: "Management", level: "PG", hot: true },
  // Commerce
  { name: "B.Com", full: "Bachelor of Commerce", years: "3 years", sem: "6 semesters", category: "Commerce", level: "UG", hot: false },
  { name: "B.Com (Hons)", full: "Bachelor of Commerce (Honours)", years: "4 years", sem: "8 semesters", category: "Commerce", level: "UG", hot: false },
  { name: "B.Com (Hons) with ACCA", full: "B.Com (Honours) with ACCA Global Certification", years: "4 years", sem: "8 semesters", category: "Commerce", level: "UG", hot: true },
  { name: "M.Com (Hons)", full: "Master of Commerce (Honours)", years: "2 years", sem: "4 semesters", category: "Commerce", level: "PG", hot: false },
  // Computing
  { name: "BCA", full: "Bachelor of Computer Applications", years: "3 years", sem: "6 semesters", category: "Computing", level: "UG", hot: false },
  { name: "BCA (Hons)", full: "Bachelor of Computer Applications (Honours)", years: "4 years", sem: "8 semesters", category: "Computing", level: "UG", hot: false },
  { name: "iMCA", full: "Integrated Master of Computer Applications", years: "5 years", sem: "10 semesters", category: "Computing", level: "Integrated", hot: false },
  { name: "MCA", full: "Master of Computer Applications", years: "2 years", sem: "4 semesters", category: "Computing", level: "PG", hot: false },
  { name: "MCA — AI & Full Stack", full: "MCA in Artificial Intelligence & Full Stack Development", years: "2 years", sem: "4 semesters", category: "Computing", level: "PG", hot: true },
  // Engineering
  { name: "B.Tech — CSE", full: "B.Tech in Computer Science & Engineering", years: "4 years", sem: "8 semesters", category: "Engineering", level: "UG", hot: false },
  { name: "B.Tech — AI & ML", full: "B.Tech in Artificial Intelligence & Machine Learning", years: "4 years", sem: "8 semesters", category: "Engineering", level: "UG", hot: true },
  { name: "B.Tech — AI & Data Science", full: "B.Tech in Artificial Intelligence & Data Science", years: "4 years", sem: "8 semesters", category: "Engineering", level: "UG", hot: true },
  { name: "B.Tech — IT", full: "B.Tech in Information Technology", years: "4 years", sem: "8 semesters", category: "Engineering", level: "UG", hot: false },
  { name: "B.Tech — Big Data Analytics", full: "B.Tech in CSE (Big Data Analytics)", years: "4 years", sem: "8 semesters", category: "Engineering", level: "UG", hot: false },
  // Science & Law
  { name: "B.Sc — Forensic Science", full: "B.Sc (Hons) / iMSc in Forensic Science & Technology", years: "3–5 years", sem: "6–10 semesters", category: "Science & Law", level: "UG/PG", hot: false },
  { name: "B.Sc — Quantum Computing", full: "B.Sc (Hons) / iMSc in Quantum Computing", years: "3–5 years", sem: "6–10 semesters", category: "Science & Law", level: "UG/PG", hot: true },
  { name: "M.Sc — Cyber Security", full: "M.Sc in Cyber Security & Digital Forensics", years: "2 years", sem: "4 semesters", category: "Science & Law", level: "PG", hot: false },
  { name: "LL.B.", full: "Bachelor of Laws", years: "3 years", sem: "6 semesters", category: "Science & Law", level: "UG", hot: false },
];

const levelColors: Record<string, string> = {
  UG: "bg-blue-100 text-blue-700",
  PG: "bg-violet-100 text-violet-700",
  Integrated: "bg-emerald-100 text-emerald-700",
  "UG/PG": "bg-amber-100 text-amber-700",
};

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="py-28 bg-gray-50 grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-blue-800 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full border border-blue-100 mb-4"
          >
            Academic Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Outfit'] text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            50+ Programs,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Infinite Futures
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            From undergraduate to doctoral, our programmes evolve with industry demand — enabling seamless employment or self-employment.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.replace(/\s/g, "-").toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-900 text-white shadow-lg shadow-blue-900/30"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-900 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Program cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((prog) => (
              <div
                key={prog.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover group relative overflow-hidden"
              >
                {prog.hot && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    🔥 Popular
                  </span>
                )}
                <div className="mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelColors[prog.level]}`}>
                    {prog.level}
                  </span>
                </div>
                <h4 className="font-['Outfit'] font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-900 transition-colors">
                  {prog.name}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{prog.full}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {prog.years}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {prog.sem}
                  </span>
                </div>
                <a
                  href="#cta"
                  className="flex items-center gap-1 text-blue-800 font-semibold text-sm hover:gap-2 transition-all group-hover:text-amber-600"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a href="#cta" className="btn-primary inline-flex" id="programs-apply-btn">
            Apply for Admission
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

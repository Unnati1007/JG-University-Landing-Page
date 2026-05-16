"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, BookOpen, Award } from "lucide-react";

const floatingBadges = [
  { icon: Users, label: "10,000+ Students", color: "from-violet-500 to-purple-600", delay: 0 },
  { icon: BookOpen, label: "50+ Programs", color: "from-amber-500 to-orange-600", delay: 0.3 },
  { icon: Award, label: "UGC Approved", color: "from-emerald-500 to-teal-600", delay: 0.6 },
];

const stats = [
  { value: "10K+", label: "Students Enrolled" },
  { value: "50+", label: "Programs Offered" },
  { value: "200+", label: "Industry Partners" },
  { value: "95%", label: "Placement Rate" },
];

export default function Hero() {
  return (
    <section id="home" className="hero-bg min-h-screen flex flex-col justify-center relative">
      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-blob pointer-events-none"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-blob pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">
                #1 New-Age University in Gujarat
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Outfit'] text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
            >
              Shape Your
              <br />
              <span className="gradient-text">Future with</span>
              <br />
              JG University
            </motion.h1>

            {/* Sub headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              A UGC-approved, tech-driven university empowering students with
              future-proof skills, immersive learning, and industry-embedded
              education since 1965.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a
                id="hero-apply-btn"
                href="#cta"
                className="btn-primary text-base relative z-10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Programs <ArrowRight className="w-5 h-5" />
                </span>
              </a>
              <a
                id="hero-tour-btn"
                href="#about"
                className="btn-outline text-base"
              >
                <Play className="w-4 h-4 fill-white" />
                Take a Tour
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="stat-number text-3xl text-white">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Visual card stack */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative w-80 h-96"
              style={{ perspective: "1000px" }}
            >
              {/* Background card */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-violet-600 to-blue-600 rounded-3xl"
                style={{ transform: "rotate(6deg) scale(0.95)", transformOrigin: "center" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl"
                style={{ transform: "rotate(-4deg) scale(0.97)", transformOrigin: "center" }}
              />
              {/* Foreground card */}
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />
                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-4 border border-amber-400/30">
                      <BookOpen className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="text-white font-bold text-xl font-['Outfit'] mb-2">
                      50+ Future-Ready
                    </h3>
                    <p className="text-white/60 text-sm">
                      Programmes designed with industry experts for tomorrow's world
                    </p>
                  </div>
                  <div className="space-y-3">
                    {["B.Tech — AI & ML", "MBA — Tech Management", "MCA — Full Stack Dev", "B.Sc — Quantum Computing"].map((prog) => (
                      <div key={prog} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{prog}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#programs"
                    className="flex items-center gap-2 text-amber-400 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    View All Programs <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            {floatingBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + badge.delay }}
                className="absolute animate-float glass rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{
                  top: i === 0 ? "5%" : i === 1 ? "50%" : "80%",
                  right: i === 0 ? "-8%" : undefined,
                  left: i === 1 ? "-12%" : i === 2 ? "-5%" : undefined,
                  animationDelay: `${i * 1.5}s`,
                }}
              >
                <div
                  className={`w-8 h-8 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center flex-shrink-0`}
                >
                  <badge.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-semibold text-sm whitespace-nowrap">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

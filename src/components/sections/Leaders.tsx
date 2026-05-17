"use client";

import { motion, useInView, Variants } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const leaders = [
  {
    name: "M.P. Chandran",
    role: "President, JG University",
    bio: "M.P. Chandran is a postgraduate in management with more than 30 years of experience in senior and board-level positions. He is the Chairperson of the Education Task Force, Gujarat Chamber of Commerce and Industry, and Chairman of ASIA Charitable Trust (ACT).",
    message: "Knowledge is the power that no one can take away from you. The education system today needs to be experiential to help students shape their future.",
    image: "/mp_chandran_v2.png",
    stats: ["30+ Years Exp", "Chairman @ ACT", "Edu Task Force Chair"],
    buttonText: "View President's Message",
    accentClass: "border-l-4 border-red-600",
  },
  {
    name: "Dr. CA Achyut Dani",
    role: "Director-General & Provost",
    bio: "Dr. CA Achyut Dani has 21+ years of expertise in academics and industry. He holds a doctorate in management and commerce and has been a senior mentor at Academic Staff College.",
    message: "JG University aims to bring excellence in everything it does. Our commitment is reflected in the mentorship we provide at every stage.",
    image: "/ca_achyut_dani_v2.png",
    stats: ["21+ Years Exp", "PhD in Management", "Multiple Awards"],
    buttonText: "View DG's Message",
    accentClass: "border-l-4 border-red-600",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const staggerChildren: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function LeaderCard({ leader, idx }: { leader: typeof leaders[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      custom={idx}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative group h-full"
    >

      <div className={`h-full bg-white rounded-[1.5rem] md:rounded-[2rem] ${leader.accentClass} border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-700 overflow-hidden flex flex-col md:flex-row gap-0 hover:-translate-y-1`}>



        {/* Image column */}
        <div className="relative w-full md:w-[220px] lg:w-[260px] shrink-0 overflow-hidden">
          <div className="relative h-52 md:h-full min-h-[220px] overflow-hidden">
            <motion.div
              initial={{ scale: 1.08 }}
              animate={inView ? { scale: 1 } : { scale: 1.08 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover object-top"
              />
            </motion.div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Stats pinned at bottom of image */}
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="absolute bottom-0 left-0 right-0 p-3 flex flex-wrap gap-x-3 gap-y-1"
            >
              {leader.stats.map((stat, sIdx) => (
                <motion.span
                  key={sIdx}
                  variants={fadeUp}
                  className="text-[9px] font-black uppercase tracking-wider text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full"
                >
                  {stat}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Content column */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col p-5 md:p-8 flex-1"
        >
          {/* Name + role */}
          <motion.div variants={fadeUp} className="mb-4">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-tight">
              {leader.name}
            </h3>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-red-600 mt-1">
              {leader.role}
            </p>
          </motion.div>

          {/* Quote block */}
          <motion.div
            variants={fadeUp}
            className="relative mb-5 pl-4 border-l-2 border-gray-200"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.2 }}
              style={{ originY: 0 }}
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-500"
            />
            <Quote className="w-6 h-6 text-gray-200 mb-1" />
            <p className="text-gray-500 italic leading-relaxed text-xs md:text-sm">
              "{leader.message}"
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 flex-grow"
          >
            {leader.bio}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp}>
            <motion.button
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center gap-2 text-gray-900 font-black uppercase tracking-widest text-[10px] md:text-xs group/btn border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors"
            >
              {leader.buttonText}
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Leaders() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle noise/gradient accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-50/60 rounded-full blur-[100px] -mr-16 -mt-16 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-50/40 rounded-full blur-[90px] -ml-16 -mb-16 pointer-events-none" />

      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-red-50 border border-red-100 shadow-sm mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-red-700">Executive Leadership</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-heading font-[900] text-[#1e1b4b] leading-[1.1] tracking-tight"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-800 px-2">
              Leaders
            </span>
          </motion.h2>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0.5 }}
            className="h-[2px] w-20 bg-gradient-to-r from-red-500 to-red-700 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-stretch">

          {leaders.map((leader, idx) => (
            <LeaderCard key={idx} leader={leader} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

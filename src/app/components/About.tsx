"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Lightbulb, Globe, FlaskConical, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Interdisciplinary Approach",
    desc: "Students from diverse backgrounds connect, ideate and solve real-world problems using different conceptual frameworks.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
  },
  {
    icon: FlaskConical,
    title: "Immersive & Experiential Learning",
    desc: "Exposure to live industry projects develops hands-on expertise that goes far beyond traditional classroom theory.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: Lightbulb,
    title: "Whole Brain Learning Pedagogy",
    desc: "A pedagogy that empowers learners to acquire future-proof technical skills while moulding them into creative thinkers.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Globe,
    title: "Global Collaborations",
    desc: "Partnerships with foreign universities for curriculum co-design, student exchange and global certifications.",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    icon: Cpu,
    title: "Tech-Driven Infrastructure",
    desc: "IIoT Labs, R&D incubation centers, tech-enabled library, and a fully Wi-Fi enabled campus for 24×7 access.",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
  },
  {
    icon: Eye,
    title: "NEP 2020 & UGC Compliant",
    desc: "All programmes aligned with National Education Policy 2020 ensuring quality, flexibility, and global recognition.",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-50 rounded-full blur-3xl opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-2 rounded-full border border-amber-100 mb-4"
          >
            About JG University
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Outfit'] text-4xl md:text-5xl font-black text-gray-900 mb-6"
          >
            Education Beyond{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1a1f6e, #2d35a8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the Textbook
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            JG University is a New Age Tech-Driven University sponsored by the ASIA Charitable Trust — 
            in education since <strong className="text-blue-900">1965</strong>, managing 17 colleges and 3 schools. 
            We empower students to explore beyond boundaries and gain wisdom that shapes their future.
          </motion.p>
        </div>

        {/* Two column text + image strip */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-['Outfit'] text-3xl font-bold text-gray-900 mb-6 leading-tight">
              A Vision of{" "}
              <span className="text-blue-800">Excellence</span> in Everything We Do
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              JG University aims to bring excellence in everything that it does — for students, faculty, staff, 
              and all stakeholders. We stand by the idea of <em>knowledge beyond books</em> and provide students 
              real-life experience with an industry-relevant curriculum.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The University strikes an equilibrium between state-of-the-art infrastructure and high-quality education 
              recognised globally, with a focused and dedicated environment that ensures a successful future for every student.
            </p>
            <div className="flex flex-wrap gap-3">
              {["UGC Approved", "NEP 2020 Compliant", "ASIA Trust Backed", "17+ Colleges Network"].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-900 text-white text-xs font-semibold px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual quote cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-4"
          >
            {[
              {
                name: "M.P Chandran",
                title: "President, JG University",
                quote:
                  "Excellence is a matter of choice. If we choose to be excellent, we will be — for sure.",
                gradient: "from-blue-900 to-blue-700",
              },
              {
                name: "Dr. CA Achyut Dani",
                title: "Director-General & Provost",
                quote:
                  "Education must focus on nurturing the youth with capabilities to become eminent practitioners.",
                gradient: "from-amber-500 to-orange-500",
              },
            ].map((card) => (
              <div
                key={card.name}
                className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-6 text-white`}
              >
                <p className="text-white/90 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{card.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                    {card.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{card.name}</p>
                    <p className="text-white/70 text-xs">{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="card-hover group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-['Outfit'] font-bold text-gray-900 text-lg mb-3">
                {pillar.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

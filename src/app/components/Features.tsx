"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Monitor, Network, Shield, Bot, Layers3, Smartphone, Globe2 } from "lucide-react";

const certPrograms = [
  { icon: Bot, name: "Data Science, AI & ML", desc: "Master machine learning, deep learning, and AI frameworks used by top tech companies.", color: "from-violet-500 to-purple-600" },
  { icon: Monitor, name: "Full Stack Architect", desc: "Build scalable web apps using modern frontend and backend technologies end-to-end.", color: "from-blue-500 to-cyan-500" },
  { icon: Shield, name: "Cyber Security", desc: "Learn ethical hacking, digital forensics, and cybersecurity defense strategies.", color: "from-emerald-500 to-teal-500" },
  { icon: Layers3, name: "Blockchain", desc: "Understand smart contracts, DeFi, and build decentralized applications on Web3.", color: "from-amber-500 to-orange-500" },
  { icon: Globe2, name: "Metaverse", desc: "Dive into immersive 3D worlds, AR/VR development, and spatial computing.", color: "from-pink-500 to-rose-500" },
  { icon: Smartphone, name: "Mobile Applications", desc: "Develop cross-platform mobile apps for iOS and Android using React Native & Flutter.", color: "from-indigo-500 to-blue-600" },
  { icon: Network, name: "Industrial IoT", desc: "Connect physical systems to the cloud using sensors, edge computing, and IIoT protocols.", color: "from-teal-500 to-green-500" },
  { icon: Zap, name: "Robotic Process Automation", desc: "Automate business workflows using RPA tools like UiPath, Blue Prism, and Automation Anywhere.", color: "from-yellow-500 to-amber-500" },
];

const campusFeatures = [
  { title: "IIoT Lab", icon: "🔬", desc: "State-of-the-art Industrial IoT laboratory for hands-on hardware and software experiments." },
  { title: "R&D + Incubation", icon: "🚀", desc: "A dedicated incubation center to nurture student startups and research projects." },
  { title: "Tech-Enabled Library", icon: "📚", desc: "Smart library with digital resources, e-journals, and AI-powered research tools." },
  { title: "Wi-Fi Campus", icon: "📡", desc: "High-speed internet access across the entire campus, 24×7 for all students and faculty." },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* ─── Certificate Programs ─── */}
      <section id="certificate" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold text-violet-700 uppercase tracking-widest bg-violet-50 px-4 py-2 rounded-full border border-violet-100 mb-4"
            >
              Certificate Programs
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Outfit'] text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              Emerging Tech{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Certifications
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-lg max-w-2xl mx-auto"
            >
              Industry-aligned short certificate programmes designed to sharpen your skills in the most in-demand domains of the future.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certPrograms.map((prog, i) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover group relative rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                {/* Gradient top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${prog.color}`} />
                <div className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <prog.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-['Outfit'] font-bold text-gray-900 text-base mb-2 group-hover:text-blue-900 transition-colors">
                    {prog.name}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{prog.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Campus Features ─── */}
      <section id="campus" className="py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0e3d 0%, #1a1f6e 50%, #1e40af 100%)" }}
      >
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-4 py-2 rounded-full border border-amber-400/20 mb-4"
            >
              World-Class Campus
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Outfit'] text-4xl md:text-5xl font-black text-white mb-4"
            >
              Infrastructure Built for{" "}
              <span className="gradient-text">Tomorrow</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 text-lg max-w-2xl mx-auto"
            >
              State-of-the-art facilities that create an environment where curiosity thrives and innovation flourishes.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-7 card-hover group text-center"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {feat.icon}
                </div>
                <h4 className="font-['Outfit'] font-bold text-white text-lg mb-3">
                  {feat.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Salient features strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 glass rounded-2xl p-8"
          >
            <h3 className="font-['Outfit'] text-xl font-bold text-white mb-6 text-center">
              JG University Salient Features
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "NEP 2020 & UGC Compliant Programmes",
                "Faculty with Industry & Academic Expertise",
                "Foreign University Collaborations",
                "Hands-on with Emerging Technologies",
                "Full Pay On-The-Job Training",
                "Cross-Cultural Internships",
                "Course-Embedded Capstone Projects",
                "24×7 Campus Accessibility",
              ].map((feat) => (
                <div key={feat} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                  <span className="text-white/75 text-sm leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

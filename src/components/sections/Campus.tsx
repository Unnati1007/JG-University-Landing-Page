"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronsRight, Wifi, FlaskConical, BookOpen, Cpu, Dumbbell } from "lucide-react";

const campusHighlights = [
  {
    num: "01",
    title: "IIoT LAB",
    desc: "State-of-the-art Industrial IoT lab for advanced technical research and hardware integration.",
    icon: Cpu,
    accent: "#38bdf8",
    bg: "from-[#0c1445] via-[#0f1e5e] to-[#1a237e]",
    tag: "Technology",
  },
  {
    num: "02",
    title: "R&D + INCUBATION",
    desc: "Dedicated space for innovation, advanced research, and tech startup incubation.",
    icon: FlaskConical,
    accent: "#a78bfa",
    bg: "from-[#1a0533] via-[#2d1165] to-[#3b0764]",
    tag: "Innovation",
  },
  {
    num: "03",
    title: "TECH LIBRARY",
    desc: "A modern digital library with 24/7 access to global resources and research papers.",
    icon: BookOpen,
    accent: "#34d399",
    bg: "from-[#022c22] via-[#064e3b] to-[#065f46]",
    tag: "Knowledge",
  },
  {
    num: "04",
    title: "SMART CAMPUS",
    desc: "Fully Wi-Fi enabled campus with seamless digital integration and modern amenities.",
    icon: Wifi,
    accent: "#FDE047",
    bg: "from-[#0f172a] via-[#1e1b4b] to-[#312e81]",
    tag: "Smart Living",
  },
  {
    num: "05",
    title: "SPORTS COMPLEX",
    desc: "World-class athletic facilities promoting physical well-being and team building.",
    icon: Dumbbell,
    accent: "#fb923c",
    bg: "from-[#431407] via-[#7c2d12] to-[#9a3412]",
    tag: "Athletics",
  },
];

// Animated counter component
function AnimatedNumber({ value }: { value: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => String(Math.floor(v)).padStart(2, "0"));

  useEffect(() => {
    const num = parseInt(value);
    const controls = animate(count, num, { duration: 0.6, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Campus() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (idx: number) => {
    if (isAnimating || idx === activeIdx) return;
    setIsAnimating(true);
    setActiveIdx(idx);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
    }
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prev = () => goTo(Math.max(activeIdx - 1, 0));
  const next = () => goTo(Math.min(activeIdx + 1, campusHighlights.length - 1));

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIdx]);

  const current = campusHighlights[activeIdx];

  return (
    <section id="campus" className="pt-16 pb-10 md:pt-20 md:pb-12 bg-[#f8faff] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-red-50 border border-red-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-700">Infrastructure</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-[900] text-[#1e1b4b] uppercase tracking-tight mb-4"
          >
            The <span className="text-red-600">Campus</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Experience our tech-driven campus designed to foster innovation, research, and collaborative learning.
          </motion.p>
        </div>

        {/* iPad Mockup */}
        <div className="flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[900px] aspect-[4/3] md:aspect-[16/10] bg-gray-900 rounded-[2.5rem] p-[16px] shadow-[0_30px_80px_-15px_rgba(30,27,75,0.4)] relative"
          >
            {/* Pencil / top bar */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-48 md:w-64 h-3 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-t-lg shadow-sm z-0" />
            <div className="absolute top-1/2 -left-2 md:-left-3 -translate-y-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full hidden md:block" />
            <div className="absolute top-10 -right-1.5 w-1.5 h-12 bg-gray-800 rounded-r-md" />
            <div className="absolute top-24 -right-1.5 w-1.5 h-12 bg-gray-800 rounded-r-md" />

            {/* Screen */}
            <div className="w-full h-full bg-[#0f172a] rounded-[1.8rem] overflow-hidden relative z-10">

              {/* Scrollable content strip (hidden, controlled by buttons) */}
              <div
                ref={scrollContainerRef}
                className="w-full h-full flex overflow-x-auto snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {campusHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className={`w-full h-full shrink-0 snap-center bg-gradient-to-br ${item.bg} flex flex-col relative group overflow-hidden`}
                  >
                    {/* Animated BG orbs */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"
                      style={{ background: item.accent }}
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.09, 0.04] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"
                      style={{ background: item.accent }}
                    />

                    {/* Floating icon (large ghost) */}
                    <motion.div
                      animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute right-8 bottom-8 md:right-16 md:bottom-10 opacity-10 pointer-events-none"
                    >
                      <item.icon size={120} color={item.accent} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex flex-col justify-center h-full p-8 md:p-14 relative z-10">
                      {/* Num + line */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl md:text-6xl font-black text-white/80 tabular-nums">
                          {idx === activeIdx ? <AnimatedNumber value={item.num} /> : item.num}
                        </span>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          style={{ originX: 0, background: `linear-gradient(to right, ${item.accent}, transparent)` }}
                          className="h-0.5 flex-grow rounded-full"
                        />
                        <span
                          className="text-[9px] font-black uppercase tracking-[0.25em] px-2 py-1 rounded border opacity-70"
                          style={{ color: item.accent, borderColor: item.accent + "50" }}
                        >
                          {item.tag}
                        </span>
                      </div>

                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-2xl md:text-5xl font-black leading-tight mb-4 uppercase tracking-wider"
                        style={{ color: item.accent }}
                      >
                        {item.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-blue-100/80 text-sm md:text-lg leading-relaxed mb-8 font-light max-w-lg"
                      >
                        {item.desc}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="inline-block"
                      >
                        <span
                          className="text-xs font-bold uppercase tracking-widest border-b-2 pb-1 cursor-pointer hover:opacity-100 opacity-80 transition-opacity"
                          style={{ color: item.accent, borderColor: item.accent }}
                        >
                          Explore Facility
                        </span>
                      </motion.div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-30"
                      style={{ color: item.accent }}
                    >
                      <ChevronsRight size={40} />
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Nav Controls overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                {campusHighlights.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: activeIdx === idx ? "28px" : "8px",
                      height: "8px",
                      background: activeIdx === idx ? item.accent : "rgba(255,255,255,0.3)",
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <button
                onClick={prev}
                disabled={activeIdx === 0}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-20 transition-all backdrop-blur-sm"
              >
                <ChevronsRight size={18} className="rotate-180" />
              </button>
              <button
                onClick={next}
                disabled={activeIdx === campusHighlights.length - 1}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-20 transition-all backdrop-blur-sm"
              >
                <ChevronsRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          div::-webkit-scrollbar { display: none; }
        ` }} />
      </div>
    </section>
  );
}

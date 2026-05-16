"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const milestones = [
    { year: "1965", title: "Founded" },
    { year: "2010", title: "University Status" },
    { year: "2024", title: "New Age Tech Campus" },
  ];

  return (
    <section id="about" className="py-24 bg-base relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[#F59E0B] font-mono text-sm tracking-widest mb-6">
              // ABOUT US
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight text-textPrimary font-heading leading-tight">
              Knowledge Beyond Books.<br />
              <span className="text-[#4F46E5]">Experience Beyond Classrooms.</span>
            </h2>
            
            <div className="space-y-6 text-textSecondary text-lg font-body leading-relaxed mb-12">
              <p>
                At JG University, we don't just teach—we ignite curiosity and foster innovation. Our mission is to bridge the gap between traditional academia and the fast-paced demands of the modern tech-driven world.
              </p>
              <p>
                By integrating whole-brain pedagogy with industry-embedded learning, we prepare our students to not just adapt to the future, but to actively shape it. Experience a campus where theory meets practice seamlessly.
              </p>
            </div>

            {/* Horizontal Timeline */}
            <div className="mb-12 relative">
              <div className="absolute top-3 left-0 w-full h-[1px] bg-border" />
              <div className="flex justify-between relative z-10">
                {milestones.map((m, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-6 h-6 rounded-full bg-base border-4 border-[#4F46E5] mb-4 relative">
                      <div className="absolute inset-0 rounded-full bg-[#4F46E5] animate-ping opacity-50" />
                    </div>
                    <div className="text-textPrimary font-heading font-bold text-lg">{m.year}</div>
                    <div className="text-textSecondary text-xs uppercase tracking-wider font-mono mt-1 text-center max-w-[100px]">{m.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Link */}
            <a href="#more" className="group inline-flex items-center text-[#F59E0B] font-semibold text-lg transition-colors hover:text-[#4F46E5]">
              Learn More 
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>

          {/* Right: Visual Collage */}
          <div className="relative h-[600px] hidden md:block">
            {/* Taller Image */}
            <motion.div 
              style={{ y: img1Y }}
              className="absolute right-0 top-0 w-2/3 h-[450px] rounded-2xl overflow-hidden border border-border shadow-2xl z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#4F46E5]/5 mix-blend-overlay" />
            </motion.div>

            {/* Shorter Image (Overlapping) */}
            <motion.div 
              style={{ y: img2Y }}
              className="absolute left-0 bottom-10 w-[55%] h-[350px] rounded-2xl overflow-hidden border-2 border-[#F59E0B] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
                alt="Modern campus facility" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute top-20 -left-6 z-30 glass bg-surface/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-border shadow-xl flex items-center gap-3"
            >
              <div className="bg-[#10B981]/10 rounded-full p-1">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
              </div>
              <div>
                <div className="text-textPrimary font-bold text-sm">UGC Approved</div>
                <div className="text-textSecondary text-xs">Verified Institution</div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4F46E5]/10 rounded-full blur-[80px] -z-10" />
          </div>

          {/* Mobile Visual Collage (Fallback) */}
          <div className="relative h-[400px] md:hidden mt-12">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-[#F59E0B]/50">
               <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 z-30 glass bg-surface/90 px-4 py-2 rounded-xl border border-border flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span className="text-textPrimary font-bold text-xs">UGC Approved</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

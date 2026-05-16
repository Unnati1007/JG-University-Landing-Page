"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lightbulb, 
  Rocket, 
  Trophy, 
  Target 
} from "lucide-react";

const successPillars = [
  {
    title: "Interdisciplinary Approach",
    subtitle: "Connecting Diverse Minds",
    description: "Students from a wide range of backgrounds connect, ideate and solve problems with different conceptual structures and methods of understanding.",
    icon: ShieldCheck,
    color: "bg-[#d9f99d]", // Lime 200
    textColor: "text-[#365314]",
    delay: 0.1
  },
  {
    title: "Immersive & Experiential Learning",
    subtitle: "Hands-on Expertise",
    description: "Exposure to real-life projects to develop hands-on expertise through practical engagement and industry immersion.",
    icon: Lightbulb,
    color: "bg-[#bef264]", // Lime 300
    textColor: "text-[#3f6212]",
    delay: 0.3
  },
  {
    title: "Whole Brain Learning Pedagogy",
    subtitle: "Creative Thinkers",
    description: "Pedagogy that empower learners to acquire future-proof technical skills and moulds them into creative thinkers for the modern world.",
    icon: Rocket,
    color: "bg-[#a3e635]", // Lime 400
    textColor: "text-[#4d7c0f]",
    delay: 0.5
  },
  {
    title: "Faculty from Academia & Industry",
    subtitle: "Brilliant Scholars",
    description: "Inspiration by dynamic, brilliant scholars with vast academic knowledge and real-world experience across sectors.",
    icon: Trophy,
    color: "bg-[#84cc16]", // Lime 500
    textColor: "text-[#3f6212]",
    delay: 0.7
  }
];

export default function Strengths() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-[#1e1b4b] tracking-tighter mb-4"
          >
            The <span className="text-[#84cc16]">Staircase</span> of Success
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            From a solid academic foundation to global leadership, our core strengths empower your journey every step of the way.
          </p>
        </div>

        {/* Staircase Container */}
        <div className="relative min-h-[600px] flex flex-col items-start lg:flex-row lg:items-end justify-between gap-4 lg:gap-0">
          {successPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pillar.delay, duration: 0.6 }}
              className="relative w-full lg:w-[20%] group"
            >
              {/* Step Info (Top) */}
              <div className="mb-8 lg:absolute lg:bottom-full lg:left-0 lg:mb-12 w-full lg:w-[250px] transition-transform duration-300 group-hover:-translate-y-2">
                 <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${pillar.color} ${pillar.textColor}`}>
                       <pillar.icon size={20} />
                    </div>
                    <span className={`text-sm font-black uppercase tracking-widest ${pillar.textColor}`}>
                      {pillar.title}
                    </span>
                 </div>
                 <h4 className="text-xl font-bold text-[#1e1b4b] mb-2">{pillar.subtitle}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   {pillar.description}
                 </p>
              </div>

              {/* Step Visual (The Stair) */}
              <div 
                className={`w-full h-16 lg:h-32 ${pillar.color} rounded-t-xl lg:rounded-t-none border-t-4 border-white/20 shadow-lg relative overflow-hidden`}
                style={{ height: `${(idx + 1) * 60 + 40}px` }}
              >
                {/* Silhouette Effect on Hover */}
                <motion.div 
                  initial={{ opacity: 0.2, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                   <pillar.icon size={80} className={`${pillar.textColor} opacity-20`} />
                </motion.div>
                
                {/* Subtle Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Vertical Connector (Mobile only) */}
              {idx < successPillars.length - 1 && (
                <div className="lg:hidden w-1 h-8 bg-gray-100 mx-auto" />
              )}
            </motion.div>
          ))}
          
          {/* Legend */}
          <div className="hidden lg:block absolute bottom-0 right-0 p-8 text-right">
             <h5 className="text-4xl font-black text-[#1e1b4b]/10 uppercase tracking-widest leading-none">
               Progressive<br />Growth
             </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const programTypes = [
  {
    title: "Undergraduate",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    color: "bg-[#7c4dff]",
    hoverColor: "hover:bg-[#6c3de6]",
    overlayColor: "bg-[#7c4dff]/90",
    description: "Industry-aligned 3 & 4 year degree programs designed for the new-age professional.",
    courses: [
      "B.Tech - CSE (AI & ML, Cyber Security, Data Science)",
      "B.Tech - Information Technology / EC / Civil / ME",
      "BCA - Specialization in Cloud & Mobile Apps",
      "BBA - Digital Marketing / Finance / HR / IB",
      "B.Com (Hons) - Professional Accounting",
      "Integrated MBA - 5 Year Seamless PG Path"
    ]
  },
  {
    title: "Postgraduate",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    color: "bg-[#e91e63]",
    hoverColor: "hover:bg-[#d81b60]",
    overlayColor: "bg-[#e91e63]/90",
    description: "Advanced leadership and technical programs for career acceleration.",
    courses: [
      "MBA - Fintech / Business Analytics / Entrepreneurship",
      "MBA - Marketing / Finance / Operations",
      "MCA - Artificial Intelligence & Data Science",
      "M.Com - International Business / Finance",
      "M.Tech - CSE / Advanced Manufacturing"
    ]
  },
  {
    title: "Doctoral",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    color: "bg-[#b71c1c]",
    hoverColor: "hover:bg-[#a81919]",
    overlayColor: "bg-[#b71c1c]/90",
    description: "Rigorous research programs for academic excellence and innovation.",
    courses: [
      "Ph.D. in Management & Business Studies",
      "Ph.D. in Computer Science & IT",
      "Ph.D. in Commerce & Economics",
      "Ph.D. in Engineering & Technology",
      "Post-Doctoral Fellowships"
    ]
  },
  {
    title: "Professional Courses",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop",
    color: "bg-[#0288d1]",
    hoverColor: "hover:bg-[#0277bd]",
    overlayColor: "bg-[#0288d1]/90",
    description: "Short-term certifications to bridge the skill gap and boost employability.",
    courses: [
      "Certification in Digital Marketing (Google Aligned)",
      "Advanced Data Science & AI Certification",
      "Cyber Security & Ethical Hacking",
      "FinTech & Blockchain Professional",
      "Leadership & Soft Skills Excellence"
    ]
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 bg-[#f4f1ea] relative overflow-hidden">
      {/* Classroom Wall Texture */}
      <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-red-50 border border-red-100 shadow-sm mx-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-red-700">Explore Curriculum</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-[900] text-[#1e1b4b] leading-none tracking-tighter"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-800 drop-shadow-sm px-4">Programmes</span>
          </motion.h2>
        </div>

        {/* Master Blackboard Container */}
        <div className="relative p-1 md:p-8 lg:p-12">
          {/* Master Wooden Frame */}
          <div className="absolute inset-0 border-[20px] border-[#3d2b1f] rounded-[2rem] z-40 pointer-events-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(0,0,0,0.4)]" />
          
          {/* Blackboard Surface */}
          <div className="relative bg-[#1e2a1e] rounded-[1rem] overflow-hidden shadow-2xl min-h-[600px] p-8 md:p-12">
            {/* Real Blackboard Texture & Dust */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/blackboard.png')]" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            
            {/* Floating Chalk Dust Particles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dust.png')]" />

            {/* The 4 Program Boxes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 h-full">
              {programTypes.map((program, idx) => (
                <motion.div
                  key={idx}
                  initial="initial"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="group relative h-[450px] cursor-none overflow-hidden rounded-xl border-4 border-white/10 hover:border-white/30 transition-colors"
                >
                  {/* Layer 1: Photographic Cover */}
                  <div className="absolute inset-0 z-10">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-10 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-[#1e2a1e]/60 group-hover:bg-transparent transition-colors" />
                    
                    {/* Chalk Title Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                       <motion.div 
                         variants={{ hover: { scale: 0.8, opacity: 0 } }}
                         className={`w-16 h-16 rounded-full ${program.color} mb-6 flex items-center justify-center shadow-2xl border-4 border-white/40`}
                       >
                          <span className="text-white font-black text-3xl">{program.title[0]}</span>
                       </motion.div>
                       <motion.h3 
                         variants={{ hover: { y: -20, opacity: 0 } }}
                         className="text-2xl font-black text-white font-mono uppercase tracking-tighter leading-none"
                       >
                         {program.title}
                       </motion.h3>
                       <motion.p 
                         variants={{ hover: { opacity: 0 } }}
                         className="mt-4 text-white/40 font-mono text-[8px] uppercase tracking-[0.4em]"
                       >
                         Wipe to Reveal
                       </motion.p>
                    </div>
                  </div>

                  {/* Layer 2: The Course List Reveal (Horizontal Erase) */}
                  <motion.div
                    variants={{
                      initial: { clipPath: "inset(0 100% 0 0)" },
                      hover: { clipPath: "inset(0 0 0 0)" }
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white z-20 p-8 flex flex-col"
                  >
                     <div className="mb-6 pb-4 border-b-2 border-dashed border-gray-200">
                       <h4 className="text-xl font-black text-gray-900 tracking-tight italic">
                         {program.title}
                       </h4>
                       <p className="text-[10px] text-gray-400 font-medium mt-1 uppercase tracking-widest">
                         {program.description}
                       </p>
                     </div>

                     <ul className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                       {program.courses.map((course, cIdx) => (
                         <motion.li 
                           key={cIdx} 
                           variants={{
                             initial: { x: -20, opacity: 0 },
                             hover: { x: 0, opacity: 1 }
                           }}
                           transition={{ delay: 0.3 + cIdx * 0.05 }}
                           className="flex items-start gap-2"
                         >
                           <div className="w-1.5 h-1.5 rounded-full bg-[#c0392b] mt-1.5 shrink-0" />
                           <span className="text-gray-600 text-[11px] font-bold leading-tight">
                             {course}
                           </span>
                         </motion.li>
                       ))}
                     </ul>

                     <div className="mt-auto pt-4">
                        <button className="w-full py-3 bg-[#c0392b] text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-[#1e1b4b] transition-all shadow-md active:scale-95">
                          View Details
                        </button>
                     </div>
                  </motion.div>

                  {/* The Erase Edge (Glowing Vertical Line) */}
                  <motion.div
                    variants={{
                      initial: { left: "-10%" },
                      hover: { left: "100%" }
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-y-0 w-24 z-30 pointer-events-none bg-gradient-to-r from-transparent via-white/80 to-transparent"
                  />
                </motion.div>
              ))}
            </div>

            {/* Chalk Ledge / Tray at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#2d1e14] z-50 flex items-center justify-center gap-12 border-t border-black/20">
               <div className="flex gap-2">
                 <div className="w-8 h-2 bg-white rounded-full rotate-12 -translate-y-1 shadow-sm" />
                 <div className="w-10 h-2 bg-white/80 rounded-full -rotate-6 translate-y-1 shadow-sm" />
               </div>
               <div className="w-16 h-6 bg-[#555] rounded-sm border border-white/10 shadow-md" />
               <div className="flex gap-2">
                 <div className="w-6 h-2 bg-[#F59E0B]/40 rounded-full rotate-45 shadow-sm" />
                 <div className="w-8 h-2 bg-white rounded-full -rotate-12 shadow-sm" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

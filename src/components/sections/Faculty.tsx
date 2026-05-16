"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const facultyMembers = [
  {
    name: "Dr. Vaibhav Shah",
    role: "Registrar (I/c) & Director (I/c) - School of Management",
    dept: "Management",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400"
  },
  {
    name: "Dr. Namika Patel",
    role: "Professor - School of Management",
    dept: "Management",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400"
  },
  {
    name: "Dr. S Pushpalatha",
    role: "Professor - School of Computing",
    dept: "Computing",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400"
  },
  {
    name: "CA CPA Harshil Trivedi",
    role: "Professor - School of Commerce",
    dept: "Commerce",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400"
  },
  {
    name: "Dr. Mona Shah",
    role: "Professor - School of Computing",
    dept: "Computing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400"
  },
  {
    name: "Dr. Hitesh Harwani",
    role: "Professor - School of Management",
    dept: "Management",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
  }
];

export default function Faculty() {
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
            <span className="text-xs font-black uppercase tracking-[0.3em] text-red-700">Expert Mentors</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-heading font-[900] text-[#1e1b4b] leading-tight"
          >
            Eminent <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 px-2">Faculty</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={faculty.image} 
                  alt={faculty.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-white/20">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1e1b4b]">
                    {faculty.dept}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-black text-[#1e1b4b] mb-2 tracking-tight group-hover:text-red-600 transition-colors">
                  {faculty.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 h-10 overflow-hidden">
                  {faculty.role}
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap size={16} className="text-red-600" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Expertise</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award size={16} className="text-red-600" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Mentorship</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

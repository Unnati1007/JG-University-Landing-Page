"use client";

import { motion } from "framer-motion";
import { Quote, Award, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    name: "M.P. Chandran",
    role: "President, JG University",
    bio: "M.P. Chandran is a postgraduate in management with more than 30 years of experience in senior and board-level positions. He is the Chairperson of the Education Task Force, Gujarat Chamber of Commerce and Industry, and Chairman of ASIA Charitable Trust (ACT).",
    message: "Knowledge is the power that no one can take away from you. The education system today needs to be experiential to help students shape their future.",
    image: "/mp_chandran.png",
    stats: ["30+ Years Exp", "Chairman @ ACT", "Edu Task Force Chair"],
    buttonText: "View President's Message"
  },
  {
    name: "Dr. CA Achyut Dani",
    role: "Director-General & Provost",
    bio: "Dr. CA Achyut Dani has 21+ years of expertise in academics and industry. He holds a doctorate in management and commerce. He has been a fellow member of the Committee for Review of Education and Training (CRET) and a senior mentor at Academic Staff College.",
    message: "JG University aims to bring excellence in everything it does. Our commitment is reflected in the mentorship we provide at every stage.",
    image: "/ca_achyut_dani.png",
    stats: ["21+ Years Exp", "PhD in Management", "Multiple Awards"],
    buttonText: "View DG's Message"
  }
];

export default function Leaders() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50/50 rounded-full blur-[120px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50/50 rounded-full blur-[100px] -ml-20 -mb-20" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-red-50 border border-red-100 shadow-sm mx-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-red-700">Executive Leadership</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-heading font-[900] text-[#1e1b4b] leading-[1.1] tracking-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-800 drop-shadow-sm px-4">Leaders</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative group h-full"
            >
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 group-hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row gap-10 h-full overflow-hidden relative">
                
                {/* Visual Accent */}
                <div className={`absolute top-0 left-0 w-2 h-full ${idx === 0 ? 'bg-red-600' : 'bg-indigo-600'}`} />

                {/* Left: Image & Stats */}
                <div className="w-full md:w-2/5 flex flex-col gap-6">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-gray-50">
                    <Image 
                      src={leader.image} 
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="space-y-3">
                    {leader.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                         {stat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-3/5 flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-3xl font-black text-[#1e1b4b] mb-1 tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-red-600 font-bold uppercase tracking-widest text-xs">
                      {leader.role}
                    </p>
                  </div>

                  <div className="relative mb-8 p-6 bg-gray-50 rounded-2xl border-l-4 border-red-600">
                    <Quote className="absolute -top-3 -right-3 w-10 h-10 text-red-600/10" />
                    <p className="text-gray-600 italic leading-relaxed text-sm relative z-10">
                      "{leader.message}"
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {leader.bio}
                  </p>

                  <button className="flex items-center gap-2 text-[#1e1b4b] font-black uppercase tracking-widest text-xs group/btn">
                    {leader.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

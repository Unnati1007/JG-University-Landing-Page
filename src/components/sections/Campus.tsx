"use client";

import { motion } from "framer-motion";
import { Cpu, FlaskConical, Library, Wifi } from "lucide-react";
import Image from "next/image";

const campusHighlights = [
  {
    title: "IIoT Lab",
    desc: "State-of-the-art Industrial IoT lab for advanced technical research.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
  },
  {
    title: "R&D + Incubation",
    desc: "Dedicated space for innovation, research, and startup incubation.",
    icon: FlaskConical,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800"
  },
  {
    title: "Tech-enabled Library",
    desc: "A modern digital library with 24/7 access to global resources.",
    icon: Library,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800"
  },
  {
    title: "Smart Campus",
    desc: "Fully Wi-Fi enabled campus with seamless digital integration.",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1523050335456-c6f44b296b8a?q=80&w=800"
  }
];

export default function Campus() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
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
              <span className="text-xs font-black uppercase tracking-[0.3em] text-red-700">Infrastructure</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-heading font-[900] text-[#1e1b4b] leading-tight"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 px-2">Campus</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-md font-medium leading-relaxed"
          >
            Our tech-driven campus is designed to foster innovation, research, and collaborative learning with world-class facilities.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {campusHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative h-[450px] rounded-[2.5rem] overflow-hidden group cursor-pointer"
            >
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b] via-[#1e1b4b]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

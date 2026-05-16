"use client";

import { motion } from "framer-motion";

const programTypes = [
  {
    title: "Undergraduate",
    image: "/images/undergraduate.png",
    color: "bg-[#7c4dff]", // Purple
    hoverColor: "hover:bg-[#6c3de6]",
  },
  {
    title: "Postgraduate",
    image: "/images/postgraduate.png",
    color: "bg-[#e91e63]", // Pink
    hoverColor: "hover:bg-[#d81b60]",
  },
  {
    title: "Doctoral",
    image: "/images/doctoral.png",
    color: "bg-[#b71c1c]", // Dark Red/Maroon
    hoverColor: "hover:bg-[#a81919]",
  },
  {
    title: "Certificate Courses",
    image: "/images/certificate.png",
    color: "bg-[#4fc3f7]", // Light Blue
    hoverColor: "hover:bg-[#29b6f6]",
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-[#1e1b4b]">Programmes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programTypes.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-sm">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`${program.color} ${program.hoverColor} py-4 px-6 text-center transition-colors duration-300`}>
                <h3 className="text-white text-xl font-bold tracking-tight">
                  {program.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

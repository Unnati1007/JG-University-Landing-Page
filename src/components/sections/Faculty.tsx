"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const facultyMembers = [
  {
    name: "Dr. Vaibhav Shah",
    role: "Registrar (I/c) & Director (I/c) - School of Management",
    dept: "Management",
    image: "/fac_vaibhav.png"
  },
  {
    name: "CA CPA Harshil Trivedi",
    role: "Professor - School of Commerce",
    dept: "Commerce",
    image: "/fac_harshil.png"
  },
  {
    name: "Dr. S Pushpalatha",
    role: "Professor - School of Computing",
    dept: "Computing",
    image: "/fac_pushpalatha.png"
  },
  {
    name: "Dr. Namika Patel",
    role: "Professor - School of Management",
    dept: "Management",
    image: "/fac_namika.png"
  },
  {
    name: "Prof. Jaydeepsinh Rathod",
    role: "Professor - School of Computing",
    dept: "Computing",
    image: "/fac_jaydeepsinh.png"
  },
  {
    name: "Dr. Mona Shah",
    role: "Professor - School of Computing",
    dept: "Computing",
    image: "/fac_mona.png"
  }
];

export default function Faculty() {
  return (
    <section className="py-24 bg-[#f8faff] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-gray-800 tracking-wide"
          >
            Meet Our Faculty
          </motion.h2>
          <div className="w-12 h-0.5 bg-[#FDE047] mx-auto mt-6" />
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:pb-12 max-w-5xl mx-auto">
          {facultyMembers.map((faculty, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white border-2 border-gray-900/90 rounded-md shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] hover:shadow-none hover:-translate-y-1 hover:translate-x-1 flex flex-col group transition-all max-w-[230px] w-full mx-auto ${
                idx % 3 === 1 ? 'lg:translate-y-12' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-[#eef2f6] overflow-hidden rounded-t-md">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text & Socials Container */}
              <div className="p-5 text-center bg-white z-10 relative rounded-b-md">
                <h3 className="text-[14px] font-bold text-gray-800 mb-3 line-clamp-1">
                  {faculty.name}
                </h3>
                
                <div className="flex items-center justify-center gap-3 text-slate-400">
                  <Facebook size={14} strokeWidth={2.5} className="hover:text-blue-600 transition-colors cursor-pointer" />
                  <Twitter size={14} strokeWidth={2.5} className="hover:text-blue-400 transition-colors cursor-pointer" />
                  <Linkedin size={14} strokeWidth={2.5} className="hover:text-blue-800 transition-colors cursor-pointer" />
                  <Youtube size={14} strokeWidth={2.5} className="hover:text-red-600 transition-colors cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

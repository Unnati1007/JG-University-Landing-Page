"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";

const campusHighlights = [
  {
    num: "01",
    title: "IIoT LAB",
    desc: "State-of-the-art Industrial IoT lab for advanced technical research and hardware integration."
  },
  {
    num: "02",
    title: "R&D + INCUBATION",
    desc: "Dedicated space for innovation, advanced research, and tech startup incubation."
  },
  {
    num: "03",
    title: "TECH LIBRARY",
    desc: "A modern digital library with 24/7 access to global resources and research papers."
  },
  {
    num: "04",
    title: "SMART CAMPUS",
    desc: "Fully Wi-Fi enabled campus with seamless digital integration and modern amenities."
  },
  {
    num: "05",
    title: "SPORTS COMPLEX",
    desc: "World-class athletic facilities promoting physical well-being and team building."
  }
];

export default function Campus() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="pt-12 pb-20 bg-[#f8faff] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Header Section */}
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
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-[900] text-[#1e1b4b] uppercase tracking-tight mb-6"
          >
            The <span className="text-red-600">Campus</span>
          </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed mb-10"
            >
              Experience our tech-driven campus designed to foster innovation, research, and collaborative learning through state-of-the-art facilities right at your fingertips.
            </motion.p>
          </div>

          {/* Right Column: The Single iPad Mockup */}
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[900px] aspect-[4/3] md:aspect-[16/10] bg-gray-900 rounded-[2.5rem] p-[16px] shadow-[0_30px_80px_-15px_rgba(30,27,75,0.4)] relative mt-8"
          >
            {/* Apple Pencil Attached to Top Edge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-48 md:w-64 h-3 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-t-lg shadow-[0_-2px_10px_rgba(0,0,0,0.1)] flex items-center justify-end px-2 z-0">
              {/* Pencil Tip Detail */}
              <div className="w-2 h-full bg-gray-300 rounded-tr-md" />
            </div>

            {/* iPad Camera Dot */}
            <div className="absolute top-1/2 -left-2 md:-left-3 -translate-y-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full hidden md:block" />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full md:hidden" />

            {/* Hardware Buttons */}
            <div className="absolute top-10 -right-1.5 w-1.5 h-12 bg-gray-800 rounded-r-md" />
            <div className="absolute top-24 -right-1.5 w-1.5 h-12 bg-gray-800 rounded-r-md" />

            {/* iPad Screen Container */}
            <div className="w-full h-full bg-[#0f172a] rounded-[1.8rem] overflow-hidden relative z-10">
              
              {/* Scrollable Screen Content */}
              <div 
                ref={scrollContainerRef}
                className="w-full h-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar relative"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {campusHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full h-full shrink-0 snap-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex flex-col md:flex-row relative group"
                  >
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

                    <div className="flex flex-col justify-center h-full p-8 md:p-16 w-full relative z-10">
                      {/* Numbering Header */}
                      <div className="flex items-center gap-4 mb-8">
                        <span className="text-5xl md:text-7xl font-black text-white/90 drop-shadow-lg">{item.num}</span>
                        <div className="h-1 bg-gradient-to-r from-white to-transparent flex-grow rounded-full" />
                      </div>

                      {/* Content */}
                      <div className="max-w-2xl">
                        <h3 className="text-3xl md:text-5xl font-black text-[#FDE047] leading-tight mb-6 uppercase tracking-wider drop-shadow-md">
                          {item.title}
                        </h3>
                        <p className="text-blue-100/90 text-base md:text-xl leading-relaxed mb-10 font-light">
                          {item.desc}
                        </p>
                        
                        {/* Read More link */}
                        <div className="inline-block">
                           <span className="text-sm font-bold uppercase tracking-widest text-white border-b-2 border-[#FDE047] pb-2 hover:text-[#FDE047] transition-colors cursor-pointer">
                             Explore Facility
                           </span>
                        </div>
                      </div>

                      {/* Bottom Right Icon */}
                      <div className="absolute bottom-12 right-12 text-[#FDE047]/40 group-hover:text-[#FDE047] transition-colors duration-500 transform group-hover:scale-110 group-hover:-translate-x-2">
                        <ChevronsRight size={48} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
        
        {/* CSS to hide scrollbar across browsers */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>
    </section>
  );
}


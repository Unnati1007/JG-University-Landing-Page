"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 1.5 seconds delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container with Flying Animation and Border */}
          <motion.div
            initial={{ opacity: 0, y: 150, scale: 0.5, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.8, rotateX: -10 }}
            transition={{ type: "spring", damping: 22, stiffness: 150 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] p-1 border-[6px] border-[#1e1b4b] shadow-[0_40px_100px_-20px_rgba(30,27,75,0.4)] overflow-hidden"
          >
            {/* Animated Binary Rain Background (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex justify-around font-mono text-xs overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-2"
                >
                  {[...Array(20)].map((_, j) => (
                    <span key={j}>{(i + j) % 2}</span>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-5 right-5 z-50 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-full transition-all border-2 border-gray-200 group"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            {/* Top Branding Section */}
            <div className="pt-10 pb-6 text-center relative z-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1], y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img 
                  src="https://jguni.in/images/logo-animation.svg" 
                  alt="JG University Brain Logo" 
                  className="w-32 h-32 mx-auto object-contain transition-transform hover:scale-110 mix-blend-multiply"
                />
              </motion.div>
              <div className="mt-4 text-lg font-black text-indigo-950 uppercase tracking-[0.25em]">
                JG University
              </div>
            </div>

            {/* Content Body */}
            <div className="px-10 pb-10 text-center relative z-10">
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block px-5 py-2 bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-lg shadow-red-600/30 border border-red-500"
              >
                Admissions Open
              </motion.div>
              
              <h2 className="text-6xl font-black mb-4 tracking-tighter leading-none italic bg-clip-text text-transparent bg-gradient-to-br from-[#1e1b4b] to-[#c0392b]">
                2026-27
              </h2>
              
              <p className="text-lg text-gray-500 font-medium mb-10 tracking-wide">
                Shape your future with <br /> <span className="text-[#1e1b4b] font-black">JG University Ahmedabad</span>
              </p>

              {/* Sleek Action Button */}
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(192,57,43,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#1e1b4b] hover:bg-[#0f172a] text-white rounded-2xl text-xl font-black tracking-widest transition-all group relative overflow-hidden border-b-4 border-[#020617]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  APPLY NOW
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
              
              <div className="mt-8 pt-5 border-t-2 border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                  UGC Approved // ASIA Charitable Trust
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

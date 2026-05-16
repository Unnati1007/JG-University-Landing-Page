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

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="relative w-full max-w-md bg-white/90 backdrop-blur-3xl rounded-[3rem] p-1 border border-white shadow-[0_40px_100px_-20px_rgba(30,27,75,0.15)] overflow-hidden"
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
              className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded-full transition-all border border-gray-200 group"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            {/* Top Branding Section */}
            <div className="pt-12 pb-8 text-center relative z-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <img 
                  src="https://jguni.in/images/jg-logo.svg" 
                  alt="JG University" 
                  className="h-14 mx-auto mb-2"
                />
              </motion.div>
              <div className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em] mb-4">
                Excellence By Choice
              </div>
            </div>

            {/* Content Body */}
            <div className="px-10 pb-12 text-center relative z-10">
              <div className="inline-block px-5 py-1.5 bg-red-600 text-white rounded-full text-[11px] font-black uppercase tracking-widest mb-8 shadow-lg shadow-red-600/20">
                Admissions Open
              </div>
              
              <h2 className="text-6xl font-black text-[#1e1b4b] mb-4 tracking-tighter leading-none italic">
                2026-27
              </h2>
              
              <p className="text-lg text-gray-500 font-medium mb-10 tracking-wide">
                Shape your future with <br /> <span className="text-[#1e1b4b] font-black">JG University Ahmedabad</span>
              </p>

              {/* Sleek Action Button */}
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(192,57,43,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#c0392b] text-white rounded-2xl text-xl font-black tracking-widest transition-all group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  APPLY NOW
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.3em]">
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

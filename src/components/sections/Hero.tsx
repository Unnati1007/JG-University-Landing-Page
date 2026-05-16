"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, GraduationCap, Search, Brain, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import CountUp from "react-countup";

import { HeroRightSide } from "./HeroRightSide";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start pt-0 -mt-20 overflow-hidden bg-base">
      {/* Animation Keyframes for SVG Scene */}
      <style>{`
        @keyframes capBounce { 0%,100%{transform:translateY(0) rotate(-5deg)} 50%{transform:translateY(-15px) rotate(5deg)} }
        @keyframes charFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes charFloat2 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-8px) rotate(2deg)} }
        @keyframes bookFly { 0%{transform:translateY(0) rotate(0deg) scale(1);opacity:.7} 30%{transform:translateY(-30px) rotate(15deg) scale(1.1);opacity:1} 60%{transform:translateY(-15px) rotate(-5deg) scale(.95);opacity:.8} 100%{transform:translateY(0) rotate(0deg) scale(1);opacity:.7} }
        @keyframes orbPulse { 0%,100%{transform:scale(1);opacity:.5} 50%{transform:scale(1.3);opacity:.8} }
        @keyframes particleDrift { 0%,100%{transform:translate(0,0);opacity:.3} 50%{transform:translate(12px,-22px);opacity:.9} }
        @keyframes sceneFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulseTravel {
          0% { left: 0%; opacity: 0; transform: scale(0.5); }
          10% { opacity: 1; transform: scale(1); }
          50% { left: 100%; opacity: 1; transform: scale(1.2); }
          90% { opacity: 1; transform: scale(1); }
          100% { left: 0%; opacity: 0; transform: scale(0.5); }
        }
        @keyframes pulseTravelDelay {
          0% { right: 0%; opacity: 0; transform: scale(0.5); }
          10% { opacity: 1; transform: scale(1); }
          50% { right: 100%; opacity: 1; transform: scale(1.2); }
          90% { opacity: 1; transform: scale(1); }
          100% { right: 0%; opacity: 0; transform: scale(0.5); }
        }
        @keyframes carTravel {
          0% { right: -20%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { right: 120%; opacity: 0; }
        }
        @keyframes carBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes wheelRotate {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
      <ParticleBackground />

      {/* Floating Car - Tech Pulse Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated Line-Art Car at Bottom with Moving Wheels & Bounce */}
        <div className="absolute bottom-0 w-28 h-14 z-10 translate-y-[2px]" style={{ animation: "carTravel 15s linear infinite" }}>
           <svg viewBox="0 0 100 60" fill="none" stroke="#4f46e5" strokeWidth="3" className="drop-shadow-[0_0_10px_rgba(79,70,229,0.8)]" style={{ animation: "carBounce 0.5s ease-in-out infinite" }}>
              <path d="M 10 40 L 10 25 L 30 25 L 45 10 L 70 10 L 85 25 L 85 40 Z" />
              {/* Rotating Wheels (Counter-clockwise for Left movement) */}
              <g style={{ animation: "wheelRotate 1s linear infinite", transformOrigin: "25px 45px" }}>
                <circle cx="25" cy="45" r="8" fill="#4f46e5" fillOpacity="0.2" />
                <line x1="17" y1="45" x2="33" y2="45" strokeWidth="1" />
                <line x1="25" y1="37" x2="25" y2="53" strokeWidth="1" />
              </g>
              <g style={{ animation: "wheelRotate 1s linear infinite", transformOrigin: "70px 45px" }}>
                <circle cx="70" cy="45" r="8" fill="#4f46e5" fillOpacity="0.2" />
                <line x1="62" y1="45" x2="78" y2="45" strokeWidth="1" />
                <line x1="70" y1="37" x2="70" y2="53" strokeWidth="1" />
              </g>
              <line x1="10" y1="40" x2="85" y2="40" />
              <line x1="30" y1="25" x2="30" y2="40" />
              <line x1="45" y1="10" x2="45" y2="25" />
              {/* Headlight on the LEFT (Forward direction) */}
              <circle cx="15" cy="30" r="4" fill="#F59E0B" className="animate-pulse" />
           </svg>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="max-w-[1400px] mr-auto px-6 lg:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side (50% approx) */}
        <div className="lg:col-span-5 pt-0 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#F59E0B]/30 text-[#F59E0B] font-mono text-xs md:text-sm mb-6 uppercase tracking-wider relative overflow-hidden"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]"></span>
            </span>
            Top Ranked Institution
          </motion.div>

          <h1 className="font-heading font-black leading-[0.95] mb-8 flex flex-col uppercase">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[45px] tracking-tight text-textPrimary"
            >
              WELCOME TO
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[65px] tracking-tighter mt-1 mb-4 flex flex-col sm:flex-row gap-2 sm:gap-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ef4444] to-[#7f1d1d]">
                JG
              </span>
              <span className="text-textPrimary">
                UNIVERSITY
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] normal-case tracking-tight text-textPrimary leading-[1.05]"
            >
              The Best University in Ahmedabad
            </motion.div>
          </h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-textSecondary leading-relaxed mb-6 max-w-lg font-body"
          >
            A New Age Tech-Driven University offering future-ready programs in Management, Computing, Law, Engineering &amp; Sciences.
          </motion.p>

          {/* Enhanced CTA Buttons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-5 pt-4 border-t border-indigo-500/10 relative"
          >
            {/* Professional Mascot 2 (Tech Professional) */}
            <div className="absolute -bottom-8 -right-12 pointer-events-none hidden md:block" style={{ animation: "charFloat2 4s infinite" }}>
               <svg viewBox="0 0 400 400" className="w-20 h-20">
                  <rect x="50" y="150" width="300" height="200" rx="40" fill="#064e3b" />
                  <circle cx="200" cy="80" r="100" fill="#fde68a" />
                  {/* Shirt Collar */}
                  <path d="M 150 150 L 200 190 L 250 150" fill="#fff" />
                  {/* Glasses */}
                  <g stroke="#1e1b4b" strokeWidth="12" fill="none">
                    <circle cx="160" cy="80" r="25" />
                    <circle cx="240" cy="80" r="25" />
                    <path d="M 185 80 L 215 80" />
                  </g>
                  {/* Laptop */}
                  <g transform="translate(180, 180)">
                    <rect x="0" y="0" width="180" height="120" rx="15" fill="#1e293b" />
                    <rect x="15" y="15" width="150" height="90" rx="10" fill="#10b981" />
                  </g>
               </svg>
            </div>
            {/* Shimmer CSS for buttons */}
            <style>{`
              @keyframes shimmerSweep {
                0% { left: -100%; }
                100% { left: 200%; }
              }
              .shimmer-btn { position: relative; overflow: hidden; }
              .shimmer-btn::after {
                content: '';
                position: absolute;
                top: 0; height: 100%; width: 50%;
                background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
                transform: skewX(-20deg);
                animation: shimmerSweep 3s infinite;
              }
            `}</style>

            {/* Apply Now - Ultra Red 3D */}
            <motion.button
              whileHover={{ scale: 1.05, y: -4, rotateX: 5, perspective: 1000 }}
              whileTap={{ scale: 0.98 }}
              className="shimmer-btn px-10 py-5 rounded-2xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] text-white font-black uppercase tracking-[0.15em] flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(239,68,68,0.5)] hover:shadow-[0_25px_50px_-12px_rgba(239,68,68,0.7)] transition-all border-b-[6px] border-[#991b1b] relative group"
            >
              <span className="text-lg">Apply Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </motion.button>

            {/* Free Psychometric Test - Golden Amber Premium */}
            <motion.button
              whileHover={{ scale: 1.05, y: -4, rotateY: -5, perspective: 1000 }}
              whileTap={{ scale: 0.98 }}
              className="shimmer-btn px-7 py-5 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#d97706] text-white font-bold flex items-center gap-4 shadow-[0_20px_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_25px_50px_-12px_rgba(245,158,11,0.7)] transition-all border-b-[6px] border-[#b45309] group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner">
                <Brain className="w-6 h-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs uppercase tracking-widest opacity-80 font-black">Free Access</span>
                <span className="text-base">Psychometric Test</span>
              </div>
            </motion.button>

            {/* Enquire Now - Deep Indigo Glass */}
            <motion.button
              whileHover={{ scale: 1.05, y: -4, perspective: 1000 }}
              whileTap={{ scale: 0.98 }}
              className="shimmer-btn px-8 py-5 rounded-2xl bg-[#1e1b4b] text-white font-bold flex items-center gap-4 shadow-[0_20px_40px_-10px_rgba(30,27,75,0.6)] hover:shadow-[0_25px_50px_-12px_rgba(30,27,75,0.8)] transition-all border-l border-t border-white/20 border-b-[6px] border-indigo-950 group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/30 backdrop-blur-sm flex items-center justify-center border border-indigo-400/30">
                <MessageSquare className="w-6 h-6 text-indigo-200 group-hover:rotate-[-10deg] transition-transform" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs uppercase tracking-widest opacity-80 font-black">Quick Help</span>
                <span className="text-base">Enquire Now</span>
              </div>
            </motion.button>
          </motion.div>
        </div>

        <div className="lg:col-span-7 relative h-full">
          <HeroRightSide />
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Default placeholder images (replace with your 4-5 photos)
// Actual University Event Screenshots
const DEFAULT_IMAGES = [
  "/images/carousel/1.png",
  "/images/carousel/2.png",
  "/images/carousel/3.png",
  "/images/carousel/4.png",
  "/images/carousel/5.png",
];

interface HeroRightSideProps {
  images?: string[]; // optional custom images
}

export function HeroRightSide({ images = DEFAULT_IMAGES }: HeroRightSideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showError, setShowError] = useState(true);
  const [isRestoring, setIsRestoring] = useState(false);
  const totalSlides = images.length;

  // Initial Boot Sequence (404 Error -> Glitch/Hang -> Carousel)
  useEffect(() => {
    // Stage 1: Error Screen
    const errorTimer = setTimeout(() => {
      setShowError(false);
      setIsRestoring(true);
      
      // Stage 2: Glitch/Hang Effect
      setTimeout(() => {
        setIsRestoring(false);
      }, 1200);
    }, 3000);

    return () => clearTimeout(errorTimer);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (totalSlides === 0 || showError || isRestoring) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides, showError, isRestoring]);

  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <>
      {/* Right Side Container – Responsive height and visible on all screens */}
      <div className="lg:col-span-7 relative h-[350px] sm:h-[500px] md:h-[600px] lg:h-[1000px] w-full flex items-center justify-center lg:items-start lg:justify-end overflow-visible mt-12 lg:mt-0">
      <div className="relative h-full w-full overflow-visible">
        {/* Glow Orbs – Even larger and more vibrant */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 1800,
            height: 1800,
            background: "rgba(79,70,229,0.25)",
            filter: "blur(240px)",
            top: "-50%",
            right: "-60%",
            animation: "orbPulse 7s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 1600,
            height: 1600,
            background: "rgba(245,158,11,0.2)",
            filter: "blur(220px)",
            top: "-20%",
            right: "-40%",
            animation: "orbPulse 9s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 1400,
            height: 1400,
            background: "rgba(236,72,153,0.15)",
            filter: "blur(200px)",
            bottom: "-30%",
            right: "-20%",
            animation: "orbPulse 11s ease-in-out infinite 1s",
          }}
        />

        {/* SVG Canvas – Focused Colossal Scale */}
        <svg
          viewBox="-500 -1500 13000 9000"
          width="100%"
          height="100%"
          preserveAspectRatio="xMaxYMid meet"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          <defs>
            <linearGradient id="monitorGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="monitorBezelGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="skin1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="skin2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id="skin3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="skin4" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#000" floodOpacity="0.6" />
            </filter>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(79,70,229,0.08)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Tech Background Grid */}
          <rect x="-1400" y="-1400" width="4600" height="3000" fill="url(#grid)" />

          {/* ========== MASSIVE MONITOR (10000x6000) – Centered Dominance ========== */}
          <g style={{ animation: "sceneFloat 12s ease-in-out infinite", filter: "url(#softShadow)" }}>
            {/* Ultra Massive Stand */}
            <rect x="4500" y="5000" width="3000" height="1000" rx="150" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="20" />
            <rect x="3500" y="6000" width="5000" height="400" rx="200" fill="#2d1b69" stroke="#4f46e5" strokeWidth="15" />
            <path d="M 5500 5000 L 5500 6000 M 6500 5000 L 6500 6000" stroke="#4f46e5" strokeWidth="30" strokeLinecap="round" />

            {/* Floating Books around Monitor */}
            <g style={{ animation: "capBounce 5s ease-in-out infinite" }}>
              <rect x="500" y="-1200" width="400" height="500" rx="40" fill="#f43f5e" transform="rotate(-15)" />
              <path d="M 600 -1000 L 800 -1000" stroke="white" strokeWidth="10" />
              <path d="M 600 -900 L 800 -900" stroke="white" strokeWidth="10" />
            </g>
            <g style={{ animation: "capBounce 6s ease-in-out infinite 1s" }}>
              <rect x="10500" y="-800" width="450" height="550" rx="45" fill="#3b82f6" transform="rotate(20)" />
              <path d="M 10600 -600 L 10850 -600" stroke="white" strokeWidth="12" />
              <path d="M 10600 -500 L 10850 -500" stroke="white" strokeWidth="12" />
            </g>

            {/* Outer Bezel with Neon Border - 10000px width */}
            <rect x="1000" y="-1000" width="10000" height="6000" rx="400" fill="url(#monitorGrad)" stroke="url(#monitorBezelGrad)" strokeWidth="100" filter="url(#neonGlow)" />
            {/* Inner Bezel Detail */}
            <rect x="1150" y="-850" width="9700" height="5700" rx="350" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="20" />

            {/* Screen Area – Carousel inside foreignObject */}
            <foreignObject x="1300" y="-700" width="9400" height="5400">
              <div className="w-full h-full relative overflow-hidden rounded-[2rem] bg-black border border-white/10">
                {showError ? (
                  /* Massive Cinematic 404 Animation */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-black relative">
                    <div className="absolute inset-0 bg-scanline pointer-events-none opacity-30" />
                    
                    <div className="relative z-10 text-center scale-[1.8] md:scale-[3]">
                      <div className="text-xl font-mono text-blue-500 mb-4 tracking-[1em] animate-pulse">
                        DESIGNING THE FUTURE
                      </div>
                      <h3 className="text-[150px] md:text-[250px] font-black text-white tracking-tighter animate-glitch drop-shadow-[0_0_100px_rgba(255,255,255,0.4)]">
                        404
                      </h3>
                      <div className="text-red-600 font-black text-5xl mb-12 tracking-widest italic animate-bounce">
                        ERROR: FUTURE NOT FOUND_
                      </div>
                      
                      <div className="w-[85%] max-w-[2000px] h-12 bg-gray-900 rounded-full mx-auto overflow-hidden border-2 border-white/20 p-1">
                        <motion.div 
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3, ease: "linear" }}
                          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-full shadow-[0_0_30px_rgba(79,70,229,0.8)]"
                        />
                      </div>
                      
                      <div className="mt-8 flex justify-center gap-8 text-xl font-mono text-gray-500 tracking-widest uppercase">
                        <span className="animate-pulse">CREATIVE MODE: ACTIVE</span>
                        <span className="opacity-50">|</span>
                        <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>LOADING ASSETS...</span>
                      </div>
                    </div>

                    {/* Matrix-style Rain Overlay - Client side only to avoid hydration mismatch */}
                    <div className="absolute inset-0 opacity-10 font-mono text-5xl text-blue-500 pointer-events-none overflow-hidden flex justify-around">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="animate-bounce" 
                          style={{ animationDuration: `${2 + (i * 0.1) % 2}s` }}
                        >
                          {Array.from({ length: 30 }).map((_, j) => (
                            <div key={j}>{(i + j) % 2}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : isRestoring ? (
                  /* Glitchy "Hang" Restoration Screen */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-600/5 animate-glitch" />
                    <div className="relative z-10 text-center animate-pulse">
                      <div className="text-[200px] font-black text-white tracking-[0.5em] uppercase blur-[2px]">
                        RESTORING
                      </div>
                      <div className="text-6xl font-mono text-blue-400 mt-10 tracking-[1em] animate-glitch">
                        SYNCHRONIZING UNIVERSITY DATA_
                      </div>
                    </div>
                    {/* Visual Static Noise */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://media.giphy.com/media/oEI9uWUPr9WUM/giphy.gif')] bg-center scale-150" />
                  </div>
                ) : (
                  /* Carousel Images */
                  <div
                    className="w-full h-full flex transition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {images.map((src, idx) => (
                      <div key={idx} className="w-full h-full flex-shrink-0 relative">
                        <img
                          src={src}
                          alt={`University Event ${idx + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </foreignObject>

            {/* Monitor Webcam */}
            <circle cx="6000" cy="-1150" r="100" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="20" />
            <circle cx="6000" cy="-1150" r="45" fill="#10b981" className="animate-pulse" />
          </g>

          {/* Graduation Cap – Floating above monitor */}
          <g style={{ transform: "translate(6000px, -2000px)" }}>
            <g style={{ animation: "capBounce 4s ease-in-out infinite" }}>
              <polygon points="0,-250 -400,0 0,250 400,0" fill="#6366f1" stroke="#818cf8" strokeWidth="10" />
              <polygon points="0,250 400,0 400,200 0,450" fill="#4f46e5" />
              <rect x="-50" y="-250" width="100" height="100" rx="20" fill="#fbbf24" />
              <path d="M 0 -250 Q 150 -150 180 -50" fill="none" stroke="#fbbf24" strokeWidth="15" strokeLinecap="round" />
              <circle cx="180" cy="-50" r="30" fill="#f59e0b" />
            </g>
          </g>

          {/* ========== LARGE CHARACTERS ========== */}

          {/* 1. Researcher (Reading Tablet) - Professional Lab/Formal */}
          <g style={{ transform: "translate(-200px, -1200px)" }}>
            <g style={{ animation: "charFloat 5.5s ease-in-out infinite" }}>
              <rect x="0" y="300" width="600" height="750" rx="80" fill="#1e1b4b" />
              <circle cx="300" cy="180" r="280" fill="url(#skin1)" />
              {/* Professional White Collar - Smaller */}
              <path d="M 220 300 L 300 420 L 380 300" fill="#ffffff" />
              {/* Tablet */}
              <rect x="580" y="420" width="450" height="520" rx="60" fill="#1e293b" stroke="#4f46e5" strokeWidth="20" />
              <rect x="620" y="460" width="370" height="440" rx="40" fill="#f8fafc" />
              <path d="M 660 550 L 950 550 M 660 650 L 950 650 M 660 750 L 850 750" stroke="#94a3b8" strokeWidth="15" strokeLinecap="round" />
            </g>
          </g>

          {/* 2. Reader (Coding on Laptop) - Professional Casual */}
          <g style={{ transform: "translate(-200px, 5000px)" }}>
            <g style={{ animation: "charFloat2 6.5s ease-in-out infinite 0.8s" }}>
              <rect x="0" y="300" width="600" height="720" rx="80" fill="#064e3b" />
              <circle cx="300" cy="180" r="280" fill="url(#skin2)" />
              {/* Formal Shirt Collar */}
              <path d="M 220 300 L 300 400 L 380 300" fill="#fff" />
              {/* Laptop */}
              <rect x="580" y="450" width="520" height="380" rx="40" fill="#334155" />
              <rect x="580" y="830" width="520" height="60" rx="10" fill="#1e293b" />
              <rect x="620" y="490" width="440" height="300" rx="20" fill="#064e3b" />
              <text x="650" y="550" fill="#10b981" fontSize="40" fontWeight="bold">{"{...}"}</text>
            </g>
          </g>

          {/* 3. Presenter (Analyzing Chart) - Executive Look */}
          <g style={{ transform: "translate(11000px, -1200px)" }}>
            <g style={{ animation: "charFloat3 6s ease-in-out infinite 1.2s" }}>
              <rect x="0" y="300" width="600" height="750" rx="80" fill="#92400e" />
              <circle cx="300" cy="180" r="280" fill="url(#skin3)" />
              {/* Executive Necktie (Structured Knot) - Repositioned Down */}
              <path d="M 260 380 L 340 380 L 330 430 L 270 430 Z" fill="#f59e0b" />
              <path d="M 270 430 L 330 430 L 350 680 L 300 760 L 250 680 Z" fill="#f59e0b" />
              <path d="M 280 380 L 300 530 L 320 380 Z" fill="#fff" />
              {/* Chart Board */}
              <rect x="-1000" y="0" width="1150" height="900" rx="90" fill="#1e293b" stroke="#f59e0b" strokeWidth="30" />
              <path d="M -800 600 L -600 400 L -400 500 L -200 200 L 0 350" fill="none" stroke="#f59e0b" strokeWidth="20" />
              <circle cx="-200" cy="200" r="30" fill="#fff" />
            </g>
          </g>

          {/* 4. Tech Student (Large Keyboard) */}
          <g style={{ transform: "translate(11000px, 5000px)" }}>
            <g style={{ animation: "charFloat 5s ease-in-out infinite 1.8s" }}>
              <rect x="0" y="300" width="600" height="720" rx="120" fill="#ec4899" />
              <circle cx="300" cy="180" r="280" fill="url(#skin1)" />
              {/* Keyboard Panel */}
              <rect x="-800" y="700" width="1000" height="250" rx="40" fill="#334155" />
              {[-700, -550, -400, -250, -100].map(x => (
                <rect key={x} x={x} y="750" width="100" height="60" rx="10" fill="#ec4899" opacity="0.6" />
              ))}
            </g>
          </g>

          {/* 7. Pencil Rider (Bottom Center) */}
          <g style={{ transform: "translate(6000px, 7500px)" }}>
            <g style={{ animation: "charFloat 6s ease-in-out infinite 1.5s" }}>
              <rect x="0" y="140" width="280" height="360" rx="60" fill="#a855f7" />
              <circle cx="140" cy="70" r="130" fill="url(#skin3)" />
              <circle cx="400" cy="40" r="100" fill="#fef08a" opacity="0.9" />
            </g>
          </g>

          {/* 9. Music Student (Notes) */}
          <g style={{ transform: "translate(12500px, 1200px)" }}>
            <g style={{ animation: "charFloat 6.8s ease-in-out infinite 0.5s" }}>
              <rect x="0" y="140" width="280" height="360" rx="60" fill="#f43f5e" />
              <circle cx="140" cy="70" r="130" fill="url(#skin2)" />
              <path d="M 10 70 A 130 130 0 0 1 270 70" fill="none" stroke="#1e1b4b" strokeWidth="20" />
              <circle cx="350" cy="50" r="20" fill="#f43f5e" />
              <circle cx="450" cy="150" r="20" fill="#f43f5e" />
            </g>
          </g>

          {/* Tera Lego Stacks – Moved below Researcher */}
          <g style={{ transform: "translate(-1500px, 200px)" }}>
            <g style={{ animation: "legoWave 4.5s ease-in-out infinite" }}>
              <rect x="0" y="0" width="850" height="380" rx="60" fill="#FF3366" />
              <rect x="0" y="380" width="850" height="380" rx="60" fill="#FFD700" />
              <rect x="0" y="760" width="850" height="380" rx="60" fill="#33CC99" />
              {[120, 320, 520, 720].map(x => (
                <circle key={x} cx={x} cy="95" r="75" fill="#fff" opacity="0.6" />
              ))}
            </g>
          </g>

          <g style={{ transform: "translate(15000px, 3500px)" }}>
            <g style={{ animation: "legoWave 4.5s ease-in-out infinite 0.7s" }}>
              <rect x="0" y="0" width="850" height="380" rx="60" fill="#3399FF" />
              <rect x="0" y="380" width="850" height="380" rx="60" fill="#33CC99" />
              {[120, 320, 520, 720].map(x => (
                <circle key={x} cx={x} cy="95" r="75" fill="#fff" opacity="0.6" />
              ))}
            </g>
          </g>

          {/* Tera Particles – Shifted Right */}
          <circle cx="-500" cy="-3000" r="80" fill="#a78bfa" style={{ animation: "particleDrift 4s infinite" }} />
          <circle cx="17000" cy="-3200" r="90" fill="#60a5fa" style={{ animation: "particleDrift 5s infinite 1s" }} />
          <circle cx="-500" cy="5500" r="70" fill="#f472b6" style={{ animation: "particleDrift 6s infinite 2s" }} />
          <circle cx="16500" cy="5200" r="85" fill="#34d399" style={{ animation: "particleDrift 4.5s infinite 0.5s" }} />

          {/* Tera Data Stream Lines – Shifted Right */}
          <path d="M -500 -3800 L 1000 -3800" stroke="#818cf8" strokeWidth="30" strokeDasharray="180 90" style={{ animation: "dataStream 3s linear infinite" }} />
          <path d="M 15000 -4000 L 17500 -4000" stroke="#c084fc" strokeWidth="30" strokeDasharray="220 110" style={{ animation: "dataStream 4s linear infinite 1s" }} />
        </svg>
      </div>
    </div>
  </>
  );
}
"use client";

import { motion } from "framer-motion";

interface CarTransitionProps {
  reverse?: boolean;
}

export function CarTransition({ reverse = false }: CarTransitionProps) {
  return (
    <div className="relative h-20 w-full overflow-hidden bg-white/50 border-y border-gray-100/50">
      <style>{`
        @keyframes carTravelLTR {
          0% { left: -20%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 120%; opacity: 0; }
        }
        @keyframes carTravelRTL {
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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes wheelRotateRev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>

      <div 
        className="absolute bottom-2 w-28 h-14 z-10" 
        style={{ 
          animation: reverse ? "carTravelRTL 15s linear infinite" : "carTravelLTR 18s linear infinite" 
        }}
      >
        <div style={{ transform: reverse ? "scaleX(1)" : "scaleX(-1)" }}>
           <svg 
             viewBox="0 0 100 60" 
             fill="none" 
             stroke="#c0392b" 
             strokeWidth="3" 
             className="drop-shadow-[0_0_8px_rgba(192,57,43,0.4)]" 
             style={{ 
               animation: "carBounce 0.5s ease-in-out infinite"
             }}
           >
              <path d="M 10 40 L 10 25 L 30 25 L 45 10 L 70 10 L 85 25 L 85 40 Z" />
              {/* Rotating Wheels */}
              <g style={{ animation: reverse ? "wheelRotateRev 1s linear infinite" : "wheelRotate 1s linear infinite", transformOrigin: "25px 45px" }}>
                <circle cx="25" cy="45" r="8" fill="#c0392b" fillOpacity="0.1" />
                <line x1="17" y1="45" x2="33" y2="45" strokeWidth="1" />
                <line x1="25" y1="37" x2="25" y2="53" strokeWidth="1" />
              </g>
              <g style={{ animation: reverse ? "wheelRotateRev 1s linear infinite" : "wheelRotate 1s linear infinite", transformOrigin: "70px 45px" }}>
                <circle cx="70" cy="45" r="8" fill="#c0392b" fillOpacity="0.1" />
                <line x1="62" y1="45" x2="78" y2="45" strokeWidth="1" />
                <line x1="70" y1="37" x2="70" y2="53" strokeWidth="1" />
              </g>
              <line x1="10" y1="40" x2="85" y2="40" />
              <line x1="30" y1="25" x2="30" y2="40" />
              <line x1="45" y1="10" x2="45" y2="25" />
              {/* Headlight on the FRONT */}
              <circle cx="15" cy="30" r="4" fill="#F59E0B" className="animate-pulse" />
           </svg>
        </div>
      </div>

      {/* Road Markings */}
      <div className="absolute bottom-0 w-full h-[2px] bg-gray-200" />
      <div className="absolute bottom-[2px] w-full flex justify-around opacity-20">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-8 h-[2px] bg-gray-400" />
        ))}
      </div>
    </div>
  );
}

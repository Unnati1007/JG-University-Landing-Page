"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageSquare } from "lucide-react";
import { useState } from "react";

export function FloatingActions() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-[90] flex flex-col items-center gap-3">
      <AnimatePresence>
        {expanded && (
          <>
            {/* Phone Call Button */}
            <motion.a
              href="tel:+917926860099"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
              className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] flex items-center justify-center shadow-[0_6px_20px_rgba(37,211,102,0.5)] transition-all"
              aria-label="Call JG University"
            >
              <Phone className="w-6 h-6 text-white fill-white" />
            </motion.a>

            {/* ASK JG Chat Button */}
            <motion.a
              href="https://wa.me/917926860099?text=Hello%2C%20I%20want%20to%20know%20more%20about%20JG%20University"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center gap-1 group"
              aria-label="Chat on WhatsApp"
            >
              <div className="w-14 h-14 rounded-full bg-[#c0392b] hover:bg-[#a93226] flex items-center justify-center shadow-[0_6px_20px_rgba(192,57,43,0.5)] transition-all relative">
                <MessageSquare className="w-6 h-6 text-white fill-white" />
                <span className="absolute -top-1 -right-1 bg-[#1e1b4b] text-white text-[8px] font-black px-1.5 py-0.5 rounded-full tracking-widest">
                  JG
                </span>
              </div>
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest bg-white px-2 py-0.5 rounded shadow-sm">
                Chat
              </span>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setExpanded((v) => !v)}
        animate={{ rotate: expanded ? 45 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#c0392b] hover:bg-[#a93226] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(192,57,43,0.5)] transition-colors relative"
        aria-label="Toggle contact options"
      >
        {expanded ? <X className="w-6 h-6" /> : (
          <>
            <span className="text-[11px] font-black tracking-tight leading-none text-center">
              ASK<br />
              <span className="text-yellow-300">JG</span>
            </span>
          </>
        )}
        {/* Pulse Ring */}
        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-[#c0392b] animate-ping opacity-30 pointer-events-none" />
        )}
      </motion.button>
    </div>
  );
}

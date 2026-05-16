"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Programmes", href: "#programs" },
  { name: "Campus", href: "#campus" },
  { name: "Industry Linkage", href: "#industry" },
  { name: "Collaborations", href: "#collaborations" },
  { name: "Discover Us", href: "#about" },
  { name: "Media", href: "#media" },
  { name: "Career", href: "#career" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2"
            : "bg-white/90 backdrop-blur-sm py-2"
        }`}
      >
        <div className="max-w-full mx-auto px-4 flex items-center justify-between gap-6">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* Static animated SVG (no spin, just static) */}
            <img
              src="https://jguni.in/images/logo-animation.svg"
              alt="JG University logo"
              className="w-20 h-20 object-contain transition-transform hover:scale-105"
            />
            {/* JG text logo */}
            <img
              src="https://jguni.in/images/jg-logo.svg"
              alt="JG University"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden xl:flex items-center gap-4 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[15px] font-semibold text-gray-700 hover:text-[#c0392b] transition-colors py-2 px-3 whitespace-nowrap"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#c0392b] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* ── RIGHT SIDE: Admission + Search + Hamburger ── */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Admission button (hidden on small, shown md+) */}
            <Button className="hidden md:inline-flex rounded-md bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-5 h-9 text-sm shadow-sm border-0 transition-all">
              Admission
            </Button>

            {/* Search (desktop) */}
            <div className="hidden md:flex items-center gap-1.5">
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    ref={searchRef}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 160, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    type="text"
                    placeholder="Search..."
                    className="text-sm border border-gray-200 rounded-full px-3 py-1.5 outline-none focus:ring-2 focus:ring-[#c0392b]/30 focus:border-[#c0392b] bg-gray-50"
                    style={{ overflow: "hidden" }}
                  />
                )}
              </AnimatePresence>
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-[#c0392b] transition-colors border border-gray-200"
                aria-label="Toggle search"
              >
                {searchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
              </button>
            </div>

            {/* Hamburger (shows on < xl) */}
            <button
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] xl:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[70] flex flex-col shadow-2xl xl:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <img
                  src="https://jguni.in/images/jg-logo.svg"
                  alt="JG University"
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile search */}
              <div className="px-5 pt-4 pb-2">
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus-within:border-[#c0392b] focus-within:ring-2 focus-within:ring-[#c0392b]/20 transition-all">
                  <Search className="w-4 h-4 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search programmes, news..."
                    className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-3 py-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center text-[15px] font-medium text-gray-700 hover:text-[#c0392b] hover:bg-red-50 rounded-lg px-3 py-3 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer: Admission CTA */}
              <div className="px-5 py-5 border-t border-gray-100">
                <Button className="w-full rounded-lg bg-[#F59E0B] hover:bg-[#d97706] text-white py-5 text-base font-bold border-0 shadow-md">
                  Admission
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

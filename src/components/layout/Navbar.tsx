"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// ── MEGA MENU DATA ──────────────────────────────────────────────
const programmesMega = {
  columns: [
    {
      title: "Undergraduate Programmes",
      color: "text-[#c0392b]",
      items: [
        "BBA | BBA (Hons)",
        "Integrated BBA + MBA",
        "Integrated BBA + MBA - Global Business",
        "BBA / BBA (Hons) / iMBA",
        "B.Com | B.Com (Hons)",
        "B.Com (Hons) with ACCA",
        "BCA | BCA (Hons)",
        "Integrated BSc + MSc (IT)",
        "Integrated BSc +MSc (IT-Specialization)",
        "B.Sc. / B.Sc. (Hons) / iMSc",
        "Integrated BCA + MCA",
        "B.Tech Programs",
        "BBA | BBA (Hons) - International Trade & Finance",
        "Integrated BBA + MBA - Aviation, Hospitality, & Travel Management",
        "Integrated BBA + MBA - International Trade & Finance",
        "LL.B.",
      ],
    },
    {
      title: "Postgraduate Programmes",
      color: "text-[#c0392b]",
      items: [
        "MBA",
        "Masters in International Trade & Finance",
        "Masters in Aviation, Hospitality & Travel Management",
        "M.Com (Hons) - International Accounting & Taxation",
        "MCA",
        "MCA - AI / Full Stack Development",
        "MSc (IT-Specialization)",
        "MSc",
        "LL.M.",
      ],
      subSections: [
        {
          title: "Doctoral Programmes (Ph.D)",
          color: "text-[#c0392b]",
          items: [
            "Management",
            "Commerce",
            "Computing",
            "Interdisciplinary",
            "Law",
            "Forensic Science",
          ],
        },
      ],
    },
    {
      title: "Resources",
      color: "text-[#1e1b4b]",
      items: [
        "MBA & MCA JGET Question Bank",
        "M.Com (Hons) JGET Question Bank",
        "Ph.D JGET Question Bank",
      ],
      subSections: [
        {
          title: "NEP 2020",
          color: "text-[#c0392b]",
          items: ["Code of Conduct"],
        },
      ],
    },
  ],
};

const navLinks = [
  { name: "Programmes", href: "#programs", hasMega: true },
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
  const [megaOpen, setMegaOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const openMega = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2"
            : "bg-white/90 backdrop-blur-sm py-2"
        }`}
      >
        <div className="max-w-full mx-auto px-4 flex items-center justify-between gap-6">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img
              src="https://jguni.in/images/logo-animation.svg"
              alt="JG University logo"
              className="w-20 h-20 object-contain transition-transform hover:scale-105"
            />
            <img
              src="https://jguni.in/images/jg-logo.svg"
              alt="JG University"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden xl:flex items-center gap-4 flex-1 justify-center">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                  ref={megaRef}
                >
                  <button
                    className={`flex items-center gap-1 text-[15px] font-semibold transition-colors py-2 px-3 whitespace-nowrap ${
                      megaOpen ? "text-[#c0392b]" : "text-gray-700 hover:text-[#c0392b]"
                    }`}
                  >
                  {link.name}
                    {megaOpen && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#c0392b] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* ── MEGA MENU PANEL ── */}
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        onMouseEnter={openMega}
                        onMouseLeave={closeMega}
                        className="fixed left-0 right-0 top-[80px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border-t-2 border-[#c0392b] z-[99] overflow-y-auto max-h-[75vh]"
                      >
                        <div className="max-w-[1400px] mx-auto px-8 py-8 grid grid-cols-3 gap-8">
                          {programmesMega.columns.map((col) => (
                            <div key={col.title}>
                              <h3 className={`text-sm font-black uppercase tracking-wide mb-4 ${col.color}`}>
                                {col.title}
                              </h3>
                              <ul className="space-y-1.5">
                                {col.items.map((item) => (
                                  <li key={item}>
                                    <a
                                      href="#programs"
                                      onClick={() => setMegaOpen(false)}
                                      className="text-sm text-gray-700 hover:text-[#c0392b] hover:pl-1 transition-all block leading-snug"
                                    >
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>

                              {/* Sub-sections */}
                              {col.subSections?.map((sub) => (
                                <div key={sub.title} className="mt-6">
                                  <h3 className={`text-sm font-black uppercase tracking-wide mb-3 ${sub.color}`}>
                                    {sub.title}
                                  </h3>
                                  <ul className="space-y-1.5">
                                    {sub.items.map((item) => (
                                      <li key={item}>
                                        <a
                                          href="#programs"
                                          onClick={() => setMegaOpen(false)}
                                          className="text-sm text-gray-700 hover:text-[#c0392b] hover:pl-1 transition-all block"
                                        >
                                          {item}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
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
              )
            )}
          </nav>

          {/* ── RIGHT SIDE: Admission + Search + Hamburger ── */}
          <div className="flex items-center gap-2 shrink-0">
            <Button className="hidden md:inline-flex rounded-md bg-[#F59E0B] hover:bg-[#d97706] text-white font-bold px-5 h-9 text-sm shadow-sm border-0 transition-all">
              Admission
            </Button>

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
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[110] xl:hidden"
            />

            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[120] flex flex-col shadow-2xl xl:hidden"
            >
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

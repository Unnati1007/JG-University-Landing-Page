"use client";

import { GraduationCap, Mail, Phone, MapPin, ExternalLink, Share2, AtSign, Camera, Link2, Play } from "lucide-react";

const footerLinks = {
  Programs: [
    "BBA / BBA (Hons)",
    "iMBA / MBA",
    "B.Com / M.Com",
    "BCA / MCA",
    "B.Tech Programs",
    "Doctoral Programs",
    "Certificate Courses",
  ],
  "Quick Links": [
    "About University",
    "Faculty",
    "Campus Life",
    "Admissions",
    "Student Portal",
    "Research & Innovation",
    "Alumni Network",
  ],
  Resources: [
    "Academic Calendar",
    "Examination Schedule",
    "Scholarships",
    "Hostel & Facilities",
    "Placements",
    "International Collaborations",
    "NIRF Ranking",
  ],
};

const socials = [
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: AtSign, href: "#", label: "Twitter" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Play, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Top wave */}
      <div className="relative h-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <svg
          viewBox="0 0 1440 64"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#030712" />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-['Outfit'] font-bold text-xl text-white">JG University</p>
                <p className="text-amber-400 text-xs font-medium">Knowledge Beyond Books</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              A UGC-approved, New Age Tech-Driven University sponsored by ASIA Charitable Trust — 
              shaping future-ready global change leaders since 1965. Located in the heart of Ahmedabad, Gujarat.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-7">
              {[
                { icon: MapPin, text: "Ahmedabad, Gujarat — 380 015, India" },
                { icon: Phone, text: "+91 (079) XXXX-XXXX" },
                { icon: Mail, text: "admissions@jguni.in" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-800 hover:border-blue-700 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-['Outfit'] font-bold text-white text-sm uppercase tracking-wider mb-5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-amber-400 transition-colors flex-shrink-0" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accreditation / Recognition strip */}
        <div className="border-t border-white/10 pt-10 pb-6">
          <p className="text-gray-500 text-xs uppercase tracking-widest text-center mb-5">
            Recognised & Accredited By
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["UGC", "NAAC", "AICTE", "NEP 2020", "ASIA Trust", "GCCIA"].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} JG University. All rights reserved. Powered by ASIA Charitable Trust.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 text-xs hover:text-gray-300 transition-colors flex items-center gap-1"
              >
                {item} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-blue-900/20 blur-3xl pointer-events-none" />
    </footer>
  );
}

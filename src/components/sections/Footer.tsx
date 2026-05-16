"use client";

import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

const schools = [
  {
    name: "School of Management",
    programs: ["BBA (Hons)", "iMBA (Global Business)", "iMBA (Trade & Finance)", "MBA", "Masters in Trade & Finance", "PGD - Banking & Finance"]
  },
  {
    name: "Investigative Sciences (SIAS)",
    programs: ["iM.Sc. Forensic Science", "iM.Sc. Cyber Security", "iM.Sc. Reproductive Biology", "M.Sc. Forensic Tech", "M.Sc. Clinical Embryology"]
  },
  {
    name: "School of Engineering",
    programs: ["B.Tech - CSE / IT", "B.Tech - AI & DS", "B.Tech - AI & ML", "B.Tech - Computer Engineering", "B.Tech - Big Data Analytics"]
  },
  {
    name: "School of Computing",
    programs: ["BCA (Hons)", "iMSc (IT)", "iMCA", "MCA (AI & Full Stack)"]
  },
  {
    name: "School of Commerce",
    programs: ["B.Com (Hons)", "B.Com (Hons) with ACCA", "M.Com (Hons)"]
  },
  {
    name: "School of Design",
    programs: ["B.Design - UI/UX", "B.Design - Game Design"]
  },
  {
    name: "Emerging Technology",
    programs: ["Metaverse", "Blockchain", "Digital Marketing", "Robotic Process Automation", "Industrial IoT", "Azure DevOps"]
  },
  {
    name: "Other Schools",
    programs: ["School of Law (LL.B / LL.M)", "SST (iMSc IT-Sp)", "Ph.D Programmes", "Aviation & Hospitality"]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-20 pb-8 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-800" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-20">
          {/* Brand & Contact */}
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center font-black text-2xl shadow-lg shadow-red-600/20">JG</div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-black tracking-tighter leading-none">UNIVERSITY</span>
                <span className="text-[10px] text-red-500 font-bold tracking-[0.3em] uppercase mt-1">Ahmedabad</span>
              </div>
            </Link>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <h5 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Campus</h5>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054, Gujarat, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div className="flex-1">
                  <h5 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Admissions</h5>
                  <p className="text-sm text-gray-300">+91 7567 7567 58 / 59</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div className="flex-1">
                  <h5 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Email Us</h5>
                  <p className="text-sm text-gray-300">connect@jguni.in</p>
                  <p className="text-sm text-gray-300">admission@jguni.in</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all group">
                  <Icon size={18} className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Academic Schools Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
            {schools.map((school, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-red-600 border-l-2 border-red-600 pl-3">
                  {school.name}
                </h4>
                <ul className="space-y-2.5">
                  {school.programs.map((prog, pIdx) => (
                    <li key={pIdx}>
                      <Link href="#" className="text-xs text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group">
                        <div className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-red-500 transition-colors" />
                        {prog}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory & Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Mandatory Disclosure</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cyber Hygiene Handbook</Link>
          </div>
          
          <div className="text-right">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">
              Copyright ©2022 JG University All Rights Reserved
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest text-red-600">
              Powered by: N2N Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

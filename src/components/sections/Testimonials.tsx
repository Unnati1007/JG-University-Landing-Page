"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
    company: "JG Alumnus",
    avatar: "JG",
    avatarBg: "#EF4444",
    text: "As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. The faculty members were more than just teachers; they served as mentors who supported and guided us at every step. This experience instilled in me the virtues of discipline and hard work.",
    rating: 5,
  },
  {
    name: "Yatendra Sinh Joddha",
    role: "Technical Head",
    company: "TATA Consultancy Services",
    avatar: "YJ",
    avatarBg: "#1e1b4b",
    text: "My education at JG has played a pivotal role in shaping my career as a Technical Head at TCS. The BCA program provided me with a strong foundation in IT, and the focus on training gave me the opportunity to apply my knowledge in real-world scenarios.",
    rating: 5,
  },
  {
    name: "Parth Raval",
    role: "Successful Media Professional",
    company: "JG Alumnus",
    avatar: "PR",
    avatarBg: "#4F46E5",
    text: "I am pleased to state that my career has been significantly shaped by the education I received at JG. The emphasis on practical learning through internships and industry collaborations gave me valuable hands-on experience and helped me become a successful professional.",
    rating: 5,
  },
  {
    name: "Parth Prajapati",
    role: "BBA Graduate",
    company: "Business Professional",
    avatar: "PP",
    avatarBg: "#F59E0B",
    text: "JG was instrumental in helping me achieve my professional goals. The BBA program provided me with a strong foundation in business principles and experiential learning through real-world projects. I am grateful for the prepared me for challenges of the real world.",
    rating: 5,
  },
  {
    name: "Aayushi Gor",
    role: "Management Professional",
    company: "JG Alumnus",
    avatar: "AG",
    avatarBg: "#EC4899",
    text: "It gives me great pleasure to identify myself as a JG alumnus. This university provides us with incredible information and discipline, which helps us achieve in all of our activities. I owe a sincere debt of gratitude for the opportunities to discover my individuality.",
    rating: 5,
  },
  {
    name: "Stavan Doshi",
    role: "Business Owner",
    company: "Entrepreneur",
    avatar: "SD",
    avatarBg: "#10B981",
    text: "I owe my success as a business owner to the education and experiences I gained at JG. The university's strong emphasis on entrepreneurship and innovation inspired me to pursue my dream. The resources and mentorship programs were invaluable.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#f8faff] relative overflow-hidden">
      {/* Subtle top & bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      {/* BG blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#4F46E5]/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#F59E0B]/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#F59E0B] mb-4 font-mono"
          >
            Student Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight font-heading"
          >
            Voices That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#ec4899]">Inspire</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-white rounded-3xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gray-100 absolute top-6 right-6 group-hover:text-gray-200 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Person */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.avatarBg}, ${t.avatarBg}99)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role} · <span style={{ color: t.avatarBg }} className="font-semibold">{t.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

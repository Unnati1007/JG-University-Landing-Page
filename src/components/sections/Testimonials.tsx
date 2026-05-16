"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "MBA Graduate, 2023",
    company: "Deloitte India",
    avatar: "PS",
    avatarBg: "#4F46E5",
    text: "JG University gave me more than a degree — it gave me a perspective. The faculty pushed us beyond textbooks and into real problem solving. I landed my dream job at Deloitte within a month of graduating.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "B.Tech CSE, 2022",
    company: "TCS",
    avatar: "RM",
    avatarBg: "#10B981",
    text: "The tech labs and innovation hub at JG are world-class. I built my first startup prototype in the incubation center here. The placement team was incredibly supportive throughout my journey.",
    rating: 5,
  },
  {
    name: "Aisha Khan",
    role: "LLB Graduate, 2023",
    company: "High Court, Gujarat",
    avatar: "AK",
    avatarBg: "#F59E0B",
    text: "The law program at JG University is exceptional. Moot court competitions, visiting judges, and internship tie-ups made our learning incredibly practical. I highly recommend it.",
    rating: 5,
  },
  {
    name: "Vijay Patel",
    role: "BBA, 2021",
    company: "Amazon India",
    avatar: "VP",
    avatarBg: "#ec4899",
    text: "From day one, JG University felt different. The mentorship program paired me with an industry expert who guided me throughout. Today I work at Amazon — a dream I dared to have here.",
    rating: 5,
  },
  {
    name: "Neha Joshi",
    role: "M.Sc Data Science, 2023",
    company: "Infosys BPM",
    avatar: "NJ",
    avatarBg: "#8B5CF6",
    text: "The data science curriculum is cutting-edge. We used real datasets, industry-grade tools, and had guest lectures from actual data scientists. Best decision of my career.",
    rating: 5,
  },
  {
    name: "Dev Shah",
    role: "B.Com Finance, 2022",
    company: "KPMG",
    avatar: "DS",
    avatarBg: "#0EA5E9",
    text: "JG's finance programme has ICAI collaboration which means CMA support from day one. Passed 3 exams while studying — and got placed at KPMG before my final semester ended.",
    rating: 5,
  },
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

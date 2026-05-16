"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer & Alumnus",
    program: "Alumni",
    avatar: "JG",
    color: "from-violet-500 to-purple-700",
    text: "As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. The faculty members were more than just teachers; they served as mentors who guided us at every step. JG gave us a nurturing environment where we could explore our passions freely — instilling discipline and hard work that have proved invaluable in my career.",
  },
  {
    name: "Parth Rupareliya",
    role: "Industry Professional",
    program: "JG Alumnus",
    avatar: "PR",
    color: "from-blue-500 to-cyan-600",
    text: "My time at JG was one of my most fulfilling and life-changing experiences. The academic curriculum emphasises both theoretical and practical learning. The faculty are highly experienced and dedicated to providing personalized attention. JG's programme helped me develop a strong foundation and equipped me with the skills necessary to succeed professionally.",
  },
  {
    name: "Yatendra Sinh Joddha",
    role: "Technical Head, TCS",
    program: "BCA Graduate",
    avatar: "YJ",
    color: "from-emerald-500 to-teal-600",
    text: "My education at JG has played a pivotal role in shaping my career as a Technical Head at TATA Consultancy Services. The BCA program provided me with a strong foundation in IT, and the faculty's focus on the best training gave me the opportunity to apply my knowledge in real-world scenarios every day.",
  },
  {
    name: "Disha Thaker",
    role: "Management Professional",
    program: "Management Graduate",
    avatar: "DT",
    color: "from-amber-500 to-orange-600",
    text: "The Management programme offers cutting-edge course design, top-notch industry teachers, and hands-on experience projects. I was encouraged to uncover skills I had no idea I possessed. The University places a strong emphasis on personality development, which helped me create a truly fulfilling profession.",
  },
  {
    name: "Shrushti Raval",
    role: "Business Leader",
    program: "BBA Graduate",
    avatar: "SR",
    color: "from-rose-500 to-pink-600",
    text: "JG was instrumental in shaping my career and helping me achieve my professional goals. The BBA program provided me with a strong foundation in business principles and practices, and the focus on experiential learning through internships and real-world projects was invaluable. I draw upon the knowledge and skills I gained at JG each day.",
  },
  {
    name: "Stavan Doshi",
    role: "Entrepreneur & Alumnus",
    program: "JG Alumnus",
    avatar: "SD",
    color: "from-indigo-500 to-blue-700",
    text: "My college has provided many possibilities that have the potential to change people's lives. The faculty believe that while formal education might earn you a living, self-education can earn you a fortune! The university has numerous unique characteristics that make it innovative, educative, and kind to the environment.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-28 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-rose-600 uppercase tracking-widest bg-rose-50 px-4 py-2 rounded-full border border-rose-100 mb-4"
          >
            Alumni Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Outfit'] text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Voices of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f43f5e, #f97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Success
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Thousands of JG alumni are transforming industries across the globe. Here's what they say about their journey.
          </motion.p>
        </div>

        {/* Main testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-xl shadow-gray-200/80 overflow-hidden">
            {/* Gradient top strip */}
            <div className={`h-2 w-full bg-gradient-to-r ${t.color}`} />

            <div className="p-10 md:p-14">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left: Avatar + info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-2xl font-black font-['Outfit'] shadow-lg mx-auto md:mx-0`}
                  >
                    {t.avatar}
                  </div>
                  <div className="mt-4">
                    <p className="font-['Outfit'] font-bold text-gray-900 text-lg">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                    <span className="inline-block mt-2 text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
                      {t.program}
                    </span>
                  </div>
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Right: Quote */}
                <div className="flex-1 relative">
                  <Quote className="absolute -top-2 -left-2 w-10 h-10 text-blue-100" />
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={current}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-600 text-lg leading-relaxed pl-6 italic"
                    >
                      &ldquo;{t.text}&rdquo;
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      id={`testimonial-dot-${i}`}
                      onClick={() => setCurrent(i)}
                      className={`transition-all duration-300 rounded-full ${
                        i === current
                          ? "w-8 h-2.5 bg-blue-900"
                          : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    id="testimonial-prev"
                    onClick={prev}
                    className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-900 hover:text-blue-900 hover:bg-blue-50 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    id="testimonial-next"
                    onClick={next}
                    className="w-11 h-11 rounded-xl bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom: 3 mini cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-5 mt-12 max-w-4xl mx-auto"
        >
          {[testimonials[2], testimonials[3], testimonials[5]].map((tm) => (
            <div key={tm.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 italic">
                &ldquo;{tm.text.substring(0, 110)}...&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tm.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {tm.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xs">{tm.name}</p>
                  <p className="text-gray-400 text-xs">{tm.program}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

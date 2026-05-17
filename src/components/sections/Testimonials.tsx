"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Yatendra Sinh Joddha",
    role: "Technical Head",
    company: "TATA Consultancy Services",
    avatar: "YJ",
    avatarBg: "linear-gradient(135deg, #1e1b4b, #312e81)",
    text: "My education at JG has played a pivotal role in shaping my career as a Technical Head at TCS. The BCA program provided me with a strong foundation in IT, and the focus on training gave me the opportunity to apply my knowledge in real-world scenarios. The focus on learning and staying up-to-date with computer science have been invaluable in my career."
  },
  {
    name: "Disha Thaker",
    role: "BCA - Project Associate",
    company: "Cognizant",
    avatar: "DT",
    avatarBg: "linear-gradient(135deg, #0284c7, #0ea5e9)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150",
    text: "I am immensely appreciative of the knowledge and experience gained at JG. It provided a solid foundation in computer science and programming languages. The emphasis on practical learning through projects and assignments benefited greatly from the emphasis on practical learning and recent developments in computer science."
  },
  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
    company: "JG Alumnus",
    avatar: "JG",
    avatarBg: "linear-gradient(135deg, #dc2626, #f87171)",
    text: "As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. The faculty members were more than just teachers; they served as mentors who supported and guided us at every step. This experience instilled in me the virtues of discipline and hard work."
  },
  {
    name: "Parth Raval",
    role: "Successful Media Professional",
    company: "JG Alumnus",
    avatar: "PR",
    avatarBg: "linear-gradient(135deg, #4f46e5, #818cf8)",
    text: "I am pleased to state that my career has been significantly shaped by the education I received at JG. The emphasis on practical learning through internships and industry collaborations gave me valuable hands-on experience and helped me become a successful professional."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="pt-12 pb-6 md:pt-16 md:pb-8 bg-[#fafcff] relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FDE047]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-[1050px] mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#1e1b4b] tracking-tight relative inline-block">
            JG Alumni Testimonials
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#38BDF8] rounded-full" />
          </h2>
        </motion.div>

        <div className="relative bg-white/70 backdrop-blur-2xl rounded-[2rem] p-7 md:p-10 border border-white shadow-[0_15px_60px_-15px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            
            {/* Giant Quote Icon */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[80px] md:text-[110px] leading-none font-serif text-[#FDE047] select-none opacity-90 shrink-0 mt-[-20px] md:mt-[-30px] drop-shadow-md"
            >
              “
            </motion.div>

            {/* Testimonial Content */}
            <div className="flex-1 w-full flex flex-col relative pt-1 md:pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex-1"
                >
                  <p className="text-gray-700 text-base md:text-lg leading-[1.7] font-normal mb-8 relative z-10">
                    {current.text}
                  </p>

                  <div className="flex items-center gap-4 relative z-10">
                    {current.image ? (
                      <div className="relative w-14 h-14 rounded-full p-0.5 bg-white shadow-md">
                        <img 
                          src={current.image} 
                          alt={current.name} 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md border-2 border-white"
                        style={{ background: current.avatarBg }}
                      >
                        {current.avatar}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-[#1e1b4b] text-base md:text-lg mb-0.5">{current.name}</h4>
                      <p className="text-xs md:text-sm text-gray-500 font-medium leading-tight">
                        {current.role}, <span className="text-[#38BDF8] font-bold">{current.company}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
               </AnimatePresence>

              {/* Navigation Buttons — below content, no overlap */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100/80">
                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className="rounded-full transition-all duration-300 h-2"
                      style={{
                        width: i === currentIndex ? "24px" : "8px",
                        background: i === currentIndex ? "#38BDF8" : "#cbd5e1",
                      }}
                    />
                  ))}
                </div>
                {/* Prev / Next */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full bg-white text-[#38BDF8] flex items-center justify-center border border-[#38BDF8] hover:bg-[#38BDF8] hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full bg-[#38BDF8] text-white flex items-center justify-center border border-[#38BDF8] hover:bg-[#0284C7] hover:border-[#0284C7] transition-all duration-300 shadow-sm"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

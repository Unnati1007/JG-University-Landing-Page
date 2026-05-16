"use client";

import { motion } from "framer-motion";

export function WelcomeSection() {
  const videos = [
    { id: "pLqZ5-H9B5c", title: "Campus Highlights" },
    { id: "_qV_7S6yGv0", title: "Student Life" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[3px] bg-red-600 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-red-700">About Us</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-heading font-black text-[#1e1b4b] mb-8 leading-tight">
              Empowering Futures through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Innovation</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl font-medium">
              <p>
                JG University is a New Age Tech-Driven University offering programmes that evolve as per future industry demand, thus enabling its students to get into employment or self-employment seamlessly.
              </p>
              <p>
                It is a UGC approved University sponsored by the ASIA Charitable Trust, Which has been in the field of education since 1965, successfully managing 17 colleges and 3 schools.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-[#1e1b4b] text-white font-bold rounded-xl shadow-lg hover:bg-[#2d2a6e] transition-all"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Content - Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-2 border-white/10 rounded-3xl group-hover:border-[#ef4444]/50 transition-colors"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

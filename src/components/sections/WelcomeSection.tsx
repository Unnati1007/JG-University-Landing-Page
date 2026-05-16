"use client";

import { motion } from "framer-motion";

export function WelcomeSection() {
  const videos = [
    { id: "QuRupPh1kAU", title: "JG University Introduction" },
    { id: "P5sIw2tbjYQ", title: "Campus Experience" },
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
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-red-50 border border-red-100 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-red-700">About Us</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-heading font-[900] text-[#1e1b4b] mb-10 leading-[1.1] tracking-tight">
              Empowering Futures <br className="hidden md:block" />
              through <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-800 drop-shadow-sm">Innovation</span>
            </h2>

            <div className="space-y-8 text-gray-600 text-xl leading-relaxed max-w-2xl font-medium tracking-wide">
              <p className="border-l-4 border-red-600/20 pl-6 py-1">
                JG University is a <span className="text-[#1e1b4b] font-bold">New Age Tech-Driven University</span> offering programmes that evolve as per future industry demand, thus enabling its students to get into employment or self-employment seamlessly.
              </p>
              <p className="pl-7">
                It is a UGC approved University sponsored by the ASIA Charitable Trust, which has been a pillar in the field of education since <span className="text-[#1e1b4b] font-bold">1965</span>, successfully managing 17 colleges and 3 schools.
              </p>
            </div>

          </motion.div>

          {/* Right Content - Professional Video Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 rounded-[3rem] bg-gray-50/50 border border-gray-200 shadow-inner group"
          >

            <div className="grid grid-cols-1 gap-12">
              {videos.map((video, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40, rotate: idx % 2 === 0 ? -4 : 4 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    rotate: idx % 2 === 0 ? -2 : 2,
                  }}
                  animate={{
                    y: [0, idx % 2 === 0 ? -15 : 15, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: idx * 0.5
                    },
                    opacity: { duration: 0.8 },
                    rotate: { duration: 0.8 }
                  }}
                  whileHover={{ 
                    rotate: 0, 
                    scale: 1.05, 
                    y: -25,
                    zIndex: 50,
                    boxShadow: "0 40px 80px -20px rgba(0,0,0,0.25)"
                  }}
                  viewport={{ once: true }}
                  className="relative p-5 pb-14 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 cursor-pointer group transition-shadow"
                >
                  {/* Glass Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  <div className="relative aspect-video rounded-sm overflow-hidden bg-black ring-1 ring-gray-900/10 shadow-inner">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Photo Frame Caption */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-[11px] font-black font-mono uppercase tracking-[0.5em] text-gray-400 group-hover:text-red-600 transition-colors">
                      STORY_{idx + 1} // {video.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-red-600/20 rounded-tr-xl"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-red-600/20 rounded-bl-xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

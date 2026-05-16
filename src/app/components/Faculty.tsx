"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const faculty = [
  { name: "Dr. Namika Patel", school: "School of Management", initials: "NP", color: "from-violet-500 to-purple-600" },
  { name: "Dr. Hitesh Harwani", school: "School of Management", initials: "HH", color: "from-blue-500 to-cyan-600" },
  { name: "CA CPA Harshil Trivedi", school: "School of Commerce", initials: "HT", color: "from-amber-500 to-orange-500" },
  { name: "Dr. Pratik Darji", school: "School of Management", initials: "PD", color: "from-emerald-500 to-teal-600" },
  { name: "Dr. Sanjay Christian", school: "School of Management", initials: "SC", color: "from-rose-500 to-pink-600" },
  { name: "CA Parag Soni", school: "School of Commerce", initials: "PS", color: "from-indigo-500 to-blue-600" },
  { name: "Dr. Mona Shah", school: "School of Computing", initials: "MS", color: "from-teal-500 to-cyan-500" },
  { name: "Dr. S Pushpalatha", school: "School of Computing", initials: "SP", color: "from-fuchsia-500 to-violet-600" },
];

const schoolStats = [
  { school: "School of Management", programs: "MBA, BBA, iMBA", faculty: "12+", icon: "🏢" },
  { school: "School of Commerce", programs: "B.Com, M.Com, ACCA", faculty: "8+", icon: "📊" },
  { school: "School of Computing", programs: "BCA, MCA, iMCA", faculty: "10+", icon: "💻" },
  { school: "School of Engineering", programs: "B.Tech (CSE, IT, AI)", faculty: "6+", icon: "⚙️" },
  { school: "School of Science", programs: "Forensic, Quantum, IoT", faculty: "5+", icon: "🔬" },
  { school: "Aviation & Hospitality", programs: "iMBA AHT, MAHTM", faculty: "4+", icon: "✈️" },
];

export default function Faculty() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faculty" className="py-28 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-teal-700 uppercase tracking-widest bg-teal-50 px-4 py-2 rounded-full border border-teal-100 mb-4"
          >
            Expert Faculty
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Outfit'] text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Guided by{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0d9488, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Brilliant Minds
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Our faculty blend deep academic expertise with real-world industry experience — inspiring students to go beyond limits.
          </motion.p>
        </div>

        {/* Schools grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {schoolStats.map((school, i) => (
            <motion.div
              key={school.school}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group rounded-2xl border border-gray-100 bg-gray-50 p-6 flex gap-4 items-start"
            >
              <div className="text-4xl flex-shrink-0">{school.icon}</div>
              <div>
                <h4 className="font-['Outfit'] font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">
                  {school.school}
                </h4>
                <p className="text-gray-500 text-sm mb-2">{school.programs}</p>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                  {school.faculty} Faculty
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faculty members grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-['Outfit'] text-2xl font-bold text-gray-900 text-center mb-10">
            Meet Some of Our Distinguished Faculty
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {faculty.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                className="card-hover group rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-lg font-black font-['Outfit'] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  {member.initials}
                </div>
                <p className="font-semibold text-gray-900 text-sm leading-snug mb-1">
                  {member.name}
                </p>
                <p className="text-gray-400 text-xs">{member.school}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

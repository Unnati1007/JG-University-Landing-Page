"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Target } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Academic Excellence", desc: "World-class curriculum focused on innovation." },
  { icon: Award, title: "Industry Recognized", desc: "Degrees that open doors to global opportunities." },
  { icon: Users, title: "Expert Mentorship", desc: "Learn from industry experts and researchers." },
  { icon: Target, title: "Career Focused", desc: "98% placement record in top-tier companies." },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80" 
                alt="University Campus" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            
            {/* Experience Card */}
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl shadow-2xl border-primary/20 hidden md:block">
              <p className="text-4xl font-black text-primary mb-1">25+</p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Years of Legacy</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Our University</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
              Inspiring the Leaders of <span className="gradient-text">Tomorrow</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Founded on the principles of innovation and integrity, JG University has been at the forefront of educational excellence for over two decades. We believe in providing an environment that fosters creativity, critical thinking, and character building.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div 
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-md flex-shrink-0 text-primary">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

"use client";

import { motion } from "framer-motion";
import { strengths } from "@/lib/data";
import { Globe, GraduationCap, FlaskConical, Users } from "lucide-react";

const iconMap = {
  Globe,
  GraduationCap,
  FlaskConical,
  Users,
};

const Strengths = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Why Choose <span className="text-primary">JG University?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide a unique learning ecosystem that empowers students to excel in their chosen fields and become global citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {strengths.map((strength, index) => {
            const Icon = iconMap[strength.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-primary/5 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-lg mb-6 group-hover:rotate-6 transition-transform">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strengths;

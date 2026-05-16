"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-dark rounded-[3rem] p-12 md:p-20 text-center border-2 border-primary/20 shadow-2xl overflow-hidden"
        >
          {/* Animated Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] animate-pulse" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary font-bold text-sm mb-8"
            >
              <Sparkles size={16} />
              Future Ready
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Ready to Start Your <br />
              <span className="gradient-text">Success Journey?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of students who have already embarked on a life-changing educational adventure at JG University.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="rounded-full px-10 py-8 text-xl font-bold h-auto group shadow-xl shadow-primary/25">
                Apply Online Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 py-8 text-xl font-bold h-auto border-2 glass hover:bg-white/10">
                Contact Admissions
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

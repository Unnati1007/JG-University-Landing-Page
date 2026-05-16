"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* <ParticleBackground /> */}
      
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Admissions Open 2024-25
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-foreground">
              Empowering Minds, <br />
              <span className="gradient-text">Shaping Futures.</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Experience a world-class education that combines academic rigor with practical innovation at Gujarat&apos;s most progressive university.
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <Button size="lg" className="rounded-full px-8 py-7 text-lg font-bold h-auto group bg-primary hover:bg-primary/90">
                Explore Programs
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-7 text-lg font-bold h-auto border-2">
                <Play className="mr-2 fill-current" size={20} />
                Watch Campus Tour
              </Button>
            </div>

            <div className="flex items-center gap-8 py-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="text-sm font-semibold">UGC Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="text-sm font-semibold">NAAC A+ Accredited</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Image Showcase */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[8px] border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80" 
                alt="University Life" 
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm font-medium">Next Event</p>
                    <p className="text-white font-bold text-lg">Tech Spark 2024</p>
                  </div>
                  <div className="bg-primary px-4 py-2 rounded-xl text-white font-bold">
                    May 20
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

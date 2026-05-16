"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-28 relative overflow-hidden" ref={ref}
      style={{ background: "linear-gradient(135deg, #0a0e3d 0%, #1a1f6e 50%, #2d35a8 100%)" }}
    >
      {/* BG blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block text-sm font-semibold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-4 py-2 rounded-full border border-amber-400/20 mb-6">
              Admissions Open 2025–26
            </span>
            <h2 className="font-['Outfit'] text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Your Journey to
              <br />
              <span className="gradient-text">Excellence</span> Starts Here
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Join thousands of students who have transformed their lives at JG University. Apply today and take the first step toward a future-ready career.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-10">
              {[
                { icon: MapPin, text: "Ahmedabad, Gujarat, India", label: "Location" },
                { icon: Phone, text: "+91 (079) XXXX-XXXX", label: "Phone" },
                { icon: Mail, text: "admissions@jguni.in", label: "Email" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {["UGC Approved", "NAAC Accredited", "NEP 2020 Compliant", "60 Years of Trust"].map((badge) => (
                <span key={badge} className="glass text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                  ✓ {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-['Outfit'] text-2xl font-bold text-white mb-2">
                  Application Received!
                </h3>
                <p className="text-white/60">
                  Our admissions team will reach out to you within 24 hours. Welcome to the JG family!
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-['Outfit'] text-2xl font-bold text-white mb-2">
                  Apply for Admission
                </h3>
                <p className="text-white/50 text-sm mb-7">
                  Fill in your details and our team will guide you through the admission process.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400/60 focus:bg-white/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wider">
                        Phone *
                      </label>
                      <input
                        id="cta-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400/60 focus:bg-white/15 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400/60 focus:bg-white/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wider">
                      Program of Interest
                    </label>
                    <select
                      id="cta-program"
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400/60 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-blue-900">Select a program</option>
                      <option value="bba" className="bg-blue-900">BBA / BBA (Hons)</option>
                      <option value="imba" className="bg-blue-900">iMBA / MBA</option>
                      <option value="bca" className="bg-blue-900">BCA / MCA</option>
                      <option value="btech" className="bg-blue-900">B.Tech (CSE / AI / ML)</option>
                      <option value="bcom" className="bg-blue-900">B.Com / M.Com</option>
                      <option value="other" className="bg-blue-900">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="cta-message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Any specific questions or requirements..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400/60 focus:bg-white/15 transition-all resize-none"
                    />
                  </div>
                  <button
                    id="cta-submit-btn"
                    type="submit"
                    className="btn-primary w-full justify-center text-base"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Submit Application <Send className="w-4 h-4" />
                    </span>
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

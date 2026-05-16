import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Strengths from "@/components/sections/Strengths";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Faculty from "@/app/components/Faculty";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Faculty />
      <Strengths />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

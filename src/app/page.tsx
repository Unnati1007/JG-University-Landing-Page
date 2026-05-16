import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { CarTransition } from "@/components/ui/CarTransition";
import Programs from "@/components/sections/Programs";
import Strengths from "@/components/sections/Strengths";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <CarTransition reverse={false} />
      <Programs />
      <Strengths />
      <Partners />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

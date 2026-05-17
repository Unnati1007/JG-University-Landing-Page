import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import Programs from "@/components/sections/Programs";
import SalientFeatures from "@/components/sections/SalientFeatures";
import Strengths from "@/components/sections/Strengths";
import Campus from "@/components/sections/Campus";
import Leaders from "@/components/sections/Leaders";
import Faculty from "@/components/sections/Faculty";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { CarTransition } from "@/components/ui/CarTransition";
import { FloatingActions } from "@/components/ui/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WelcomeSection />
      <CarTransition reverse={false} />
      
      <Programs />
      <CarTransition reverse={true} />
      
      <SalientFeatures />
      <CarTransition reverse={false} />
      
      <Strengths />
      <CarTransition reverse={true} />
      
      <Campus />
      <CarTransition reverse={false} />
      
      <Leaders />
      <CarTransition reverse={true} />
      
      <Faculty />
      <CarTransition reverse={false} />
      
      <Partners />
      <CarTransition reverse={true} />
      
      <Testimonials />
      <CarTransition reverse={false} />
      
      <CTA />
      
      <Footer />
      <FloatingActions />
    </main>
  );
}

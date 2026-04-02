"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import BuilderSection from "../components/BuilderSection";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="w-full transition-all duration-300"
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white">
      {/* Premium Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--primary)] origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main className="overflow-x-hidden">
        <section className="relative z-10">
           <HeroSection />
        </section>
        
        <div className="flex flex-col gap-12 lg:gap-24 pb-24">
          <SectionWrapper><FeaturesSection /></SectionWrapper>
          <SectionWrapper><BuilderSection /></SectionWrapper>
          <SectionWrapper><HowItWorks /></SectionWrapper>
          <SectionWrapper><PricingSection /></SectionWrapper>
          <SectionWrapper><FAQSection /></SectionWrapper>
          <SectionWrapper><CTASection /></SectionWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
}

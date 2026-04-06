"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "lenis";
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

  // Balanced symmetric reveal for both up and down scrolling
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0.94, 1, 1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [30, 0, 0, -30]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity, 
        scale, 
        y,
        willChange: "transform, opacity"
      }}
      className="w-full flex flex-col"
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

  useEffect(() => {
    // Smoother and faster scroll duration
    const lenis = new Lenis({
      duration: 1.0, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1, // Slightly better response
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Premium Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--primary)] origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        
        <div className="flex flex-col">
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

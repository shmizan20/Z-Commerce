"use client";

import { motion, useScroll, useSpring, Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import BuilderSection from "../components/BuilderSection";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <>
      {/* Premium Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--primary)] origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
          <FeaturesSection />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
           <BuilderSection />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
           <HowItWorks />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
           <PricingSection />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
           <FAQSection />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
           <CTASection />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}

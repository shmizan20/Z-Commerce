"use client";

import { motion, Variants } from "framer-motion";
import StoreBuilderAnimation from "./StoreBuilderAnimation";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen pt-28 lg:pt-52 pb-16 lg:pb-24 overflow-hidden bg-white">
      {/* ── Stripe-style Colorful LIGHT Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[-25%] left-[-10%] w-[120%] h-[90%] bg-white -skew-y-12 z-0"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.25) 0px, transparent 55%),
              radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.22) 0px, transparent 55%),
              radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.2) 0px, transparent 55%),
              radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.18) 0px, transparent 55%)
            `
          }}
        />
        <div className="absolute top-[15%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-indigo-500/18 via-purple-500/12 to-transparent rounded-full blur-[140px] animate-pulse-slow ml-auto" />
        <div className="absolute bottom-[25%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-cyan-400/18 via-blue-400/12 to-transparent rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          <div className="max-w-xl pt-10">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-full px-4 py-1.5 mb-10 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[10px] font-black text-[#023E8A] uppercase tracking-[0.2em]">
                Powered by SSLWireless
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#1A1C20] leading-[1.1] lg:leading-[1.05] tracking-tight mb-6 lg:mb-8 group">
              Launch your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#2263C1] via-indigo-600 to-purple-600 bg-clip-text text-transparent">dream</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#2263C1]/40 to-purple-400/40 rounded-full opacity-30 blur-sm group-hover:opacity-70 transition-opacity duration-700" />
              </span>{" "}
              website in minutes.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl font-medium">
              The all-in-one platform to grow your brand online. Get a secure, high-performance website with integrated payments and delivery.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 lg:gap-5 mb-10 lg:mb-12">
              <a
                href="#"
                className="group relative inline-flex items-center justify-center gap-3 px-8 lg:px-10 py-4 text-base font-black text-white bg-[var(--primary)] rounded-full overflow-hidden transition-all shadow-[0_20px_50px_rgba(34,99,193,0.25)] hover:scale-[1.02] active:scale-95 w-full sm:min-w-[200px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span>Start free trial</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 lg:px-10 py-4 text-base font-black text-[#1A1C20] hover:text-[var(--primary)] bg-white border-2 border-gray-100 rounded-full hover:border-[var(--primary)]/20 hover:bg-[var(--primary)]/5 transition-all hover:-translate-y-0.5 shadow-sm w-full sm:min-w-[200px]"
              >
                How it works
              </a>
            </motion.div>
          </div>

          {/* Right - Animation section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-10 lg:block mt-8 lg:mt-0"
          >
            <div className="absolute inset-[-100px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
            <div className="relative z-10 scale-[0.85] sm:scale-100 lg:scale-100 origin-top">
              <StoreBuilderAnimation />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

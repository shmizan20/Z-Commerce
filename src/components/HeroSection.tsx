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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative pt-20 lg:pt-40 pb-0 overflow-hidden bg-white">
      {/* ── Stripe-style Colorful LIGHT Background ── */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
        }}
      >
        <div
          className="absolute inset-0 bg-white z-0"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.22) 0px, transparent 55%),
              radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.18) 0px, transparent 55%),
              radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.15) 0px, transparent 55%),
              radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.12) 0px, transparent 55%)
            `,
            clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 100%)'
          }}
        />
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/12 via-purple-500/8 to-transparent rounded-full blur-[100px] animate-pulse-slow ml-auto" />
        <div className="absolute top-[35%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/12 via-blue-400/8 to-transparent rounded-full blur-[90px] animate-pulse-slow" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start">

          <div className="max-w-xl pt-4 lg:pt-10">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-full px-4 py-1.5 mb-6 lg:mb-10 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[10px] font-black text-[#023E8A] uppercase tracking-[0.2em]">
                Powered by SSLWireless
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight leading-[1.1] mb-4 sm:mb-6"
            >
              Launch your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-indigo-500">dream website</span> in minutes.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-[var(--muted)] leading-relaxed mb-2 lg:mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              The all-in-one platform to grow your brand online. Get a secure, high-performance website with integrated payments and delivery.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <a
                href="#builder"
                className="flex-1 sm:flex-none h-12 px-6 sm:px-10 rounded-full bg-[var(--primary)] text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[var(--primary)]/25 whitespace-nowrap"
              >
                Start free trial
                <svg className="w-4 h-4 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#works"
                className="flex-1 sm:flex-none h-12 px-6 sm:px-10 rounded-full bg-white text-[var(--foreground)] text-sm sm:text-base font-bold flex items-center justify-center border border-gray-200 hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
              >
                How it works
              </a>
            </motion.div>
          </div>

          {/* Right - Animation section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:pl-10 lg:block mt-0"
          >
            <div className="absolute inset-[-20px] bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10 scale-[0.95] sm:scale-100 lg:scale-100 origin-top">
              <StoreBuilderAnimation />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

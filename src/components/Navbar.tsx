"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-6 lg:px-8 flex justify-center pointer-events-none transition-all duration-500">
      <div 
        className={`max-w-7xl w-full bg-white/95 backdrop-blur-2xl rounded-full px-6 py-2 md:py-3 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white/60 pointer-events-auto flex items-center justify-between transition-all duration-500 ${
          scrolled ? "scale-[0.98] shadow-[0_8px_30px_rgba(0,0,0,0.05)]" : "scale-100"
        }`}
      >
        <a href="#" className="flex items-center pl-4 shrink-0 group">
          <img 
            src="/logo.png" 
            alt="Z-Commerz" 
            className="h-5 md:h-[22px] w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-14">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-[#1A1C20]/75 hover:text-[#1A1C20] transition-colors tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2 pr-2 shrink-0">
          <a
            href="#"
            className="px-5 py-2.5 text-sm font-bold text-[#1A1C20]/80 hover:text-[#1A1C20] transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="px-6 py-3 text-sm font-black text-white bg-[var(--primary)] rounded-full hover:bg-[var(--primary)]/90 transition-all shadow-lg shadow-[var(--primary)]/20 hover:scale-[1.03] active:scale-95"
          >
            Start free trial
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden w-11 h-11 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 mr-1 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Backdrop & Content */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            className="absolute top-[102px] left-6 right-6 bg-white/95 backdrop-blur-3xl rounded-[32px] shadow-2xl border border-white/60 p-6 pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-6 py-4 rounded-2xl text-base font-bold text-[#1A1C20]/80 hover:bg-gray-50 hover:text-[#1A1C20] transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="h-[1px] bg-gray-100 my-3 mx-4" />
              <a href="#" className="px-6 py-4 text-center text-base font-bold text-[#1A1C20]/80 hover:text-[#1A1C20]">
                Login
              </a>
              <a href="#" className="mt-2 block w-full py-4 text-center text-base font-black text-white bg-[var(--primary)] rounded-2xl shadow-lg shadow-[var(--primary)]/20">
                Start free trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

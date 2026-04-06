"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Premium 4-step store creation animation.
 * Step 1: Business Info → Step 2: Integrations → Step 3: Templates → Step 4: Store Launched
 * Now features an interactive clickable stepper and a refined Achievement modal.
 */

const CARD_W = "w-full max-w-[620px]";

export default function StoreBuilderAnimation() {
  const [step, setStep] = useState(0);
  // 0 = business info, 1 = integrations, 2 = templates, 3 = launched, 4 = pause → loop

  const nextStep = useCallback(() => {
    setStep((s) => (s >= 4 ? 0 : s + 1));
  }, []);

  useEffect(() => {
    // Optimized durations for a snappier feel: [Business Info, Integrations, Template, Launch! (Modal), Final Pause]
    const durations = [2800, 2600, 3000, 2500, 800];
    const timer = setTimeout(nextStep, durations[step]);
    return () => clearTimeout(timer);
  }, [step, nextStep]);

  const activeStep = Math.min(step, 3);

  return (
    <div className="relative w-full h-auto flex items-start justify-center">
      {/* Ambient glows */}
      <div className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[var(--primary)]/[0.07] via-[var(--accent)]/[0.05] to-purple-500/[0.06] rounded-full blur-[120px] animate-pulse-glow" />

      {/* ── Stepper + Card stacked ── */}
      <div className={`relative ${CARD_W} px-4 flex flex-col gap-3 scale-[0.85] sm:scale-100 origin-top`}>
        {/* INTERACTIVE CLICKABLE STEPPER - FIXED OVERFLOW */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl px-3 py-2.5 shadow-lg shadow-black/5 border border-white/60 z-30 flex items-center justify-between gap-1 sm:gap-3 overflow-hidden">
          {[
            { num: 1, label: "Info", icon: "📝" },
            { num: 2, label: "Integrate", icon: "🔗" },
            { num: 3, label: "Templates", icon: "🎨" },
            { num: 4, label: "Launch", icon: "🚀" },
          ].map((s, i) => {
            const isActive = i === activeStep;
            const isCompleted = i < step;
            
            return (
              <div key={s.num} className="flex items-center flex-1 justify-center last:flex-none last:justify-end">
                <button
                  onClick={() => setStep(i)}
                  className="group flex items-center gap-1.5 outline-none"
                >
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-500 ${
                      isCompleted
                        ? "bg-[var(--primary)] text-white"
                        : isActive
                          ? "bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white scale-110 shadow-lg shadow-[var(--primary)]/30"
                          : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="scale-90">{s.icon}</span>
                    )}
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-semibold transition-colors duration-300 whitespace-nowrap hidden lg:block ${
                      isActive ? "text-[var(--foreground)]" : isCompleted ? "text-[var(--primary)]" : "text-gray-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
                {i < 3 && (
                  <div className={`flex-1 h-[2px] mx-1 sm:mx-2 rounded transition-all duration-700 min-w-[10px] ${i < step ? "bg-[var(--primary)]/40" : "bg-gray-200"}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Card container - flush with stepper */}
        <div className="relative min-h-[500px] lg:min-h-[580px]">

          {/* ═══════ STEP 1: BUSINESS INFO ═══════ */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              step === 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/8 border border-white/60 p-5 lg:p-8">
              <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] mb-1">Tell us about your business</h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] mb-5 sm:mb-6">Set up your store perfectly in seconds.</p>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-semibold text-gray-500 mb-1.5 block">Store Name</label>
                  <div className="h-11 rounded-xl border border-gray-200 px-4 flex items-center bg-white shadow-sm">
                    <TypewriterText text="Fresh Organic BD" active={step === 0} delay={500} className="text-sm" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-gray-500 mb-1.5 block">Business Category</label>
                  <div className="h-11 rounded-xl border-2 border-[var(--primary)]/30 bg-[var(--primary)]/5 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🥬</span>
                      <span className="text-xs sm:text-sm font-semibold text-[var(--primary)]">Grocery & Organic Food</span>
                    </div>
                    <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-gray-500 mb-1.5 block">Store Logo</label>
                  <div className="h-16 rounded-xl border-2 border-dashed border-gray-200 flex items-center gap-3 px-4 bg-gray-50/50">
                    <div
                      className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md transition-all duration-700 ${
                        step === 0 ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                      style={{ transitionDelay: "1200ms" }}
                    >
                      <span className="text-xl">🌿</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--foreground)]">Fresh Organic BD</p>
                      <p className="text-[9px] text-green-600 font-medium flex items-center gap-0.5">
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        Logo uploaded
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-gray-500 mb-1.5 block">Store URL</label>
                  <div className="h-11 rounded-xl border border-gray-200 px-4 flex items-center bg-white shadow-sm overflow-hidden">
                    <span className="text-[10px] text-[var(--muted)]">https://</span>
                    <span className="text-xs font-bold text-[var(--foreground)] truncate">freshorganic</span>
                    <span className="text-[10px] text-[var(--muted)]">.zcommerz...</span>
                    <svg className="w-4 h-4 text-green-500 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════ STEP 2: INTEGRATIONS ═══════ */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              step === 1 ? "opacity-100 translate-x-0" : step < 1 ? "opacity-0 translate-x-8 pointer-events-none" : "opacity-0 -translate-x-8 pointer-events-none"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/8 border border-white/60 p-5 lg:p-8">
              <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] mb-1">Payment & delivery</h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] mb-5">One-click setup. Start accepting orders instantly.</p>

              <IntegrationCard
                name="SSLCOMMERZ"
                description="Secure payment for BD"
                icon={<Image src="/icons/sslcommerz.png" alt="SSL" width={40} height={40} className="w-full h-full object-contain" priority />}
                features={["bKash", "Nagad", "Cards"]}
                delay={200}
                active={step === 1}
              />

              <div className="space-y-2 mt-4">
                <IntegrationCard 
                  name="SteadFast" 
                  description="Nationwide delivery" 
                  icon={<Image src="/icons/sTEADfast.png" alt="SF" width={40} height={40} className="w-full h-full object-contain" />} 
                  features={["N-wide", "COD"]} 
                  delay={500} 
                  active={step === 1} 
                />
                <IntegrationCard 
                  name="Pathao" 
                  description="Same-day delivery" 
                  icon={<Image src="/icons/Pathao.png" alt="PH" width={40} height={40} className="w-full h-full object-contain" />} 
                  features={["Same Day"]} 
                  delay={900} 
                  active={step === 1} 
                />
              </div>
            </div>
          </div>

          {/* ═══════ STEP 3: TEMPLATES ═══════ */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              step === 2 ? "opacity-100 translate-x-0" : step < 2 ? "opacity-0 translate-x-8 pointer-events-none" : "opacity-0 -translate-x-8 pointer-events-none"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/8 border border-white/60 p-5 lg:p-8">
              <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] mb-1">Choose store design</h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] mb-5">Pick a template that matches your brand.</p>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
                {[
                  { name: "Green Market", cat: "Grocery", color: "from-emerald-400 to-green-600", emoji: "🥬", selected: true },
                  { name: "Fashion Hub", cat: "Fashion", color: "from-rose-400 to-pink-600", emoji: "👗", selected: false },
                  { name: "TechMart", cat: "Electronics", color: "from-blue-400 to-indigo-600", emoji: "🎧", selected: false },
                  { name: "BookNest", cat: "Books", color: "from-violet-400 to-purple-600", emoji: "📚", selected: false },
                ].map((tpl, i) => {
                  const isSelected = tpl.selected;
                  return (
                    <div
                      key={tpl.name}
                      className={`rounded-xl overflow-hidden border-2 transition-all duration-500 ${
                        isSelected
                          ? "border-[var(--primary)] shadow-lg shadow-[var(--primary)]/15 scale-[1.02]"
                          : "border-gray-100"
                      }`}
                      style={{ transitionDelay: `${i * 80}ms` }}
                    >
                      <div className={`h-[60px] bg-gradient-to-br ${tpl.color} relative flex items-center justify-center`}>
                        <div className="text-[20px] drop-shadow-lg">{tpl.emoji}</div>
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                            <svg className="w-3 h-3 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="bg-white px-2 py-2">
                        <p className="text-[10px] font-bold text-[var(--foreground)] truncate">{tpl.name}</p>
                        <p className="text-[8px] text-[var(--muted)]">{tpl.cat}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ═══════ STEP 4: STORE LAUNCHED ═══════ */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              step >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
            }`}
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/10 border border-white/60 overflow-hidden">
              {/* Store header - primary color */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-md">
                    <span className="text-sm">🌿</span>
                  </div>
                  <span className="text-xs font-bold text-white tracking-tight">Fresh Organic</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 scale-90 sm:scale-100">
                  {["Home", "Products"].map((x) => (
                    <span key={x} className="text-[10px] text-white/80 font-medium">{x}</span>
                  ))}
                  <div className="w-6 h-6 rounded-lg bg-white/15 flex items-center justify-center relative">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[6px] font-bold flex items-center justify-center">3</div>
                  </div>
                </div>
              </div>

              {/* Stats overview - MOBILE OPTIMIZED */}
              <div className="grid grid-cols-2 gap-2 px-4 sm:px-6 mt-4">
                {[
                  { label: "PRODUCTS", val: "1.2k", add: "+12", icon: "📦" },
                  { label: "CUSTOMERS", val: "4.8k", add: "+24%", icon: "💎" },
                  { label: "ORDERS", val: "850", add: "+18%", icon: "🛒" },
                  { label: "PROFIT", val: "৳ 12k", add: "+15%", icon: "📈" },
                ].map((s, idx) => (
                   <div key={idx} className="bg-white rounded-xl p-2 sm:p-3 border border-gray-100 shadow-sm flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                        <span className="text-sm sm:text-base">{s.icon}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[7px] sm:text-[8px] font-bold text-gray-400 tracking-tight uppercase leading-tight">{s.label}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <p className="text-sm sm:text-base font-black text-[#1A1C20] tracking-tight">{s.val}</p>
                          <span className="text-[6px] sm:text-[7px] font-black text-green-600 bg-green-50 px-1 py-0.5 rounded-md whitespace-nowrap ring-1 ring-green-500/10 shrink-0">{s.add}</span>
                        </div>
                      </div>
                   </div>
                ))}
              </div>

              {/* Store Content - MOBILE SCALED */}
              <div className="px-4 sm:px-6 mt-4 pb-1">
                <div className="h-[2px] bg-gray-100 w-full rounded-full mb-4 overflow-hidden">
                  <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.5, delay: 0.5 }} className="w-1/3 h-full bg-indigo-500" />
                </div>
                
                <h4 className="text-base sm:text-lg font-black text-[#1A1C20] mb-4 text-center">Built for growth</h4>
                <p className="text-[10px] text-gray-500 text-center mb-6 max-w-[240px] mx-auto leading-relaxed">Manage products, orders, and scale your business effortlessly.</p>
                
                <div className="space-y-3">
                  <div className="h-12 rounded-xl border border-gray-100 p-4 flex items-center bg-gray-50/50">
                    <span className="text-xs font-bold text-gray-400 mr-2">Store URL</span>
                    <span className="text-xs font-black text-[#1A1C20] truncate">freshorganic<span className="text-gray-400">.zcommerz.com</span></span>
                  </div>
                </div>
              </div>

              {/* Congrats Step strictly logic-based */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-40 flex items-center justify-center p-4"
                >
                  <div className="bg-white/95 backdrop-blur-3xl rounded-[32px] shadow-[0_32px_64px_-16px_rgba(34,99,193,0.2)] border border-white p-6 sm:p-8 flex flex-col items-center text-center max-w-[280px] sm:max-w-sm">
                    <CenterExplosionConfetti />
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary)] to-indigo-600 flex items-center justify-center shadow-lg mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-black text-[var(--foreground)] mb-1 tracking-tight">Your Store is Live! 🎉</h4>
                    <p className="text-xs text-[var(--muted)] mb-6 truncate max-w-full">freshorganic.zcommerz.com</p>
                    <div className="bg-[var(--primary)]/5 px-4 py-2 rounded-full border border-[var(--primary)]/10">
                      <span className="text-[9px] text-[var(--primary)] font-black uppercase tracking-widest">Accepting Orders</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Floating elements scaled and moved INWARDS for mobile */}
        
        {/* New Order Badge */}
        <div className={`absolute top-[180px] -right-2 sm:-right-8 bg-white rounded-xl shadow-2xl border border-white/60 p-2.5 transition-all duration-500 z-50 ${step >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md">
              <span className="text-sm">🛒</span>
            </div>
            <div className="min-w-[80px]">
              <p className="text-[10px] font-bold leading-none">New Order!</p>
              <p className="text-[8px] text-gray-400 mt-1">Organic Honey × 2</p>
            </div>
          </div>
        </div>

        {/* Sales Badge */}
        <div className={`absolute bottom-[100px] -left-2 sm:-left-8 bg-white rounded-xl shadow-2xl border border-white/60 p-2.5 transition-all duration-500 z-50 ${step >= 3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}`}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center shadow-md">
              <span className="text-sm">📈</span>
            </div>
            <div className="min-w-[80px]">
              <p className="text-[10px] font-bold leading-none">+24% Sales</p>
              <p className="text-[8px] text-green-500 font-bold mt-1">↑ This week</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ─── Sub-components ─── */

function CenterExplosionConfetti() {
  const particlesCount = 56;
  const colors = ["#2263C1", "#F59E0B", "#EF4444", "#10B981", "#8B5CF6", "#EC4899", "#2DD4BF"];
  
  return (
    <div className="absolute top-[80px] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible">
      {Array.from({ length: particlesCount }).map((_, i) => {
        const angle = (i / particlesCount) * 360 + Math.random() * 20;
        const color = colors[i % colors.length];
        const shapeType = i % 4; // 0=square, 1=circle, 2=line, 3=triangle
        const distance = 140 + Math.random() * 120;
        const duration = 2.0 + Math.random() * 1.0;
        
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0, rotate: 0 }}
            animate={{
              x: [0, Math.cos((angle * Math.PI) / 180) * distance],
              y: [0, Math.sin((angle * Math.PI) / 180) * distance],
              opacity: [1, 1, 0.6, 0],
              scale: [0, 1.2, 0.6, 0.4],
              rotate: [0, angle + 360 + Math.random() * 360],
            }}
            transition={{
              duration: duration,
              delay: 0.1 + (Math.random() * 0.1),
              ease: [0.1, 0.8, 0.2, 1],
            }}
            className="absolute"
            style={{
              width: shapeType === 2 ? "12px" : "8px",
              height: shapeType === 2 ? "3px" : "8px",
              backgroundColor: shapeType === 3 ? "transparent" : color,
              borderRadius: shapeType === 1 ? "50%" : "2px",
              borderBottom: shapeType === 3 ? `8px solid ${color}` : "none",
              borderLeft: shapeType === 3 ? "5px solid transparent" : "none",
              borderRight: shapeType === 3 ? "5px solid transparent" : "none",
              willChange: "transform, opacity"
            }}
          />
        );
      })}
    </div>
  );
}

function TypewriterText({ text, active, delay, className = "" }: { text: string; active: boolean; delay: number; className?: string }) {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (!active) { setChars(0); return; }
    if (chars >= text.length) return;
    const timer = setTimeout(() => setChars((c) => c + 1), chars === 0 ? delay : 55 + Math.random() * 45);
    return () => clearTimeout(timer);
  }, [active, chars, text, delay]);

  return (
    <span className={`font-medium text-[var(--foreground)] ${className}`}>
      {text.slice(0, chars)}
      {active && chars < text.length && (
        <span className="inline-block w-[2px] h-5 bg-[var(--primary)] ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
}

function IntegrationCard({ name, description, icon, features, delay, active }: {
  name: string; description: string; icon: React.ReactNode; features: string[]; delay: number; active: boolean;
}) {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!active) { setConnected(false); return; }
    const timer = setTimeout(() => setConnected(true), delay);
    return () => clearTimeout(timer);
  }, [active, delay]);

  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-500 ${
      connected ? "border-green-200 bg-green-50/50 shadow-md shadow-green-500/5" : "border-gray-100 bg-white"
    }`}>
      <div className="w-12 h-12 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-[var(--foreground)] leading-tight">{name}</p>
        <p className="text-[11px] text-[var(--muted)] mt-0.5 line-clamp-1">{description}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {features.map((f) => (
            <span key={f} className={`text-[9px] font-bold px-2 py-0.5 rounded-md transition-colors duration-500 ${
              connected ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400 font-medium"
            }`}>{f}</span>
          ))}
        </div>
      </div>
      <div className={`w-11 h-6 rounded-full transition-all duration-400 relative shrink-0 ${
        connected ? "bg-green-500 shadow-md shadow-green-500/30" : "bg-gray-200"
      }`}>
        <div className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform duration-400 ${
          connected ? "translate-x-[22px]" : "translate-x-[3px]"
        }`} />
      </div>
    </div>
  );
}

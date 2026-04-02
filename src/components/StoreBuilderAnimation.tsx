"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Premium 4-step store creation animation.
 * Step 1: Business Info → Step 2: Integrations → Step 3: Templates → Step 4: Store Launched
 * Now features an interactive clickable stepper and a refined Achievement modal.
 */

const CARD_W = "w-[620px]";

export default function StoreBuilderAnimation() {
  const [step, setStep] = useState(0);
  // 0 = business info, 1 = integrations, 2 = templates, 3 = launched, 4 = pause → loop

  const nextStep = useCallback(() => {
    setStep((s) => (s >= 4 ? 0 : s + 1));
  }, []);

  useEffect(() => {
    // durations in ms: [Business Info, Integrations, Template, Launch! (Modal), Final Pause]
    const durations = [4000, 4000, 4500, 3000, 1000];
    const timer = setTimeout(nextStep, durations[step]);
    return () => clearTimeout(timer);
  }, [step, nextStep]);

  const activeStep = Math.min(step, 3);

  return (
    <div className="relative w-full min-h-[720px] lg:min-h-[780px] flex items-start justify-center">
      {/* Ambient glows */}
      <div className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[var(--primary)]/[0.07] via-[var(--accent)]/[0.05] to-purple-500/[0.06] rounded-full blur-[120px] animate-pulse-glow" />

      {/* ── Stepper + Card stacked ── */}
      <div className={`relative ${CARD_W} flex flex-col gap-4`}>
        {/* INTERACTIVE CLICKABLE STEPPER */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-3.5 shadow-lg shadow-black/5 border border-white/60 z-30 flex items-center justify-between">
          {[
            { num: 1, label: "Business Info", icon: "📝" },
            { num: 2, label: "Integrations", icon: "🔗" },
            { num: 3, label: "Template", icon: "🎨" },
            { num: 4, label: "Launch!", icon: "🚀" },
          ].map((s, i) => {
            const isActive = i === activeStep;
            const isCompleted = i < step;
            
            return (
              <div key={s.num} className="flex items-center">
                <button
                  onClick={() => setStep(i)}
                  className="group flex items-center gap-2 outline-none"
                  title={`Go to ${s.label}`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                      isCompleted
                        ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/25"
                        : isActive
                          ? "bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white shadow-lg shadow-[var(--primary)]/30 scale-110"
                          : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600"
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span>{s.icon}</span>
                    )}
                  </div>
                  <span
                    className={`text-xs font-semibold transition-colors duration-300 whitespace-nowrap hidden md:block ${
                      isActive ? "text-[var(--foreground)]" : isCompleted ? "text-[var(--primary)]" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
                {i < 3 && (
                  <div className={`w-8 h-[2px] mx-1.5 rounded transition-all duration-700 ${i < step ? "bg-[var(--primary)]/40" : "bg-gray-200"}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Card container - flush with stepper */}
        <div className="relative min-h-[580px]">

          {/* ═══════ STEP 1: BUSINESS INFO ═══════ */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              step === 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/8 border border-white/60 p-8">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">Tell us about your business</h3>
              <p className="text-sm text-[var(--muted)] mb-6">This helps us set up your store perfectly.</p>

              <div className="space-y-5">
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-2 block">Store Name</label>
                  <div className="h-12 rounded-xl border border-gray-200 px-4 flex items-center bg-white">
                    <TypewriterText text="Fresh Organic BD" active={step === 0} delay={500} className="text-sm" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-2 block">Business Category</label>
                  <div className="h-12 rounded-xl border-2 border-[var(--primary)]/30 bg-[var(--primary)]/5 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">🥬</span>
                      <span className="text-sm font-semibold text-[var(--primary)]">Grocery & Organic Food</span>
                    </div>
                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-2 block">Store Logo</label>
                  <div className="h-20 rounded-xl border-2 border-dashed border-gray-200 flex items-center gap-4 px-5 bg-gray-50/50">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg transition-all duration-700 ${
                        step === 0 ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                      style={{ transitionDelay: "1200ms" }}
                    >
                      <span className="text-2xl">🌿</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--foreground)]">Fresh Organic BD</p>
                      <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        Logo uploaded successfully
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-2 block">Store URL</label>
                  <div className="h-12 rounded-xl border border-gray-200 px-4 flex items-center bg-white">
                    <span className="text-xs text-[var(--muted)]">https://</span>
                    <span className="text-sm font-bold text-[var(--foreground)]">freshorganic</span>
                    <span className="text-xs text-[var(--muted)]">.zcommerz.com</span>
                    <svg className="w-5 h-5 text-green-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/8 border border-white/60 p-8">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">Connect payment & delivery</h3>
              <p className="text-sm text-[var(--muted)] mb-6">One-click setup. Start accepting orders instantly.</p>

              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Payment Gateway</p>
              <IntegrationCard
                name="SSLCOMMERZ"
                description="Secure payment gateway for Bangladesh"
                icon={<img src="/icons/sslcommerz.png" alt="SSLCOMMERZ" className="w-full h-full object-contain" />}
                features={["bKash", "Nagad", "Cards", "Banking"]}
                delay={300}
                active={step === 1}
              />

              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 mt-5">Delivery Partners</p>
              <div className="space-y-3">
                <IntegrationCard 
                  name="SteadFast" 
                  description="Reliable nationwide courier service" 
                  icon={<img src="/icons/sTEADfast.png" alt="SteadFast" className="w-full h-full object-contain" />} 
                  features={["Nationwide", "COD", "Express"]} 
                  delay={700} 
                  active={step === 1} 
                />
                <IntegrationCard 
                  name="Pathao" 
                  description="Same-day delivery in Dhaka" 
                  icon={<img src="/icons/Pathao.png" alt="Pathao" className="w-full h-full object-contain" />} 
                  features={["Same Day", "Express"]} 
                  delay={1200} 
                  active={step === 1} 
                />
                <IntegrationCard 
                  name="eCourier" 
                  description="Nationwide parcel delivery" 
                  icon={<img src="/icons/Ecourier.png" alt="eCourier" className="w-full h-full object-contain" />} 
                  features={["Standard", "COD"]} 
                  delay={1700} 
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
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/8 border border-white/60 p-8">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">Choose your store design</h3>
              <p className="text-sm text-[var(--muted)] mb-6">Pick a template that matches your brand. Customize anytime.</p>

              <div className="grid grid-cols-3 gap-3.5">
                {[
                  { name: "Green Market", cat: "Organic Food", color: "from-emerald-400 to-green-600", emoji: "🥬🥑🍯", selected: true },
                  { name: "Fashion Hub", cat: "Clothing & Fashion", color: "from-rose-400 to-pink-600", emoji: "👗👜👠", selected: false },
                  { name: "TechMart", cat: "Electronics", color: "from-blue-400 to-indigo-600", emoji: "🎧📱⌚", selected: false },
                  { name: "BookNest", cat: "Books & Stationery", color: "from-violet-400 to-purple-600", emoji: "📚✏️🎒", selected: false },
                  { name: "HomeStyle", cat: "Furniture & Decor", color: "from-amber-400 to-orange-500", emoji: "🛋️🪴🕯️", selected: false },
                  { name: "SportsFit", cat: "Sports & Fitness", color: "from-cyan-400 to-teal-600", emoji: "⚽👟🏋️", selected: false },
                ].map((tpl, i) => {
                  const isSelected = tpl.selected;
                  return (
                    <div
                      key={tpl.name}
                      className={`rounded-2xl overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                        isSelected
                          ? "border-[var(--primary)] shadow-xl shadow-[var(--primary)]/15 scale-[1.03] -translate-y-1 ring-2 ring-[var(--primary)]/20"
                          : "border-gray-100 hover:shadow-md hover:-translate-y-0.5"
                      }`}
                      style={{ transitionDelay: `${i * 80}ms` }}
                    >
                      <div className={`h-[90px] bg-gradient-to-br ${tpl.color} relative flex items-center justify-center`}>
                        <div className="text-[28px] tracking-widest opacity-90 drop-shadow-lg">{tpl.emoji}</div>
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-lg" style={{ animation: "scale-in 0.3s ease-out" }}>
                            <svg className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="bg-white px-3 py-2.5">
                        <p className="text-xs font-bold text-[var(--foreground)]">{tpl.name}</p>
                        <p className="text-[10px] text-[var(--muted)]">{tpl.cat}</p>
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
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/8 border border-white/60 overflow-hidden">
              {/* Store header - primary color */}
              <div className="flex items-center justify-between px-6 py-3.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-md">
                    <span className="text-lg">🌿</span>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block leading-tight">Fresh Organic BD</span>
                    <span className="text-[8px] text-white/60">freshorganic.zcommerz.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {["Home", "Products", "About"].map((x) => (
                    <span key={x} className="text-[11px] text-white/80 font-medium hover:text-white cursor-pointer">{x}</span>
                  ))}
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center relative">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[7px] font-bold flex items-center justify-center">3</div>
                  </div>
                </div>
              </div>

              {/* Hero banner with organic image */}
              <div
                className={`mx-5 mt-4 rounded-2xl overflow-hidden relative transition-all duration-700 ${
                  step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <div className="h-[180px] relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/organic_store_banner.png)' }}
                  />
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                    <p className="text-white text-lg font-extrabold drop-shadow-md">Fresh Organic Produce 🌱</p>
                    <p className="text-white/90 text-xs mt-1 drop-shadow-md">Farm to table, delivered to your door</p>
                    <div className="mt-3 inline-flex items-center gap-1 bg-white rounded-lg px-2 py-1 shadow-lg border border-white/50 w-fit">
                      <span className="text-[var(--primary)] text-[8px] font-extrabold uppercase tracking-tight">Shop Now</span>
                      <svg className="w-2.5 h-2.5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products with clear images */}
              <div className="px-5 mt-4 pb-3">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold">Featured Products</p>
                  <span className="text-[10px] text-[var(--primary)] font-semibold cursor-pointer">View All →</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { name: "Organic Honey", price: "৳ 450", color: "from-amber-100 to-amber-200", emoji: "🍯", badge: "Best Seller" },
                    { name: "Fresh Basil", price: "৳ 60", color: "from-green-100 to-green-200", emoji: "🌿", badge: "" },
                    { name: "Almond Milk", price: "৳ 350", color: "from-orange-50 to-amber-100", emoji: "🥛", badge: "New" },
                    { name: "Quinoa Pack", price: "৳ 520", color: "from-yellow-100 to-yellow-200", emoji: "🌾", badge: "" },
                  ].map((p, i) => (
                    <div
                      key={p.name}
                      className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer"
                      style={{
                        transitionDelay: `${i * 150 + 400}ms`,
                        opacity: step >= 3 ? 1 : 0,
                        transform: step >= 3 ? "translateY(0)" : "translateY(10px)",
                      }}
                    >
                      <div className={`h-16 rounded-lg bg-gradient-to-br ${p.color} mb-2 flex items-center justify-center relative`}>
                        <span className="text-2xl drop-shadow-sm">{p.emoji}</span>
                        {p.badge && (
                          <span className="absolute top-1 left-1 text-[6px] font-bold bg-[var(--primary)] text-white px-1.5 py-0.5 rounded-md">{p.badge}</span>
                        )}
                      </div>
                      <p className="text-[11px] font-semibold truncate">{p.name}</p>
                      <p className="text-[11px] font-bold text-[var(--primary)]">{p.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment / Delivery bar */}
              <div
                className={`mx-5 mb-5 mt-2 rounded-xl bg-gray-50 px-4 py-3 flex items-center justify-between transition-all duration-500 ${
                  step >= 3 ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-[var(--muted)]">Payment</span>
                  <div className="h-4 w-12 flex items-center justify-center opacity-80">
                    <img src="/icons/sslcommerz.png" alt="SSL" className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-[var(--muted)]">Delivery</span>
                  <div className="h-4 w-10 overflow-hidden opacity-80">
                    <img src="/icons/sTEADfast.png" alt="SteadFast" className="h-full w-full object-contain" />
                  </div>
                  <div className="h-4 w-10 overflow-hidden opacity-80">
                    <img src="/icons/Pathao.png" alt="Pathao" className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Congrats Modal - Highly Refined Size & 80% Opacity */}
              <AnimatePresence mode="wait">
                {step === 3 && (
                  <motion.div
                    key="congrats-notification"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
                  >
                    <div className="bg-white/80 backdrop-blur-[40px] rounded-[32px] shadow-[0_24px_50px_-12px_rgba(34,99,193,0.2)] border border-white/50 p-8 flex flex-col items-center text-center max-w-sm pointer-events-auto relative">
                      
                      {/* EXPLODING CENTER CONFETTI */}
                      <CenterExplosionConfetti />

                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-indigo-600 flex items-center justify-center shadow-xl mb-6 shadow-[var(--primary)]/30 relative z-10 border-[3px] border-white/60">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      
                      <div className="relative z-10">
                        <h4 className="text-2xl font-black text-[var(--foreground)] mb-2 tracking-tight leading-tight">Congratulations!</h4>
                        <p className="text-base font-bold text-[var(--primary)] mb-1">Your Store is Live! 🎉</p>
                        <p className="text-[12px] text-[var(--muted)] mb-8 font-medium">freshorganic.zcommerz.com</p>
                        
                        <div className="flex items-center justify-center gap-2 bg-[var(--primary)]/5 px-5 py-2.5 rounded-full border border-[var(--primary)]/10">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[10px] text-[var(--primary)] font-black uppercase tracking-widest leading-none">Accepting Orders Now</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Floating accent cards (outside the main stack) */}
      
      {/* Step 3: Pick Your Style - floating badge */}
      <div className={`absolute -right-20 top-[100px] bg-white rounded-2xl shadow-xl shadow-black/6 border border-white/60 px-5 py-3.5 animate-float transition-opacity duration-500 ${step === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
            <span className="text-white text-sm">✨</span>
          </div>
          <div>
            <p className="text-xs font-bold">Pick Your Style</p>
            <p className="text-[10px] text-gray-400">Choose your favorite template</p>
          </div>
        </div>
      </div>

      {/* Step 4: Floating badges strictly as sketched - half in / half out */}
      
      {/* Top-Right Badge: New Order */}
      <div className={`absolute -right-12 top-[160px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-white/60 px-4 py-3 transition-all duration-500 z-20 ${step >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`} style={{ transitionDelay: "300ms" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
            <span className="text-white text-sm">🛒</span>
          </div>
          <div>
            <p className="text-[11px] font-bold text-[var(--foreground)]">New Order!</p>
            <p className="text-[9px] text-[var(--muted)] font-medium">Organic Honey × 2</p>
          </div>
        </div>
      </div>

      {/* Bottom-Left Badge: +24% Sales */}
      <div className={`absolute -left-12 bottom-[220px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-white/60 px-4 py-3 transition-all duration-500 z-20 ${step >= 3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}`} style={{ transitionDelay: "800ms" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-bold text-[var(--foreground)]">+24% Sales</p>
            <p className="text-[9px] text-green-500 font-bold">↑ This week</p>
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
        const duration = 2.2 + Math.random() * 1.3;
        
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
              delay: 0.3 + (Math.random() * 0.15),
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

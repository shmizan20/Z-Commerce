"use client";

import { useState, useRef } from "react";
import { useInView } from "../hooks/useInView";

const plans = [
  {
    name: "START",
    description: "For new founders",
    monthly: 350,
    yearly: 3570, // 15% off (4200 - 630)
    originalYearly: 4200,
    gateway: 3000,
    gatewayFeatures: ["Payment Gateway"],
    cta: "Get Started",
    recommended: false,
    features: [
      { text: "List up to 20 products", included: true },
      { text: "Sell up to 50 orders / month", included: true },
      { text: "Payments & delivery integrated", included: true },
      { text: "Basic sales & order dashboard", included: true },
      { text: "Order tracking for pending / delivered products", included: true },
      { text: "SMS alerts for shop owner", included: true },
      { text: "Automated order status updates to customers (Order Received, Shipped, Delivered)", included: true },
      { text: "1 shop owner access", included: true },
      { text: "Unlimited customers", included: true },
      { text: "No coupons or campaigns", included: false },
    ],
  },
  {
    name: "GROWTH",
    description: "For growing businesses",
    monthly: 850,
    yearly: 8670, // 15% off (10200 - 1530)
    originalYearly: 10200,
    gateway: 5000,
    gatewayFeatures: ["Payment Gateway", "Payment Link"],
    cta: "Get Started",
    recommended: true,
    features: [
      { text: "List up to 50 products", included: true },
      { text: "Sell up to 100 orders / month", included: true },
      { text: "Payments & delivery integrated", included: true },
      { text: "Advanced sales reports for sales, orders, pending & delivered order reports", included: true },
      { text: "Show top-selling products insights (Daily/Weekly/Monthly)", included: true },
      { text: "Show customer insights (repeat vs new customers)", included: true },
      { text: "Automated order status updates to customers (Order Received, Shipped, Delivered)", included: true },
      { text: "Will show low stock alerts", included: true },
      { text: "Access to owner + 2 staff access", included: true },
      { text: "Unlimited customers", included: true },
      { text: "Coupons available", included: true },
    ],
  },
  {
    name: "PRO",
    description: "For scaling enterprises",
    monthly: 1950,
    yearly: 19890, // 15% off (23400 - 3510)
    originalYearly: 23400,
    gateway: 10000,
    gatewayFeatures: ["Payment Gateway", "Payment Link", "Digital EMI", "Invoice", "SDK"],
    cta: "Get Started",
    recommended: false,
    features: [
      { text: "List up to Unlimited product", included: true },
      { text: "Sell up to Unlimited orders", included: true },
      { text: "Payments & delivery integrated", included: true },
      { text: "Summary of total sales, total orders, pending orders and delivered orders.", included: true },
      { text: "Show top-selling products insights (Daily/Weekly/Monthly)", included: true },
      { text: "Show customer insights (repeat vs new customers)", included: true },
      { text: "Includes conversion funnels (where users drop off)", included: true },
      { text: "Shows abandoned cart value", included: true },
      { text: "Shows inventory aging reports (what's not selling)", included: true },
      { text: "Automated order status updates to customers (Order Received, Shipped, Delivered)", included: true },
      { text: "Owner + 4 staff access", included: true },
      { text: "Unlimited customers", included: true },
      { text: "Coupons & campaigns", included: true },
    ],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);
  const [gateways, setGateways] = useState<{ [key: string]: boolean }>({ "PRO": true });
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, 0.1);

  const toggleGateway = (planName: string) => {
    setGateways(prev => ({ ...prev, [planName]: !prev[planName] }));
  };

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight mb-4">
            Simpler pricing
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Start small and scale as you grow. No hidden fees.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-16">
          <div className="inline-flex items-center p-1 bg-[#F2F5F9] rounded-full border border-[#E2E8F0] shadow-inner">
            <button
              onClick={() => setYearly(false)}
              className={`px-10 py-3 rounded-full text-[15px] font-black transition-all duration-300 ${
                !yearly ? "bg-white text-[#2263C1] shadow-lg shadow-black/5" : "text-[#1A1C20]/40 hover:text-[#1A1C20]/60"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-8 py-3 rounded-full text-[15px] font-black flex items-center gap-3 transition-all duration-300 ${
                yearly ? "bg-white text-[#2263C1] shadow-lg shadow-black/5" : "text-[#1A1C20]/40 hover:text-[#1A1C20]/60"
              }`}
            >
              Yearly
              <span className={`px-2.5 py-1.5 rounded-full text-[10px] font-black tracking-wider transition-all duration-300 ${
                yearly ? "bg-[#10B981] text-white" : "bg-[#10B981]/10 text-[#10B981]"
              }`}>
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const hasGateway = gateways[plan.name] || false;
            const currentBasePrice = yearly ? plan.yearly : plan.monthly;
            const totalPrice = hasGateway ? (currentBasePrice + plan.gateway) : currentBasePrice;

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border-2 pt-10 pb-8 px-7 transition-all duration-500 bg-white flex flex-col h-full ${
                  plan.recommended
                    ? "border-[var(--primary)] shadow-xl shadow-[var(--primary)]/10 lg:scale-[1.03] z-10"
                    : "border-[var(--border)]/60 hover:shadow-lg hover:shadow-black/5"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#023E8A] text-white text-[10px] font-black tracking-widest px-6 py-1.5 rounded-md uppercase shadow-lg">
                    Recommended
                  </div>
                )}

                <div className="text-center mb-5">
                  <h3 className="text-sm font-black text-[#023E8A] uppercase tracking-[0.2em] mb-2">{plan.name}</h3>
                  <div className="flex flex-col items-center mb-6">
                    <div className="flex items-baseline justify-center gap-1.5 mb-1">
                      <span className="text-2xl font-bold text-gray-900">৳</span>
                      <span className="text-5xl font-[1000] text-gray-900 tracking-tighter">
                        {currentBasePrice.toLocaleString()}
                      </span>
                      <span className="text-lg font-bold text-gray-400">/{yearly ? "yr" : "mo"}</span>
                    </div>
                    {yearly && (
                      <div className="flex items-center gap-2 mt-1 -mb-1 animate-in fade-in slide-in-from-top-1 duration-500">
                        <span className="text-sm font-bold text-gray-400 line-through">৳{plan.originalYearly.toLocaleString()}</span>
                        <span className="text-[10px] font-black text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          15% OFF
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-bold text-gray-400 mt-0">{plan.description}</p>
                </div>

                <div className="mb-6 space-y-4">
                   {/* Interactive Gateway Box - Back at Top */}
                   <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                         <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5 group relative">
                               <p className="text-[12px] font-[1000] text-slate-900 tracking-tight cursor-help">SSLCOMMERZ Add-on</p>
                               <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2263C1] transition-colors cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="Specially crafted tooltip info icon path" />
                                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                                  <path d="M12 16v-4m0-4h.01" strokeWidth={2.5} strokeLinecap="round" />
                               </svg>
                               
                               {/* Floating Dark Tooltip */}
                               <div className="absolute bottom-full left-0 mb-3 w-52 bg-[#1A1C1E] text-white p-4 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none translate-y-2 group-hover:translate-y-0">
                                  <p className="text-[11px] font-black uppercase tracking-wider mb-3 text-slate-400">Package Features:</p>
                                  <ul className="space-y-2">
                                     {plan.gatewayFeatures.map(feat => (
                                        <li key={feat} className="text-[12px] font-bold flex items-center gap-2">
                                           <div className="w-1 h-1 rounded-full bg-[#2263C1]" />
                                           {feat}
                                        </li>
                                     ))}
                                  </ul>
                                  {/* Triangle arrow */}
                                  <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-[#1A1C1E] rotate-45" />
                               </div>
                            </div>
                         </div>
                         <button 
                            onClick={() => toggleGateway(plan.name)}
                            className={`relative w-10 h-5.5 rounded-full transition-all duration-300 ${hasGateway ? "bg-[#2263C1]" : "bg-slate-200"}`}
                         >
                            <div className={`absolute top-0.75 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${hasGateway ? "translate-x-5.25" : "translate-x-0.75"}`} />
                         </button>
                      </div>
                      <div className="text-[11px] font-bold text-slate-400">
                         <p>One-time installation charge:</p>
                         <p>৳{plan.gateway.toLocaleString()} (for 1 year)</p>
                      </div>
                      {hasGateway && (
                        <div className="mt-4 pt-4 border-t border-dashed border-slate-200 space-y-2">
                           <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                              <span>{yearly ? "Yearly" : "1st Month"} Subscription:</span>
                              <span>৳{currentBasePrice.toLocaleString()}</span>
                           </div>
                           <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                              <span>Installation Charge (one-time for 1 year):</span>
                              <span>৳{plan.gateway.toLocaleString()}</span>
                           </div>
                           <div className="flex items-center justify-between text-[#2263C1] pt-1 pt-2 border-t border-slate-100">
                              <span className="text-[11px] font-extrabold uppercase tracking-tight">Total First Pay:</span>
                              <span className="text-[14px] font-[1000]">৳{totalPrice.toLocaleString()}</span>
                           </div>
                        </div>
                      )}
                   </div>

                   <a
                     href="#"
                     className={`block w-full text-center py-4 rounded-xl text-[15px] font-[1000] transition-all shadow-sm ${
                       plan.recommended
                         ? "bg-[#2263C1] text-white hover:bg-[#1C54A8] shadow-[#2263C1]/20"
                         : "bg-white text-[#2263C1] border-2 border-[#2263C1] hover:bg-slate-50"
                     }`}
                   >
                     {plan.cta}
                   </a>
                </div>

                <div className="space-y-4 mb-4 flex-grow border-t border-slate-50 pt-8">
                  {plan.features.map((f) => (
                    <div key={f.text} className="flex items-start gap-3">
                      {f.included ? (
                        <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={`text-[13px] font-bold ${f.included ? "text-slate-600" : "text-slate-400"}`}>
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

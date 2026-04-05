"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "START",
    description: "For new founders",
    monthly: 350,
    yearly: 3570,
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
    yearly: 8670,
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
    yearly: 19890,
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const toggleGateway = (planName: string) => {
    setGateways(prev => ({ ...prev, [planName]: !prev[planName] }));
  };

  return (
    <section id="pricing" className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-[900] text-[var(--foreground)] tracking-tight mb-3">
            Pricing Plans
          </h2>
          <p className="text-base text-[var(--muted)]">
            Choose the perfect plan for your business growth. 
          </p>
        </motion.div>

        {/* Toggle - More Compact */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="flex items-center justify-center mb-10"
        >
          <div className="inline-flex items-center p-1 bg-[#F2F5F9] rounded-full border border-[#E2E8F0]">
            <button
              onClick={() => setYearly(false)}
              className={`px-8 py-2.5 rounded-full text-[14px] font-black transition-all ${
                !yearly ? "bg-white text-[#2263C1] shadow-md" : "text-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-8 py-2.5 rounded-full text-[14px] font-black flex items-center gap-2 transition-all ${
                yearly ? "bg-white text-[#2263C1] shadow-md" : "text-gray-400"
              }`}
            >
              Yearly <span className="text-[9px] bg-green-500 text-white px-1.5 py-0.5 rounded-full">-15%</span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid lg:grid-cols-3 gap-5 items-stretch"
        >
          {plans.map((plan) => {
            const hasGateway = gateways[plan.name] || false;
            const currentBasePrice = yearly ? plan.yearly : plan.monthly;
            const totalPrice = hasGateway ? (currentBasePrice + plan.gateway) : currentBasePrice;

            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                layout
                className={`relative rounded-2xl border-2 pt-6 pb-5 px-5 transition-all duration-500 bg-white flex flex-col h-full ${
                  plan.recommended
                    ? "border-[var(--primary)] lg:scale-[1.02] z-10"
                    : "border-gray-100"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#023E8A] text-white text-[9px] font-black px-4 py-1 rounded-md uppercase">
                    Best Value
                  </div>
                )}

                {/* Header: Super Compact with Smooth Transitions */}
                <motion.div layout className="text-center mb-3">
                  <h3 className="text-[12px] font-black text-[#023E8A] uppercase tracking-[0.1em] mb-1">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <motion.span layout className="text-lg font-bold text-gray-900">৳</motion.span>
                    <motion.span 
                       layout
                       className="text-3xl font-[1000] text-gray-900"
                    >
                       {currentBasePrice.toLocaleString()}
                    </motion.span>
                    <motion.span layout className="text-xs font-bold text-gray-400">/{yearly ? "yr" : "mo"}</motion.span>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {yearly && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                        animate={{ opacity: 1, height: "auto", marginBottom: 12 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        className="flex items-center justify-center gap-3 overflow-hidden"
                      >
                         <span className="text-[12px] font-bold text-gray-400 line-through decoration-slate-400">৳{plan.originalYearly.toLocaleString()}</span>
                         <span className="text-[12px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 whitespace-nowrap">Save ৳{(plan.originalYearly - plan.yearly).toLocaleString()}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <p className="text-[12px] font-bold text-gray-400 leading-tight">{plan.description}</p>
                </motion.div>

                {/* Gateway Box: Compact */}
                <motion.div layout className="mb-4 space-y-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[14px] font-[1000] text-slate-800">SSLCOMMERZ Add-on</p>
                      <button 
                         onClick={() => toggleGateway(plan.name)}
                         className={`w-9 h-5 rounded-full transition-all ${hasGateway ? "bg-[#2263C1]" : "bg-slate-200"}`}
                      >
                         <div className={`w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-transform ${hasGateway ? "translate-x-4.5" : "translate-x-0.75"}`} />
                      </button>
                    </div>
                    <p className="text-[12px] font-bold text-slate-400 leading-none">Installation: ৳{plan.gateway.toLocaleString()} (Ontime for 1 year)</p>
                    <AnimatePresence>
                      {hasGateway && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 pt-2 border-t border-dashed border-slate-200 space-y-1 overflow-hidden"
                        >
                          <div className="flex justify-between text-[12px] font-bold text-slate-500">
                            <span>{yearly ? "Yearly subscription" : "1st month subscription"}</span>
                            <span>৳{currentBasePrice.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-[12px] font-bold text-slate-500">
                            <span>Installation (Ontime for 1 year)</span>
                            <span>৳{plan.gateway.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-[13px] font-extrabold text-[#2263C1] pt-1">
                            <span>TOTAL FIRST PAY:</span>
                            <span>৳{totalPrice.toLocaleString()}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <a href="#" className={`block w-full text-center py-3 rounded-lg text-[13px] font-[1000] border-2 transition-all ${
                    plan.recommended ? "bg-[#2263C1] text-white border-[#2263C1]" : "text-[#2263C1] border-[#2263C1]"
                  }`}>
                    {plan.cta}
                  </a>
                </motion.div>

                {/* Features: Compact list */}
                <div className="space-y-3.5 mb-2 flex-grow border-t border-slate-50 pt-4">
                  {plan.features.map((f) => (
                    <div key={f.text} className="flex items-start gap-2.5">
                       <svg className={`w-4 h-4 shrink-0 mt-0.5 ${f.included ? "text-emerald-500" : "text-gray-300"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={f.included ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                       </svg>
                       <span className={`text-[12px] font-medium leading-tight ${f.included ? "text-slate-600" : "text-slate-300"}`}>
                         {f.text}
                       </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

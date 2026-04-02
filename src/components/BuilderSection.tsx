"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { motion, AnimatePresence } from "framer-motion";

export default function BuilderSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, 0.1);

  // Balanced 10 bars with Orange, Green, Blue, Teal colors
  const bars = [
    { h: 45, color: "from-orange-500 to-orange-600" },
    { h: 75, color: "from-emerald-500 to-emerald-600" },
    { h: 55, color: "from-blue-500 to-blue-600" },
    { h: 95, color: "from-teal-500 to-teal-600" },
    { h: 65, color: "from-orange-400 to-orange-500" },
    { h: 100, color: "from-emerald-400 to-emerald-500" },
    { h: 110, color: "from-blue-400 to-blue-500" },
    { h: 80, color: "from-teal-400 to-teal-500" },
    { h: 85, color: "from-orange-500 to-orange-600" },
    { h: 95, color: "from-emerald-500 to-emerald-600" },
  ];

  return (
    <section id="builder" className="py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-7xl font-[900] text-[#1A1C20] tracking-tight mb-4 lg:mb-6"
          >
            Design. Launch. <span className="text-[var(--primary)]">Grow.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-500 font-medium leading-relaxed"
          >
            Build your store, start selling, and manage everything from one simple platform.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(380px,auto)]">
          
          {/* 1. Visual store (LARGE - 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 bg-white rounded-[3rem] border border-gray-100 p-8 shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col hover:shadow-2xl transition-all duration-700 group overflow-hidden"
          >
            <div className="flex-1 relative flex flex-col">
               <div className="relative w-full aspect-square sm:aspect-[16/10] bg-white rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden flex flex-col border border-gray-50">
                  <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center text-white relative z-20">
                     <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                           <span className="text-lg">🌿</span>
                        </div>
                        <div className="space-y-0.5">
                           <div className="text-[10px] font-black tracking-tight leading-none uppercase">Organic BD</div>
                           <div className="text-[8px] text-white/60 font-medium leading-none">freshorganic.com</div>
                        </div>
                     </div>
                  </div>

                  <motion.div 
                    animate={{ y: [0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                    className="p-6 space-y-6"
                  >
                     <div className="relative h-40 rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50 to-emerald-50 flex items-center px-8 border border-indigo-100/30">
                        <div className="relative z-10 space-y-3">
                           <div className="h-5 w-32 bg-indigo-600 rounded-full" />
                           <div className="h-1.5 w-24 bg-slate-300 rounded-full" />
                           <div className="h-8 w-24 bg-indigo-600 rounded-xl flex items-center justify-center text-[8px] font-black text-white uppercase tracking-tighter">Shop Now</div>
                        </div>
                        <motion.div 
                           animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                           transition={{ repeat: Infinity, duration: 6 }}
                           className="absolute right-8 text-7xl opacity-80"
                        >
                           🥗
                        </motion.div>
                     </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        {[
                          { emoji: '🍯', color: 'bg-amber-50' },
                          { emoji: '🌿', color: 'bg-emerald-50' },
                          { emoji: '🥛', color: 'bg-orange-50' },
                          { emoji: '🌾', color: 'bg-yellow-50' }
                        ].map((item, i) => (
                          <div key={i} className="bg-slate-50/50 rounded-2xl p-2 sm:p-3 space-y-2 border border-slate-50">
                             <div className={`aspect-square ${item.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl`}>
                                {item.emoji}
                             </div>
                             <div className="space-y-1 mt-1">
                                <div className="h-1 w-full bg-slate-900 rounded-full" />
                                <div className="h-1 w-1/2 bg-slate-200 rounded-full" />
                             </div>
                          </div>
                        ))}
                      </div>
                  </motion.div>
               </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-black text-[#1A1C20] mb-3 tracking-tight">Visual store</h3>
              <p className="text-base text-gray-400 font-medium leading-relaxed">
                 Create professional themes and customize every detail with ease.
              </p>
            </div>
          </motion.div>

          {/* 2. Live business insights (SMALL - 5 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 bg-white rounded-[3rem] border border-gray-100 p-10 shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col hover:shadow-2xl transition-all duration-700 group overflow-hidden relative"
          >
            <div className="flex-1 flex flex-col justify-center relative">
               <div className="flex justify-between items-center mb-8">
                  <div className="h-3 w-24 bg-slate-900 rounded-full" />
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                     <motion.div 
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="h-1.5 w-1.5 bg-orange-600 rounded-full"
                     />
                     <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Live stats</span>
                  </div>
               </div>
               
               <div className="relative h-40 flex items-end gap-3 px-2 group">
                  {bars.map((bar, i) => (
                    <div key={i} className="flex-1 h-full flex items-end">
                       <motion.div 
                          className={`w-full bg-gradient-to-t ${bar.color} rounded-t-full relative overflow-hidden shadow-lg shadow-black/5`}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${bar.h}%` }}
                          viewport={{ once: true }}
                          animate={{ 
                            height: [ `${bar.h}%`, `${Math.min(bar.h + (i%2?10:-10), 110)}%`, `${bar.h}%` ],
                          }}
                          transition={{ 
                             height: { duration: 1.5, delay: 0.2 + i * 0.08 },
                             repeat: Infinity,
                             duration: 3 + i % 2,
                             ease: "easeInOut"
                          }}
                       >
                          <motion.div 
                            animate={{ y: ["0%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"
                          />
                       </motion.div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-black text-[#1A1C20] mb-3 tracking-tight">Live business insights</h3>
              <p className="text-base text-gray-400 font-medium leading-relaxed">
                See orders, sales, and store performance in real-time.
              </p>
            </div>
          </motion.div>

          {/* 3. Payments made simple (SMALL - 5 columns) - USING FINAL 48x40 USER ASSETS */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5 bg-white rounded-[3rem] border border-gray-100 p-10 shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col hover:shadow-2xl transition-all duration-700 group overflow-hidden relative"
          >
            <div className="flex-1 flex flex-col justify-center items-center relative py-4">
               {/* 5 Cascading Ripple Circles */}
               {[0, 1, 2, 3, 4].map((i) => (
                 <motion.div 
                   key={`ripple-${i}`}
                   initial={{ scale: 0.7, opacity: 0 }}
                   animate={{ 
                      scale: 3.5, 
                      opacity: [0, 0.12, 0] 
                   }}
                   transition={{ 
                     repeat: Infinity, 
                     duration: 6, 
                     delay: i * 1.2, 
                     ease: "easeOut" 
                   }}
                   className="absolute h-32 w-32 border-[1.5px] border-indigo-100 rounded-full pointer-events-none z-0"
                 />
               ))}

               {/* Definitive Clean Logo (Fix for internal icon background) */}
               <div className="relative h-24 w-24 bg-[#2263C1] rounded-full flex items-center justify-center z-20 overflow-hidden border-0">
                  <img src="/icons/sslcommerz.png" alt="Z-Commerz" className="w-[100%] h-[100%] object-cover relative z-10 scale-[1.3]" />
               </div>

               {/* 4 elements around the center "Z" - NO PADDING FOR FINAL 48x40 ICONS */}
               {[
                 { 
                    // SSL Commerz
                    content: <img src="/icons/sslcommerz.png" alt="SSL" className="w-full h-full object-contain" />, 
                    x: -75, y: -75 
                 },
                 { 
                    // SteadFast
                    content: <img src="/icons/sTEADfast.png" alt="SteadFast" className="w-full h-full object-contain" />, 
                    x: 75, y: -75 
                 },
                 { 
                    // Pathao
                    content: (
                      <img src="/icons/Pathao.png" alt="Pathao" className="w-full h-full object-contain" />
                    ), 
                    x: -75, y: 75 
                 },
                 { 
                    // eCourier
                    content: (
                       <img src="/icons/Ecourier.png" alt="eCourier" className="w-full h-full object-contain" />
                    ), 
                    x: 75, y: 75 
                 }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    animate={{ 
                       y: [item.y, item.y - 12, item.y],
                       x: [item.x, item.x + (i % 2 === 0 ? 5 : -5), item.x]
                    }}
                    transition={{ 
                       repeat: Infinity, 
                       duration: 5, 
                       delay: i * 0.7,
                       ease: "easeInOut"
                    }}
                    className="absolute h-10 w-12 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center overflow-hidden z-30 p-1"
                 >
                    {item.content}
                 </motion.div>
               ))}
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-black text-[#1A1C20] mb-3 tracking-tight">Payments made simple</h3>
              <p className="text-base text-gray-400 font-medium leading-relaxed">
                 Accept bKash, Visa, Mastercard and Bangla QR securely everywhere.
              </p>
            </div>
          </motion.div>

          {/* 4. Built for growth (LARGE - 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-7 bg-white rounded-[3rem] border border-gray-100 p-10 shadow-[0_8px_40px_rgb(0,0,0,0.03)] flex flex-col hover:shadow-2xl transition-all duration-700 group overflow-hidden"
          >
            <div className="flex-1 flex flex-col justify-center relative">
               <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Products", icon: "📦", qty: "1.2k", trend: "+12%" },
                    { label: "Customers", icon: "💎", qty: "4.8k", trend: "+24%" },
                    { label: "Orders", icon: "🛒", qty: "850", trend: "+18%" },
                    { label: "Profit", icon: "📈", qty: "$12k", trend: "+15%" }
                  ].map((item, i) => (
                    <motion.div 
                      key={item.label}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
                      className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm flex items-center gap-4"
                    >
                       <div className="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl">
                          {item.icon}
                       </div>
                       <div className="flex-1 space-y-1">
                          <div className="flex justify-between items-center">
                             <span className="text-[10px] font-bold text-slate-400 uppercase">{item.label}</span>
                             <span className="text-[8px] font-black text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">{item.trend}</span>
                          </div>
                          <div className="text-xl font-black text-slate-900 tracking-tight">{item.qty}</div>
                       </div>
                    </motion.div>
                  ))}
               </div>
               
               <div className="mt-8 px-2">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-50">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ 
                           width: { duration: 1.5, delay: 0.8 },
                           x: { repeat: Infinity, duration: 3, ease: "linear" }
                        }}
                        className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-600 relative"
                     />
                  </div>
               </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-black text-[#1A1C20] mb-3 tracking-tight">Built for growth</h3>
              <p className="text-base text-gray-400 font-medium leading-relaxed">
                Manage products, orders, and scale your business effortlessly.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

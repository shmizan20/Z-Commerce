"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Business Info",
    description: "Add your store name, logo, category, and contact details to create your master profile.",
  },
  {
    num: "02",
    title: "Integrations",
    description: "Connect payment gateways like SSLCommerz and courier partners like Pathao or SteadFast.",
  },
  {
    num: "03",
    title: "Templates",
    description: "Pick a high-fidelity template that matches your brand and product category.",
  },
  {
    num: "04",
    title: "Launch!",
    description: "Choose your plan and start selling right away. Your online presence is now active.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 lg:py-40 bg-[#F8FAFC] overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header (Centered) */}
        <div className="max-w-4xl mx-auto text-center mb-24 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-7xl font-[1000] text-[#1A1C20] tracking-tight leading-[1.1] lg:leading-[1.05] mb-6 lg:mb-8">
            Bring your brand online <span className="text-indigo-600 italic border-b-4 border-indigo-100 lg:border-none">in 4 steps.</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
             A seamless, step-by-step experience designed to get your business online with zero stress and maximum impact.
          </p>
        </div>

        {/* High-Fidelity Interactive Preview Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* LEFT: Dynamic Content Box (True Responsive Height based on internal content) */}
          <div className="lg:col-span-7 sticky top-32 order-2 lg:order-1 self-start">
             <motion.div 
               layout
               className="relative w-full bg-white rounded-[3.5rem] border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.04)] overflow-hidden p-10 lg:p-14 py-12 lg:py-16"
             >
                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeStep}
                     initial={{ opacity: 0, scale: 0.98, y: 10 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 1.02, y: -10 }}
                     transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                     className="w-full mx-auto"
                   >
                      {activeStep === 0 && <Step1_BusinessInfo />}
                      {activeStep === 1 && <Step2_Integrations />}
                      {activeStep === 2 && <Step3_Templates />}
                      {activeStep === 3 && <Step4_LaunchAchievement />}
                   </motion.div>
                </AnimatePresence>
             </motion.div>
          </div>

          {/* RIGHT: Compact Step Selection Panel */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
            {steps.map((step, index) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left px-5 lg:px-7 py-5 lg:py-7 rounded-[1.8rem] lg:rounded-[2.2rem] transition-all duration-400 border-2 relative overflow-hidden group ${
                  activeStep === index 
                    ? "bg-white border-indigo-600 shadow-2xl shadow-indigo-100/30 lg:-translate-x-3 scale-[1.02]" 
                    : "bg-transparent border-transparent hover:bg-white/50"
                }`}
              >
                <div className="flex gap-5 items-start">
                  <div className={`mt-0.5 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-all ${
                    activeStep === index ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-slate-800 border-2 border-slate-100 shadow-sm"
                  }`}>
                    {step.num}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className={`text-xl font-[900] tracking-tight leading-none mb-1 transition-colors ${
                      activeStep === index ? "text-[#1A1C20]" : "text-[#1A1C20]"
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm font-medium leading-[1.6] transition-colors ${
                      activeStep === index ? "text-gray-500" : "text-slate-500"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>

        {/* Global CTA */}
        <div className="mt-24 lg:mt-32 text-center">
            <a
               href="#"
               className="inline-flex items-center gap-3 px-10 py-5 text-lg font-black text-white bg-[#2263C1] rounded-2xl hover:bg-[#1C54A8] transition-all shadow-xl shadow-[#2263C1]/20 hover:-translate-y-1"
            >
               Start free trial
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </a>
        </div>
      </div>
    </section>
  );
}

/* ─── High-Fidelity Step Mockups (Unified Content) ─── */

function Step1_BusinessInfo() {
   return (
      <div className="space-y-7">
         <div className="space-y-1">
            <h3 className="text-2xl font-[900] text-[#1A1C20] tracking-tight leading-none">Tell us about your business</h3>
            <p className="text-sm font-medium text-slate-400">This helps us set up your store perfectly.</p>
         </div>

         <div className="space-y-6">
            <div className="space-y-2.5">
               <label className="text-xs font-black text-slate-500 tracking-tight">Store Name</label>
               <div className="h-14 border border-slate-200 rounded-2xl bg-white px-5 flex items-center shadow-sm text-[15px] font-bold text-slate-800">
                  Fresh Organic BD
               </div>
            </div>

            <div className="space-y-2.5">
               <label className="text-xs font-black text-slate-500 tracking-tight">Business Category</label>
               <div className="h-14 border-2 border-indigo-400/30 bg-indigo-50/15 rounded-2xl px-5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                     <span className="text-xl">🥬</span>
                     <span className="text-[15px] font-black text-indigo-600">Grocery & Organic Food</span>
                  </div>
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
               </div>
            </div>

            <div className="space-y-2.5">
               <label className="text-xs font-black text-slate-500 tracking-tight">Store Logo</label>
               <div className="p-4 border-2 border-dashed border-slate-200 rounded-2xl flex items-center gap-5 bg-slate-50/20">
                  <div className="h-16 w-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl border border-slate-100">🌿</div>
                  <div className="space-y-1">
                     <p className="text-sm font-black text-slate-900 leading-none">Fresh Organic BD</p>
                     <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-[12px] font-black text-emerald-500 tracking-tight">Logo uploaded successfully</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="space-y-2.5">
               <label className="text-xs font-black text-slate-500 tracking-tight">Store URL</label>
               <div className="h-14 border border-slate-200 rounded-2xl bg-white px-5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-1 text-[15px] font-medium text-slate-400">
                     <span>https://</span>
                     <span className="font-black text-slate-900">freshorganic</span>
                     <span>.zcommerz.com</span>
                  </div>
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
               </div>
            </div>
         </div>
      </div>
   );
}

function Step2_Integrations() {
   return (
      <div className="space-y-7">
         <div className="space-y-1">
            <h3 className="text-2xl font-[900] text-[#1A1C20] tracking-tight leading-none">Connect payment & delivery</h3>
            <p className="text-sm font-medium text-slate-400">One-click setup. Start accepting orders instantly.</p>
         </div>

         <div className="space-y-6 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
            {/* Payment Gateway */}
            <div className="space-y-3">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Payment Gateway</label>
               <div className="p-4 border border-slate-100 bg-white rounded-[2rem] flex items-center justify-between shadow-sm">
                  <div className="flex gap-5 items-start">
                     <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg ring-4 ring-indigo-50 overflow-hidden">
                        <img src="/icons/sslcommerz.png" alt="SSL" className="w-full h-full object-contain" />
                     </div>
                     <div className="space-y-1.5">
                        <p className="text-[17px] font-black text-slate-900 leading-none">SSLCOMMERZ</p>
                        <p className="text-[12px] font-medium text-slate-400">Secure payment gateway for Bangladesh</p>
                        <div className="flex flex-wrap gap-1.5">
                           {["bKash", "Nagad", "Cards", "Banking"].map(tag => (
                              <span key={tag} className="px-2 py-0.5 bg-slate-50 text-[10px] font-bold text-slate-400 rounded-md">{tag}</span>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="h-7 w-12 bg-emerald-500 rounded-full relative shrink-0">
                     <div className="absolute right-1 top-1 h-5 w-5 bg-white rounded-full shadow-sm" />
                  </div>
               </div>
            </div>

            {/* Delivery Partners */}
            <div className="space-y-3">
               <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Delivery Partners</label>
               <div className="space-y-3">
                  {[
                    { name: 'SteadFast', desc: 'Reliable nationwide courier service', icon: '/icons/sTEADfast.png', color: 'bg-white', tags: ["Nationwide", "COD", "Express"] },
                    { name: 'Pathao', desc: 'Same-day delivery in Dhaka', icon: '/icons/Pathao.png', color: 'bg-white', tags: ["Same Day", "Express"] },
                    { name: 'eCourier', desc: 'Nationwide parcel delivery', icon: '/icons/Ecourier.png', color: 'bg-white', tags: ["Standard", "COD"] },
                  ].map((item, i) => (
                    <div key={item.name} className="p-4 border border-slate-100 bg-white rounded-[2rem] flex items-center justify-between shadow-sm">
                       <div className="flex gap-5 items-start">
                          <div className={`h-14 w-14 ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg ring-4 ring-slate-50 overflow-hidden`}>
                             <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                          </div>
                          <div className="space-y-1.5">
                             <p className="text-[17px] font-black text-slate-900 leading-none">{item.name}</p>
                             <p className="text-[12px] font-medium text-slate-400">{item.desc}</p>
                             <div className="flex flex-wrap gap-1.5">
                                {item.tags.map(tag => (
                                   <span key={tag} className="px-2 py-0.5 bg-slate-50 text-[10px] font-bold text-slate-400 rounded-md">{tag}</span>
                                ))}
                             </div>
                          </div>
                       </div>
                       <div className="h-7 w-12 bg-emerald-500 rounded-full relative shrink-0">
                          <div className="absolute right-1 top-1 h-5 w-5 bg-white rounded-full shadow-sm" />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

function Step3_Templates() {
   return (
      <div className="space-y-7">
         <div className="space-y-1">
            <h3 className="text-2xl font-[900] text-[#1A1C20] tracking-tight leading-none">Choose your store design</h3>
            <p className="text-sm font-medium text-slate-400">Pick a template that matches your brand. Customize anytime.</p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { name: "Green Market", cat: "Organic Food", bg: "bg-[#00CC66]", emojis: "🥬 🥑 🍯", active: true },
              { name: "Fashion Hub", cat: "Clothing & Fashion", bg: "bg-[#FF3366]", emojis: "👗 👜 👠", active: false },
              { name: "TechMart", cat: "Electronics", bg: "bg-gradient-to-br from-[#448AFF] to-[#2979FF]", emojis: "🎧 📱 ⌚", active: false },
              { name: "BookNest", cat: "Books & Stationery", bg: "bg-[#9933FF]", emojis: "📚 ✏️ 🎒", active: false },
              { name: "HomeStyle", cat: "Furniture & Decor", bg: "bg-[#FF9900]", emojis: "🛋️ 🪴 🕯️", active: false },
              { name: "SportsFit", cat: "Sports & Fitness", bg: "bg-[#009999]", emojis: "⚽ 👟 🏋️", active: false },
            ].map((item, i) => (
               <div key={item.name} className={`group rounded-[1.5rem] border-2 overflow-hidden transition-all duration-300 bg-white ${
                 item.active ? 'border-indigo-600 shadow-2xl scale-[1.05] z-10' : 'border-slate-50 hover:border-slate-200'
               }`}>
                  {/* Top Half */}
                  <div className={`h-24 w-full ${item.bg} flex items-center justify-center text-2xl relative`}>
                     <span className="drop-shadow-lg">{item.emojis}</span>
                     {item.active && (
                       <div className="absolute top-2 right-2 h-6 w-6 bg-white rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                       </div>
                     )}
                  </div>
                  {/* Bottom Half */}
                  <div className="p-3.5 space-y-0.5">
                     <p className="text-sm font-black text-slate-900 leading-none">{item.name}</p>
                     <p className="text-[10px] font-bold text-slate-400">{item.cat}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

function Step4_LaunchAchievement() {
   return (
      <div className="relative w-full overflow-hidden rounded-2xl border border-slate-100 shadow-2xl bg-white aspect-[16/11.5]">
         {/* ── Mock Storefront Backdrop ── */}
         <div className="absolute inset-0 flex flex-col">
            {/* Store Header */}
            <div className="bg-[#2263C1] px-6 py-2.5 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-base">🌿</div>
                  <div className="text-white">
                     <p className="text-[11px] font-black leading-none tracking-tight">Fresh Organic BD</p>
                     <p className="text-[8px] opacity-70 font-medium">freshorganic.zcommerz.com</p>
                  </div>
               </div>
               <div className="flex items-center gap-5 text-[9px] font-bold text-white/90">
                  <span className="hidden sm:inline">Home</span>
                  <span className="hidden sm:inline">Products</span>
                  <div className="relative">
                     <div className="h-7 w-7 bg-white/20 rounded-lg flex items-center justify-center text-white text-base">🛒</div>
                     <div className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-[#FF3333] rounded-full border border-[#2263C1] flex items-center justify-center text-[7px] font-black text-white">3</div>
                  </div>
               </div>
            </div>

            {/* Store Hero */}
            <div className="flex-1 bg-white px-5 py-4 space-y-4 relative overflow-hidden">
               <div className="h-[130px] w-full rounded-xl relative overflow-hidden flex items-center px-8 border border-slate-100">
                  <div 
                     className="absolute inset-0 bg-cover bg-center"
                     style={{ backgroundImage: 'url(/organic_store_banner.png)' }}
                  />
                  <div className="absolute inset-0 bg-black/45 z-10" />
                  <div className="relative z-20 space-y-2">
                     <h4 className="text-lg font-black text-white leading-tight">Fresh Organic Produce 🌱</h4>
                     <p className="text-[9px] font-medium text-white/80 max-w-[150px]">Farm to table, delivered to your door with love.</p>
                     <button className="px-3.5 py-1.5 bg-white text-slate-900 text-[8px] font-black rounded-lg uppercase tracking-tight flex items-center gap-2 shadow-lg">
                        Shop Now <span>→</span>
                     </button>
                  </div>
               </div>

               {/* Products Grid */}
               <div className="space-y-2.5">
                  <div className="flex items-center justify-between px-0.5">
                     <p className="text-xs font-black text-slate-900 tracking-tight uppercase">Featured Products</p>
                     <p className="text-[9px] font-bold text-[#2263C1]">View All →</p>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                     {[
                       { name: "Organic Honey", price: "৳ 450", icon: "🍯", bg: "bg-[#FFF2B2]" },
                       { name: "Fresh Basil", price: "৳ 60", icon: "🌿", bg: "bg-[#D6F5E1]" },
                       { name: "Almond Milk", price: "৳ 350", icon: "🥛", bg: "bg-[#FFF9E5]" },
                       { name: "Quinoa Pack", price: "৳ 520", icon: "🌾", bg: "bg-[#FFF9B2]" },
                     ].map(prod => (
                        <div key={prod.name} className="bg-white rounded-xl p-2 border border-slate-100 shadow-sm space-y-1.5">
                           <div className={`h-14 w-full ${prod.bg} rounded-lg flex items-center justify-center text-xl`}>{prod.icon}</div>
                           <div className="space-y-0.5">
                              <p className="text-[8px] font-black text-slate-900 leading-none truncate">{prod.name}</p>
                              <p className="text-[8px] font-bold text-[#2263C1]">{prod.price}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Platform Status Bar */}
            <div className="bg-slate-50/50 border-t border-slate-100 px-6 py-2.5 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Payment</span>
                  <div className="h-4 w-10 overflow-hidden opacity-80">
                    <img src="/icons/sslcommerz.png" alt="SSL" className="h-full w-full object-contain" />
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Delivery</span>
                  <div className="flex gap-2.5">
                    <div className="h-4 w-8 overflow-hidden opacity-80">
                      <img src="/icons/sTEADfast.png" alt="SteadFast" className="h-full w-full object-contain" />
                    </div>
                    <div className="h-4 w-8 overflow-hidden opacity-80">
                      <img src="/icons/Pathao.png" alt="Pathao" className="h-full w-full object-contain" />
                    </div>
                  </div>
               </div>
            </div>
         </div>

         {/* ── Compact Overlay ── */}
         <div className="absolute inset-0 bg-slate-900/10 z-30 flex items-center justify-center p-8">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="bg-white border border-slate-100 rounded-2xl p-8 shadow-[0_30px_80px_rgba(34,99,193,0.2)] text-center max-w-[340px] relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-gradient-to-b from-[#2263C1]/5 to-transparent" />
               <div className="relative z-10 space-y-6">
                  <div className="h-16 w-16 bg-[#2263C1] rounded-full flex items-center justify-center shadow-xl mx-auto border-[4px] border-white ring-4 ring-[#2263C1]/5">
                     <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M5 13l4 4L19 7" />
                     </svg>
                  </div>
                  <div className="space-y-1">
                     <h3 className="text-2xl font-[1000] text-slate-900 tracking-tighter leading-none">Congratulations!</h3>
                     <p className="text-base font-black text-[#2263C1]">Your Store is Live! 🎉</p>
                  </div>
                  <div className="px-8 py-3 bg-slate-50 rounded-full border border-slate-100 inline-flex items-center gap-0.5 shadow-sm">
                     <span className="text-[11px] font-bold text-slate-400">https://</span>
                     <span className="text-[11px] font-[1000] text-slate-900 tracking-tight">freshorganic</span>
                     <span className="text-[11px] font-bold text-slate-400">.zcommerz.com</span>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
   );
}

"use client";

import { motion, Variants } from "framer-motion";

const features = [
  {
    title: "Easy Store Setup",
    description: "Log in, choose a theme, add your products and categories, and set up your store in a few simple steps.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Secure Payments",
    description: "Connect SSLCommerz easily and accept customer payments through a trusted payment gateway.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-7.618 3.040 12.02 12.02 0 00-1.131 7.415c.504 3.928 2.347 7.41 5.846 9.505a11.95 11.95 0 0011.801 0c3.499-2.095 5.342-5.577 5.846-9.505a12.01 12.01 0 00-1.131-7.415z" />
      </svg>
    ),
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Easy Product Management",
    description: "Add products, create categories, update prices, and manage stock from one simple dashboard.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Simple Pricing",
    description: "Clear and easy pricing with no confusion, so you always know what you are paying for.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 9a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 00-1 1v1a1 1 0 001 1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1m2-10v12" />
      </svg>
    ),
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Built for Growth",
    description: "Manage your store, reach more customers, and grow your business with helpful tools in one place.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Logistics Support",
    description: "Manage delivery and shipping more easily with built-in logistics support for your business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    color: "from-cyan-500 to-teal-600",
  },
];

export default function FeaturesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="features" className="pt-0 pb-12 lg:pt-10 lg:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight mb-5 px-4">
            Everything you need to run your business online.
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            From payments to logistics, we’ve built the tools so you can focus on what matters—growing your brand.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl border border-[var(--border)]/60 p-7 transition-shadow duration-500 hover:shadow-xl hover:shadow-black/5"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

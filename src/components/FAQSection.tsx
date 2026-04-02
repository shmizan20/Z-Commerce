"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does SSL Marketplace help my business?",
    answer: "SSL Marketplace scales your business by providing a complete e-commerce infrastructure. We handle secure payments, storefront management, and nationwide marketing so you can focus entirely on your products. Whether you are a new entrepreneur or an established brand, you can reach customers across Bangladesh without the high cost of building your own website.",
  },
  {
    question: "Do I need technical skills to use the platform?",
    answer: "No. Our platform is built for everyone. You can set up your store, upload products, and manage sales through a simple, user-friendly dashboard. No coding or design experience is required.",
  },
  {
    question: "How and when do I get paid?",
    answer: "We offer an automated and secure payout system. Once a delivery is confirmed, your earnings are processed and transferred directly to your linked bank account or mobile wallet. All transactions are protected by SSL security.",
  },
  {
    question: "What is the cost to start selling?",
    answer: "We offer transparent, flexible plans starting as low as ৳350 to help businesses of all sizes grow. There are no hidden setup fees or surprise charges—you only pay for the plan you choose.",
  },
  {
    question: "Is my data and store information safe?",
    answer: "Yes. We use industry-standard encryption and secure servers to protect your business data and customer information. We prioritize privacy and never share your data without your explicit permission.",
  },
  {
    question: "How is product delivery handled?",
    answer: "We integrate with leading logistics partners across Bangladesh. You can easily arrange pickups and track shipments directly from your dashboard, ensuring your products reach customers safely and on time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#000000] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-[42px] font-black tracking-tight"
          >
            Frequently asked questions
          </motion.h2>
        </div>

        <div className="border-t border-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 md:py-10 flex items-center justify-between text-left group cursor-pointer"
              >
                <span className="text-[19px] md:text-[23px] font-bold text-white leading-snug pr-8 transition-colors group-hover:text-white/70">
                  {faq.question}
                </span>
                <div className="shrink-0 w-8 h-8 md:w-9 md:h-9 border border-white/20 rounded-full flex items-center justify-center transition-all bg-white text-black group-hover:scale-110">
                  <motion.svg 
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-4 h-4 md:w-5 md:h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12m-6-6h12" />
                  </motion.svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="pb-8 md:pb-12 pr-12 max-w-3xl">
                      <p className="text-[16px] md:text-[18px] leading-relaxed text-white/50 font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "How it works", href: "#how-it-works" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#020A13] text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Vision */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Z-Commerz" 
                className="h-6 md:h-[26px] w-auto object-contain invert brightness-0 invert shadow-lg"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              Simplifying e-commerce for Bangladeshi entrepreneurs. Build, manage, and grow your brand with ease.
            </p>
            <div className="flex items-center gap-4">
              {/* Facebook SVG */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#023E8A] transition-colors group">
                <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#023E8A] transition-colors group">
                <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              {/* Instagram SVG */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#023E8A] transition-colors group">
                <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Products</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/50 hover:text-white text-sm font-bold transition-all flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#023E8A] mr-0 opacity-0 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/50 hover:text-white text-sm font-bold transition-all flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#023E8A] mr-0 opacity-0 group-hover:mr-2 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Stay Updated</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-[#023E8A] transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-lg text-xs font-black uppercase hover:bg-white/90 transition-all">
                Join
              </button>
            </div>
            <p className="mt-4 text-[11px] text-white/30 font-bold uppercase tracking-wider">
              Get the latest news and updates.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[13px] font-medium">
            © {currentYear} Z-COMMERZ. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/40 hover:text-white text-[13px] font-medium transition-colors">Term of use</a>
            <a href="#" className="text-white/40 hover:text-white text-[13px] font-medium transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

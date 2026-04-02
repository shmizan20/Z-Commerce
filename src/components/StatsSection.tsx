"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useInView(ref as React.RefObject<HTMLElement>, 0.1);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Active Businesses" },
  { value: 10000, suffix: "+", label: "Orders Processed" },
  { value: 99.9, suffix: "%", label: "Uptime Guaranteed" },
  { value: 24, suffix: "/7", label: "Customer Support" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, 0.1);

  return (
    <section className="py-20 bg-white border-y border-[var(--border)]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-[var(--muted)] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

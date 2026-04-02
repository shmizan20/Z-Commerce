"use client";

import { useState, useEffect, RefObject } from "react";

export function useInView(ref: RefObject<HTMLElement | null>, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediately check if element is in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
      setIsVisible(true);
      return;
    }

    const handleVisibility = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 200 && r.bottom > -200) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleVisibility);
      }
    };

    // Use IntersectionObserver as primary
    let observer: IntersectionObserver | undefined;
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer?.disconnect();
            window.removeEventListener("scroll", handleVisibility);
          }
        },
        { threshold, rootMargin: "200px" }
      );
      observer.observe(el);
    } catch {
      // fallback below
    }

    // Scroll listener fallback
    window.addEventListener("scroll", handleVisibility, { passive: true });

    // Safety: force visible after mount delay
    const timer = setTimeout(() => setIsVisible(true), 800);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", handleVisibility);
      clearTimeout(timer);
    };
  }, [ref, threshold]);

  return isVisible;
}

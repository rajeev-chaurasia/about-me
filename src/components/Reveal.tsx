"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before the transition starts, for staggering siblings. */
  delay?: number;
};

// Fades its children in and lifts them ~8px when they scroll into view.
// Server HTML renders fully visible; content is only hidden after JS has
// run and confirmed reduced motion is off. Uses transform + opacity only,
// so there is no layout shift.
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen at load: leave it alone rather than flash it out and in.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={state}
      className={className}
      style={delay && state !== "static" ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

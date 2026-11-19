import { useEffect, useRef, useState } from "react";
import React from "react";

// Counts a number up once it scrolls into view. Accepts values like "95%+", "4.8/5", "150+", "7.0".
export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    if (!match) return;
    const [, prefix, numText, suffix] = match;
    const target = parseFloat(numText);
    const decimals = (numText.split(".")[1] ?? "").length;
    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(format(target * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
          else setDisplay(value);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  if (!match) return <span className={className}>{value}</span>;
  const [, prefix, numText, suffix] = match;
  const zero = `${prefix}${(0).toFixed((numText.split(".")[1] ?? "").length)}${suffix}`;

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden="true">{display ?? zero}</span>
    </span>
  );
}

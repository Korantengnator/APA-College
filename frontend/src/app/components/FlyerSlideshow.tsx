import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import React from "react";

export interface Flyer {
  src: string;
  alt: string;
}

// Auto-advancing flyer carousel. Pauses on hover/focus, has arrows, dots and swipe,
// and opens the flyer enlarged when clicked (flyers contain small print).
export default function FlyerSlideshow({
  flyers,
  aspect = "square",
}: {
  flyers: Flyer[];
  aspect?: "square" | "portrait";
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [enlarged, setEnlarged] = useState<Flyer | null>(null);
  const touchStartX = useRef<number | null>(null);
  const count = flyers.length;

  const go = (next: number) => setIndex((next + count) % count);

  useEffect(() => {
    setIndex(0);
  }, [flyers]);

  useEffect(() => {
    if (count < 2 || paused || enlarged) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 5500);
    return () => window.clearInterval(id);
  }, [count, paused, enlarged]);

  if (count === 0) return null;

  return (
    <div className="w-full max-w-sm mx-auto">
      <div
        className={`relative ${
          aspect === "portrait" ? "aspect-[4/5]" : "aspect-square"
        } rounded-xl overflow-hidden shadow-2xl bg-white`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX.current === null || count < 2) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
          touchStartX.current = null;
        }}
      >
        {flyers.map((f, i) => (
          <button
            key={f.src}
            type="button"
            onClick={() => setEnlarged(f)}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
            aria-label={`Enlarge flyer: ${f.alt}`}
            className={`absolute inset-0 transition-opacity duration-700 cursor-zoom-in ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={f.src}
              alt={f.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className="w-full h-full object-contain"
            />
          </button>
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous flyer"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next flyer"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {flyers.map((f, i) => (
                <button
                  key={f.src}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show flyer ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-[#F4D03F]" : "w-2.5 bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <p className="text-center text-xs text-gray-300 mt-2">Click a flyer to enlarge</p>

      <Dialog open={enlarged !== null} onOpenChange={(open) => !open && setEnlarged(null)}>
        <DialogContent className="sm:max-w-xl p-2">
          <DialogTitle className="sr-only">{enlarged?.alt}</DialogTitle>
          <DialogDescription className="sr-only">Enlarged flyer</DialogDescription>
          {enlarged && (
            <img src={enlarged.src} alt={enlarged.alt} className="w-full max-h-[80vh] object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

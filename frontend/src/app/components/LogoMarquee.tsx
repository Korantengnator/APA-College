import React from "react";

export interface MarqueeLogo {
  name: string;
  file: string; // file in public/logos
}

// A row of logos that slides sideways in a loop. Pauses when hovered.
// For people who prefer reduced motion it becomes a normal centred row that shows every logo (see theme.css).
export default function LogoMarquee({
  logos,
  reverse = false,
}: {
  logos: MarqueeLogo[];
  reverse?: boolean;
}) {
  // repeat the list so one half of the track is always wider than the screen, then slide by exactly one half
  const items = [...logos, ...logos, ...logos, ...logos];
  const duration = Math.round((logos.length * 2 * 176) / 40); // every item is 176px wide, so both rows move at 40px per second

  return (
    <div
      className="marquee overflow-hidden"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ ["--marquee-duration" as any]: `${duration}s` }}
      >
        {items.map((logo, i) => {
          const original = i < logos.length;
          return (
            <div
              key={i}
              className={`flex-shrink-0 w-44 px-4 flex items-center justify-center ${original ? "" : "marquee-copy"}`}
            >
              <img
                src={`/logos/${logo.file}`}
                alt={original ? logo.name : ""}
                aria-hidden={original ? undefined : true}
                loading="lazy"
                className="max-h-12 md:max-h-14 max-w-full w-auto h-auto object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

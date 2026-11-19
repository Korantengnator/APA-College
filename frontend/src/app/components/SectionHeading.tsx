import Reveal from "./Reveal";
import React from "react";

const EYEBROW = "#1F5CBA";
const NAVY = "#0D3B66";

// Shared section heading: small eyebrow label, strong title, optional subtitle and a short accent bar.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean; // for use on dark backgrounds
}) {
  const center = align === "center";
  return (
    <Reveal className={`mb-12 md:mb-14 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className="text-sm font-semibold uppercase tracking-[0.18em] mb-3"
          style={{ color: light ? "#F4D03F" : EYEBROW }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
        style={{ color: light ? "#FFFFFF" : NAVY }}
      >
        {title}
      </h2>
      <div className={`w-12 h-1 bg-[#F4D03F] mt-4 ${center ? "mx-auto" : ""}`}></div>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed max-w-3xl ${center ? "mx-auto" : ""} ${
            light ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

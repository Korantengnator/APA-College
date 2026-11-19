import { Camera } from "lucide-react";
import React from "react";

// Shows a real photo when `src` is set, otherwise a clearly labelled placeholder.
// Give it a size through className (for example "aspect-[4/3]" or "h-72").
export default function ImageSlot({
  src,
  alt,
  label,
  className = "",
  rounded = "rounded-xl",
}: {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  rounded?: string;
}) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`object-cover w-full ${rounded} ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={`w-full ${rounded} ${className} bg-gradient-to-br from-[#E8EFF7] to-[#D2E0F0] border-2 border-dashed border-[#9FB6D1] flex flex-col items-center justify-center text-center p-4 text-[#0D3B66]`}
    >
      <Camera size={30} className="mb-2 opacity-70" />
      <span className="font-semibold">Photo placeholder</span>
      <span className="text-sm opacity-80">{label}</span>
    </div>
  );
}

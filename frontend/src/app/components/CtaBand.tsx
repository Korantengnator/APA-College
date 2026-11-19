import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappLink } from "../data/contact";
import Reveal from "./Reveal";
import React from "react";

// Shared call-to-action band: navy with a single yellow button.
export default function CtaBand({
  title,
  text,
  buttonLabel = "Book Consultation",
  message = "Hello, I would like to book a consultation",
  ticks = false,
}: {
  title: string;
  text?: string;
  buttonLabel?: string;
  message?: string;
  ticks?: boolean;
}) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#0A2744] via-[#0D3B66] to-[#14507F] relative overflow-hidden">
      <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-white/5"></div>
      <div className="absolute -top-20 -left-10 w-56 h-56 rounded-full bg-[#F4D03F]/10"></div>
      <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5">{title}</h2>
        {text && <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">{text}</p>}
        {ticks && (
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 font-semibold text-[#8FD3C4]">
            {["No obligation", "24-hour response", "Personalized plan"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1">
                <Check size={16} /> {t}
              </span>
            ))}
          </div>
        )}
        <Button
          onClick={() => window.open(whatsappLink(message), "_blank")}
          className="bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] font-semibold px-8 py-6 text-lg rounded-md"
        >
          {buttonLabel}
        </Button>
      </Reveal>
    </section>
  );
}

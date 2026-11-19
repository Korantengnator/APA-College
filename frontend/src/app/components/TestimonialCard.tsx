import { Star } from "lucide-react";
import React from "react";

interface TestimonialCardProps {
  name: string;
  title: string;
  testimonial: string;
  image?: string; // optional: initials are shown when there is no real photo
}

export default function TestimonialCard({ name, title, testimonial, image }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="h-full flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {image ? (
          <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover mr-4" />
        ) : (
          <div className="w-14 h-14 rounded-full bg-[#0D3B66] text-white font-bold flex items-center justify-center mr-4 flex-shrink-0">
            {initials}
          </div>
        )}
        <div>
          <h4 className="font-bold text-[#0D3B66]">{name}</h4>
          <p className="text-sm text-gray-700">{title}</p>
        </div>
      </div>

      <div className="flex space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-[#F4D03F] text-[#F4D03F]" />
        ))}
      </div>

      <p className="text-gray-700 text-base md:text-[17px] leading-relaxed italic flex-grow">
        &ldquo;{testimonial}&rdquo;
      </p>
    </div>
  );
}

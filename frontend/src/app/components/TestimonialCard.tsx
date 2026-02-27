import { Star } from "lucide-react";
import React from "react";

interface TestimonialCardProps {
  name: string;
  title: string;
  testimonial: string;
  image: string;
}

export default function TestimonialCard({
  name,
  title,
  testimonial,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-[#0D3B66]">{name}</h4>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>

      <div className="flex space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-[#F4D03F] text-[#F4D03F]" />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed italic flex-grow">
        "{testimonial}"
      </p>
    </div>
  );
}

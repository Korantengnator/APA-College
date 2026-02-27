import { LucideIcon } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export default function ServiceCard({
  icon: Icon,
  title,
  items,
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 group">
      
      <div className="w-14 h-14 bg-[#F4D03F] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} className="text-[#0D3B66]" />
      </div>

      <h3 className="text-xl font-bold text-[#0D3B66] mb-4">
        {title}
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-gray-600 marker:text-[#F4D03F] leading-relaxed">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

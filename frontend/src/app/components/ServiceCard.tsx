import { LucideIcon } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 group">
      <div className="w-14 h-14 bg-[#F4D03F] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} className="text-[#0D3B66]" />
      </div>
      <h3 className="text-xl font-bold text-[#0D3B66] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

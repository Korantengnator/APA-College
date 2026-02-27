import { LucideIcon } from "lucide-react";
import React from "react";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function StatCard({ icon: Icon, title, description }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
      <div className="w-16 h-16 bg-gradient-to-br from-[#0D3B66] to-[#1a5a8f] rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon size={32} className="text-[#F4D03F]" />
      </div>
      <h3 className="text-lg font-bold text-[#0D3B66] mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

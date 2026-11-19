import React from "react";

interface DifferentiatorCardProps {
  number: number;
  text: string;
}

export default function DifferentiatorCard({ number, text }: DifferentiatorCardProps) {
  return (
    <div className="h-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-[#0D3B66] rounded-full flex items-center justify-center">
          <span className="text-[#F4D03F] font-bold text-lg">{number}</span>
        </div>
        <p className="text-gray-700 text-base md:text-[17px] leading-relaxed pt-1.5">{text}</p>
      </div>
    </div>
  );
}

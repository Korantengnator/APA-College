import React from "react";

interface DifferentiatorCardProps {
  number: number;
  text: string;
}

export default function DifferentiatorCard({
  number,
  text,
}: DifferentiatorCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 border-l-4 border-[#F4D03F] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-10 h-10 bg-[#0D3B66] rounded-full flex items-center justify-center">
          <span className="text-[#F4D03F] font-bold text-lg">{number}</span>
        </div>
        <p className="text-gray-700 leading-relaxed pt-1">{text}</p>
      </div>
    </div>
  );
}

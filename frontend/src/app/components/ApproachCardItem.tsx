import { ArrowRight } from "lucide-react";
import React from "react";

// Same fixed-structure card as SubServiceCard, for the "Why ACES" principles.
export default function ApproachCardItem({
  title,
  summary,
  onReadMore,
}: {
  title: string;
  summary: string;
  onReadMore: () => void;
}) {
  return (
    <div className="group h-full flex flex-col bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-[#0D3B66]/30 transition-all duration-300">
      <h3 className="text-xl font-bold leading-snug text-[#0D3B66] group-hover:text-[#1F5CBA] transition-colors line-clamp-2 min-h-[3.5rem] mb-3">
        {title}
      </h3>
      <p className="text-gray-700 text-base leading-relaxed line-clamp-4 min-h-[6.5rem] mb-5">{summary}</p>
      <button
        type="button"
        onClick={onReadMore}
        className="mt-auto w-full flex items-center justify-between border-t border-gray-100 pt-4 text-[#0D3B66] font-semibold hover:text-[#1F5CBA] transition-colors"
      >
        Read more
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

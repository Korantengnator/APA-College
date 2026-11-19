import { ArrowRight, LucideIcon } from "lucide-react";
import React from "react";

interface SubServiceCardProps {
  icon: LucideIcon;
  title: string;
  summary: string;
  tag?: string;
  meta?: string;
  onReadMore: () => void;
}

// Fixed-structure card so every card in a grid has the same height and the same alignment.
// Long text is cut with "..." and the full text opens in the Read more popup.
export default function SubServiceCard({ icon: Icon, title, summary, tag, meta, onReadMore }: SubServiceCardProps) {
  return (
    <div className="group h-full flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-[#0D3B66]/30 transition-all duration-300">
      <div className="flex items-center justify-between gap-3 h-11 mb-4">
        <div className="w-11 h-11 rounded-lg bg-[#0D3B66]/10 flex items-center justify-center flex-shrink-0">
          <Icon size={22} className="text-[#0D3B66]" />
        </div>
        {tag && (
          <span className="text-xs font-semibold uppercase tracking-wide text-[#0D3B66] bg-[#0D3B66]/10 rounded-full px-3 py-1 text-right">
            {tag}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold leading-snug text-[#0D3B66] group-hover:text-[#1F5CBA] transition-colors line-clamp-2 min-h-[3.5rem] mb-2">
        {title}
      </h3>
      <p className="text-gray-700 text-base leading-relaxed line-clamp-3 min-h-[5rem] mb-4">{summary}</p>

      <div className="mt-auto">
        <p className="text-sm font-medium text-gray-600 min-h-[1.5rem] mb-3 truncate">{meta ?? ""}</p>
        <button
          type="button"
          onClick={onReadMore}
          className="w-full flex items-center justify-between border-t border-gray-100 pt-4 text-[#0D3B66] font-semibold hover:text-[#1F5CBA] transition-colors"
        >
          Read more
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

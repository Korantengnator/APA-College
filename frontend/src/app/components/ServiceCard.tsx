import { Link } from "react-router";
import { ArrowRight, Check, LucideIcon } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  to: string; // the service page this card opens
}

const VISIBLE_ITEMS = 4;

// Home service card: same height for every card. Shows the first services and a "+ more" line; the page lists them all.
export default function ServiceCard({ icon: Icon, title, items, to }: ServiceCardProps) {
  const shown = items.slice(0, VISIBLE_ITEMS);
  const more = items.length - shown.length;

  return (
    <Link
      to={to}
      onClick={() => window.scrollTo({ top: 0 })}
      className="group h-full flex flex-col bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-[#0D3B66]/30 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-lg bg-[#0D3B66] flex items-center justify-center mb-5">
        <Icon size={28} className="text-[#F4D03F]" />
      </div>

      <h3 className="text-xl font-bold leading-snug text-[#0D3B66] group-hover:text-[#1F5CBA] transition-colors line-clamp-3 min-h-[5.25rem] mb-4">
        {title}
      </h3>

      <ul className="space-y-3 text-gray-700 text-base">
        {shown.map((item) => (
          <li key={item} className="flex items-start gap-2 min-h-[3rem]">
            <Check size={16} className="text-[#0D3B66] mt-1.5 flex-shrink-0" />
            <span className="line-clamp-2 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <p className="text-sm font-medium text-gray-600 min-h-[1.5rem] mb-3">
          {more > 0 ? `+ ${more} more` : ""}
        </p>
        <span className="flex items-center justify-between border-t border-gray-100 pt-4 font-semibold text-[#0D3B66] group-hover:text-[#1F5CBA] transition-colors">
          Learn more
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

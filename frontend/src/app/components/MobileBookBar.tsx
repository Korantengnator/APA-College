import { MessageCircle } from "lucide-react";
import React from "react";

// Sticky "Book Consultation" bar shown on phones and small tablets only.
export default function MobileBookBar() {
  const handleClick = () => {
    window.open(
      "https://wa.me/233243614654?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation",
      "_blank"
    );
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D3B66] border-t border-white/15 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.2)]">
      <button
        type="button"
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-2 bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] font-semibold rounded-md py-3 transition-colors"
      >
        <MessageCircle size={20} />
        Book Consultation
      </button>
    </div>
  );
}

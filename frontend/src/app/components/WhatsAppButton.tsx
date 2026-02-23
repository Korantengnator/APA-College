import { MessageCircle } from "lucide-react";
import React from "react";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      "https://wa.me/233243614654?text=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20ACES",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={handleClick}
        className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Tooltip */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#0D3B66] text-[#F4D03F] text-sm font-medium py-2 px-4 rounded-lg whitespace-nowrap shadow-lg">
          Send us a message
          <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1">
            <div className="border-4 border-transparent border-l-[#0D3B66]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
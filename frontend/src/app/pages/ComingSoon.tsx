import { useLocation } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { services } from "../data/services";
import React from "react";

// Temporary page shared by the Services and Blog routes until their real pages are built.
export default function ComingSoon() {
  const { pathname } = useLocation();
  const service = services.find((s) => s.path === pathname);
  const title = service ? service.name : "Blog";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center bg-[#F5F7FA] pt-16">
        <div className="text-center px-4 py-24">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0D3B66] mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-700">This page is coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

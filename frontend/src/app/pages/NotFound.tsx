import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { usePageTitle } from "../lib/usePageTitle";
import { services } from "../data/services";
import React from "react";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <PageHero
        title="We can't find that page"
        subtitle="The link may be old or mistyped. Here is where you can go instead."
      />
      <main className="flex-1 bg-[#F5F7FA] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Link
              to="/"
              className="bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#0D3B66] text-[#0D3B66] hover:bg-[#0D3B66] hover:text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-gray-700 mb-3 font-semibold">Or explore our services:</p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="text-[#0D3B66] hover:text-[#1F5CBA] underline underline-offset-4">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

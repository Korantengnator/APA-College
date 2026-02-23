import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  const handleConsultation = () => {
    window.open(
      "https://wa.me/233243614654?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation",
      "_blank"
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D3B66] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="h-10 w-10 bg-[#F4D03F] rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="logo" />
            </div>
            <div className="text-white">
              <div className="font-bold text-lg sm:text-xl tracking-tight">
                ACES
              </div>
              <div className="text-[9px] sm:text-[10px] text-gray-300 tracking-wide">
                APA COLLEGE EDUCATIONAL SERVICES
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              onClick={scrollToTop}
              className={`text-white hover:text-[#F4D03F] transition-colors font-medium ${isActive("/") ? "text-[#F4D03F]" : ""
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={scrollToTop}
              className={`text-white hover:text-[#F4D03F] transition-colors font-medium ${isActive("/about") ? "text-[#F4D03F]" : ""
                }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className={`text-white hover:text-[#F4D03F] transition-colors font-medium ${isActive("/contact") ? "text-[#F4D03F]" : ""
                }`}
            >
              Contact Us
            </Link>
            <Button
              onClick={handleConsultation}
              className="bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] font-semibold px-6 py-2 rounded-md transition-colors"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-[#0A2E4D] rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              to="/"
              onClick={handleNavClick}
              className={`block text-white hover:text-[#F4D03F] transition-colors font-medium py-2 ${isActive("/") ? "text-[#F4D03F]" : ""
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={`block text-white hover:text-[#F4D03F] transition-colors font-medium py-2 ${isActive("/about") ? "text-[#F4D03F]" : ""
                }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className={`block text-white hover:text-[#F4D03F] transition-colors font-medium py-2 ${isActive("/contact") ? "text-[#F4D03F]" : ""
                }`}
            >
              Contact Us
            </Link>
            <Button
              onClick={handleConsultation}
              className="w-full bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] font-semibold py-2 rounded-md transition-colors"
            >
              Book Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
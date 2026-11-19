import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { services } from "../data/services";
import MobileBookBar from "./MobileBookBar";
import React from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setServicesOpen(false);
    scrollToTop();
  };

  const handleConsultation = () => {
    window.open(
      "https://wa.me/233243614654?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation",
      "_blank"
    );
  };

  // Close the dropdown when clicking outside it or pressing Escape
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const linkClass = (active: boolean) =>
    `${
      active
        ? "text-[#F4D03F] underline underline-offset-8 decoration-2"
        : "text-white"
    } hover:text-[#F4D03F] transition-colors font-medium whitespace-nowrap`;

  const mobileLinkClass = (active: boolean) =>
    `block ${
      active ? "text-[#F4D03F]" : "text-white"
    } hover:text-[#F4D03F] transition-colors font-medium py-2`;

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A2744] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="h-11 w-11 rounded-full bg-white overflow-hidden flex-shrink-0">
              <img src="/logo.png" alt="APA College Educational Services logo" className="h-full w-full object-cover" />
            </div>
            <div className="text-white leading-tight">
              <span className="sm:hidden block font-bold text-lg tracking-tight">ACES</span>
              <span className="hidden sm:block font-bold text-sm xl:text-base whitespace-nowrap">
                APA College Educational Services
              </span>
              <span className="hidden sm:block text-xs text-[#F4D03F] whitespace-nowrap">
                ...Possibilities With God
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" onClick={handleNavClick} className={linkClass(isActive("/"))}>
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={linkClass(isActive("/about"))}
            >
              About Us
            </Link>

            {/* Services dropdown */}
            <div
              ref={servicesRef}
              className="relative h-16 flex items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className={`${linkClass(isServicesActive)} flex items-center gap-1`}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full w-80 bg-white rounded-b-lg shadow-xl border-t-2 border-[#F4D03F] py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={handleNavClick}
                      className={`block px-5 py-3 text-[#0D3B66] hover:bg-[#F5F7FA] transition-colors ${
                        isActive(service.path) ? "font-bold" : "font-medium"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={handleNavClick}
              className={linkClass(isActive("/contact"))}
            >
              Contact Us
            </Link>
            <Link
              to="/blog"
              onClick={handleNavClick}
              className={linkClass(isActive("/blog"))}
            >
              Blog
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
            className="lg:hidden text-white p-2 hover:bg-[#0A2E4D] rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1">
            <Link to="/" onClick={handleNavClick} className={mobileLinkClass(isActive("/"))}>
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={mobileLinkClass(isActive("/about"))}
            >
              About Us
            </Link>

            <button
              type="button"
              onClick={() => setMobileServicesOpen((open) => !open)}
              aria-expanded={mobileServicesOpen}
              className={`${mobileLinkClass(isServicesActive)} w-full flex items-center justify-between`}
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 border-l-2 border-[#F4D03F] space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={handleNavClick}
                    className={`block py-2 text-sm hover:text-[#F4D03F] transition-colors ${
                      isActive(service.path) ? "text-[#F4D03F]" : "text-gray-200"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/contact"
              onClick={handleNavClick}
              className={mobileLinkClass(isActive("/contact"))}
            >
              Contact Us
            </Link>
            <Link
              to="/blog"
              onClick={handleNavClick}
              className={mobileLinkClass(isActive("/blog"))}
            >
              Blog
            </Link>
            <Button
              onClick={handleConsultation}
              className="w-full bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] font-semibold py-2 rounded-md transition-colors mt-2"
            >
              Book Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
    <MobileBookBar />
    </>
  );
}

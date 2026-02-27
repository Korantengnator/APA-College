import { Link } from "react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D3B66] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <div className="font-bold text-xl tracking-tight mb-1">ACES</div>
              <div className="text-sm text-gray-300">
                APA College Educational Services
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              A globally positioned African educational consultancy empowering
              students and institutions to compete, excel, and lead on the
              global stage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/"
                onClick={scrollToTop}
                className="block text-gray-300 hover:text-[#F4D03F] transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={scrollToTop}
                className="block text-gray-300 hover:text-[#F4D03F] transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="block text-gray-300 hover:text-[#F4D03F] transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#F4D03F] mt-0.5 flex-shrink-0" />
                <span>OPP. GRANT COURT, NORTH-LEGON, ACCRA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#F4D03F] flex-shrink-0" />
                <span>024 361 4654 / 020 039 7955</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#F4D03F] flex-shrink-0" />
                <a
                  href="mailto:amasahpaulanang@gmail.com"
                  className="hover:text-[#F4D03F] mt-0.5 transition-colors"
                >apacollegeeducationalservices<br />@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Business Hours</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-[#F4D03F] flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Monday - Friday</div>
                  <div>8:00 AM - 5:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-[#F4D03F] flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Saturday</div>
                  <div>By Appointment</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-[#F4D03F] flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} APA College Educational Services.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
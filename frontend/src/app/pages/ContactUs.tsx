import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1769839271827-e7e287319dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE2NjIyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080')",
        }}
      >
        <div className="absolute inset-0 bg-[#0D3B66] bg-opacity-85"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-gray-200">
            We're here to help you achieve your academic and career goals
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-[#F5F7FA] p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0D3B66] rounded-full flex items-center justify-center">
                      <MapPin size={24} className="text-[#F4D03F]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D3B66] mb-2">
                      Address
                    </h3>
                    <p className="text-gray-700">
                      OPP. GRANT COURT, NORTH-LEGON, ACCRA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-[#F5F7FA] p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0D3B66] rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-[#F4D03F]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D3B66] mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href="tel:0200397955"
                        className="hover:text-[#0D3B66] transition-colors"
                      >024 361 4654 / 020 039 7955</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-[#F5F7FA] p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0D3B66] rounded-full flex items-center justify-center">
                      <MessageCircle size={24} className="text-[#F4D03F]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D3B66] mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href="https://wa.me/233243614654"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0D3B66] transition-colors"
                      >024 361 4654</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-[#F5F7FA] p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0D3B66] rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-[#F4D03F]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D3B66] mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href="mailto:amasahpaulanang@gmail.com?subject=Inquiry from ACES Website"
                        className="hover:text-[#0D3B66] transition-colors break-all"
                      >apacollegeeducationalservices@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-[#F5F7FA] p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#0D3B66] rounded-full flex items-center justify-center">
                      <Clock size={24} className="text-[#F4D03F]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0D3B66] mb-2">
                      Business Hours
                    </h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Box */}
            <div>
              <div className="bg-gradient-to-br from-[#0D3B66] to-[#1a5a8f] rounded-lg p-8 md:p-12 text-white h-full flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                  Whether you're a student seeking academic excellence, a
                  professional pursuing career advancement, or an institution
                  looking for strategic partnerships, we're here to support your
                  journey.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/233243614654?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation",
                        "_blank"
                      )
                    }
                    className="w-full bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] font-semibold py-4 px-6 rounded-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>Book a Consultation</span>
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "mailto:apacollegeeducationalservices@gmail.com?subject=Inquiry from ACES Website"
                      )
                    }
                    className="w-full bg-white text-[#0D3B66] hover:bg-gray-100 font-semibold py-4 px-6 rounded-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <Mail size={20} />
                    <span>Send Us an Email</span>
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-white border-opacity-30">
                  <p className="text-sm text-gray-200">
                    We offer flexible service delivery through office sessions,
                    home engagements, and virtual platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-0 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-6 text-center">
            Find Us
          </h2>
          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-8"></div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5294449925895!2d-0.20189!3d5.6517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzknMDYuMSJOIDDCsDEyJzA2LjgiVw!5e0!3m2!1sen!2sgh!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ACES Location - North Legon, Accra"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-4">
            North Legon, Opposite Grant Court, Accra, Ghana
          </p>
          <a
            href="https://maps.app.goo.gl/87PhSMSX3FSWizGg9?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#0D3B66] hover:bg-[#0a2d4d] text-[#F4D03F] font-semibold py-3 px-6 rounded-md transition-colors shadow-md"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
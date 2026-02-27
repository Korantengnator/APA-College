import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Shield, Globe, MessageSquare, ExternalLink } from "lucide-react";
import React from "react";

export default function AboutUs() {
  const schools = [
    "Ghana Christian High International School",
    "Lincoln Community School",
    "American International School",
    "Christian Vine School",
    "Rodean School",
    "University of Ghana",
    "Accra Community School",
    "New Nation School",
    "University of Professional Studies Accra",
    "Wisconsin International University College",
    "Academic City University College",
  ];

  const healthcareInstitutions = [
    "Korle-Bu Teaching Hospital",
    "Ridge Hospital",
    "UG Medical Centre",
    "Accra Psychiatric Hospital",
    "Shai Osudoku Hospital",
    "Pantang Hospital",
    "Achimota Polyclinic",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1759111892854-f62c49692506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFmcmljYXxlbnwxfHx8fDE3NzE2NjIyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080')",
        }}
      >
        <div className="absolute inset-0 bg-[#0D3B66] bg-opacity-85"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Us
          </h1>
          <div className="w-24 h-1 bg-[#F4D03F] mx-auto"></div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-6 text-center">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-8"></div>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                APA College Educational Services (ACES) is a professional
                educational consultancy delivering internationally benchmarked
                academic preparation, strategic career alignment, and
                institutional advisory services across Africa and beyond.
              </p>
              <p>
                We operate with a global mindset and African roots, serving
                clients across multiple continents including{" "}
                <span className="font-semibold text-[#0D3B66]">Ghana</span>,{" "}
                <span className="font-semibold text-[#0D3B66]">
                  South Africa
                </span>
                ,{" "}
                <span className="font-semibold text-[#0D3B66]">Kenya</span>,{" "}
                <span className="font-semibold text-[#0D3B66]">
                  United Kingdom
                </span>
                , and the{" "}
                <span className="font-semibold text-[#0D3B66]">
                  United States
                </span>
                .
              </p>
              <p>
                Our delivery is flexible and client-centered. We provide
                services through{" "}
                <span className="font-semibold text-[#0D3B66]">
                  office sessions
                </span>
                ,{" "}
                <span className="font-semibold text-[#0D3B66]">
                  home engagements
                </span>
                , and{" "}
                <span className="font-semibold text-[#0D3B66]">
                  virtual platforms
                </span>
                , ensuring accessibility and convenience without compromising
                quality or professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Reach - Schools */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-6 text-center">
            Institutional Reach & Clientele
          </h2>
          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-12"></div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0D3B66] mb-6">
              Educational Institutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {schools.map((school, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-700 font-medium">{school}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0D3B66] mb-6">
              Healthcare Institutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {healthcareInstitutions.map((institution, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-700 font-medium">{institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Network Section */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-6 text-center">
            Our Expert Network
          </h2>
          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-[#0D3B66] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-[#F4D03F]" />
              </div>
              <h3 className="text-lg font-bold text-[#0D3B66] mb-2">
                Subject-Matter Excellence
              </h3>
              <p className="text-gray-600">
                Experts with deep knowledge across academic disciplines
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-[#0D3B66] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-[#F4D03F]" />
              </div>
              <h3 className="text-lg font-bold text-[#0D3B66] mb-2">
                International Exposure
              </h3>
              <p className="text-gray-600">
                Global experience and cross-cultural competency
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-[#0D3B66] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={32} className="text-[#F4D03F]" />
              </div>
              <h3 className="text-lg font-bold text-[#0D3B66] mb-2">
                Cultural Intelligence
              </h3>
              <p className="text-gray-600">
                Understanding local contexts with global standards
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-[#0D3B66] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-[#F4D03F]" />
              </div>
              <h3 className="text-lg font-bold text-[#0D3B66] mb-2">
                Professional Rigor
              </h3>
              <p className="text-gray-600">
                Commitment to excellence and ethical practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0D3B66] to-[#1a5a8f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-8"></div>
          <blockquote className="text-xl md:text-2xl leading-relaxed italic">
            "To become a globally respected African educational consultancy that
            empowers students and institutions across the world to compete,
            excel, and lead on the global stage through contextually relevant,
            internationally benchmarked educational solutions and strategic
            career alignment."
          </blockquote>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-6 text-center">
            Core Values
          </h2>
          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F7FA] rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0D3B66] to-[#1a5a8f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={40} className="text-[#F4D03F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D3B66] mb-4">
                Integrity
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We uphold the highest ethical standards in all our interactions,
                ensuring transparency, honesty, and accountability.
              </p>
            </div>
            <div className="bg-[#F5F7FA] rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0D3B66] to-[#1a5a8f] rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe size={40} className="text-[#F4D03F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D3B66] mb-4">
                Global Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We deliver world-class services that meet and exceed
                international benchmarks while honoring African contexts.
              </p>
            </div>
            <div className="bg-[#F5F7FA] rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0D3B66] to-[#1a5a8f] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={40} className="text-[#F4D03F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D3B66] mb-4">
                Effective Communication
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We prioritize clear, timely, and culturally sensitive
                communication with all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
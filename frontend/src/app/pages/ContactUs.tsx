import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHero from "../components/PageHero";
import { CONTACT, whatsappLink } from "../data/contact";
import { usePageTitle } from "../lib/usePageTitle";
import FaqSection from "../components/FaqSection";
import { generalFaqs } from "../data/faqs";
import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import React from "react";

const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Inquiry from ACES Website")}`;

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 bg-[#F5F7FA] p-5 rounded-lg hover:shadow-md transition-shadow">
      <div className="w-12 h-12 flex-shrink-0 bg-[#0D3B66] rounded-full flex items-center justify-center">
        <Icon size={22} className="text-[#F4D03F]" />
      </div>
      <div className="min-w-0">
        <h3 className="text-lg font-bold text-[#0D3B66] mb-1">{title}</h3>
        <div className="text-gray-700 text-base">{children}</div>
      </div>
    </div>
  );
}

export default function ContactUs() {
  usePageTitle(
    "Contact Us",
    "Contact APA College Educational Services in North Legon, Accra. Call, WhatsApp or email us to book a consultation."
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      <PageHero
        title="Get in Touch"
        subtitle="We're here to help you achieve your academic and career goals"
      />

      {/* Contact details and call to action */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#0D3B66] mb-6">Contact Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard icon={MapPin} title="Address">
                {CONTACT.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </InfoCard>

              <InfoCard icon={Phone} title="Phone">
                {CONTACT.phones.map((p) => (
                  <p key={p.href}>
                    <a href={p.href} className="hover:text-[#1F5CBA] transition-colors">
                      {p.display}
                    </a>
                  </p>
                ))}
              </InfoCard>

              <InfoCard icon={MessageCircle} title="WhatsApp">
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1F5CBA] transition-colors"
                >
                  {CONTACT.phones[0].display}
                </a>
              </InfoCard>

              <InfoCard icon={Mail} title="Email">
                <a href={mailto} className="hover:text-[#1F5CBA] transition-colors break-all">
                  {CONTACT.email}
                </a>
              </InfoCard>

              <div className="sm:col-span-2">
                <InfoCard icon={Clock} title="Business Hours">
                  <div className="space-y-1">
                    {CONTACT.hours.map((h) => (
                      <p key={h.day}>
                        <span className="font-medium">{h.day}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </InfoCard>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-[#0D3B66] to-[#1a5a8f] rounded-lg p-8 md:p-10 text-white h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-5">Ready to Get Started?</h2>
              <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                Whether you're a student seeking academic excellence, a professional pursuing
                career advancement, or an institution looking for strategic partnerships, we're
                here to support your journey.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() =>
                    window.open(whatsappLink("Hello, I would like to book a consultation"), "_blank")
                  }
                  className="w-full bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] font-semibold py-4 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  <span>Book a Consultation</span>
                </button>
                <a
                  href={mailto}
                  className="w-full bg-white text-[#0D3B66] hover:bg-gray-100 font-semibold py-4 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  <span>Send Us an Email</span>
                </a>
              </div>
              <p className="mt-8 pt-6 border-t border-white/30 text-sm text-gray-200">
                We offer flexible service delivery through office sessions, home engagements, and
                virtual platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">Find Us</h2>
          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-8"></div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5294449925895!2d-0.20189!3d5.6517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzknMDYuMSJOIDDCsDEyJzA2LjgiVw!5e0!3m2!1sen!2sgh!4v1234567890"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ACES location, North Legon, Accra"
            ></iframe>
          </div>
          <p className="text-gray-700 mt-4 mb-5">North Legon, Opposite Grant Court, Accra, Ghana</p>
          <a
            href={CONTACT.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0D3B66] hover:bg-[#0A2E4D] text-[#F4D03F] font-semibold py-3 px-6 rounded-md transition-colors shadow-md"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <FaqSection faqs={generalFaqs} />

      <Footer />
    </div>
  );
}

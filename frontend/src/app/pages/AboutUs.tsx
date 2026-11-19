import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import { IMAGES, TEAM, SHOW_TEAM_SECTION } from "../data/images";
import { usePageTitle } from "../lib/usePageTitle";
import {
  Shield,
  Globe,
  MessageSquare,
  MapPin,
  Building2,
  Home,
  Video,
  GraduationCap,
  HeartPulse,
} from "lucide-react";
import React from "react";

const regions = ["Ghana", "South Africa", "Kenya", "Mali", "United Kingdom", "United States", "Canada"];

const deliveryModes = [
  { icon: Building2, label: "Office sessions" },
  { icon: Home, label: "Home engagements" },
  { icon: Video, label: "Virtual platforms" },
];

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

const expertise = [
  {
    icon: Shield,
    title: "Subject-Matter Excellence",
    text: "Experts with deep knowledge across academic disciplines",
  },
  {
    icon: Globe,
    title: "International Exposure",
    text: "Global experience and cross-cultural competency",
  },
  {
    icon: MessageSquare,
    title: "Cultural Intelligence",
    text: "Understanding local contexts with global standards",
  },
  {
    icon: Shield,
    title: "Professional Rigor",
    text: "Commitment to excellence and ethical practice",
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    text: "We uphold the highest ethical standards in all our interactions, ensuring transparency, honesty, and accountability.",
  },
  {
    icon: Globe,
    title: "Global Excellence",
    text: "We deliver world-class services that meet and exceed international benchmarks while honoring African contexts.",
  },
  {
    icon: MessageSquare,
    title: "Effective Communication",
    text: "We prioritize clear, timely, and culturally sensitive communication with all stakeholders.",
  },
];

function ChipGroup({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-2xl font-bold text-[#0D3B66] mb-5">
        <Icon size={26} className="text-[#1F5CBA]" />
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="bg-white border border-gray-200 rounded-full px-4 py-2 text-gray-800 font-medium shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AboutUs() {
  usePageTitle(
    "About Us",
    "Learn about APA College Educational Services: who we are, where we serve, our vision and our core values."
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      <PageHero
        title="About Us"
        subtitle="Discover who we are, where we work, and what drives us to help learners and institutions compete, excel and lead."
      />

      {/* Who we are */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Who We Are" />
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <Reveal>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                APA College Educational Services (ACES) is a professional educational consultancy
                delivering internationally benchmarked academic preparation, strategic career
                alignment, and institutional advisory services across Africa and beyond.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ImageSlot
                src={IMAGES.aboutStory}
                alt="The ACES team in front of the company banners"
                label="Team or office photo (landscape)"
                className="aspect-[4/3]"
              />
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F5F7FA] rounded-lg p-6 md:p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-[#0D3B66] mb-3">
                <MapPin size={22} className="text-[#1F5CBA]" />
                Where we serve
              </h3>
              <p className="text-gray-700 leading-relaxed mb-5">
                We operate with a global mindset and African roots, serving clients across
                multiple continents.
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <span
                    key={r}
                    className="bg-[#0D3B66] text-white text-sm font-semibold rounded-full px-4 py-1.5"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-6 md:p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold text-[#0D3B66] mb-3">
                <Video size={22} className="text-[#1F5CBA]" />
                How we deliver
              </h3>
              <p className="text-gray-700 leading-relaxed mb-5">
                Our delivery is flexible and client-centered, ensuring accessibility and
                convenience without compromising quality or professionalism.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {deliveryModes.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="bg-white rounded-lg p-3 text-center border border-gray-200"
                  >
                    <Icon size={24} className="text-[#0D3B66] mx-auto mb-2" />
                    <span className="text-sm font-semibold text-gray-800">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional reach */}
      <section className="py-20 md:py-28 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our clients" title="Institutional Reach & Clientele" />
          <div className="space-y-12">
            <ChipGroup icon={GraduationCap} title="Educational Institutions" items={schools} />
            <ChipGroup icon={HeartPulse} title="Healthcare Institutions" items={healthcareInstitutions} />
          </div>
        </div>
      </section>

      {/* Expert network */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our people" title="Our Expert Network" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-[#F5F7FA] rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#0D3B66] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={30} className="text-[#F4D03F]" />
                </div>
                <h3 className="text-lg font-bold text-[#0D3B66] mb-2">{title}</h3>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team (placeholders until real photos and names are added in data/images.ts) */}
      {SHOW_TEAM_SECTION && TEAM.length > 0 && (
        <section className="py-20 md:py-28 bg-[#F5F7FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Meet the team"
              title="The people behind ACES"
              subtitle="Meet some of the people who make ACES work."
            />
            <div className="flex flex-wrap justify-center gap-8">
              {TEAM.map((m, i) => (
                <Reveal key={i} delay={i * 90} className="w-full max-w-[15rem]">
                  <div className="text-center">
                    <ImageSlot
                      src={m.photo}
                      alt={m.name}
                      label="Portrait (4:5)"
                      className="aspect-[4/5] object-top mb-4"
                    />
                    <h3 className="text-lg font-bold text-[#0D3B66]">{m.name}</h3>
                    <p className="text-gray-700">{m.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vision */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0D3B66] to-[#1a5a8f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-8"></div>
          <blockquote className="text-xl md:text-2xl leading-relaxed italic">
            &ldquo;To become a globally respected African educational consultancy that empowers
            students and institutions across the world to compete, excel, and lead on the
            global stage through contextually relevant, internationally benchmarked
            educational solutions and strategic career alignment.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 md:py-28 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What guides us" title="Core Values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0D3B66] to-[#1a5a8f] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={38} className="text-[#F4D03F]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D3B66] mb-3">{title}</h3>
                <p className="text-gray-700 text-base md:text-[17px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CtaBand title="Ready to compete, excel, and lead?" ticks />

      <Footer />
    </div>
  );
}

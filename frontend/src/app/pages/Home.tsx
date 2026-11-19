import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceCard from "../components/ServiceCard";
import HeroBackground from "../components/HeroBackground";
import LogoMarquee from "../components/LogoMarquee";
import TestimonialCard from "../components/TestimonialCard";
import StatCard from "../components/StatCard";
import DifferentiatorCard from "../components/DifferentiatorCard";
import { Button } from "../components/ui/button";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import { usePageTitle } from "../lib/usePageTitle";
import { Link } from "react-router";
import { whatsappLink } from "../data/contact";
import {
  GraduationCap,
  BookOpen,
  Users,
  Briefcase,
  Trophy,
  Heart,
  Building2,
  ArrowRight,
  MessageCircle,
  ClipboardList,
  LifeBuoy,
  School,
  UserRound,
} from "lucide-react";
import React from "react";

// When a clean hero photo is ready, put its path here (for example "/hero.jpg") and it replaces the branded panel.
const HERO_IMAGE = "";

const partnerships = [
  "British Council",
  "Ghana ASCD",
  "UG Business School",
  "UG Medical Centre",
  "Novago Ghana Ltd",
  "Westol Petroleum Ltd",
  "Aaya Spa",
  "Tyries Essentials",
];

// Logos shown in the two sliding rows (files are in public/logos).
// To re-sort a logo, move its line from one list to the other.
const curriculaLogos = [
  { name: "Cambridge Assessment International Education", file: "cambridge.png" },
  { name: "International Baccalaureate", file: "ib.png" },
  { name: "AP (College Board)", file: "ap.png" },
  { name: "Ghana Education Service", file: "ges.png" },
  { name: "EduCanada", file: "educanada.png" },
];

const examLogos = [
  { name: "IELTS", file: "ielts.png" },
  { name: "TOEFL", file: "toefl.png" },
  { name: "Pearson Test of English", file: "pearson.png" },
  { name: "Occupational English Test (OET)", file: "oet.png" },
  { name: "SAT", file: "sat.png" },
  { name: "LanguageCert", file: "languagecert.png" },
  { name: "Skills for English", file: "skills-for-english.png" },
  { name: "Praxis", file: "praxis.png" },
];

const audiences = [
  {
    icon: UserRound,
    title: "Students & Parents",
    text: "Tutoring, curriculum guidance, and school or university applications.",
    to: "/services/academic-support",
  },
  {
    icon: GraduationCap,
    title: "Professionals",
    text: "English proficiency exams and career coaching for study, work and migration.",
    to: "/services/exam-preparation",
  },
  {
    icon: School,
    title: "Schools & Institutions",
    text: "Recruitment, HR systems, accreditation support and operations audits.",
    to: "/services/staffing",
  },
];

// Draft wording for the process: confirm with your boss
const howItWorks = [
  {
    icon: MessageCircle,
    title: "Free consultation",
    text: "Tell us your goals, your timeline and where you are now.",
  },
  {
    icon: ClipboardList,
    title: "Personalised plan",
    text: "We map the exams, subjects or services that fit you or your institution.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    text: "Our team guides you step by step until you reach your goal.",
  },
];

function SuccessBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-[#F4D03F] rounded-xl px-5 py-3 shadow-lg ${className}`}>
      <div className="flex items-center gap-3">
        <Trophy size={30} className="text-[#0D3B66]" />
        <div>
          <div className="text-2xl font-bold text-[#0D3B66] leading-none">95%+</div>
          <div className="text-sm font-medium text-[#0D3B66]">Success Rate</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  usePageTitle(
    "APA College Educational Services",
    "APA College Educational Services is an African educational consultancy offering academic support, exam preparation, career counseling and institutional consulting."
  );

  const handleConsultation = () => {
    window.open(whatsappLink("Hello, I would like to book a consultation"), "_blank");
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A2744] via-[#0D3B66] to-[#14507F] pt-16 relative overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div className="text-white">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-5">
              Premium Educational Consultancy Services
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.1] mb-3">
              Rooted in Africa. Ready for the World.
            </h1>
            <p className="text-lg md:text-xl font-bold tracking-wide text-[#F4D03F] mb-5">
              THE EDUCATION PEOPLE
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-200 max-w-xl mb-8">
              APA College Educational Services is a globally positioned African educational
              consultancy empowering students and institutions to compete, excel, and lead on
              the global stage through internationally benchmarked educational solutions and
              strategic career alignment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleConsultation}
                className="bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] px-7 py-6 text-base font-semibold rounded-lg inline-flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight size={18} />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0D3B66] px-7 py-6 text-base font-semibold rounded-lg"
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Visual: a clean photo when HERO_IMAGE is set, otherwise the large ACES logo */}
          <div className="hidden md:flex items-center justify-center">
            {HERO_IMAGE ? (
              <div className="relative w-full">
                <img
                  src={HERO_IMAGE}
                  alt="ACES students and consultants"
                  className="w-full h-[360px] object-cover rounded-2xl shadow-2xl"
                />
                <SuccessBadge className="absolute -bottom-5 right-4" />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full bg-white/10"></div>
                  <div className="absolute -inset-16 rounded-full border border-white/10"></div>
                  <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-white overflow-hidden shadow-2xl ring-4 ring-white/30">
                    <img
                      src="/logo.png"
                      alt="APA College Educational Services logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <SuccessBadge className="absolute -bottom-4 -right-10" />
                </div>
                <p className="mt-16 text-[#F4D03F] font-medium">...Possibilities With God</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Curricula and exams: two sliding rows */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-600 mb-5">
            Curricula and education systems we work with
          </p>
          <LogoMarquee logos={curriculaLogos} />

          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-600 mt-10 mb-5">
            Exams we prepare you for
          </p>
          <LogoMarquee logos={examLogos} reverse />
        </div>
      </section>

      {/* Who we help */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who we help"
            title="Find the right path for you"
            subtitle="Whether you are a student, a professional or an institution, start here."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map(({ icon: Icon, title, text, to }, i) => (
              <Reveal key={title} delay={i * 90} className="h-full">
                <Link
                  to={to}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="group h-full flex flex-col bg-[#F5F7FA] hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl rounded-xl p-8 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0D3B66] flex items-center justify-center mb-5">
                    <Icon size={26} className="text-[#F4D03F]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D3B66] mb-2">{title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-5">{text}</p>
                  <span className="mt-auto inline-flex items-center gap-1 font-semibold text-[#0D3B66] group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What we do" title="Our Services" subtitle="Four service areas, one goal: helping you and your institution compete, excel and lead." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal className="h-full">
            <ServiceCard
              icon={BookOpen}
              title="Academic Support Services"
              to="/services/academic-support"
              items={[
                "Personalized academic support",
                "Academic diagnostic assessments",
                "Curriculum fit assessment",
                "Subject and course selection",
                "School selection and application advisory",
                "Upper secondary project support",
                "Home tuition",
                "Home schooling advisory",
              ]}
            />
          </Reveal>
            <Reveal delay={90} className="h-full">
            <ServiceCard
              icon={Users}
              title="Academic & Career Counseling"
              to="/services/career-counseling"
              items={[
                "Personalized academic coaching",
                "Local & international university application counseling",
                "Career exploration and assessment",
                "Job shadowing coordination",
                "Academic and professional pathway coaching",
                "Career transition coaching",
              ]}
            />
          </Reveal>
            <Reveal delay={180} className="h-full">
            <ServiceCard
              icon={GraduationCap}
              title="Exam Preparation Services"
              to="/services/exam-preparation"
              items={[
                "Digital SAT",
                "IELTS",
                "TOEFL",
                "Pearson Test of English",
                "Occupational English Test",
                "LanguageCert",
                "Skills for English",
              ]}
            />
          </Reveal>
            <Reveal delay={270} className="h-full">
            <ServiceCard
              icon={Briefcase}
              title="Educational Staffing & Institutional Consulting"
              to="/services/staffing"
              items={[
                "Teacher and non-teaching staff recruitment",
                "Human resource planning",
                "Job design analysis",
                "Performance management systems",
                "School accreditation acquisition support",
                "School operations audit",
              ]}
            />
          </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="Three simple steps"
            subtitle="From your first conversation to your goal, we keep the process clear."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {howItWorks.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 120} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-5 rounded-full bg-[#0D3B66] flex items-center justify-center">
                  <Icon size={32} className="text-[#F4D03F]" />
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#F4D03F] text-[#0D3B66] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0D3B66] mb-2">{title}</h3>
                <p className="text-gray-700 text-base leading-relaxed max-w-xs mx-auto">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What differentiates ACES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why ACES" title="What Differentiates ACES" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DifferentiatorCard
              number={1}
              text="We integrate academic excellence with strategic career alignment."
            />
            <DifferentiatorCard number={2} text="We serve both individuals and institutions." />
            <DifferentiatorCard
              number={3}
              text="We maintain international standards while remaining contextually African."
            />
            <DifferentiatorCard
              number={4}
              text="Our Services are tailored for the convenience of our clients"
            />
            <div className="md:col-span-2 md:max-w-xl md:mx-auto w-full">
              <DifferentiatorCard
                number={5}
                text="We leverage expert networks and institutional partnerships to enhance impact."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our impact */}
      <section className="py-20 md:py-28 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Results" title="Our Impact" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={Trophy}
              title="Academic Achievement"
              description="Students have won intra- and inter-school academic competition awards in the UK."
            />
            <StatCard
              icon={Heart}
              title="Professional Advancement"
              description="Healthcare professionals have passed English proficiency exams and secured employment across Europe."
            />
            <StatCard
              icon={Building2}
              title="University Placement"
              description="Students admitted into reputable institutions locally and internationally."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Client stories" title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Belinda Koomson"
              title="University Student"
              testimonial="ACES helped me pass my OET exam on the first attempt. Their structured approach and expert guidance made all the difference in my career progression."
            />
            <TestimonialCard
              name="Maame Akyaa Boateng"
              title="SHS Student"
              testimonial="APA College Educational Services supported me through my O Levels, SAT prep, and arranged job shadowing in four companies that helped clarify my career goals. Their guidance truly boosted my confidence and academic performance."
            />
            <TestimonialCard
              name="Nana Yaw Koranteng"
              title="University Student"
              testimonial="With APA’s focused SAT preparation and mentorship, I gained admission into my university of choice. Their structured support made all the difference in my success."
            />
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 md:py-28 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Our network" title="Partnerships & Strategic Collaborations" />
          <p className="text-gray-700 leading-relaxed text-lg mb-10 max-w-3xl mx-auto">
            Our strategic partnerships enhance industry exposure, workforce alignment, and
            institutional development across multiple sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {partnerships.map((partner) => (
              <span
                key={partner}
                className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-gray-800 font-semibold shadow-sm"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CtaBand
        title="Ready to compete, excel, and lead?"
        text="Book a consultation with APA College Educational Services and take your next strategic step toward global academic and career excellence."
        ticks
      />

      <Footer />
    </div>
  );
}

import { useState } from "react";
import { useLocation } from "react-router";
import {
  BookOpen,
  Users,
  GraduationCap,
  Briefcase,
  Check,
  Star,
  LucideIcon,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SubServiceCard from "../components/SubServiceCard";
import FlyerSlideshow from "../components/FlyerSlideshow";
import LogoMarquee from "../components/LogoMarquee";
import HeroBackground from "../components/HeroBackground";
import SectionHeading from "../components/SectionHeading";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import FaqSection from "../components/FaqSection";
import CtaBand from "../components/CtaBand";
import { usePageTitle } from "../lib/usePageTitle";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import ApproachCardItem from "../components/ApproachCardItem";
import { serviceDetails, HeroColor } from "../data/serviceDetails";
import { whatsappLink } from "../data/contact";
import React from "react";

const NAVY = "#0D3B66";
const BLUE = "#1F5CBA";
const TEAL = "#6BB7A8";
const RED = "#DB433E";
const YELLOW = "#F4D03F";
const GOLD = "#A88B00"; // darker yellow, readable on white

const pageIcons: Record<string, LucideIcon> = {
  "/services/exam-preparation": GraduationCap,
  "/services/academic-support": BookOpen,
  "/services/career-counseling": Users,
  "/services/staffing": Briefcase,
};

const heroColors: Record<HeroColor, string> = {
  white: "#FFFFFF",
  yellow: YELLOW,
  red: "#FFFFFF", // shown white with a yellow underline
};


const stepGridCols: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

// One page template shared by all four services. The content comes from data/serviceDetails.ts
interface PopupContent {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  meta?: string;
}

export default function ServicePage() {
  const { pathname } = useLocation();
  const service = serviceDetails.find((s) => s.path === pathname);
  const [selected, setSelected] = useState<PopupContent | null>(null);
  usePageTitle(
    service ? service.hero.eyebrow : "Services",
    service ? service.hero.description : undefined
  );

  if (!service) return null;
  const Icon = pageIcons[service.path] ?? BookOpen;

  const handleConsultation = (topic: string) => {
    window.open(
      `https://wa.me/233243614654?text=${encodeURIComponent(
        `Hello, I would like to enquire about ${topic}`
      )}`,
      "_blank"
    );
  };

  const { hero, intro, offer, band, approach, stats, testimonials, showTestimonials, cta, flyers } = service;
  const hasFlyers = Boolean(flyers && flyers.length > 0);
  const hasFlyerArea = hasFlyers || Boolean(service.flyerPlaceholder); // flyers, or an empty box waiting for them

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A2744] via-[#0D3B66] to-[#14507F] pt-16 relative overflow-hidden">
        <HeroBackground />
        <div
          className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 grid gap-10 items-center ${
            hasFlyerArea ? "lg:grid-cols-[1.15fr_0.85fr]" : ""
          }`}
        >
          <div className={`text-white ${hasFlyerArea ? "" : "text-center max-w-3xl mx-auto"}`}>
            <p
              className="inline-block border-b-2 mb-3 font-medium"
              style={{ color: YELLOW, borderColor: YELLOW }}
            >
              {hero.eyebrow}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
              {hero.lines.map((line, i) => (
                <span key={i} className="block">
                  {line.map((seg, j) => (
                    <span
                      key={j}
                      className={
                        seg.color === "red"
                          ? "underline decoration-[#F4D03F] decoration-4 underline-offset-8"
                          : ""
                      }
                      style={{ color: heroColors[seg.color ?? "white"] }}
                    >
                      {seg.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p
              className={`text-base md:text-lg text-gray-200 leading-relaxed mb-6 ${
                hasFlyerArea ? "max-w-xl" : "max-w-2xl mx-auto"
              }`}
            >
              {hero.description}
            </p>
            <div className={`flex flex-wrap gap-3 ${hasFlyerArea ? "" : "justify-center"}`}>
              {hero.buttons.map((b) => (
                <Button
                  key={b.label}
                  onClick={() => handleConsultation(hero.eyebrow)}
                  className={
                    b.variant === "primary"
                      ? "bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] font-semibold px-6 py-5 text-base rounded-md"
                      : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0D3B66] font-semibold px-6 py-5 text-base rounded-md"
                  }
                >
                  {b.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Flyer slideshow beside the text. Until a service has flyers, the text is centred instead. */}
          {hasFlyers ? (
            <FlyerSlideshow flyers={flyers!} aspect={service.flyerAspect} />
          ) : service.flyerPlaceholder ? (
            <div className="hidden lg:block w-full max-w-sm mx-auto">
              <ImageSlot alt="Flyer placeholder" label="Flyer for this service goes here (square)" className="aspect-square" />
            </div>
          ) : null}
        </div>
      </section>

      {/* Intro with three pillars (Exam Preparation only) */}
      {intro && (
        <section className="py-20 md:py-28 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-3">{intro.heading}</h2>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">{intro.text}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-left md:text-center">
              {intro.pillarsTitle}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {intro.pillars.map((p, i) => (
                <div key={p.title} className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-4"
                    style={{ backgroundColor: NAVY, color: "#FFFFFF" }}
                  >
                    {i + 1}
                  </div>
                  <h4 className="font-bold uppercase text-gray-900 mb-2">{p.title}</h4>
                  <p className="text-gray-700 text-base leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="italic text-gray-700 max-w-3xl mx-auto mt-12 leading-relaxed">
              {intro.closing}
            </p>
          </div>
        </section>
      )}

      {/* What we offer: small cards with a Read more popup */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={offer.eyebrow}
            title={offer.title}
            subtitle={offer.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offer.cards.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 90} className="h-full">
                <SubServiceCard
                icon={Icon}
                title={c.title}
                summary={c.summary}
                tag={c.tag}
                meta={c.meta}
                onReadMore={() =>
                  setSelected({ title: c.title, paragraphs: c.details, meta: c.meta })
                }
              />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Band of names and logos (curricula, countries, institutions, exams) */}
      {band && (
        <section className="py-16 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>
              {band.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#0D3B66] leading-tight max-w-3xl mx-auto mb-8">
              {band.title}
            </h2>
            {band.items && (
              <div className="flex flex-wrap justify-center gap-3">
                {band.items.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-200 text-gray-900 font-semibold rounded-full px-5 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
            {band.logos && (
              <div className={band.items ? "mt-10" : ""}>
                {band.logosTitle && (
                  <p className="text-base font-semibold text-[#0D3B66] mb-5">{band.logosTitle}</p>
                )}
                {band.logos.length > 4 ? (
                  <LogoMarquee logos={band.logos} />
                ) : (
                  <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                    {band.logos.map((logo) => (
                      <img
                        key={logo.file}
                        src={`/logos/${logo.file}`}
                        alt={logo.name}
                        loading="lazy"
                        className="h-12 md:h-16 w-auto object-contain"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Programme options (Exam Preparation) */}
      {service.plans && (
        <section className="py-20 md:py-28 bg-[#F5F7FA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={service.plans.eyebrow}
              title={service.plans.title}
              subtitle={service.plans.subtitle}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {service.plans.items.map((plan, i) => (
                <Reveal key={plan.title} delay={i * 90} className="h-full">
                  <div className="h-full flex flex-col bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <span className="self-start text-xs font-semibold uppercase tracking-wide text-[#0D3B66] bg-[#0D3B66]/10 rounded-full px-3 py-1 mb-4">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-[#0D3B66] mb-2">{plan.title}</h3>
                    <p className="text-gray-700 text-base mb-5">{plan.summary}</p>
                    <ul className="space-y-3 text-gray-700 text-base mb-8">
                      {plan.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <Check size={18} className="text-[#0D3B66] mt-1 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={() =>
                        window.open(
                          whatsappLink(`Hello, I would like a quote for the ${plan.title} (${hero.eyebrow})`),
                          "_blank"
                        )
                      }
                      className="mt-auto w-full bg-[#0D3B66] hover:bg-[#0A2E4D] text-white font-semibold py-6 text-base rounded-md"
                    >
                      Request a quote
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto leading-relaxed">
                {service.plans.note}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Our approach / process */}
      <section className="py-20 md:py-28 bg-[#F0F0FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {approach.kind === "steps" ? (
            <>
              <SectionHeading
                eyebrow={approach.eyebrow}
                title={approach.title}
                subtitle={approach.subtitle}
              />
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-8 ${
                  stepGridCols[approach.steps.length] ?? "lg:grid-cols-4"
                }`}
              >
                {approach.steps.map((step, i) => (
                  <div key={step.title} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-[#0D3B66] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-[#0D3B66] mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-base leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <SectionHeading
                eyebrow={approach.eyebrow}
                title={approach.title}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {approach.cards.map((c, i) => (
                  <Reveal key={c.title} delay={(i % 2) * 90} className="h-full">
                    <ApproachCardItem
                      title={c.title}
                      summary={c.paragraphs[0]}
                      onReadMore={() =>
                        setSelected({ title: c.title, paragraphs: c.paragraphs, bullets: c.bullets })
                      }
                    />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Impact in numbers */}
      <section className="py-20 md:py-28 bg-[#0D3B66]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-white text-center mb-10">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 ${i > 0 ? "md:border-l md:border-[#F4D03F]/60" : ""}`}
              >
                <div className="text-4xl md:text-6xl font-extrabold text-[#F4D03F] leading-none">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 text-sm md:text-base font-bold uppercase text-white">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {showTestimonials && (
        <section className="py-20 md:py-28 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: TEAL }}
            >
              Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
              {service.testimonialsTitle ?? "What Our Clients Say"}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name + t.role} className="bg-white rounded-xl p-6 flex flex-col shadow-sm">
                <div className="text-5xl leading-none font-serif text-[#F4D03F] mb-2">&ldquo;</div>
                <div className="flex gap-1 mb-3">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star key={n} size={16} className="text-[#F4D03F]" fill="#F4D03F" />
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mb-6">{t.quote}</p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#0D3B66] text-white font-bold flex items-center justify-center">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0D3B66]">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      )}

      {/* FAQ */}
      <FaqSection faqs={service.faqs ?? []} />

      {/* Call to action */}
      <CtaBand
        title={cta.title}
        text={cta.text}
        message={`Hello, I would like to enquire about ${hero.eyebrow}`}
        ticks
      />

      <Footer />

      {/* "Read more" popup */}
      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-[#0D3B66] text-xl">{selected.title}</DialogTitle>
                <DialogDescription className="sr-only">
                  Details about {selected.title}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 text-gray-700 leading-relaxed max-h-[60vh] overflow-y-auto">
                {selected.paragraphs.map((paragraph, i) => (
                  <React.Fragment key={i}>
                    <p>{paragraph}</p>
                    {i === 0 && selected.bullets && (
                      <ul className="list-disc pl-5 space-y-1">
                        {selected.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                ))}
                {selected.meta && <p className="font-bold text-gray-900">{selected.meta}</p>}
              </div>
              <Button
                onClick={() => handleConsultation(selected.title)}
                className="bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] font-semibold w-full"
              >
                Enquire About This Service
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

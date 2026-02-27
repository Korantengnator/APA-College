import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import StatCard from "../components/StatCard";
import DifferentiatorCard from "../components/DifferentiatorCard";
import { Button } from "../components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Users,
  Briefcase,
  Trophy,
  Heart,
  Building2,
  ArrowRight,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

export default function Home() {
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

  const handleConsultation = () => {
    window.open(
      "https://wa.me/233243614654?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation",
      "_blank"
    );
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const certificationCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center bg-[#0D3B66] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-6">
              <div className="inline-block">
                <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  Premium Educational Consultancy Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Rooted in Africa. Ready for the World.
              </h1>
              <h5 className="text-2xl md:text-2xl lg:text-2xl font-bold leading-tight">
                THE EDUCATION PEOPLE
              </h5>

              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                APA College Educational Services is a globally positioned African
                educational consultancy empowering students and institutions to
                compete, excel, and lead on the global stage through internationally
                benchmarked educational solutions and strategic career alignment.
              </p>



              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleConsultation}
                  className="bg-[#F4D03F] hover:bg-[#e5c230] text-[#0D3B66] px-8 py-6 text-lg font-semibold rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={20} />
                </Button>
                <Button
                  onClick={scrollToServices}
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0D3B66] px-8 py-6 text-lg font-semibold rounded-lg transition-colors"
                >
                  Explore Our Services
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Slider {...carouselSettings}>
                  <div>
                    <img
                      src="/logo.png"
                      alt="ACES Collaborative Learning"
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src="/flyer1.png"
                      alt="Students learning"
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src="/flyer2.png"
                      alt="ACES Student Excellence"
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src="/flyer3.png"
                      alt="ACES Collaborative Learning"
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src="/flyer4.png"
                      alt="ACES Collaborative Learning"
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                </Slider>

                {/* Success Rate Badge */}
                <div className="absolute bottom-6 right-6 bg-[#F4D03F] rounded-xl px-6 py-4 shadow-lg z-10">
                  <div className="flex items-center space-x-3">
                    <Trophy size={32} className="text-[#0D3B66]" />
                    <div>
                      <div className="text-3xl font-bold text-[#0D3B66]">95%+</div>
                      <div className="text-sm font-medium text-[#0D3B66]">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Logos Carousel Section */}
      <section className="py-3 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="w-full">
            <Slider {...certificationCarouselSettings}>
              <div className="flex items-center justify-center">
                <img
                  src="/part1.png"
                  alt="Cambridge, GCE, EduCanada, IB, AP"
                  className="w-full h-24 object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/part2.png"
                  alt="PRAXIS, Pearson, IELTS, OET"
                  className="w-full h-24 object-contain"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/part3.png"
                  alt="LanguageCert, Skills for English, ETS, TOEFL, SAT"
                  className="w-full h-24 object-contain"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={BookOpen}
              title="Academic Support Services"
             items={[
                      "Personalized academic support",
                      "Academic diagnostic assessments",
                      "Curriculum fit assessment",
                      "Subject and course selection",
                      "School selection and application advisory",
                      "Upper secondary project support",
                      "Home tuition",
                      "Home schooling advisory"
                    ]}
            />
            <ServiceCard
              icon={Users}
              title="Academic & Career Counseling"
              items={[
                    "Personalized academic coaching",
                    "Local & international university application counseling",
                    "Career exploration and assessment",
                    "Job shadowing coordination",
                    "Academic and professional pathway coaching",
                    "Career transition coaching"
                  ]}            />
                  <ServiceCard
              icon={GraduationCap}
              title="Exam Preparation Services"
                  items={[
                          "Digital SAT",
                          "IELTS",
                          "TOEFL",
                          "Pearson Test of English",
                          "Occupational English Test",
                          "LanguageCert",
                          "Skills for English"
                        ]}/>
            <ServiceCard
              icon={Briefcase}
              title="Educational Staffing & Institutional Consulting"
              items={[
                    "Teacher and non-teaching staff recruitment",
                    "Human resource planning",
                    "Job design analysis",
                    "Performance management systems",
                    "School accreditation acquisition support",
                    "School operations audit"
                  ]}            />
          </div>
        </div>
      </section>

      {/* What Differentiates Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
              What Differentiates ACES
            </h2>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DifferentiatorCard
              number={1}
              text="We integrate academic excellence with strategic career alignment."
            />
            <DifferentiatorCard
              number={2}
              text="We serve both individuals and institutions."
            />
            <DifferentiatorCard
              number={3}
              text="We maintain international standards while remaining contextually African."
            />
            <DifferentiatorCard
              number={4}
              text="Our Services are tailored for the convenience of our clients"
            />
            <DifferentiatorCard
              number={5}
              text="We leverage expert networks and institutional partnerships to enhance impact."
            />
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto"></div>
          </div>
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

      {/* Partnerships & Strategic Collaborations Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-6 text-center">
            Partnerships & Strategic Collaborations
          </h2>
          <div className="w-24 h-1 bg-[#F4D03F] mx-auto mb-8"></div>
          <p className="text-center text-gray-700 leading-relaxed text-lg mb-12 max-w-3xl mx-auto">
            Our strategic partnerships enhance industry exposure, workforce
            alignment, and institutional development across multiple sectors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F5F7FA] to-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
              >
                <p className="text-gray-700 font-semibold">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-[#F4D03F] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Belinda Koomson"
              title="University Student"
              testimonial="ACES helped me pass my OET exam on the first attempt. Their structured approach and expert guidance made all the difference in my career progression."
              image="https://images.unsplash.com/photo-1731213562305-0152c6946bdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBibGFjayUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzE2OTU3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <TestimonialCard
              name="Maame Akyaa Boateng"
              title="SHS Student"
              testimonial="APA College Educational Services supported me through my O Levels, SAT prep, and arranged job shadowing in four companies that helped clarify my career goals. Their guidance truly boosted my confidence and academic performance."
              image="https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbnxlbnwxfHx8fDE3NzE2NjIyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            />
            <TestimonialCard
              name="Nana Yaw Koranteng"
              title="University Student"
              testimonial="With APA’s focused SAT preparation and mentorship, I gained admission into my university of choice. Their structured support made all the difference in my success."
              image="https://images.unsplash.com/photo-1744809495173-217ca4faa8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc3MTY2MjI0NXww&ixlib=rb-4.1.0&q=80&w=1080"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-[#f4d03f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0d3b66]">
            Ready to compete, excel, and lead?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-[#0d3b66]">
            Book a consultation with APA College Educational Services and take
            your next strategic step toward global academic and career
            excellence.
          </p>
          <Button
            onClick={handleConsultation}
            className="text-[#0D3B66] px-8 py-6 text-lg font-semibold rounded-md transition-colors inline-flex items-center space-x-2 bg-[#0d3b66]"
          >
            <span className="text-[#f4d03f]">Book Consultation</span>
            <ArrowRight size={20} className="text-[#F4D03F]" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
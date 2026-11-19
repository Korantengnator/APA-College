import { Link } from "react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import React from "react";
import { services } from "../data/services";
import { CONTACT } from "../data/contact";
import { TikTokIcon, InstagramIcon, LinkedinIcon, FacebookIcon, WhatsAppIcon } from "./SocialIcons";

// Social profiles. To add another one later, add a line here (and an icon in SocialIcons.tsx).
const socialLinks = [
  { name: "TikTok", url: "https://www.tiktok.com/@apacollegeeducation", Icon: TikTokIcon },
  { name: "Instagram", url: "https://www.instagram.com/apa_college_edu_services/", Icon: InstagramIcon },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/apa-college-educational-services/",
    Icon: LinkedinIcon,
  },
  { name: "Facebook", url: "https://www.facebook.com/share/1ED78BcNXc/", Icon: FacebookIcon },
  {
    name: "WhatsApp Channel",
    url: "https://whatsapp.com/channel/0029VbB9IMwA2pLFCPAFlG35",
    Icon: WhatsAppIcon,
  },
];

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="lg:max-w-[17rem]">
      <h3 className="text-base font-bold text-white">{title}</h3>
      <div className="w-8 h-0.5 bg-[#F4D03F] mt-2 mb-5"></div>
      <ul className="space-y-3 text-sm leading-relaxed text-gray-300">{children}</ul>
    </div>
  );
}

function IconRow({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon size={18} className="text-[#F4D03F] mt-0.5 flex-shrink-0" />
      <div>{children}</div>
    </li>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const socials = socialLinks.filter((s) => s.url);
  const linkClass = "hover:text-[#F4D03F] transition-colors";

  return (
    <footer className="bg-[#0A2744] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand and social icons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-10 border-b border-white/10">
          <div className="flex items-center gap-4">
            <Link to="/" onClick={scrollToTop} aria-label="ACES home" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="APA College Educational Services logo"
                className="w-14 h-14 rounded-full bg-white object-cover"
              />
            </Link>
            <div>
              <p className="font-bold text-lg leading-tight">APA College Educational Services</p>
              <p className="text-sm text-[#F4D03F]">...Possibilities With God</p>
            </div>
          </div>

          {socials.length > 0 && (
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-white">Follow us</span>
              <div className="flex items-center gap-3">
                {socials.map(({ name, url, Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ACES on ${name}`}
                    className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-[#F4D03F] hover:border-[#F4D03F] hover:text-[#0D3B66] transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Columns: every column starts at the same line and is left aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:gap-8 gap-x-8 gap-y-10 py-10 items-start">
          <Column title="Reach Us">
            <IconRow icon={MapPin}>
              {CONTACT.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </IconRow>
            <IconRow icon={Phone}>
              {CONTACT.phones.map((p) => (
                <div key={p.href}>
                  <a href={p.href} className={linkClass}>
                    {p.display}
                  </a>
                </div>
              ))}
            </IconRow>
            <IconRow icon={Mail}>
              <a href={`mailto:${CONTACT.email}`} className={`${linkClass} break-all`}>
                {CONTACT.email}
              </a>
            </IconRow>
          </Column>

          <Column title="Services">
            {services.map((s) => (
              <li key={s.path}>
                <Link to={s.path} onClick={scrollToTop} className={linkClass}>
                  {s.name}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Company">
            {companyLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} onClick={scrollToTop} className={linkClass}>
                  {l.name}
                </Link>
              </li>
            ))}
          </Column>

          <Column title="Business Hours">
            {CONTACT.hours.map((h) => (
              <li key={h.day}>
                <div className="font-medium text-white">{h.day}</div>
                <div>{h.time}</div>
              </li>
            ))}
          </Column>
        </div>
      </div>

      {/* Bottom bar (extra bottom padding on phones so the sticky Book Consultation bar never covers it) */}
      <div className="border-t border-white/10 bg-[#071B31]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-24 lg:pb-5 text-center text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} APA College Educational Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { label: "Web & Software Development",   href: "/services/web-development" },
  { label: "Mobile App Development",       href: "/services/mobile-app-development" },
  { label: "Digital Marketing",            href: "/services/digital-marketing" },
  { label: "Hosting & Infrastructure",     href: "/services/hosting-infrastructure" },
  { label: "Automation",                   href: "/services/automation" },
  { label: "Customer Experience",          href: "/services/customer-exp-management" },
  { label: "IT Consulting & IT Services",  href: "/services/it-consulting-it-services" },
];

const company = [
  { label: "About",           href: "/about" },
  { label: "Blog",            href: "/blog" },
  { label: "Careers",         href: "/careers" },
  { label: "Privacy Policy",  href: "/privacy" },
  { label: "Terms of Service",href: "/terms" },
];

const social = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Col 1 — Logo + tagline */}
          <div>
            <span className="gold-rule-sm" aria-hidden="true" />
            <Link
              href="/"
              className="inline-block font-display font-bold text-[20px] tracking-tight select-none
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-1 focus-visible:ring-offset-ink rounded"
              style={{ color: "#E9D5FF" }}
            >
              space<span style={{ color: "#C4B5FD" }}>-ai</span>
            </Link>
            <p className="mt-4 text-[14px] leading-relaxed max-w-xs" style={{ color: "#A78BCC" }}>
              Intelligent technology services that help businesses navigate the
              AI-driven future with clarity and confidence.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {social.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <span className="footer-heading">Services</span>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <span className="footer-heading">Company</span>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <span className="footer-heading">Contact</span>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@space-ai.com" className="footer-contact-link">
                  <Mail size={16} className="mt-0.5 shrink-0" style={{ color: "#B8860B" }} />
                  hello@space-ai.com
                </a>
              </li>
              <li>
                <a href="tel:+442079460958" className="footer-contact-link">
                  <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "#B8860B" }} />
                  +44 (0) 20 7946 0958
                </a>
              </li>
              <li className="footer-contact-link" style={{ cursor: "default" }}>
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#B8860B" }} />
                12 Innovation Street, London, EC2A 4NE
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px]" style={{ color: "rgba(167,139,204,0.5)" }}>
            &copy; {new Date().getFullYear()} space-ai. All rights reserved.
          </p>
          <p className="text-[12px]" style={{ color: "rgba(167,139,204,0.5)" }}>
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

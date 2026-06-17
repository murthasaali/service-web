"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, ArrowRight,
  Code2, Smartphone, TrendingUp, Server,
  Zap, Users, Lightbulb,
  type LucideIcon,
} from "lucide-react";

// ─── Service items (mirrors ServicesGrid data) ────────────────────────────────

const serviceItems: {
  icon: LucideIcon;
  name: string;
  desc: string;
  href: string;
}[] = [
  {
    icon: Code2,
    name: "Web & Software Development",
    desc: "Custom web apps built for scale",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    name: "Mobile App Development",
    desc: "iOS & Android — native or cross-platform",
    href: "/services/mobile-app-development",
  },
  {
    icon: TrendingUp,
    name: "Digital Marketing",
    desc: "Data-driven campaigns that convert",
    href: "/services/digital-marketing",
  },
  {
    icon: Server,
    name: "Hosting & Infrastructure",
    desc: "Scalable cloud with maximum uptime",
    href: "/services/hosting-infrastructure",
  },
  {
    icon: Zap,
    name: "Automation",
    desc: "Eliminate manual work end-to-end",
    href: "/services/automation",
  },
  {
    icon: Users,
    name: "Customer Experience",
    desc: "Turn every interaction into loyalty",
    href: "/services/customer-exp-management",
  },
  {
    icon: Lightbulb,
    name: "IT Consulting & IT Services",
    desc: "Strategic tech advisory & managed IT",
    href: "/services/it-consulting-it-services",
  },
];

// ─── Top-level nav links ──────────────────────────────────────────────────────

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Blog",     href: "/blog" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [menuOpen, setMenuOpen]                   = useState(false);
  const [servicesOpen, setServicesOpen]           = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled]                   = useState(false);
  const pathname = usePathname();

  // Close delay ref — prevents dropdown from flickering when cursor
  // briefly crosses the gap between trigger and panel.
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const openServices   = () => { clearTimeout(closeTimer.current); setServicesOpen(true);  };
  const scheduleClose  = () => { closeTimer.current = setTimeout(() => setServicesOpen(false), 120); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Escape key closes services dropdown
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Clean up timer on unmount
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-surface border-b border-border ${
        scrolled ? "backdrop-blur-[10px] shadow-sm" : ""
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* ── Logo ─────────────────────────────────────────────────────── */}
        <Link
          href="/"
          aria-label="space-ai — go to home"
          className="font-display font-bold text-[20px] tracking-tight select-none rounded
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40 focus-visible:ring-offset-2"
        >
          <span className="text-ink">space</span>
          <span className="text-royal">-ai</span>
        </Link>

        {/* ── Desktop nav ───────────────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {navLinks.map((item) => {
            const active = isActive(item.href);

            /* Services — hover dropdown */
            if (item.hasDropdown) {
              return (
                <li key={item.href} className="relative">
                  <div
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                  >
                    {/* Trigger button */}
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      aria-controls="services-dropdown"
                      onClick={() => setServicesOpen((p) => !p)}
                      className={`relative flex items-center gap-1 text-[14px] font-medium transition-colors duration-200 rounded px-1 py-0.5
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40 focus-visible:ring-offset-2
                        ${active
                          ? "text-royal-deep font-semibold"
                          : "text-muted-foreground hover:text-ink"
                        }`}
                    >
                      Services
                      <ChevronDown
                        size={14}
                        aria-hidden="true"
                        className={`transition-transform duration-200 mt-px ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-0.5 left-1 right-1 h-[2px] rounded-full bg-royal"
                        />
                      )}
                    </button>

                    {/* ── Dropdown panel ───────────────────────────────── */}
                    <div
                      id="services-dropdown"
                      role="region"
                      aria-label="Services"
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleClose}
                      className={`absolute top-[calc(100%+10px)] left-0 z-10 w-[540px] bg-surface rounded-card shadow-float border border-border
                        transition-all duration-200 origin-top
                        ${servicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      {/* Upward caret */}
                      <div
                        className="absolute -top-[5px] left-5 w-2.5 h-2.5 bg-surface border-l border-t border-border rotate-45"
                        aria-hidden="true"
                      />

                      {/* Service items grid */}
                      <div className="p-3 grid grid-cols-2 gap-1">
                        {serviceItems.map((svc) => {
                          const Icon = svc.icon;
                          return (
                            <Link
                              key={svc.href}
                              href={svc.href}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-start gap-3 p-3 rounded-[10px] transition-colors hover:bg-tint
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40 focus-visible:ring-offset-1 focus-visible:ring-offset-surface"
                            >
                              {/* Small icon box */}
                              <div
                                className="w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 text-royal mt-0.5"
                                style={{
                                  background: "#F7F0FF",
                                  border: "1px solid rgba(184,134,11,0.18)",
                                }}
                              >
                                <Icon size={15} aria-hidden="true" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-[13px] font-semibold text-ink leading-snug group-hover:text-royal-deep transition-colors">
                                  {svc.name}
                                </p>
                                <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                                  {svc.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer "View all" link */}
                      <div className="px-3 pb-3">
                        <div className="border-t border-border pt-3">
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center justify-center gap-1.5 py-2 text-[13px] font-semibold text-royal-deep hover:text-royal rounded-lg hover:bg-tint transition-colors
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40 focus-visible:ring-offset-1"
                          >
                            View all services
                            <ArrowRight size={13} aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            }

            /* Regular link */
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-[14px] font-medium transition-colors duration-200 rounded px-1 py-0.5
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40 focus-visible:ring-offset-2
                    ${active
                      ? "text-royal-deep font-semibold"
                      : "text-muted-foreground hover:text-ink"
                    }`}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-1 right-1 h-[2px] rounded-full bg-royal"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Desktop CTA ───────────────────────────────────────────────── */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary py-[10px] px-5 text-[13px]">
            Get a Quote
          </Link>
        </div>

        {/* ── Mobile hamburger ──────────────────────────────────────────── */}
        <button
          type="button"
          className="md:hidden p-1.5 rounded-md text-ink hover:bg-tint transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40 focus-visible:ring-offset-1"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen
            ? <X size={22} aria-hidden="true" />
            : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* ── Mobile menu ───────────────────────────────────────────────────── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-surface"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="px-4 pt-3 pb-5 flex flex-col gap-0.5" role="list">
            {navLinks.map((item) => {
              const active = isActive(item.href);

              /* Services — expandable sub-list */
              if (item.hasDropdown) {
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((p) => !p)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-[14px] rounded-md transition-colors
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40 focus-visible:ring-offset-1
                        ${active
                          ? "text-royal-deep font-semibold bg-tint"
                          : "text-muted-foreground font-medium hover:text-ink hover:bg-tint/60"
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        {active && (
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-royal shrink-0"
                            aria-hidden="true"
                          />
                        )}
                        Services
                      </span>
                      <ChevronDown
                        size={14}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Sub-list */}
                    {mobileServicesOpen && (
                      <ul className="mt-1 ml-3 pl-3 border-l-2 border-tint pb-2 space-y-0.5">
                        {serviceItems.map((svc) => {
                          const Icon = svc.icon;
                          return (
                            <li key={svc.href}>
                              <Link
                                href={svc.href}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-muted-foreground
                                  hover:text-ink hover:bg-tint/60 rounded-md transition-colors
                                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40"
                              >
                                <Icon
                                  size={13}
                                  className="text-royal shrink-0"
                                  aria-hidden="true"
                                />
                                {svc.name}
                              </Link>
                            </li>
                          );
                        })}
                        <li>
                          <Link
                            href="/services"
                            onClick={() => {
                              setMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold text-royal-deep
                              hover:bg-tint/60 rounded-md transition-colors
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40"
                          >
                            View all services
                            <ArrowRight size={12} aria-hidden="true" />
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                );
              }

              /* Regular mobile link */
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 text-[14px] rounded-md transition-colors
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal/40 focus-visible:ring-offset-1
                      ${active
                        ? "text-royal-deep font-semibold bg-tint"
                        : "text-muted-foreground font-medium hover:text-ink hover:bg-tint/60"
                      }`}
                  >
                    {active && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-royal shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li className="pt-3 px-3">
              <Link
                href="/contact"
                className="btn-primary w-full"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { StarButton } from "@/components/ui/star-button";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const services = [
  { label: "Web Development",              href: "/services/web-development" },
  { label: "Custom Software Development",   href: "/services/software-development" },
  { label: "Mobile App Development",       href: "/services/mobile-app-development" },
  { label: "Digital Marketing",            href: "/services/digital-marketing" },
  { label: "Hosting & Infrastructure",     href: "/services/hosting-infrastructure" },
  { label: "Automation",                   href: "/services/automation" },
  { label: "Customer Experience",          href: "/services/customer-exp-management" },
  { label: "IT Consulting & IT Services",  href: "/services/it-consulting-it-services" },
];

const company = [
  { label: "About Us",        href: "/about" },
  { label: "Blog",            href: "/blog" },
  { label: "Careers",         href: "/careers" },
  { label: "FAQs",            href: "/faq" },
];

const legal = [
  { label: "Privacy Policy",  href: "/privacy" },
  { label: "Terms of Service",href: "/terms" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: FaPinterestP,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/",
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    href: "mailto:hello@aibizmod.com",
    icon: MdEmail,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <footer className="bg-black text-white/70 transition-colors duration-300 w-full">
      {/* Start Today Section */}
      <div className="max-w-7xl mx-auto px-6 border-b border-white/10 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#22D3EE] block">
              Start Today
            </span>
            <h2 className="font-display text-[26px] sm:text-[36px] md:text-[42px] leading-[1.05] tracking-tight text-white font-medium">
              Ready to Achieve <span className="text-[#22D3EE] font-semibold">More?</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[16px] leading-[1.6] text-white/50 max-w-2xl">
              We partner with ambitious companies to solve complex challenges, improve operations and deliver real results using tailored digital solutions.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link href="/contact" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-3xl shrink-0">
              <StarButton
                lightColor="#22D3EE"
                backgroundColor="#ffffff"
                textColor="text-black"
                className="font-sans font-semibold text-[11px] uppercase tracking-[0.2em]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 group-hover/star-button:translate-x-1 transition-transform duration-300 text-black" />
              </StarButton>
            </Link>
            <Link href="/services" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-3xl shrink-0">
              <StarButton
                lightColor="#FAFAFA"
                backgroundColor="#ffffff"
                textColor="text-black"
                className="font-sans font-semibold text-[11px] uppercase tracking-[0.2em]"
              >
                View Services
              </StarButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          {/* Brand & Inquiries Column */}
          <div className="md:col-span-3 space-y-4">
            <Link
              href="/"
              className="inline-block font-display font-bold text-[24px] tracking-tight select-none
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
              style={{ color: "#CFFAFE" }}
            >
              ai<span style={{ color: "#22D3EE" }}>biz</span>mod
            </Link>
            <p className="font-sans text-[13px] leading-[1.7] text-white/60 max-w-[280px]">
              aibizmod is a digital growth & intelligent technology firm helping businesses navigate the AI-driven future, build a stronger digital presence and scale with confidence.
            </p>
            <div className="pt-2 space-y-2.5">
              <p className="font-sans text-[11px] text-white/40 uppercase tracking-widest mb-1">Inquiries</p>
              
              <div className="flex items-center gap-2.5 text-[14px] text-white/60">
                <Phone size={13} className="text-[#22D3EE] shrink-0" />
                <a
                  href="tel:+442079460958"
                  className="hover:text-white transition-colors"
                >
                  +44 (0) 20 7946 0958
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-[15px] text-white">
                <MdEmail size={14} className="text-[#22D3EE] shrink-0" />
                <a
                  href="mailto:hello@aibizmod.com"
                  className="hover:text-[#22D3EE] transition-colors font-semibold"
                >
                  hello@aibizmod.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid Column (6 out of 12) */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h5 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-4">Services</h5>
              <ul className="space-y-2.5">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13.5px] text-white/60 hover:text-white transition-colors duration-150 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white/30 after:transition-all after:duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-4">Company</h5>
              <ul className="space-y-2.5">
                {company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13.5px] text-white/60 hover:text-white transition-colors duration-150 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white/30 after:transition-all after:duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-4">Legal</h5>
              <ul className="space-y-2.5">
                {legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13.5px] text-white/60 hover:text-white transition-colors duration-150 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white/30 after:transition-all after:duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3 flex flex-col justify-between h-full space-y-6">
            <div>
              <h5 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-4">Newsletter</h5>
              <p className="font-sans text-[12px] text-white/50 mb-5 leading-relaxed">
                Insights on digital growth and intelligent automation.
              </p>
              <form onSubmit={handleSubscribe} className="relative group">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-white/10 py-2.5 pr-8 text-[13px] text-white focus:outline-none focus:border-[#22D3EE] transition-all duration-300 placeholder:text-white/20 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-0 bottom-3 text-white/40 hover:text-[#22D3EE] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
              {status === "success" && (
                <p className="text-[11px] text-emerald-400 mt-2">
                  Thank you for subscribing!
                </p>
              )}
              <p className="text-[10px] text-white/30 font-sans mt-3">
                By subscribing, you agree to our{" "}
                <Link href="/privacy" className="underline hover:text-[#22D3EE] transition-colors">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-6 flex gap-4 flex-wrap md:justify-start">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="text-white/30 hover:text-[#22D3EE] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-white/40">
          <p>&copy; {new Date().getFullYear()} aibizmod Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  color: string;
  href: string;
}

export const cardData: CardData[] = [
  {
    id: 1,
    title: "Web & Software Development",
    description: "Custom web applications and software built for scale, performance, and long-term maintainability.",
    color: "rgba(109, 40, 217, 0.8)",
    href: "/services/web-development",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform apps delivering seamless experiences across iOS and Android.",
    color: "rgba(162, 28, 175, 0.8)",
    href: "/services/mobile-app-development",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Data-driven campaigns that grow your brand, increase qualified traffic, and convert leads.",
    color: "rgba(88, 28, 135, 0.8)",
    href: "/services/digital-marketing",
  },
  {
    id: 4,
    title: "Hosting & Infrastructure",
    description: "Reliable, scalable cloud infrastructure designed for maximum uptime and cost efficiency.",
    color: "rgba(124, 58, 237, 0.8)",
    href: "/services/hosting-infrastructure",
  },
  {
    id: 5,
    title: "Automation",
    description: "Intelligent automation pipelines that eliminate manual work and accelerate business operations.",
    color: "rgba(147, 51, 234, 0.8)",
    href: "/services/automation",
  },
  {
    id: 6,
    title: "Customer Experience Management",
    description: "CX strategies and tooling that turn every interaction into lasting customer loyalty.",
    color: "rgba(192, 132, 252, 0.8)",
    href: "/services/customer-exp-management",
  },
  {
    id: 7,
    title: "IT Consulting & IT Services",
    description: "Strategic technology advisory and managed IT services aligned with your business goals.",
    color: "rgba(139, 92, 246, 0.8)",
    href: "/services/it-consulting-it-services",
  },
];

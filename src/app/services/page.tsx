import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive technology solutions tailored to your business goals — web development, mobile apps, cloud infrastructure, automation, and more.",
  openGraph: {
    title: "Services | aibizmod",
    description:
      "Comprehensive technology solutions tailored to your business goals — web development, mobile apps, cloud infrastructure, automation, and more.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}

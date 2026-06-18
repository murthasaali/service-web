import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us about your project and we'll get back to you within 24 hours.",
  openGraph: {
    title: "Contact Us | aibizmode",
    description:
      "Tell us about your project and we'll get back to you within 24 hours.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}

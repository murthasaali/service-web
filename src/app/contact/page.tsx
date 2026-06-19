import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";

import StickyFooterLayout from "@/components/layout/StickyFooterLayout";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us about your project and we'll get back to you within 24 hours.",
  openGraph: {
    title: "Contact Us | aibizmod",
    description:
      "Tell us about your project and we'll get back to you within 24 hours.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <StickyFooterLayout footer={<Footer />}>
        <main>
          <ContactPageContent />
        </main>
      </StickyFooterLayout>
    </>
  );
}

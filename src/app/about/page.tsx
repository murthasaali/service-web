import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A team of builders, thinkers, and technologists on a mission to help businesses grow through technology.",
  openGraph: {
    title: "About Us | aibizmode",
    description:
      "A team of builders, thinkers, and technologists on a mission to help businesses grow through technology.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}

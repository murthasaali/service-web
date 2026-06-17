import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPageContent from "@/components/blog/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog — Insights & Updates",
  description:
    "Tech tips, industry trends, and company news from the space-ai team.",
  openGraph: {
    title: "Blog — Insights & Updates | space-ai",
    description:
      "Tech tips, industry trends, and company news from the space-ai team.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogPageContent />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPageContent from "@/components/blog/BlogPageContent";

import StickyFooterLayout from "@/components/layout/StickyFooterLayout";

export const metadata: Metadata = {
  title: "Blog — Insights & Updates",
  description:
    "Tech tips, industry trends, and company news from the aibizmode team.",
  openGraph: {
    title: "Blog — Insights & Updates | aibizmode",
    description:
      "Tech tips, industry trends, and company news from the aibizmode team.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <StickyFooterLayout footer={<Footer />}>
        <main>
          <BlogPageContent />
        </main>
      </StickyFooterLayout>
    </>
  );
}

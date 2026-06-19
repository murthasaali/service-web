import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPageContent from "@/components/blog/BlogPageContent";

import StickyFooterLayout from "@/components/layout/StickyFooterLayout";

export const metadata: Metadata = {
  title: "Blog — aibizmode Journal",
  description:
    "Original aibizmode notes on domain launch, SEO service building, generative optimisation, and practical website strategy.",
  openGraph: {
    title: "Blog — aibizmode Journal",
    description:
      "Original aibizmode notes on domain launch, SEO service building, generative optimisation, and practical website strategy.",
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

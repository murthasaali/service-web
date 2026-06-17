import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-4rem)] flex flex-col bg-canvas">
        <div className="flex-1 relative flex flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
          {/* Ambient blobs */}
          <div
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none blur-3xl"
            aria-hidden="true"
            style={{ background: "radial-gradient(circle, rgba(126,34,206,0.07) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none blur-3xl"
            aria-hidden="true"
            style={{ background: "radial-gradient(circle, rgba(162,28,175,0.05) 0%, transparent 70%)" }}
          />

          {/* Gold rule */}
          <span className="gold-rule mx-auto mb-6" aria-hidden="true" />

          {/* 404 number */}
          <div
            className="font-display font-bold leading-none tracking-tight select-none bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(90px, 18vw, 160px)",
              backgroundImage: "linear-gradient(120deg, #6D28D9 0%, #A21CAF 60%, #B8860B 100%)",
              letterSpacing: "-0.04em",
            }}
            aria-hidden="true"
          >
            404
          </div>

          <h1
            className="mt-2 font-display font-bold text-ink"
            style={{ fontSize: "clamp(20px, 3vw, 28px)", letterSpacing: "-0.015em" }}
          >
            Page not found
          </h1>
          <p className="mt-3 text-muted-foreground max-w-sm leading-relaxed" style={{ fontSize: 16 }}>
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Let&apos;s get you back on track.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              <Home size={15} aria-hidden="true" />
              Back to Home
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Us <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-muted-foreground">
              Or visit:
            </span>
            {[
              { label: "Services", href: "/services" },
              { label: "Blog",     href: "/blog" },
              { label: "About",    href: "/about" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-royal-deep transition-colors underline underline-offset-2"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

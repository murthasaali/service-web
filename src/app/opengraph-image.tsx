import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const alt = "aibizmod — Intelligent Technology Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A1628, #1E293B)",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            ai
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#22D3EE",
            }}
          >
            biz
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            mod
          </span>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#94A3B8",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Intelligent Technology Services
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 16,
            color: "#64748B",
            letterSpacing: "0.04em",
          }}
        >
          <span>Web Development</span>
          <span style={{ color: "#22D3EE" }}>•</span>
          <span>Custom Software</span>
          <span style={{ color: "#22D3EE" }}>•</span>
          <span>AI Automation</span>
          <span style={{ color: "#22D3EE" }}>•</span>
          <span>Cloud Infrastructure</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

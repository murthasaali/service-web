import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Royal Amethyst & Gold — design tokens ────────────────────────
        // Hex values throughout so opacity modifiers (bg-royal/10) work.
        canvas:        "#FDFBFF",   // warm off-white page bg
        surface:       "#FFFFFF",   // cards, nav, raised elements
        ink:           "#1E1626",   // primary text, warm near-black
        royal:         "#7E22CE",   // amethyst — icons, highlights, gradient start
        "royal-deep":  "#581C87",   // body links + small text (WCAG AA on white)
        gold:          "#B8860B",   // antique gold — rules, pill stars, hairlines ONLY
        "gold-light":  "#D4AF37",   // gold gradient highlight end
        tint:          "#F7F0FF",   // soft violet wash — alt section bg, pill bg

        // ── Semantic aliases — remap all existing Tailwind class usages ───
        background:    "#FDFBFF",
        foreground:    "#1E1626",
        border:        "#EDE0FB",
        input:         "#EDE0FB",
        ring:          "#7E22CE",

        card: {
          DEFAULT:    "#FFFFFF",
          foreground: "#1E1626",
        },
        muted: {
          DEFAULT:    "#F7F0FF",   // bg-muted → soft violet tint
          foreground: "#6B5C8A",  // text-muted-foreground → muted purple-gray
        },
        primary: {
          DEFAULT:    "#7E22CE",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT:    "#F7F0FF",
          foreground: "#1E1626",
        },
        accent: {
          DEFAULT:    "#F7F0FF",
          foreground: "#581C87",
        },
        popover: {
          DEFAULT:    "#FFFFFF",
          foreground: "#1E1626",
        },
        destructive: {
          DEFAULT:    "#EF4444",
          foreground: "#FFFFFF",
        },

        // ── Legacy tokens — preserved while pages are progressively restyled
        navy:            "#0A1628",
        "electric-blue": "#2563EB",
        "cyan-accent":   "#06B6D4",
        coral:           "#FF5A3C",
        "coral-deep":    "#C2410C",
      },

      borderRadius: {
        lg:   "var(--radius)",      // 16px
        md:   "var(--radius-md)",   // 10px
        sm:   "8px",
        card: "var(--radius)",
        btn:  "var(--radius-md)",
        pill: "999px",
        icon: "11px",
      },

      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["General Sans", "var(--font-inter)", "Inter", "sans-serif"],
        inter:   ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        hero:         ["64px", { lineHeight: "1.03", letterSpacing: "-0.03em" }],
        section:      ["38px", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "card-title": ["20px", { lineHeight: "1.2" }],
        body:         ["17px", { lineHeight: "1.65" }],
        label:        ["13px", { lineHeight: "1.4" }],
      },

      boxShadow: {
        card:         "0 4px 24px rgba(30,22,38,0.06)",
        "card-hover": "0 12px 36px rgba(109,40,217,0.10)",
        btn:          "0 4px 24px rgba(109,40,217,0.28)",
        "btn-hover":  "0 8px 32px rgba(109,40,217,0.42)",
        float:        "0 30px 60px rgba(109,40,217,0.10)",
        badge:        "0 8px 24px rgba(30,22,38,0.12)",
      },

      backgroundImage: {
        "royal-gradient": "linear-gradient(120deg, #6D28D9, #A21CAF)",
        "gold-rule":      "linear-gradient(90deg, #D4AF37, #B8860B)",
      },
    },
  },
  plugins: [],
};

export default config;

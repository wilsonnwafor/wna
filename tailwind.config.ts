import type { Config } from "tailwindcss";

const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1180px" },
    },
    extend: {
      colors: {
        // Primary: deep trust navy
        navy: { DEFAULT: withAlpha("--navy"), soft: withAlpha("--navy-soft") },
        // Secondary: emerald growth. `ink` is the AA-safe shade for text on white.
        growth: {
          DEFAULT: withAlpha("--growth"),
          ink: withAlpha("--growth-ink"),
          tint: withAlpha("--growth-tint"),
        },
        // Accent: warm gold
        gold: { DEFAULT: withAlpha("--gold"), tint: withAlpha("--gold-tint") },
        paper: withAlpha("--paper"),
        line: withAlpha("--line"),
        muted: withAlpha("--muted"),
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.03em" },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-out": { from: { opacity: "1" }, to: { opacity: "0" } },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 180ms ease-out",
        "fade-out": "fade-out 150ms ease-in",
        "slide-in-right": "slide-in-right 240ms cubic-bezier(0.22,1,0.36,1)",
        "slide-out-right": "slide-out-right 180ms ease-in",
        "accordion-down": "accordion-down 220ms ease-out",
        "accordion-up": "accordion-up 180ms ease-out",
      },
    },
  },
  plugins: [],
};
export default config;

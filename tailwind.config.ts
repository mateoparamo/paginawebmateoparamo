import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Soft, near-white paper — calm and clean
        paper: {
          DEFAULT: "#f7f6f2",
          card: "#fcfbf8",
        },
        // Monochrome ink scale — type carries the whole design
        ink: {
          DEFAULT: "#1a1916",
          soft: "#54514a",
          muted: "#8c887e",
          faint: "#bdb9ad",
        },
        line: "rgba(26, 25, 22, 0.10)",
        "line-strong": "rgba(26, 25, 22, 0.22)",
        // Single restrained accent — cobalt ink. Used sparingly: status dot,
        // section numbers, link hovers and the logo-wall hover state.
        accent: {
          DEFAULT: "#2440d0",
          soft: "rgba(36, 64, 208, 0.10)",
        },
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.18em",
        wide: "0.08em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,0.84,0.24,1) forwards",
        "fade-in": "fadeIn 1.1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

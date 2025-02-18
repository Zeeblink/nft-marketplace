import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#060714", // Dark background
        foreground: "#ffffff", // White text
        card: {
          DEFAULT: "#060714", // Slightly lighter dark for cards #0d0f1a
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#101223",
          foreground: "#ffffff",
        },
        primary: {
          DEFAULT: "#8A5CF5", // Vibrant purple accent
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1E1E2E", // Deep greyish blue
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#4C71F2", // A bright, futuristic blue
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#7780A1", // Soft gray for muted elements
          foreground: "#D1D5DB",
        },
        border: "#262840",
        ring: "#8A5CF5",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(to right, #4745D0, #2A27C9)", // main bg for buttons
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
      },
      fontFamily: {
        sans: ['var(--font-sora)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

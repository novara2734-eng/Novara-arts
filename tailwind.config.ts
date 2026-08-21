import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        butter: {
          light: "#FDF8E1",
          DEFAULT: "#F7E9B7",
        },
        espresso: {
          DEFAULT: "#3D2B1F",
          dark: "#2A1C15",
        },
        cream: {
          DEFAULT: "#FAF6EE",
          light: "#FFFDF9",
        },
        terracotta: "#C87A53",
        gold: "#D4AF37",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(61, 43, 31, 0.25)",
        card: "0 10px 40px -12px rgba(61, 43, 31, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;

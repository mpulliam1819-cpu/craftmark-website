import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        craftmark: {
          navy: "#1F4E79",
          navyLight: "#3A6EA5",
          text: "#1F1F1F",
          muted: "#6B7280",
          line: "#D1D5DB",
          surface: "#F3F4F6",
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0267C1",
        cream: "#F1E3CB",
        orange: "#D56108",
      },
      fontFamily: {
        heading: ["Pally-Local", "var(--font-pally)", "sans-serif"],
        pally: ["Pally-Local", "var(--font-pally)", "sans-serif"],
        title: ["Pally-Local", "var(--font-pally)", "sans-serif"],
        body: ["Nunito-Local", "var(--font-nunito)", "sans-serif"],
        nunito: ["Nunito-Local", "var(--font-nunito)", "sans-serif"],
        sans: ["Nunito-Local", "var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

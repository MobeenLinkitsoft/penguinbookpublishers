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
        brand: {
          orange: "#FF6B00", // The exact screenshot orange
          textDark: "#1A1A1A", // Primary text
          textGray: "#666666", // Muted text
          bgDark: "#2A2A2A",   // Footer and dark background sections
          bgLight: "#F8F9FA", // Light gray section backgrounds
        },
      },
      fontFamily: {
        // Geometric headings like the image
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
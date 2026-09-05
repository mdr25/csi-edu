import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f9",
          100: "#dde6f1",
          200: "#c0d2e5",
          300: "#94b5d4",
          400: "#6392bf",
          500: "#3e74a8",
          600: "#2d5a8c",
          700: "#234670",
          800: "#1b3555",
          900: "#0c1d33",
          950: "#071221",
        },
        accent: {
          amber: "#d97706",
          gold: "#b45309",
          light: "#fef3c7",
        },
        forest: {
          600: "#047857",
          700: "#065f46",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

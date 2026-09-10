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
          50: "#f0f8f8",
          100: "#d9eded",
          200: "#b5dddc",
          300: "#83c5c3",
          400: "#4da4a1",
          500: "#2b8986",
          600: "#1b857f",
          700: "#136f6a",
          800: "#105955",
          900: "#0e4946",
          950: "#072624",
        },
        csi: {
          teal: {
            50: "#f0f8f8",
            100: "#d9eded",
            200: "#b5dddc",
            300: "#83c5c3",
            400: "#4da4a1",
            500: "#2b8986",
            600: "#1b857f",
            700: "#136f6a",
            800: "#105955",
            900: "#0e4946",
            950: "#072624",
          },
          gold: {
            DEFAULT: "#f5b81b",
            hover: "#e5a70b",
            light: "#fef8e7",
            dark: "#b88307",
          },
          orange: {
            DEFAULT: "#e97d24",
            hover: "#d56c15",
            light: "#ffedd5",
            dark: "#b35209",
          },
        },
        accent: {
          amber: "#f5b81b",
          gold: "#e97d24",
          light: "#fef8e7",
        },
        forest: {
          600: "#136f6a",
          700: "#0e4946",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

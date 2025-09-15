import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6faf8",
          100: "#ecf4f0",
          200: "#dceae2",
          300: "#c6dbce",
          400: "#aacbb7",
          500: "#86b49d",
          600: "#6ba38a",
          700: "#578873",
          800: "#496f5f",
          900: "#3f5c4f",
        },
      },
    },
  },
  plugins: [],
};
export default config;

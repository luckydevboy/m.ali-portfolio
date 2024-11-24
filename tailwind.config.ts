import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ["var(--font-nunito-sans)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#222",
        secondary: "#999",
        tertiary: "#999999",
      },
    },
  },
  plugins: [],
};
export default config;

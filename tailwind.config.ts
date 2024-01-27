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
        primary_border: "#DADDDD",
        primary_dark_bg: "#FAFAFA",
      },
      fonts: {
        jarkarta: "",
      },
    },
    screens: {
      xs: { max: "480px" },
      mobile: { min: "200px", max: "480px" },
      sm: { max: "768px" },
      tablet: { min: "121px", max: "768px" },
      md: "769px",
      
      lmd: { max: "920px" },
      laptop: { min: "769px", max: "1024px" },
      special: { max: "700px" },
      lg: "1024px",
      xl: "1141px",
    },
  },
  plugins: [],
};
export default config;

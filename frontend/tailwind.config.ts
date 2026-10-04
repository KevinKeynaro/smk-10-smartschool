import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B1B4D", 900: "#071236", 700: "#14286B" },
        sky: { brand: "#5BB5F5", soft: "#E8F4FE" },
        ink: "#1F2937",
        surface: "#F3F4F6",
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;

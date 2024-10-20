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
        background: "var(--background)",
        foreground: "var(--foreground)",
        appleGray: {
          50: "#F9FAFB",
          80: "#f5f5f7",
          100: "#E8E8ED",
          500: "#626262",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#F4EDE4", deep: "#EDE5DA", dark: "#E2D8CC" },
        brown: { DEFAULT: "#4A2C1A", light: "#6B4832" },
        espresso: "#2A1A0E",
        sienna: { DEFAULT: "#C45A3C", hover: "#A84830" },
        olive: { DEFAULT: "#8B8468", light: "#A9A48E" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "blink": "blink 2.5s ease-in-out infinite",
        "slide": "slide 60s linear infinite",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.15" } },
        slide: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#007AFF",
          "blue-dark": "#0062CC",
          "blue-light": "#3395FF",
        },
        surface: {
          white: "#FFFFFF",
          "gray-1": "#F5F5F7",
          "gray-2": "#E5E5E5",
          "gray-3": "#D1D1D6",
        },
        ink: {
          primary: "#111111",
          secondary: "#6E6E73",
          tertiary: "#AEAEB2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "Inter", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "card": "0 2px 20px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.04)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.06)",
        "glass": "0 8px 32px rgba(0,0,0,0.08)",
        "blue-glow": "0 0 40px rgba(0,122,255,0.25)",
      },
      backdropBlur: {
        xs: "4px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

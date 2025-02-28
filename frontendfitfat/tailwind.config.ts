import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          light:"var(--primary-light)",
          dark:"var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light:"var(--secondary-light)",
          dark:"var(--secondary-dark)",
        },
        surface:{
          DEFAULT:"var(--surface)",
          muted:"var(--surface-muted)"
        },
        accent:{
          DEFAULT:"var(--accent)",
          secondary:"var(--accent-secondary)"
        },
        //feedback & states
        success:"var(--success)",
        warning:"var(--warning)",
        error:"var(--error)"
      },
      spacing: {
        navbar:"var(--navbar-height, 4rem)",
        "section-spacing": "var(--section-spacing, 8rem)",
        15: "3.75rem",
        18: "4.5rem",
      },
      fontSize: {
        display: "var(--text-display, 3.5rem)",
        headline: "var(--text-headline, 2rem)",
        subhead: "var(--text-subhead, 1.25rem)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      // customized shaddows
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.05)",
        float: "0 20px 25px -5px rgba(0,0,0,0.08)",
      },
      //animations
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },

    },
  },
  plugins: [],
} satisfies Config;

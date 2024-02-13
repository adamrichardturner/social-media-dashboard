/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "background-color": "var(--background-color)",
        "top-background-color": "var(--top-background-color)",
        "card-background-color": "var(--card-background-color)",
        "text-color": "var(--text-color)",
        "text-color-strong": "var(--text-color-strong)",
        "toggle-color": "var(--toggle-color)",
        facebook: "var(--facebook)",
        twitter: "var(--twitter)",
        "instagram-start": "var(--instagram-start)",
        "instagram-end": "var(--instagram-end)",
        youtube: "var(--youtube)",
      },
      backgroundImage: (theme) => ({
        instagram:
          "linear-gradient(90deg, var(--instagram-start) 0%, var(--instagram-end) 100%)",
        // ... more background images if needed
      }),
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "overview-heading": "14px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
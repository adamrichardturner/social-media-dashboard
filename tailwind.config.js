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
      screens: {
        xs: "100%",
        sm: '400px',
        md: '768px',
        lg: "1024px",
        xl: "1110px"
      },
      padding: {
        DEFAULT: '1rem',
        md: '2rem'
      },
    },
    extend: {
      colors: {
        "background-color": "var(--background-color)",
        "top-background-color": "var(--top-background-color)",
        "card-background-color": "var(--card-background-color)",
        "card-background-hover-color": "var(--card-background-hover-color)",
        "text-color": "var(--text-color)",
        "text-color-strong": "var(--text-color-strong)",
        "text-color-heading": "var(--text-color-heading)",
        "text-color-subheading": "var(--text-color-subheading)",
        "card-text-heading": "var(--card-text-heading)",
        "toggle-color-start": "var(--toggle-color-start)",
        "toggle-color-end": "var(--toggle-color-end)",
        facebook: "var(--facebook)",
        twitter: "var(--twitter)",
        "instagram-start": "var(--instagram-start)",
        "instagram-end": "var(--instagram-end)",
        youtube: "var(--youtube)",
      },
      backgroundImage: (theme) => ({
        instagram:
          "linear-gradient(90deg, var(--instagram-start) 0%, var(--instagram-end) 100%)",
        toggle: "linear-gradient(90deg, var(--toggle-color-start) 0%, var(--toggle-color-end) 100%)",
      }),
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "main-heading": "28px",
        "follower-count": "56px",
        "card-meta": "12px",
        "overview-heading": "24px",
        "overview-count": "32px",
        "main-sub-heading": "14px",
      },
      letterSpacing: {
        widest: '5px',
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
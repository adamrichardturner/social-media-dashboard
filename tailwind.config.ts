import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
  darkMode: "class", // or 'media' for media-query based dark mode
}

export default config

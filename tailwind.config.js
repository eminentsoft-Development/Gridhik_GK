/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        ink: "#000000",       // Pure Black
        paper: "#FDFCF8",     // Pure White
        panel: "#F7F7F7",     // Off-white for light mode cards
        panelDark: "#0A0A0A", // Off-black for dark mode cards
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
}
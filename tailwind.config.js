/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        editorial: ['Editorial New', 'serif'],
        'editorial-ultralight': ['Editorial New', 'serif'],
        'editorial-ultralight-italic': ['Editorial New', 'serif'],
        'editorial-italic': ['Editorial New', 'serif'],
        'editorial-ultrabold': ['Editorial New', 'serif'],
        'editorial-ultrabold-italic': ['Editorial New', 'serif'],
      },
      fontWeight: {
        ultrabold: 900, // Use ultrabold (900 weight)
      },
      fontStyle: {
        italic: 'italic', // Make sure italic style is correctly defined
      },
      colors: {
        black: "#323232",  // Custom black color
        pink: "#F68485",   // Custom pink color
        orange: "#FFB985", // Custom orange color
        purple: "#BDB4FF", // Custom purple color
        lightpurple: "#EDB5F7", // Custom light purple color
        yellow: "#EAFC88",
      },
      borderRadius: {
        none: "0",    // Border radius "none"
        full: "999px", // Custom large border radius (equivalent to 999)
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

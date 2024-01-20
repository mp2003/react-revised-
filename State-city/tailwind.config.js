/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        teal: "#008080",
      },
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
      },
      // Add more customizations as needed
    },
  },
  plugins: [],
};

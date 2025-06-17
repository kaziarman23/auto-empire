/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        move: "move 0.6s ease-in-out",
      },
      keyframes: {
        move: {
          "0%, 49.99%": { opacity: "0", zIndex: "1" },
          "50%, 100%": { opacity: "1", zIndex: "5" },
        },
      },
    },
  },

  plugins: [require("daisyui")],
};

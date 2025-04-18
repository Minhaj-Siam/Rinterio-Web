/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "new-article": "url('./assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};

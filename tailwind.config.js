/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: "DM Sans",
        serif: "Oswald",
        mono: "Roboto",
        body: "Roboto",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#202020",
        "light-gray": "#313131",
        "light-blue": "#53acff",
        "dark-orange": "#D94111",
        green: "#118F4B",
        "black-ish":"#181818"
      },
    },
  },
  plugins: [],
};

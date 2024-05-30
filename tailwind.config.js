/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        navy: "#1c2e4a",
        ivory: "#F6F7EB",
        grey: "#8491A3",
        tomato: "#F55D3E",
        'robin-egg-blue': "#59C3C3"
      },
    },
  },
  plugins: [],
};

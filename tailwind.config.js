/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#CBF281",
        "custom-blue": "#4731D3",
        "custom-white": "#F9F9F9",
        "custom-bestwhite": "#FFFFFF",
        "custom-yellow-dark": "#1A210B",
        "custom-blue-dark": "#171043",
        "custom-darksf": "#252128",
        "custom-darkp": "#2B2727",
        "custom-skills": "#4832D3",
      },
    },
  },
  plugins: [],
};

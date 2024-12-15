/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5DADE2",
        secondary: "#34495E",
      },
      backgroundImage: {
        loginBg: "url('/src/assets/login-bg.jpg')",
      },
      backgroundColor: {
        primaryBg: "#FFF8F0",
      },
    },
  },
  plugins: [require("daisyui")],
};

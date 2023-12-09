/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9EFF00",
        background: "#191919",
        lightgray: "#1E1E1E",
        active: "#262626",
        white: "#FFFFFF",
      },
      fontFamily :{
        inter : ['inter', 'sans-serif'],
        barlow : ['barlow', 'sans-serif'],
      }
    },
    screens:{
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}
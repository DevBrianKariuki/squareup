/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9EFF00",
        background: "#191919",
        graytext: '#98989A',
        lightgray: "#1E1E1E",
        active: "#262626",
        white: "#FFFFFF",
      },
      fontFamily :{
        inter : ['inter', 'sans-serif'],
        barlow : ['Barlow', 'sans-serif'],
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
  plugins: [require('flowbite/plugin')],
}
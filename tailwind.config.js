/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFF9DB",
          200: "#FFEC99",
          300: "#FFD43B",
          400: "#FAB005",
          500: "#F08C00",
        },
        shade: {
          0: "#242424",
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#6C757D",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
        }
      }
    },
  },
  plugins: [],
}


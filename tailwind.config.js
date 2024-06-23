/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "conic-gradient(from var(--gradient-angle), #FFD43B, #FAB005, #F08C00, #FAB005, #FFD43B)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#FFFCED",
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
        },
        roow: {
          100: "#052b2f",
          200: "#073438",
          300: "#0e4b50",
          400: "#2d8f85",
          500: "#637c54",
        },
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      animation: {
        // For Card Rotation Gradient
        rotation: "rotation 10s linear infinite",
      },
      keyframes: {
        // For Card Rotation Gradient
        rotation: {
          "0%": { "--gradient-angle": "0deg" },
          "100%": { "--gradient-angle": "360deg" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-selector-patterns")],
};

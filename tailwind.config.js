/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': {
          DEFAULT: "#294908",
          900: "#1a2e05",
          800: "#233a06",
          700: "#2c4608",
          600: "#355209",
          500: "#3e5e0b",
          400: "#476a0c",
          300: "#50760e",
          200: "#598210",
          100: "#629e12",
        },
        'golden-yellow': {
          DEFAULT: "#ffcc00",
          900: "#b38f00",
          800: "#cc9900",
          700: "#e6b300",
          600: "#ffcc00",
          500: "#ffd633",
          400: "#ffdf66",
          300: "#ffe699",
          200: "#ffedcc",
          100: "#fff4e6",
        },
        'bright-red': {
          DEFAULT: "#ff5733",
          900: "#b33c24",
          800: "#cc4529",
          700: "#e64e2e",
          600: "#ff5733",
          500: "#ff704d",
          400: "#ff8970",
          300: "#ffa299",
          200: "#ffbccc",
          100: "#ffe6e6",
        },
        'dark-gray': {
          DEFAULT: "#333333",
          900: "#1a1a1a",
          800: "#262626",
          700: "#333333",
          600: "#404040",
          500: "#4d4d4d",
          400: "#666666",
          300: "#808080",
          200: "#999999",
          100: "#b3b3b3",
        },
      },
    },
  },
  plugins: [],
}


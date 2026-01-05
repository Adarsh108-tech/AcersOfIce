/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            200: "#A5D6A7",
            300: "#81C784",
            500: "#4CAF50",// base
            700: "#388E3C",
            900: "#1B5E20",
          },
          yellow: {
            200: "#FFE082",
            300: "#FFD54F",
            400: "#FFCA28",
            500: "#FFC653",//base
            700: "#FFA000",
            900: "#FF6F00",
          },
          blue: {
            200: "#91D8FF",
            300: "#64C9FF",
            500: "#24A9FC",//base
            700: "#187FC7",
            900: "#0B4A73",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

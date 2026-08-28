/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#231208",
        roast: "#4A2A17",
        cocoa: "#7A4A28",
        rust: "#C1602B",
        marigold: "#E2A63B",
        cream: "#FBF3E7",
        sand: "#EFE0C9",
        ink: "#1A120B",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

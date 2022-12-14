/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        titleDeviderAnimation: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(130px)" },
        },
        entranceAnimation: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleCenter: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.5)" },
        },
      },
      animation: {
        "left-to-right": "titleDeviderAnimation 3s ease-in-out infinite",
        "entrance": "entranceAnimation  2s ease 0s 1 normal forwards",
        "scale-center": "scaleCenter 1s ease 0s 1 normal forwards",
      },
    },
  },
  plugins: [],
};

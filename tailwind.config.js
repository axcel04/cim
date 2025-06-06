/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "11": "11px",
        "13": "13px"
      }
    },
  },
  plugins: [],
}

//tailwind pour inserer les animations (ex:les image tourne un a un)
// tailwind.config.js
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         slide: "slide 15s linear infinite",
//       },
//       keyframes: {
//         slide: {
//           "0%": { transform: "translateX(0%)" },
//           "100%": { transform: "translateX(-50%)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

// module.exports = {  content: ["./src/**/*.{js,jsx,ts,tsx}"],
// theme: {
//   extend: {
//     animation: {
//       marquee: "marquee 25s linear infinite",
//     },
//     keyframes: {
//       marquee: {
//         "0%": { transform: "translateX(0%)" },
//         "100%": { transform: "translateX(-50%)" },
//       },
//     },
//   },
// },
// };

module.exports = {  content: ["./src/**/*.{js,jsx,ts,tsx}"],
theme: {
  extend: {
    animation: {
      marquee: "marquee 40s linear infinite", // ← ralentir ici
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-50%)" },
      },
    },
  },
},
};

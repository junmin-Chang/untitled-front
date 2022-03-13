module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    screen: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      laptopLg: "1280px",
      // => @media (min-width: 1280px) { ... }
      desktop: "1920px",
    },
    extend: {},
  },
  plugins: ["tailwindcss-filters"],
};

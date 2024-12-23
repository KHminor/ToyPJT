/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      const layoutUtilities = {
        ".f-c-c": {
          "@apply flex justify-center items-center": "",
        },
        ".menu-grid": {
          "@apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(4,auto)] lg:grid-cols-[repeat(5,auto)] gap-3 pl-4":
            "",
        },
      };
      const fontUtilities = {
        ".menu": {
          "@apply text-5xl font-bold tracking-wider": "",
        },
        ".menu-section": {
          "@apply text-lg font-light text-start tracking-wide": "",
        },
      };
      const iconUtilities = {
        ".icon": {
          "@apply cursor-pointer hover:scale-105 transition-all duration-100":
            "",
        },
      };
      addUtilities([layoutUtilities, fontUtilities, iconUtilities]);
    },
  ],
};

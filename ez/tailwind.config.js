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
          "@apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2":
            "",
        },
      };
      const fontUtilities = {
        ".h2Tag": {
          "@apply text-5xl font-bold": "",
        },
        ".pTag": {
          "@apply text-lg font-light text-center": "",
        },
      };
      addUtilities([layoutUtilities, fontUtilities]);
    },
  ],
};

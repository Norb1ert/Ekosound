/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          scroll: 'scroll 10s linear infinite',
        },
        screens: {
          'xplus': '1348px'
        },
        fontFamily: {
          montserrat: ['"Montserrat"', 'sans-serif'],
        }
      },
  },
  plugins: [],
};

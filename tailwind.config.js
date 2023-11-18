/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        verde: {
          100: '#1FD761',
        },
        cinza: {
          300: '#C8C8C8',
          500: '#1E1E1E',
        }
      }
    },
  },
  plugins: [],
};

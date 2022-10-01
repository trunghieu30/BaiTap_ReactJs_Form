/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontSize: {
        1: '1px',
        2: '2px',
        3: '3px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        30: '30px',
        40: '40px',
      },
    },
  },
  plugins: [],
}

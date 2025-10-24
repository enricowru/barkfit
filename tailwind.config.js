/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'barkfit-gold': '#ffd700',
        'barkfit-dark': '#1a1a1a',
        'barkfit-gray': '#2a2a2a',
        'barkfit-card': '#333333',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

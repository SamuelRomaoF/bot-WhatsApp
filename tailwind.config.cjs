/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'salmon': '#FE7587',
        'fuchsia': '#E879F9',
        'myyellow': '#FACC15',
        'zinc': '#09090B',
        'sky': '#38BDF8',
      },
      backgroundColor: {
        'dark': '#09090B',
      }
    },
  },
  plugins: [],
} 
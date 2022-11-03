/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    fontFamily: {
      'Inter': ["Inter", "Sans-serif"]
    },
    extend: {
      colors: {
        'primary': '#101828',
        'light': '#EAECF0',
        'secondary': '#475467',
        'label': '#344054',
        'placeholder': '#667085',
      },
    },
  },
  plugins: [],
}
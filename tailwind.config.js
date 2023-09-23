/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        theme: {

        },
      },
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar')],
  daisyui: {
    themes: [{
      customLightTheme: {
        color: '#0b0504',
        background: '#f0f0f0',
        primary: '#4098a0',
        secondary: '#b0cacb',
        accent: '#477361',
      },
      customDarkTheme: {
        color: '#f0f0f0',
        background: '#0b0504',
        primary: '#4098a0',
        secondary: '#4a4555',
        accent: '#92d3b8',
      },
    }]
  },
}


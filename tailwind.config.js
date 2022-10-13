/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'bg': '#101730ff',
        'bg-accent': '#1B2524ff',
        'bg-accent2': '#243232ff',
        'text-color': '#AEBEBEff',
        'oxford-blue': '#101730ff',
        'deep-space-sparkle': '#3F646Dff',
        'dark-slate-gray': '#2E5252ff',
        'outer-space-crayola': '#243232ff',
        'dark-jungle-green': '#1B2524ff',
      },
    }
  },
  plugins: [],
}
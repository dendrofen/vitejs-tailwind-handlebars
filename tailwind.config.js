module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx,hbs,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
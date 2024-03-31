/** @type {import('tailwindcss').Config} */
const settings = require('./src/config');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: settings.theme,
  plugins: []
};

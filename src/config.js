const defaultTheme = require('tailwindcss/defaultTheme');

const theme = {
  extend: {
    colors: {
      navy: {
        DEFAULT: '#0c1f3f',
        light: '#142b55',
        dark: '#07122a',
      },
      gold: {
        DEFAULT: '#c9a96e',
        light: '#dfc28f',
        dark: '#a8893a',
      },
      cream: {
        DEFAULT: '#f8f4ef',
        dark: '#ede8e0',
      },
      charcoal: '#1c1c1e',
    },
    fontFamily: {
      serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    gridTemplateRows: {
      50: 'repeat(50, minmax(0, 1fr))',
    },
    gridTemplateColumns: {
      50: 'repeat(50, minmax(0, 1fr))',
    }
  }
};

const settings = {
  api:
    (process.env.NODE_ENV === 'production' &&
      'https://albasha-api.gtahomespa.com/') ||
    'http://localhost:4000/',
  theme
};

module.exports = settings;

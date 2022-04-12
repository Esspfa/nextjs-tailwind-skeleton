const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
  plugins: [plugin],
  theme: {
    screens: {
      xs: { min: '480px' },
      ...defaultTheme.screens,
    },
    extend: {
      colors: {},
    },
  },
};

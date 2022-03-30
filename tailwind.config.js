const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
    safelist: ['bg-blue-500', 'text-center', 'hover:opacity-100', 'lg:text-right', 'font-bold', 'bg-white'],
  },
  variants: {
    extend: {},
  },
  plugins: [plugin],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    screens: {
      xs: { min: '480px' },
      md_900: { min: '950px' },
      'desktop-view': { min: '480px', max: '2600px' },
      'mobile-view': { min: '100px', max: '480px' },
      ...defaultTheme.screens,
    },
    minHeight: {
      14: '14rem',
      18: '18rem',
      20: '20rem',
      24: '24rem',
      27: '27rem',
      ...defaultTheme.minHeight,
    },
    fontSize: {
      'base-17': '1.0625rem',
      ...defaultTheme.fontSize,
    },
    borderRadius: {
      '4xl': '2rem',
      '5xl': '2.5rem',
      ...defaultTheme.borderRadius,
    },
    darkSelector: '.dark-mode',
    smoke: 'rgba(0, 0, 0, 0.5)',
    extend: {
      borderColor: {
        'custom-border': '#1E2628',
      },
      colors: {
        primary: '#0c0820',
        secondaryColor: '#f7849d',
        primaryDark: '#191628',
        greyShade: '#86909A',
        greyShade2: '#C4C4C4',
      },
      width: {
        92: '22rem',
        '10/11': '110%',
        '12/13': '130%',
        '13/14': '140%',
        '14/15': '150%',
        '1/13': '4.16665%',
      },
      height: {
        '10/11': '35rem',
        '12/13': '50rem',
      },
      boxShadow: {
        'result-shadow': 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
      },
    },
  },
};

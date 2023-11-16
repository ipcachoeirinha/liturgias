const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.jsx','./app/**/*.html'],
  important: true,
  theme: {
    fontFamily: {
      'tnr': ['Times New Roman'],
    },
    extend: {},
  },
  plugins: [],
}


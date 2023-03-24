/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'node_modules/tw-elements/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require('flowbite/plugin'),
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
}

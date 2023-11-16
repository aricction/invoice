/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'ceramic': {
          '50': '#f6faf3',
          '100': '#e1f0d7',
          '200': '#c2e1ae',
          '300': '#99ca7e',
          '400': '#71ad54',
          '500': '#55923a',
          '600': '#41752c',
          '700': '#365e27',
          '800': '#2d4c23',
          '900': '#294021',
          '950': '#13250e',
        },
      },
    },
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),  // Add this line if you want to use @tailwindcss/typography
    // Other plugins can be added here
  ],
};

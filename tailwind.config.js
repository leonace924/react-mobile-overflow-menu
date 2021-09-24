module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: '#CC104B',
        gray: 'rgba(30, 36, 49, 0.3)',
        'light-yellow': '#FFEED8',
      },
      backgroundImage: {
        hero: "url('/src/assets/images/img-bg-home.jpg')",
      },
      boxShadow: {
        sheet: '0 -8px 20px rgba(0, 0, 0, 0.1)',
      },
      height: {
        'screen-80': '80vh',
      },
      textColor: {
        black: '#1E2431',
        'light-black': '#5F6674',
        danger: '#CC104B',
        'light-gray': '#888E99',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

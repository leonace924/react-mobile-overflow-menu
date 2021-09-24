module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: '#CC104B',
        gray: 'rgba(30, 36, 49, 0.3)',
        'light-yellow': '#FFEED8',
        disabled: '#5F6674',
        success: '#67B678',
      },
      backgroundImage: {
        hero: "url('/src/assets/images/img-bg-home.jpg')",
      },
      borderColor: {
        danger: '#CC104B',
        success: '#67B678',
        gray: '#D5D5DC',
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
        gray: '#D5D5DC',
        'light-gray': '#888E99',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      margin: ['last'],
    },
  },
  plugins: [],
};

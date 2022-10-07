module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-5px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
      },
      colors: {
        primary: '#40a944',
        lake_purple: '#eeaaff',
        light_teal: '#cafffe',
        dark_bg: 'black',
        dark_text: 'white',
        light_bg: 'white',
        light_text: 'black',
        error: 'red',
      },
    },
  },
  plugins: [],
};

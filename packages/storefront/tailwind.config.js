module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
        dark_primary: 'teal',
        dark_text: '#9ca3af',
        dark_bg: '#0f172a',
        error: 'red',
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '495px',
        'tab': '720px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-5px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
    }
    },
  },
  plugins: [],
}

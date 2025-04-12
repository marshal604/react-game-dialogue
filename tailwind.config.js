module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dialogic: {
          primary: '#FFCC00',
          secondary: '#457b9d',
          dark: '#1D3557',
          light: '#F1FAEE',
          danger: '#E63946'
        }
      },
      animation: {
        'typewriter': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink .75s step-end infinite'
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' }
        }
      }
    }
  },
  plugins: []
}; 
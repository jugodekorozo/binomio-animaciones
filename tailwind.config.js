/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#21181b',
        accent: '#f2ab37',
        'accent-light': '#f7c870',
        'warm-red': '#cd5f2a',
        bg: '#faf5d8',
        'bg-alt': '#d8ae8b',
        ink: '#21181b',
        muted: '#7a5c48',
        // Phase colors
        phase: {
          invest: '#2E86AB',
          preprod: '#A23B72',
          prod: '#F18F01',
          postprod: '#C73E1D',
          entrega: '#3B1F2B',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['DM Serif Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

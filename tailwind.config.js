/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f7ec',
          100: '#dfecd0',
          200: '#bdd89d',
          300: '#94c065',
          400: '#72a83f',
          500: '#4A7C2F',
          600: '#3A6B1A',
          700: '#2D5016',
          800: '#1e3610',
          900: '#111f09',
        },
        cream: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F5F0E8',
          300: '#EDE8DC',
          400: '#E2DACB',
          500: '#D4C9B0',
        },
        charcoal: {
          50: '#F4F4F4',
          100: '#E8E8E8',
          200: '#C8C8C8',
          300: '#A0A0A0',
          400: '#6B6B6B',
          500: '#4A4A4A',
          600: '#3D3D3D',
          700: '#2C2C2C',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.35em',
      },
    },
  },
  plugins: [],
};

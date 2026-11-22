/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cozy: {
          50: '#FAF8F5',
          100: '#F4EFE6',
          200: '#E6DCB8',
          300: '#D6C5A2',
          400: '#C2A379',
          500: '#A68051',
          600: '#8A633B',
          700: '#6C4A2B',
          800: '#4F341F',
          900: '#342114',
        },
        hearth: {
          50: '#FFFBF5',
          100: '#FFF4E5',
          200: '#FEE3C4',
          300: '#FDCB95',
          400: '#FBA960',
          500: '#F88229',
          600: '#DC6012',
          700: '#B2440B',
          800: '#8E340F',
          900: '#752D10',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E4ECE5',
          200: '#C6D7C8',
          300: '#9FBDA2',
          400: '#7B9F7F',
          500: '#5F8263',
          600: '#48664C',
          700: '#3A523D',
          800: '#304232',
          900: '#28372A',
        },
        warmgray: {
          50: '#FBF9F7',
          100: '#F3EFEA',
          200: '#E5DFD7',
          300: '#D2C8BC',
          400: '#B7A899',
          500: '#9B8B7B',
          600: '#7D6D5E',
          700: '#625447',
          800: '#493E34',
          900: '#2D251F',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'cozy': '0 10px 30px -5px rgba(79, 52, 31, 0.08), 0 4px 12px -2px rgba(79, 52, 31, 0.04)',
        'cozy-lg': '0 20px 40px -10px rgba(79, 52, 31, 0.12), 0 8px 20px -4px rgba(79, 52, 31, 0.06)',
        'glow': '0 0 25px rgba(248, 130, 41, 0.25)',
      }
    },
  },
  plugins: [],
}

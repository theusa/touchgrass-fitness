/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pop-yellow': '#FFD93D',
        'pop-blue': '#4D96FF',
        'pop-red': '#FF6B6B',
        'pop-green': '#6BCB77',
        'cream': '#FFFDF5',
        'ink': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Titan One', 'cursive'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-crazy': 'bounce 0.5s infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #1a1a1a',
        'hard-lg': '8px 8px 0px 0px #1a1a1a',
        'hard-xl': '12px 12px 0px 0px #1a1a1a',
      }
    },
  },
  plugins: [],
}
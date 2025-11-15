/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#FFB6C1',
        'romantic-rose': '#FF69B4',
        'romantic-purple': '#DDA0DD',
        'romantic-lavender': '#E6E6FA',
        'romantic-peach': '#FFDAB9',
        // Flower theme colors for Lun
        'lily-white': '#FFFFFF',
        'lily-pink': '#FFB6E1',
        'tulip-yellow': '#FFE135',
        'tulip-red': '#FF6B6B',
        'tulip-pink': '#FFB6E1',
      },
      fontFamily: {
        'romantic': ['Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}


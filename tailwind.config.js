/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05080f',
        panel: '#0b1222',
        line: '#1b2942',
        neon: '#34f5c5',
        cyan: '#32c7ff',
        alert: '#ff5d7d',
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(52, 245, 197, 0.32), 0 0 30px rgba(52, 245, 197, 0.2)',
        pulse: '0 0 60px rgba(50, 199, 255, 0.25)',
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        blink: 'blink 1.6s steps(2, end) infinite',
        scan: 'scan 3.8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 45%': { opacity: '1' },
          '46%, 100%': { opacity: '0.2' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend: {
        
        keyframes: {

          'float-1': {
            '0%': { transform: 'translate(0, 0)' },
            '25%': { transform: 'translate(25px, -15px)' },
            '50%': { transform: 'translate(-15px, 10px)' },
            '75%': { transform: 'translate(10px, -20px)' },
            '100%': { transform: 'translate(0, 0)' },
          },
          'float-2': {
            '0%': { transform: 'translate(0, 0)' },
            '25%': { transform: 'translate(-20px, -25px)' },
            '50%': { transform: 'translate(20px, 15px)' },
            '75%': { transform: 'translate(15px, -30px)' },
            '100%': { transform: 'translate(0, 0)' },
          },
          'float-3': {
            '0%': { transform: 'translate(0, 0)' },
            '25%': { transform: 'translate(30px, 20px)' },
            '50%': { transform: 'translate(-25px, -10px)' },
            '75%': { transform: 'translate(20px, 30px)' },
            '100%': { transform: 'translate(0, 0)' },
          },
  
        
          reappear: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
        animation: {
                  'float-1': 'float-1 8s ease-in-out infinite',
        'float-2': 'float-2 10s ease-in-out infinite',
        'float-3': 'float-3 12s ease-in-out infinite',
'random-float': 'random-float 12s ease-in-out infinite forwards',
          reappear: 'reappear 7s ease-in-out forwards', 
        },
    },
  },
  plugins: [],
}

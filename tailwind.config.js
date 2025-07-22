/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
          display: ['Poppins', 'ui-sans-serif', 'system-ui'],
        },
        colors: {
          background: '#0a0a23',
          neon: {
            purple: '#a259ff',
            blue: '#38bdf8',
            white: '#fff',
          },
        },
        boxShadow: {
          'neon-purple': '0 0 16px 4px #a259ff, 0 0 32px 8px #a259ff44',
          'neon-blue': '0 0 16px 4px #38bdf8, 0 0 32px 8px #38bdf844',
        },
        borderRadius: {
          'xl': '1.5rem',
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [],
  };
  
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        azul: '#0ad7f7',
        rosado: '#ff3b69',
        amarillo: '#fab021',
        naranja: '#f76218',
      },
      borderRadius: {
        'bottom': '2rem',
        'top': '8rem',
      },
      boxShadow: {
        'custom-light': '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)',
      },
      spacing: {
        'a': '-9px',
      },
      fontFamily: {
        'lonely-coffee': ['Lonely-Coffee', 'sans-serif'],
        'this-cafe': ['This-Cafe', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

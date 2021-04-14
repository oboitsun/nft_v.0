module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        30: '30px',
      },
      maxWidth: {
        1380: '1380px',
      },
      fontSize: {
        180: '180px',
        90: '90px',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        lghtbl: '#6CE3FF',
        gold: '#F9D885',
        btnred: '#DD406D',
        turq: '#61E1FF',
      },
      inset: {
        '15%': '15%',
        '10%': '10%',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

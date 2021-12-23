module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      borderWidth: {
        'p': '1.5px'
      },
      // space: {
      //   '400': '400px',
      //   '600': '600px',
      //   '650': '650px'
      // },
      margin: {
        '0.5': '2px',
      },
      width: {
        '150': '600px',
        '200': '800px',
        '2.5': '10px',

      },
      height: { '2.5': '10px', '15': '60px', '33': '132px' },
      // fontFamily: {
      //   'header': ['Techna', 'sans-serif'],
      // },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        main: {
          light: '#85d7ff',
          DEFAULT: '#1ee682',
          dark: '#009eeb',
        },
        bg: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        accent: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      },
    },
  },
  plugins: [],
}

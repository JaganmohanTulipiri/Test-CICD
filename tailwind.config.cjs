/** @type {import('tailwindcss').Config} */
import backgroundImg from "../../src/assets/images/loginbackgroundimage.png"
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'poppins-bold': ['poppins-bold'],
        'poppins-extralight': ['poppins-extralight'],
        'poppins-italic': ['poppins-italic', ''],
        'poppins-light': ['poppins-light', ''],
        'poppins-medium': ['poppins-medium', ''],
        'poppins-regular': ['poppins-regular', ''],
        'poppins-semibold': ['poppins-semibold', ''],
        'poppins-thin': ['poppins-thin', '  '],
      },
      colors: {
        'back-color': 'rgb(0, 0, 0, 0.5)',
        fitness: '#282828',
        black: '#000000',
        'black-2': '#2f362f',
        'gray-2': '#6f6f6f',
        gray: '#cecece',
        white2: '#23fe42',
        white: '#FFFFFF',
        'gray-3': '#808492',
        primary: '#0081c8',
        green: '#18a616',
        red: '#ff4040',
        star: '#FFCB45',
        'black-3': '#1a1818',
        improvement: '#FF9A46',
        fit: '#19A617',
        risk: '#FF3F3F',
        lean: '#602e4f',
        'black-4': '#808080',
      },
      // backgroundImage: {
      //   hero: "url()",
      // },
      backgroundColor: {
        'gray-1': '#f5f5f5',
        sky: '#f5faff',
      },
    },
  },
  plugins: [],
};

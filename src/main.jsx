import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../src/store/store';
import { extendTheme } from '@chakra-ui/react';

import { Select } from './components/CustomChakraComponents';

// const theme = extendTheme({
// 	styles: {
// 		global: () => ({
// 			body: {},
// 			"*::placeholder": {
// 				color: "",
// 			},
// 			"*, *::before, &::after": {},
// 		}),
// 	},
// });

const theme = extendTheme({
  fonts: {
    body: 'poppins',
  },
  colors: {
    transparent: 'transparent',
    fitness: '#282828',
    black: '#000000',
    head: '#E7F1FF',
    head2: '#ECF4FF',
    'black-1': '#282828',
    'black-2': '#2f362f',
    'gray-2': '#6f6f6f',
    'gray-3': '#959595',
    gray: '#cecece',
    white2: '#23fe42',
    white: '#FFFFFF',
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
    'gray-1': '#f5f5f5',
    sky: '#f5faff',
    darkPink: '#B02071',
    darkYellow: '#F9AF2F',
    lightGreen: '#4FB74A',
    lightPink: '#F05F78',
    lightSkyBlue: '#67C5B7',
    lightPrimary: '#35A2D5',
    greenishCyan: '#80BDAD',
    dangerRed: '#B84768',
    'gray-4': '#ECECEC',
    cement: '#E8EAE9',

    bg: {
      100: '#F2F8FFC7',
    },
    project: {
      100: '#0081c8',
    },
  },
  fontFamily: {
    mont: 'font-poppins-medium',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.375rem',
    '2xl': '1.5rem',
    xxxl: '1.75rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
    // "2xl": "96em",  // 1536px
    '3xl': '120em', // 1920px
    '4xl': '160em', // 2560px
  },
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  sizes: {
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#F2F8FFC7',
        color: 'black',
        fontFamily: 'poppins',
        fontSize: 'md',
        lineHeight: 'base',
      },
      // styles for the `a`
      a: {
        color: 'primary',
        cursor: 'pointer',
        _hover: {
          textDecoration: 'underline',
        },
      },
      // th: {
      // 	borderBottom: "0px !important",
      // },
      // td: {
      // 	border: "0px !important",
      // },
      // "tr:nth-of-type(even)": {
      // 	background: "bg",
      // },
      // "tr:nth-of-type(odd)": {
      // 	background: "white",
      // },

      // "*::placeholder": {
      // 	color: "gray-2",
      // },
      // "input,select": {
      // 	background: "bg !important",
      // 	_focus: {
      // 		outline: "none !important",
      // 		border: "0px !important",
      // 	},
      // },
      option: {
        _hover: {
          background: 'bg !important',
        },
      },

      '*, *::before, &::after,': {
        borderColor: 'gray-2',
        wordWrap: 'break-word',
      },
    },
  },
  textStyles: {
    h1: {
      fontSize: { base: 'sm', md: 'md', lg: '22px' },
      fontWeight: 'semibold',
    },
    h2: {
      fontSize: { base: 'xs', md: 'sm', lg: '20px' },
      fontWeight: 'medium',
    },
    h3: {
      fontSize: { base: 'xs', md: 'sm', lg: '18px' },
      fontWeight: 'medium',
    },

    h4: {
      fontSize: { base: 'xs', md: 'sm', lg: '16px' },
      fontWeight: 'semibold',
    },
    h5: {
      fontSize: { base: 'xs', md: 'sm', lg: '16px' },
      fontWeight: 'normal',
    },
    sideTxt: {
      fontSize: { base: 'xs', md: 'sm', lg: '15px' },
      fontWeight: 'semibold',
    },
    h6: {
      fontSize: { base: 'xs', md: 'sm', lg: '14px' },
      fontWeight: 'medium',
    },
    p: {
      fontSize: { base: 'xs', md: 'sm', lg: '14px' },
      fontWeight: 'normal',
    },
    text: {
      fontSize: { base: 'sm', md: 'md', lg: 'lg' },
      //whiteSpace: 'nowrap',
      fontWeight: 'bold',
    },
    textHead: {
      fontSize: { base: 'xs', md: 'sm', lg: '15px' },
      //whiteSpace: { base: 'wrap', md: 'nowrap', lg: 'nowrap' },
    },
    textHead1: {
      fontSize: { base: 'xs', md: 'sm', lg: '15px' },
      fontWeight: 'semibold',
      //whiteSpace: { base: 'wrap', md: 'nowrap', lg: 'nowrap' },
    },
  },
  components: {
    Checkbox: {
      parts: ['control'],
      baseStyle: {
        control: {
          _checked: {
            _disabled: {
              bg: 'black-4',
              borderColor: 'black-4',
            },
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);

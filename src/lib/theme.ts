import { createMuiTheme } from '@material-ui/core/styles';
import { jaJP } from '@material-ui/core/locale';

const palette = {
  primary: { main: '#00796B' },
  secondary: { main: '#fbc02d' },
  error: { main: '#ef5350' },
  warning: { main: '#cddc39' },
  info: { main: '#004d40' },
  success: { main: '#26c6da' },
};

const theme = createMuiTheme({ palette }, jaJP);
const htmlFontSize = 16;
const coef = (fontSize: number): number => fontSize / 14;

theme.typography = {
  fontFamily: 'Koruri',
  fontSize: 12,
  fontWeightLight: 'lighter',
  fontWeightMedium: 'normal',
  fontWeightRegular: 'initial',
  fontWeightBold: 'bolder',
  h1: {
    fontFamily: 'Audiowide',
    fontSize: 80,
    whiteSpace: 'pre-line',
    color: palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 64,
    },
  },
  h2: {
    fontFamily: 'Audiowide',
    fontSize: 32,
    color: '#fafafa',
  },
  h3: {
    fontFamily: 'Koruri, Arial',
    fontSize: 18,
    '&:visited': {
      color: '#fafafa',
    },
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  h4: {
    fontFamily: 'Koruri, Arial',
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  h5: {
    fontFamily: 'Koruri, Arial',
    fontSize: 20,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  h6: {
    fontFamily: 'Audiowide',
    fontSize: 40,
    whiteSpace: 'pre-line',
    color: '#00796b',
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  subtitle1: {
    fontFamily: 'Audiowide',
    fontSize: 48,
    fontWeight: 700,
    marginBottom: 16,
    color: palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
    },
  },
  subtitle2: {
    fontFamily: 'Audiowide',
    fontSize: 20,
    fontWeight: 700,
    color: palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  body1: {
    fontFamily: 'Koruri, Arial',
    whiteSpace: 'pre-line',
    fontSize: 16,
    marginBottom: 2,
    color: '#030303',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '28px',
    },
  },
  body2: {
    fontFamily: 'Koruri, Arial',
    fontSize: 12,
    color: '#030303',
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
  },
  button: {
    fontFamily: 'Koruri, Arial',
    fontSize: 18,
    fontWeight: 700,
    color: '#00796b',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  caption: {
    fontFamily: 'Koruri, Arial',
    fontSize: 12,
    marginBottom: 8,
    color: palette.secondary.main,
  },
  overline: {
    fontFamily: 'Koruri, Arial',
    fontSize: 12,
    marginBottom: 8,
    color: palette.secondary.main,
  },
  pxToRem: size => `${(size / htmlFontSize) * coef(size)}rem`,
};

export default theme;

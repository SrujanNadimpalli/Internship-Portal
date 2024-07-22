import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0056b3', // New primary color
      light: '#e3f2fd', // New primary light color
    },
    secondary: {
      main: '#ff5722', // New secondary color
      light: '#ffccbc', // New secondary light color
    },
    background: {
      default: '#EBF7F1',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8, // Example of changing border radius
        textTransform: 'none', // Prevents uppercase transformation
      },
      containedPrimary: {
        backgroundColor: '#0056b3', // Primary button color
        color: '#fff',
        '&:hover': {
          backgroundColor: '#003d7a', // Primary button hover color
        },
      },
      containedSecondary: {
        backgroundColor: '#ff5722', // Secondary button color
        color: '#fff',
        '&:hover': {
          backgroundColor: '#e64a19', // Secondary button hover color
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

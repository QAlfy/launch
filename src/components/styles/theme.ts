import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: '#FF7600',
    },
    success: {
      main: green[500]
    },
    info: {
      main: '#007B9C'
    }
  },
});

export default theme;
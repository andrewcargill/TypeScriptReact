import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#43a314',
    },
    secondary: {
      main: '#647aa8',
    },
    success: {
      main: '#287d1b',
    },
  },
  typography: {
    // fontFamily: 'Ubuntu Mono',
  }
});

export default theme;
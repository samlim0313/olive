import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#cde1b8',
      main: '#9caf88',
      dark: '#6d805b',
    },
    secondary: {
      light: '#e3b0bc',
      main: '#b0808c',
      dark: '#80535f',
    },
  },
  typography: {
    fontFamily: '"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif'
  }
});

export default theme;
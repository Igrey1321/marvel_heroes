import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64, 100, 150, 250, 300, 450, 550],
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

export default defaultTheme;

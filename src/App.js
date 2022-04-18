import React from 'react';
import './App.css';
import theme from './common/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Root from './components/Root';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Root />
    </ThemeProvider>
  );
}

export default App;

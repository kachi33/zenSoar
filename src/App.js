import React from 'react';
import './header.css'
import {ThemeProvider}  from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import combinedTheme from './theme/combinedTheme';
import Header from './components/Header';



const App = function() {
  return (
    <ThemeProvider theme={combinedTheme}>
      <CssBaseline/>

        {/* <Header /> */}
        <Header />
    </ThemeProvider>
  );
}

export default App;

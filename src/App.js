import React from 'react';
import './header.css'
import {ThemeProvider}  from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import combinedTheme from './theme/combinedTheme';
import Layout from './Layout';



const App = function() {
  return (
    <ThemeProvider theme={combinedTheme}>
      <CssBaseline/>
      <Layout/>


  </ThemeProvider>
  );
}

export default App;

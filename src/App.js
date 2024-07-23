import React from 'react';
import './header.css'
// import Sidebar from './components/Sidebar';
import {ThemeProvider}  from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import combinedTheme from './theme/combinedTheme';
// import Header from './components/Header';
import Layout from './Layout';



const App = function() {
  return (
    <ThemeProvider theme={combinedTheme}>
      <CssBaseline/>
      <Layout/>
      {/* <Header/> */}


      {/* <Sidebar/> */}
  </ThemeProvider>
  );
}

export default App;

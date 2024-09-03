import React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import combinedTheme from '../../theme/combinedTheme';
import Container from '@mui/material/Container';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../theme/header.css';
import { alpha } from '@mui/material/styles';

const AppLayout = ({ children, title }) => {
  return (
    <ThemeProvider theme={combinedTheme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          maxWidth: '100%',
          padding: 0,
          margin: 0,
          backgroundColor: (theme) => alpha(theme.palette.fill.lightGreen, 1),
        }}
      >
        <Sidebar />
        <Box
          sx={{
            bgcolor: '#00000000',
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Adjust paddingTop to match the height of the AppBar */}
          <Box sx={{ paddingTop: '64px' }}> 
            <Header />
          </Box>
          {title && (
            <Box
              sx={{
                typography: 'h4',
                p: 0,
                m: 0,
              }}
            >
              {title}
            </Box>
          )}
          <Box
            sx={{
              flexGrow: 1,
              p: 0,
              m: 0,
            }}
          >
            {children}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AppLayout;

import React from 'react';
import { CssBaseline, Grid, Paper, Box, Typography, Snackbar, Alert } from '@mui/material';
import Logo from '../UI/Logo';
import exhibitImage from '../../images/exhibit01.jpg';

const AuthLayout = ({ title, children, error, handleCloseSnackbar }) => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `linear-gradient(to right, #283618, #fefae0), url(${exhibitImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
          }}
        >
          <Logo />
          <Typography component="h2" variant="h5" sx={{ mt: 6 }}>
            {title}
          </Typography>
          <Box sx={{ mt: 1 }}>
            {children}
          </Box>
        </Box>
        <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="error">
            {error}
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;

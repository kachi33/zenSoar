import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Logo from '../UI/Logo';
import exhibitImage from '../../images/exhibit01.jpg';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
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
            <Logo/>
            <Typography component="h2" variant="h5" sx={{mt: 6}}   >{/*  mx: 8, my: 4*/}
              Log in to your account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#222323', 
                    color: '#ffffff', 
                    '&:hover': {
                      backgroundColor: '#000000', 
                    },
                  }}   
                >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}
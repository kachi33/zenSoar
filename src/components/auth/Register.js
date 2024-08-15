import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Snackbar, Alert } from '@mui/material';
import Logo from '../UI/Logo';
import exhibitImage from '../../images/exhibit01.jpg';
import axios from 'axios';

const Register = () => {

const navigate = useNavigate();
const [error, setError] = useState('');

   
  const handleSubmit = (e) => {
      e.preventDefault();

      const data = new FormData(e.currentTarget);
      const username = data.get('username')
      const email = data.get('email')
      const password = data.get('password')

      axios.post('http://localhost:3001/register', {username, email, password}, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(result => {
        console.log(result)
        navigate('/login')
      })

      .catch(err => {
        if (err.response && err.response.status === 400) {
          setError(err.response.data.message);
        } else {
          setError('An unexpected error occurred. Please try again.');
        }
      })
    };

    const handleCloseSnackbar = () => {
      setError('');
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
                Register your account
              </Typography>
              <Typography component="p" sx={{ marginTop: '5px'}}>Have an account? 
                <Link to="/login"> login</Link>
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoFocus
                />                
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
              <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="error">
              {error}
              </Alert>
              </Snackbar>
            </Box>
          </Grid>
        </Grid>
    );
}
 
export default Register;


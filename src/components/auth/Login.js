import React, { useState } from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Typography, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AuthLayout from './AuthLayout';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    axios.post('http://localhost:3001/login', { email, password }, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(result => {
        if (result.data.token) {
          navigate('/dashboard');
        }
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('An unexpected error occurred. Please try again.');
        }
      });
  };

  const handleCloseSnackbar = () => {
    setError('');
  };

  return (
    <AuthLayout title="Log in to your account" error={error} handleCloseSnackbar={handleCloseSnackbar}>
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
      <Typography component="p" sx={{ marginTop: '5px' }}>
        <Link to="/forgot-password">Forgot Password?</Link>
      </Typography>
    </AuthLayout>
  );
};

export default Login;

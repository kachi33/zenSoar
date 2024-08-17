import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';
import AuthLayout from './AuthLayout';  // Import the AuthLayout component

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');

    axios.post('http://localhost:3001/register', { username, email, password }, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
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
    <AuthLayout title="Register your account" error={error} handleCloseSnackbar={handleCloseSnackbar}>
      <Typography component="p" sx={{ marginTop: '5px' }}>
        Have an account? <Link to="/login">Login</Link>
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
          Sign Up
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default Register;

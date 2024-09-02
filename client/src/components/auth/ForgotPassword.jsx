import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import axios from 'axios';
import AuthLayout from '@components/auth/AuthLayout';  // Import the AuthLayout component
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email')

          
    axios.post('http://localhost:5000/auth/forgot-password', { email }, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(result => {
        // page Redirect
        if (result.data.status) {
        Alert("A reset link has been sent to your email");
        console.log(result.data.message);
        navigate('/login')
        }}) 
        .catch(err => {
          if (err.response && err.response.data && err.response.data.message) {
            setError(err.response.data.message);
          } else {
            setError('An unexpected error occurred. Please try again.');
            console.error(err);
          }
        });
  };

    const handleCloseSnackbar = () => {
        setError('');
    };

    return (
      <AuthLayout title="Forgot password" error={error} handleCloseSnackbar={handleCloseSnackbar}>
        <Typography component="p" sx={{ my: 1}}> 
            Enter the email address associated with your zenSoar account 
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email" // Email validation
              label="Email Address"
              name="email"
              autoComplete="email"
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
            Reset Password
          </Button>
        </Box>
      </AuthLayout>
    );
};

export default ForgotPassword;

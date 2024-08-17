import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import AuthLayout from './AuthLayout';  // Import the AuthLayout component

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/forgot-password', { email })
            .then(result => {
                // pageredirect
            })
            .catch(err => {
                setError(err.response?.data?.message || 'An error occurred. Please try again.');
            });
    };

    const handleCloseSnackbar = () => {
        setError('');
    };

    return (
        <AuthLayout 
            title="Forgot password"
            error={error}
            handleCloseSnackbar={handleCloseSnackbar}
        >
            <Typography component="p" sx={{ marginTop: '5px' }}> 
                Enter the email address associated with your zenSoar account 
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

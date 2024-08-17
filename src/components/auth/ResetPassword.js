import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import AuthLayout from './AuthLayout';  // Import the AuthLayout component

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        axios.post('http://localhost:3001/reset-password', { password })
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
            title="Reset your password"
            error={error}
            handleCloseSnackbar={handleCloseSnackbar}
        >
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm New Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                    Update Password
                </Button>
            </Box>
        </AuthLayout>
    );
};

export default ResetPassword;

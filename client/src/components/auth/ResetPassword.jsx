import React, { useEffect, useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthLayout from '@components/auth/AuthLayout';  

const ResetPassword = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');
        const userId = searchParams.get('id');

        useEffect(() => {
            
            // Ensure token and id are present
            if (!token || !userId) {
                setError('Invalid or missing token. Please try again.');
                return;
            }
        }, [token, userId])


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const newPassword = data.get('password');
        const confirmNewPassword = data.get('confirmPassword')
        
        if (newPassword !== confirmNewPassword) {
            setError('Passwords do not match');
            return;
        }

        axios.post('http://localhost:5000/auth/reset-password', {token, id: userId, newPassword }, {
            headers: {'Content-Type': 'application/json'}
        })
            .then(result => {
                console.log(token, result.data);
                navigate('/login') // pageredirect
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

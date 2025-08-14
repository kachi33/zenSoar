import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Container,
  Chip,
  Stack
} from '@mui/material';
import { LocalHospital } from '@mui/icons-material';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
    } catch (error: any) {
      setError('Failed to log in: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const demoLogin = async (demoEmail: string, demoPassword: string) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
    
    try {
      setError('');
      setLoading(true);
      await login(demoEmail, demoPassword);
    } catch (error: any) {
      setError('Failed to log in: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LocalHospital sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography component="h1" variant="h4" gutterBottom>
              ZenSoar
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Diagnostic Laboratory Management
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
              {error}
            </Alert>
          )}

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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Sign In'}
            </Button>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" gutterBottom align="center">
              Demo Accounts:
            </Typography>
            <Stack direction="column" spacing={1}>
              <Chip
                label="Admin Demo (admin@zensoar.com)"
                variant="outlined"
                color="primary"
                clickable
                onClick={() => demoLogin('admin@zensoar.com', 'password123')}
              />
              <Chip
                label="Lab Scientist Demo (lab@zensoar.com)"
                variant="outlined"
                color="secondary"
                clickable
                onClick={() => demoLogin('lab@zensoar.com', 'password123')}
              />
              <Chip
                label="Receptionist Demo (reception@zensoar.com)"
                variant="outlined"
                color="success"
                clickable
                onClick={() => demoLogin('reception@zensoar.com', 'password123')}
              />
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
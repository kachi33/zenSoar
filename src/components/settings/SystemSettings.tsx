import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Alert,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import {
  Notifications,
  Security,
  Storage,
  Language,
  Save,
  RestoreFromTrash,
} from '@mui/icons-material';

const SystemSettings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    systemAlerts: true,
  });

  const [systemConfig, setSystemConfig] = useState({
    language: 'en',
    timezone: 'Europe/London',
    currency: 'GBP',
    dateFormat: 'DD/MM/YYYY',
    backupFrequency: 'daily',
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: true,
    sessionTimeout: 30,
    passwordComplexity: 'high',
    auditLogs: true,
  });

  const [isDirty, setIsDirty] = useState(false);

  const handleNotificationChange = (setting: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: event.target.checked
    }));
    setIsDirty(true);
  };

  const handleSystemConfigChange = (setting: string) => (event: any) => {
    setSystemConfig(prev => ({
      ...prev,
      [setting]: event.target.value
    }));
    setIsDirty(true);
  };

  const handleSecurityChange = (setting: string) => (event: any) => {
    setSecurity(prev => ({
      ...prev,
      [setting]: event.target.value || event.target.checked
    }));
    setIsDirty(true);
  };

  const handleSave = () => {
    // Simulate saving settings
    setTimeout(() => {
      setIsDirty(false);
      // Show success message
    }, 1000);
  };

  const handleReset = () => {
    // Reset to defaults
    setNotifications({
      email: true,
      sms: false,
      push: true,
      systemAlerts: true,
    });
    setSystemConfig({
      language: 'en',
      timezone: 'Europe/London',
      currency: 'GBP',
      dateFormat: 'DD/MM/YYYY',
      backupFrequency: 'daily',
    });
    setSecurity({
      twoFactorAuth: true,
      sessionTimeout: 30,
      passwordComplexity: 'high',
      auditLogs: true,
    });
    setIsDirty(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          System Settings
        </Typography>
        {isDirty && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="outlined" 
              startIcon={<RestoreFromTrash />} 
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button 
              variant="contained" 
              startIcon={<Save />} 
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </Box>
        )}
      </Box>

      {isDirty && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          You have unsaved changes. Please save or reset your settings.
        </Alert>
      )}

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
        gap: 3,
        mb: 3
      }}>
        {/* Notification Settings */}
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Notifications sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">Notification Settings</Typography>
            </Box>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Email Notifications" 
                  secondary="Receive notifications via email"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notifications.email}
                    onChange={handleNotificationChange('email')}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="SMS Notifications" 
                  secondary="Receive notifications via SMS"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notifications.sms}
                    onChange={handleNotificationChange('sms')}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Push Notifications" 
                  secondary="Receive browser push notifications"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notifications.push}
                    onChange={handleNotificationChange('push')}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="System Alerts" 
                  secondary="Critical system notifications"
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={notifications.systemAlerts}
                    onChange={handleNotificationChange('systemAlerts')}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Security sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">Security Settings</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={security.twoFactorAuth}
                    onChange={handleSecurityChange('twoFactorAuth')}
                  />
                }
                label="Two-Factor Authentication"
              />
              
              <TextField
                label="Session Timeout (minutes)"
                type="number"
                value={security.sessionTimeout}
                onChange={handleSecurityChange('sessionTimeout')}
                InputProps={{ inputProps: { min: 5, max: 480 } }}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Password Complexity</InputLabel>
                <Select
                  value={security.passwordComplexity}
                  onChange={handleSecurityChange('passwordComplexity')}
                  label="Password Complexity"
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
              </FormControl>

              <FormControlLabel
                control={
                  <Switch
                    checked={security.auditLogs}
                    onChange={handleSecurityChange('auditLogs')}
                  />
                }
                label="Enable Audit Logs"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* System Configuration */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Language sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">System Configuration</Typography>
          </Box>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 2
          }}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                value={systemConfig.language}
                onChange={handleSystemConfigChange('language')}
                label="Language"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Español</MenuItem>
                <MenuItem value="fr">Français</MenuItem>
                <MenuItem value="de">Deutsch</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Timezone</InputLabel>
              <Select
                value={systemConfig.timezone}
                onChange={handleSystemConfigChange('timezone')}
                label="Timezone"
              >
                <MenuItem value="Europe/London">London (GMT)</MenuItem>
                <MenuItem value="Europe/Paris">Paris (CET)</MenuItem>
                <MenuItem value="America/New_York">New York (EST)</MenuItem>
                <MenuItem value="Asia/Tokyo">Tokyo (JST)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Currency</InputLabel>
              <Select
                value={systemConfig.currency}
                onChange={handleSystemConfigChange('currency')}
                label="Currency"
              >
                <MenuItem value="GBP">British Pound (£)</MenuItem>
                <MenuItem value="USD">US Dollar ($)</MenuItem>
                <MenuItem value="EUR">Euro (€)</MenuItem>
                <MenuItem value="JPY">Japanese Yen (¥)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Date Format</InputLabel>
              <Select
                value={systemConfig.dateFormat}
                onChange={handleSystemConfigChange('dateFormat')}
                label="Date Format"
              >
                <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
                <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
                <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Backup Frequency</InputLabel>
              <Select
                value={systemConfig.backupFrequency}
                onChange={handleSystemConfigChange('backupFrequency')}
                label="Backup Frequency"
              >
                <MenuItem value="hourly">Hourly</MenuItem>
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </CardContent>
      </Card>

      {/* System Information */}
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Storage sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h6">System Information</Typography>
          </Box>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 2
          }}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" color="textSecondary">System Version</Typography>
              <Typography variant="h6">ZenSoar v2.1.0</Typography>
            </Paper>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" color="textSecondary">Database Status</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip label="Online" color="success" size="small" />
                <Typography variant="body2">Connection healthy</Typography>
              </Box>
            </Paper>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" color="textSecondary">Last Backup</Typography>
              <Typography variant="h6">Today at 03:00 AM</Typography>
            </Paper>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" color="textSecondary">Storage Used</Typography>
              <Typography variant="h6">2.4 GB / 10 GB</Typography>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SystemSettings;
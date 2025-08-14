import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Chip
} from '@mui/material';
import {
  Dashboard,
  People,
  Assessment,
  Settings,
  LocalHospital,
  Science,
  PersonAdd
} from '@mui/icons-material';
import DashboardLayout from '../layout/DashboardLayout';
import { mockPatients } from '../../data/mockData';

const AdminDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('overview');

  const menuItems = [
    { text: 'Overview', icon: <Dashboard />, onClick: () => setActiveView('overview') },
    { text: 'Users', icon: <People />, onClick: () => setActiveView('users') },
    { text: 'Analytics', icon: <Assessment />, onClick: () => setActiveView('analytics') },
    { text: 'Settings', icon: <Settings />, onClick: () => setActiveView('settings') },
  ];

  const stats = [
    { title: 'Total Patients', value: mockPatients.length, icon: <People />, color: 'primary' },
    { title: 'Pending Tests', value: mockPatients.filter(p => p.status === 'pending').length, icon: <Science />, color: 'warning' },
    { title: 'Completed Today', value: mockPatients.filter(p => p.status === 'completed').length, icon: <LocalHospital />, color: 'success' },
    { title: 'Active Staff', value: 12, icon: <PersonAdd />, color: 'info' },
  ];

  const renderOverview = () => (
    <Box>
      <Typography variant="h4" gutterBottom>
        System Overview
      </Typography>
      <Box 
        display="flex" 
        gap={3} 
        flexWrap="wrap" 
        sx={{ mb: 3 }}
      >
        {stats.map((stat, index) => (
          <Box flex="1" minWidth="250px" key={index}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography color="textSecondary" gutterBottom>
                      {stat.title}
                    </Typography>
                    <Typography variant="h4">
                      {stat.value}
                    </Typography>
                  </Box>
                  <Box sx={{ color: `${stat.color}.main` }}>
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Box 
        display="flex" 
        gap={3} 
        flexWrap="wrap" 
        sx={{ mt: 2 }}
      >
        <Box flex="2" minWidth="400px">
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Patients
            </Typography>
            {mockPatients.slice(0, 5).map((patient) => (
              <Box key={patient.id} sx={{ mb: 2, p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography variant="subtitle1">{patient.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {patient.tests.length} test(s) • {patient.phone}
                    </Typography>
                  </Box>
                  <Chip 
                    label={patient.status} 
                    color={patient.status === 'completed' ? 'success' : patient.status === 'in_progress' ? 'warning' : 'default'}
                    size="small"
                  />
                </Box>
              </Box>
            ))}
          </Paper>
        </Box>
        <Box flex="1" minWidth="300px">
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              System Status
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2">Database</Typography>
              <Chip label="Online" color="success" size="small" />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2">Lab Equipment</Typography>
              <Chip label="Operational" color="success" size="small" />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2">Backup Status</Typography>
              <Chip label="Current" color="success" size="small" />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return renderOverview();
      case 'users':
        return <Typography variant="h4">User Management</Typography>;
      case 'analytics':
        return <Typography variant="h4">Analytics Dashboard</Typography>;
      case 'settings':
        return <Typography variant="h4">System Settings</Typography>;
      default:
        return renderOverview();
    }
  };

  return (
    <DashboardLayout title="Admin Dashboard" menuItems={menuItems}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default AdminDashboard;
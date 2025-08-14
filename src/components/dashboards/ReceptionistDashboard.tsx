import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import {
  PersonAdd,
  Schedule,
  Payment,
  People,
  Add,
  Edit,
  Phone,
  Email
} from '@mui/icons-material';
import DashboardLayout from '../layout/DashboardLayout';
import { mockPatients} from '../../data/mockData';

const ReceptionistDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('patients');
  const [patientDialog, setPatientDialog] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    selectedTests: []
  });

  const menuItems = [
    { text: 'Patients', icon: <People />, onClick: () => setActiveView('patients') },
    { text: 'Appointments', icon: <Schedule />, onClick: () => setActiveView('appointments') },
    { text: 'Billing', icon: <Payment />, onClick: () => setActiveView('billing') },
    { text: 'Registration', icon: <PersonAdd />, onClick: () => setActiveView('registration') },
  ];

  const handleAddPatient = () => {
    setPatientDialog(true);
  };

  const handleSavePatient = () => {
    console.log('Saving patient:', newPatient);
    setPatientDialog(false);
    setNewPatient({ name: '', age: '', phone: '', email: '', selectedTests: [] });
  };

  const calculateTotal = (tests: any[]) => {
    return tests.reduce((total, test) => total + test.price, 0);
  };

  const renderPatients = () => (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">
          Patient Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddPatient}
          sx={{
            backgroundColor: '#283618',
            '&:hover': {
              backgroundColor: '#1f2a1b'
            }
          }}
        >
          Add New Patient
        </Button>
      </Box>

      <Box 
        display="flex" 
        gap={3} 
        flexWrap="wrap" 
        sx={{ mb: 5 }}
      >
        <Box flex="1" minWidth="250px">
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Total Patients
                  </Typography>
                  <Typography variant="h4">
                    {mockPatients.length}
                  </Typography>
                </Box>
                <People color="primary" />
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box flex="1" minWidth="250px">
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Today's Appointments
                  </Typography>
                  <Typography variant="h4">8</Typography>
                </Box>
                <Schedule color="info" />
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box flex="1" minWidth="250px">
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Pending Payments
                  </Typography>
                  <Typography variant="h4">£1,420</Typography>
                </Box>
                <Payment color="warning" />
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box flex="1" minWidth="250px">
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    New Registrations
                  </Typography>
                  <Typography variant="h4">3</Typography>
                </Box>
                <PersonAdd color="success" />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Tests</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockPatients.map((patient, index) => (
              <TableRow key={patient.id} sx={{ backgroundColor: index % 2 === 1 ? '#f5f5f5' : 'transparent' }}>
                <TableCell>
                  <Typography variant="subtitle2">{patient.name}</Typography>
                </TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>
                  <Box>
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <Phone fontSize="small" />
                      <Typography variant="caption">{patient.phone}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={0.5}>
                      <Email fontSize="small" />
                      <Typography variant="caption">{patient.email}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {patient.tests.length} test(s)
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {patient.tests.map(t => t.name).join(', ')}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={patient.status} 
                    color={
                      patient.status === 'completed' ? 'success' : 
                      patient.status === 'in_progress' ? 'warning' : 'default'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">
                    £{calculateTotal(patient.tests)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button size="small" startIcon={<Edit />} sx={{
                    color: '#bc6c25',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'rgba(188, 108, 37, 0.1)',
                    },
                  }}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'patients':
        return renderPatients();
      case 'appointments':
        return <Typography variant="h4">Appointments</Typography>;
      case 'billing':
        return <Typography variant="h4">Billing Management</Typography>;
      case 'registration':
        return <Typography variant="h4">Patient Registration</Typography>;
      default:
        return renderPatients();
    }
  };

  return (
    <>
      <DashboardLayout  menuItems={menuItems}>
        {renderContent()}
      </DashboardLayout>

      <Dialog open={patientDialog} onClose={() => setPatientDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Patient</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Patient Name"
            fullWidth
            variant="outlined"
            value={newPatient.name}
            onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#283618',
                },
              },
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: '#283618',
                },
              },
            }}
          />
          <TextField
            margin="dense"
            label="Age"
            type="number"
            fullWidth
            variant="outlined"
            value={newPatient.age}
            onChange={(e) => setNewPatient({...newPatient, age: e.target.value})}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#283618',
                },
              },
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: '#283618',
                },
              },
            }}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            fullWidth
            variant="outlined"
            value={newPatient.phone}
            onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#283618',
                },
              },
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: '#283618',
                },
              },
            }}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={newPatient.email}
            onChange={(e) => setNewPatient({...newPatient, email: e.target.value})}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#283618',
                },
              },
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: '#283618',
                },
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPatientDialog(false)} sx={{ color: '#283618' }}>Cancel</Button>
          <Button onClick={handleSavePatient} variant="contained" sx={{
            backgroundColor: '#283618',
            '&:hover': {
              backgroundColor: '#1f2a1b'
            }
          }}>
            Add Patient
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ReceptionistDashboard;
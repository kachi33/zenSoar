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
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  Science,
  Assignment,
  PendingActions,
  CheckCircle,
  Add,
  Edit
} from '@mui/icons-material';
import DashboardLayout from '../layout/DashboardLayout';
import { mockPatients } from '../../data/mockData';
import UnderConstruction from '../common/UnderConstruction';

const LabScientistDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('tests');
  const [selectedTest, setSelectedTest] = useState<any>(null);
  const [resultDialog, setResultDialog] = useState(false);
  const [testResult, setTestResult] = useState('');

  const menuItems = [
    { text: 'Assigned Tests', icon: <Science />, onClick: () => setActiveView('tests') },
    { text: 'Test Results', icon: <Assignment />, onClick: () => setActiveView('results') },
    { text: 'Pending Reviews', icon: <PendingActions />, onClick: () => setActiveView('pending') },
  ];

  // Get all tests from all patients
  const allTests = mockPatients.flatMap(patient => 
    patient.tests.map(test => ({
      ...test,
      patientName: patient.name,
      patientId: patient.id,
      patientAge: patient.age
    }))
  );

  const handleAddResult = (test: any) => {
    setSelectedTest(test);
    setTestResult(test.results || '');
    setResultDialog(true);
  };

  const handleSaveResult = () => {
    console.log('Saving result:', testResult, 'for test:', selectedTest);
    setResultDialog(false);
    setSelectedTest(null);
    setTestResult('');
  };

  const renderTests = () => (
    <Box>
      <Typography variant="h4" gutterBottom>
        Assigned Tests
      </Typography>
      
      <Box 
        display="flex" 
        gap={3} 
        flexWrap="wrap" 
        sx={{ mb: 5 }}
      >
        <Box flex="1" minWidth="300px">
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Pending Tests
                  </Typography>
                  <Typography variant="h4">
                    {allTests.filter(t => t.status === 'pending').length}
                  </Typography>
                </Box>
                <Science color="warning" />
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box flex="1" minWidth="300px">
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    In Progress
                  </Typography>
                  <Typography variant="h4">
                    {allTests.filter(t => t.status === 'in_progress').length}
                  </Typography>
                </Box>
                <PendingActions color="info" />
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box flex="1" minWidth="300px">
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Completed Today
                  </Typography>
                  <Typography variant="h4">
                    {allTests.filter(t => t.status === 'completed').length}
                  </Typography>
                </Box>
                <CheckCircle color="success" />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient</TableCell>
              <TableCell>Test Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assigned To</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allTests.map((test, index) => (
              <TableRow key={index} sx={{ backgroundColor: index % 2 === 1 ? '#f5f5f5' : 'transparent' }}>
                <TableCell>
                  <Box>
                    <Typography variant="subtitle2">{test.patientName}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Age: {test.patientAge}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{test.name}</TableCell>
                <TableCell>{test.type}</TableCell>
                <TableCell>
                  <Chip 
                    label={test.status} 
                    color={
                      test.status === 'completed' ? 'success' : 
                      test.status === 'in_progress' ? 'warning' : 'default'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>{test.assignedTo || 'Unassigned'}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    startIcon={test.results ? <Edit /> : <Add />}
                    onClick={() => handleAddResult(test)}
                    sx={{
                      color: '#bc6c25',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: 'rgba(188, 108, 37, 0.1)',
                      },
                    }}
                  >
                    {test.results ? 'Edit Result' : 'Add Result'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  const renderResults = () => (
    <Box>
      <Typography variant="h4" gutterBottom>
        Test Results
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient</TableCell>
              <TableCell>Test</TableCell>
              <TableCell>Results</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allTests.filter(test => test.results).map((test, index) => (
              <TableRow key={index} sx={{ backgroundColor: index % 2 === 1 ? '#f5f5f5' : 'transparent' }}>
                <TableCell>{test.patientName}</TableCell>
                <TableCell>{test.name}</TableCell>
                <TableCell>{test.results}</TableCell>
                <TableCell>Today</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'tests':
        return renderTests();
      case 'results':
        return renderResults();
      case 'pending':
        return <UnderConstruction title="Pending Reviews" message="Review system for test results is being developed. Soon you'll be able to review and approve test results here." />;
      default:
        return renderTests();
    }
  };

  return (
    <>
      <DashboardLayout  menuItems={menuItems}>
        {renderContent()}
      </DashboardLayout>

      <Dialog open={resultDialog} onClose={() => setResultDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedTest?.results ? 'Edit' : 'Add'} Test Result
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1" gutterBottom>
            {selectedTest?.name} - {selectedTest?.patientName}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            label="Test Results"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={testResult}
            onChange={(e) => setTestResult(e.target.value)}
            placeholder="Enter test results, observations, and recommendations..."
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
          <Button onClick={() => setResultDialog(false)} sx={{ color: '#283618' }}>Cancel</Button>
          <Button onClick={handleSaveResult} variant="contained" sx={{
            backgroundColor: '#283618',
            '&:hover': {
              backgroundColor: '#1f2a1b'
            }
          }}>
            Save Result
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LabScientistDashboard;
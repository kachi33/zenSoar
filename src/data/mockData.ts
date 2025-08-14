import { Patient, Test } from '../types';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 45,
    phone: '+44 7700 900123',
    email: 'john.doe@email.com',
    status: 'pending',
    createdAt: new Date('2024-08-10'),
    tests: [
      { id: '1', name: 'Complete Blood Count', type: 'Blood Test', price: 75, status: 'pending' },
      { id: '2', name: 'Chest X-Ray', type: 'Radiology', price: 120, status: 'pending' }
    ]
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    age: 32,
    phone: '+44 7700 900124',
    email: 'sarah.w@email.com',
    status: 'in_progress',
    createdAt: new Date('2024-08-11'),
    tests: [
      { id: '3', name: 'MRI Brain', type: 'Radiology', price: 350, status: 'in_progress', assignedTo: 'Dr. Smith' }
    ]
  },
  {
    id: '3',
    name: 'Michael Brown',
    age: 67,
    phone: '+44 7700 900125',
    email: 'mike.brown@email.com',
    status: 'completed',
    createdAt: new Date('2024-08-09'),
    tests: [
      { id: '4', name: 'CT Scan Abdomen', type: 'Radiology', price: 280, status: 'completed', results: 'Normal findings' }
    ]
  }
];

export const availableTests = [
  { id: '1', name: 'Complete Blood Count', type: 'Blood Test', price: 75, department: 'Hematology' },
  { id: '2', name: 'Liver Function Test', type: 'Blood Test', price: 85, department: 'Biochemistry' },
  { id: '3', name: 'Chest X-Ray', type: 'Radiology', price: 120, department: 'Radiology' },
  { id: '4', name: 'MRI Brain', type: 'Radiology', price: 350, department: 'Radiology' },
  { id: '5', name: 'CT Scan', type: 'Radiology', price: 280, department: 'Radiology' },
  { id: '6', name: 'Ultrasound', type: 'Radiology', price: 150, department: 'Radiology' }
];
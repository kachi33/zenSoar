export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Lab Scientist' | 'Receptionist';
  status: 'Active' | 'Inactive';
  lastLogin: string;
}

export const mockUsers: User[] = [
  { 
    id: 1, 
    name: 'Dr. Sarah Johnson', 
    email: 'admin@zensoar.com', 
    role: 'Admin', 
    status: 'Active', 
    lastLogin: '2 hours ago' 
  },
  { 
    id: 2, 
    name: 'Michael Chen', 
    email: 'lab@zensoar.com', 
    role: 'Lab Scientist', 
    status: 'Active', 
    lastLogin: '1 hour ago' 
  },
  { 
    id: 3, 
    name: 'Emily Rodriguez', 
    email: 'reception@zensoar.com', 
    role: 'Receptionist', 
    status: 'Active', 
    lastLogin: '30 minutes ago' 
  },
  { 
    id: 4, 
    name: 'Dr. James Wilson', 
    email: 'lab2@zensoar.com', 
    role: 'Lab Scientist', 
    status: 'Inactive', 
    lastLogin: '2 days ago' 
  },
  { 
    id: 5, 
    name: 'Lisa Thompson', 
    email: 'reception2@zensoar.com', 
    role: 'Receptionist', 
    status: 'Active', 
    lastLogin: '1 day ago' 
  },
  { 
    id: 6, 
    name: 'Dr. Maria Garcia', 
    email: 'admin2@zensoar.com', 
    role: 'Admin', 
    status: 'Active', 
    lastLogin: '4 hours ago' 
  },
];
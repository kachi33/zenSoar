export type UserRole = 'admin' | 'lab_scientist' | 'receptionist';

export interface User {
  uid: string;
  email: string;
  role: UserRole;
  name: string;
  avatar?: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  phone: string;
  email: string;
  tests: Test[];
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: Date;
}

export interface Test {
  id: string;
  name: string;
  type: string;
  price: number;
  status: 'pending' | 'in_progress' | 'completed';
  results?: string;
  assignedTo?: string;
}
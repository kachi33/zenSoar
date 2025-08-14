import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Login from './auth/Login.tsx';
import ProtectedRoute from './auth/ProtectedRoute';

const AdminDashboard = React.lazy(() => import('./dashboards/AdminDashboard.tsx'));
const LabScientistDashboard = React.lazy(() => import('./dashboards/LabScientistDashboard.tsx'));
const ReceptionistDashboard = React.lazy(() => import('./dashboards/ReceptionistDashboard.tsx'));

const AppRoutes: React.FC = () => {
  const { currentUser } = useAuth();

  // Redirect logged-in users to their appropriate dashboard
  const getDefaultRoute = () => {
    if (!currentUser) return '/login';
    
    switch (currentUser.role) {
      case 'admin':
        return '/admin';
      case 'lab_scientist':
        return '/lab';
      case 'receptionist':
        return '/reception';
      default:
        return '/login';
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to={getDefaultRoute()} replace />} 
        />
        
        <Route 
          path="/login" 
          element={currentUser ? <Navigate to={getDefaultRoute()} replace /> : <Login />} 
        />
        
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/lab/*"
          element={
            <ProtectedRoute allowedRoles={['lab_scientist']}>
              <LabScientistDashboard />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/reception/*"
          element={
            <ProtectedRoute allowedRoles={['receptionist']}>
              <ReceptionistDashboard />
            </ProtectedRoute>
          }
        />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
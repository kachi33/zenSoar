import React from 'react';
import './header.css'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';

const App = function() {
  return (
    // <Login />
    // <Register/>

    <BrowserRouter>
      <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/forgot-password' element={<ForgotPassword />}></Route>
      <Route path='/reset-password' element={<ResetPassword />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

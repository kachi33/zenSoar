import React from 'react';
import './header.css'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = function() {
  return (
    // <Login />
    // <Register/>

    <BrowserRouter>
      <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

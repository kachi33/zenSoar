import React from 'react';
// import AppLayout from './components/UI/AppLayout'
import Dashboard from './components/Dashboard';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthProvider from './components/auth/AuthContext.jsx';

const App = function() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route element={<AppLayout />}> */}
          <Route path="/" element={<Dashboard />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;

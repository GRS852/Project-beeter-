import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forum from './pages/Forum.js';
import FooterComponent from './components/Footer/FooterComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import User from './pages/User.js';
import AuthProvider from './components/AuthContext/AuthContext.js';
import PrivateRoute from './components/ProtectedRoute/ProtectedRoute.js';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='app-container'>
          <div className='content-routes'>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route 
                path="/" 
                element={
                  <PrivateRoute>
                    <Home />
                    <FooterComponent />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/forum" 
                element={
                  <PrivateRoute>
                    <Forum />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/user" 
                element={
                    <User />
                } 
              />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

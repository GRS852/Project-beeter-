import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forum from './pages/Forum.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './pages/Login.js'
import Instrutor from './pages/Instrutor.js';
import Home from './pages/Home.js';
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
          <FooterComponent />
        </div>
      </Router>
    </AuthProvider>
  );

export default App;

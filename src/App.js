import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forum from './pages/Forum.js';
import FooterComponent from './components/Footer/FooterComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Perfil from './pages/Perfil.js'
import Page_LiderancaGestao from './pages/Page_LiderancaGestao.js';
import Page_ResolucaoProblemas from './pages/Page_ResolucaoProblemas.js';
import Page_TraEquipeCola from './pages/Page_TraEquipeCola.js';
import Page_ComEficazAssertiva from './pages/Page_ComEficazAssertiva.js';
import Page_InteligenciaEmocional from './pages/Page_InteligenciaEmocional.js';
import Video from './pages/Video.js'
import AuthProvider from './components/AuthContext/AuthContext.js';
import PrivateRoute from './components/ProtectedRoute/ProtectedRoute.js';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='app-container'>
          <div className='content-routes'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route 
                path="/home" 
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
                path="/page_LiderancaGestao" 
                element={
                  <PrivateRoute>
                    <Page_LiderancaGestao />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/page_ResolucaoProblemas" 
                element={
                  <PrivateRoute>
                    <Page_ResolucaoProblemas />
                  </PrivateRoute>
                } 
              />
               <Route 
                path="/page_ComEficazAssertiva" 
                element={
                  <PrivateRoute>
                    <Page_ComEficazAssertiva />
                  </PrivateRoute>
                } 
              />
               <Route 
                path="/page_InteligenciaEmocional" 
                element={
                  <PrivateRoute>
                    <Page_InteligenciaEmocional/>
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/page_TraEquipeCola" 
                element={
                  <PrivateRoute>
                    <Page_TraEquipeCola />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/perfil" 
                element={
                  <PrivateRoute>
                    <Perfil />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/perfil" 
                element={
                  <PrivateRoute>
                    <Perfil />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/video" 
                element={
                  <PrivateRoute>
                    <Video />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/register" 
                element={
                  <PrivateRoute>
                    <Register />
                  </PrivateRoute>
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

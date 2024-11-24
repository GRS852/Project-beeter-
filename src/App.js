import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forum from './pages/Forum.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home.js';
import Login from './pages/Login.js'
import Instrutor from './pages/Instrutor.js';





function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/forum" element={<Forum />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/Instrutor" element={<Instrutor />}></Route>
          </Routes>
        </div>
    </Router>
  )
}

export default App;

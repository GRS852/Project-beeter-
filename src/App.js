import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forum from './pages/Forum.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forum />}></Route>
        </Routes>      
    </Router>
  )
}

export default App;

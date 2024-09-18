

import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forum from './pages/Forum.js';
import FooterComponent from './components/Footer/FooterComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';





function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className='content-routes'>
          <Routes>
            <Route path="/" element={<Forum />}></Route>
          </Routes>
        </div>
          <FooterComponent></FooterComponent>
        </div>
    </Router>
  )
}

export default App;

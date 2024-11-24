import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forum from './pages/Forum.js';
import FooterComponent from './components/Footer/FooterComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home.js';
import Curso from './pages/Curso.js';
import Curso2 from './pages/Curso2.js';
import Curso3 from './pages/Curso3.js';
import Curso4 from './pages/Curso4.js';
import Curso5 from './pages/Curso5.js';
import Perfil from './pages/Perfil.js';
import Video from './pages/Video.js';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className='content-routes'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/forum" element={<Forum />}></Route>
            <Route path="/curso" element={<Curso/>}></Route>
            <Route path="/curso2" element={<Curso2/>}></Route>
            <Route path="/curso3" element={<Curso3/>}></Route>
            <Route path="/curso4" element={<Curso4/>}></Route>
            <Route path="/curso5" element={<Curso5/>}></Route>
            <Route path="/perfil" element={<Perfil/>}></Route>
            <Route path="/video" element={<Video/>}></Route>
          </Routes>
        </div>
          <FooterComponent></FooterComponent>
        </div>
    </Router>
  )
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forum from './pages/Forum.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/Home.js';
<<<<<<< HEAD
import Login from './pages/Login.js'
import Instrutor from './pages/Instrutor.js';




=======
import Curso from './pages/Curso.js';
import Curso2 from './pages/Curso2.js';
import Curso3 from './pages/Curso3.js';
import Curso4 from './pages/Curso4.js';
import Curso5 from './pages/Curso5.js';
import Perfil from './pages/Perfil.js';
import Video from './pages/Video.js';
>>>>>>> 995a3490356e7f65ec8b6281eca90f6c6a507bf2

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/forum" element={<Forum />}></Route>
<<<<<<< HEAD
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/Instrutor" element={<Instrutor />}></Route>
=======
            <Route path="/curso" element={<Curso/>}></Route>
            <Route path="/curso2" element={<Curso2/>}></Route>
            <Route path="/curso3" element={<Curso3/>}></Route>
            <Route path="/curso4" element={<Curso4/>}></Route>
            <Route path="/curso5" element={<Curso5/>}></Route>
            <Route path="/perfil" element={<Perfil/>}></Route>
            <Route path="/video" element={<Video/>}></Route>
>>>>>>> 995a3490356e7f65ec8b6281eca90f6c6a507bf2
          </Routes>
        </div>
    </Router>
  )
}

export default App;

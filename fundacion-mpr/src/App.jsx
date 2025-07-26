import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Noticias from './pages/Noticias';
import NoticiaDetalle from './pages/NoticiaDetalle';
import Contacto from './pages/Contacto';
import Voluntariado from './pages/Voluntariado';
import Practica from './pages/Practica';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<NoticiaDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/practica" element={<Practica />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


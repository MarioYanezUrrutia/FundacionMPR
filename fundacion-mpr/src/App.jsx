import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Noticias from './components/Noticias';
import NoticiaDetalle from './components/NoticiaDetalle';
import Contacto from './components/Contacto';
import Voluntariado from './components/Voluntariado';
import Practica from './components/Practica';
import Donaciones from './components/Donaciones';
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
          <Route path="/donaciones" element={<Donaciones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


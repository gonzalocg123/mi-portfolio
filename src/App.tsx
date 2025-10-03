import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* Cabecera / Navegación */}
        <header>
          <nav>
            <ul>
              <li><Link to="/">Sobre mí</Link></li>
              <li><Link to="/proyectos">Proyectos</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </header>

        {/* Contenido principal */}
        <main>
          <Routes>
            {/* Página principal = Sobre mí */}
            <Route path="/" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

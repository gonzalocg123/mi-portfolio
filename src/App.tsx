import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header>
      <nav>
        <div className="nav-brand">
          <span>Gonzalo</span>
        </div>
        <ul>
          <li>
            <Link 
              to="/" 
              className={activeLink === "/" ? "active" : ""}
              onClick={() => setActiveLink("/")}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link 
              to="/proyectos" 
              className={activeLink === "/proyectos" ? "active" : ""}
              onClick={() => setActiveLink("/proyectos")}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link 
              to="/contacto" 
              className={activeLink === "/contacto" ? "active" : ""}
              onClick={() => setActiveLink("/contacto")}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <ParticleBackground />
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
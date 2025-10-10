import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import SobreMi from './pages/SobreMi';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import ElegantBackground from './components/ElegantBackground';
import './App.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="nav-brand">
          <span className="gradient-text">Gonzalo</span>
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
        <ElegantBackground />
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
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
return (
    <footer className="footer">
    <p>© 2025 Gonzalo. Todos los derechos reservados.</p>
    <div className="socials">
        <a href="https://github.com/gonzalocg123" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gonzalo-chica-godino-27710a33a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
        </a>
        <a href="mailto:chicagodinogonzalo@gmail.com" aria-label="Correo electrónico">
        <FaEnvelope />
        </a>
    </div>
    </footer>
);
};

export default Footer;

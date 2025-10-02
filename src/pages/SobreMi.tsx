import React from 'react';
import miFoto from '../assets/mi-foto.jpg'; // Pon tu foto en /assets

const SobreMi: React.FC = () => {
  return (
    <section className="sobre-mi">
      <img src={miFoto} alt="Foto de Gonzalo" className="foto" />
      <h1>¡Hola! Soy Gonzalo</h1>
      <p>Estudiante de 2º DAM. Apasionado por la programación y en constante aprendizaje.  
         Tecnologías: Java, SQL, HTML, CSS, JavaScript, React, Spring.</p>
    </section>
  );
}

export default SobreMi;

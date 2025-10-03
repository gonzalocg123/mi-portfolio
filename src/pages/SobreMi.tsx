import React from 'react';
import miFoto from '../assets/mi-foto.png'; // pon tu foto aquí

const SobreMi: React.FC = () => {
  return (
    <section className="sobre-mi">
      <img src={miFoto} alt="Foto de Gonzalo" className="foto" />
      <h1>¡Hola! Soy Gonzalo</h1>
      <p>Estudiante de 2º DAM. Apasionado por la programación y en constante aprendizaje.</p>
      <p>Tecnologías: Java, SQL, HTML, CSS, JavaScript, React, Spring.</p>
    </section>
  );
}

export default SobreMi;

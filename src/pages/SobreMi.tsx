import React from 'react';
import miFoto from "../assets/mi-foto.png";

const habilidades = [
  "Java",
  "JavaScript / TypeScript",
  "React",
  "Spring Boot",
  "HTML / CSS",
  "SQL / MySQL"
];

export default function SobreMi() {
  return (
    <section className="sobre-mi">
      <div className="sobre-mi-header">
        <img src={miFoto} alt="Foto de Gonzalo" className="foto" />
        <h2>Hola, soy Gonzalo</h2>
      </div>
      <p>
        Soy estudiante de FP Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y apasionado por la programación.
        Mi objetivo es crecer como desarrollador y crear proyectos que tengan un impacto real.
      </p>
      <h3>Habilidades</h3>
      <div className="habilidades">
        {habilidades.map((h, idx) => (
          <span key={idx} className="habilidad">{h}</span>
        ))}
      </div>
      <p>
        Me considero proactivo, con buena capacidad de resolución de problemas y siempre en busca de aprender nuevas tecnologías.
        Me encanta trabajar en proyectos innovadores y mantener un portfolio actualizado en GitHub.
      </p>
    </section>
  );
}

import React from 'react';
import miFoto from "../assets/mi-foto.png";

export default function SobreMi() {
  return (
    <section className="sobre-mi">
      <img src={miFoto} alt="Foto de Gonzalo" className="foto" />
      <h2>Hola, soy Gonzalo</h2>
      <p>
        Tengo 18 años, estoy terminando el FP Superior en Desarrollo de Aplicaciones Multiplataforma (DAM).
        Me apasiona la programación y actualmente estoy aprendiendo tecnologías como:
      </p>
      <ul>
        <li>Java</li>
        <li>JavaScript y TypeScript</li>
        <li>React</li>
        <li>Spring Boot</li>
        <li>HTML y CSS</li>
        <li>SQL y MySQL</li>
      </ul>
      <p>
        Mi objetivo es crecer como desarrollador, construir proyectos útiles y conseguir mi primer trabajo
        profesional al terminar el FP. Además, me gusta aprender de forma autodidacta, hacer portfolio en GitHub
        y experimentar con nuevas tecnologías.
      </p>
      <p>
        Soy proactivo, con buena capacidad de resolución de problemas y siempre buscando mejorar mis habilidades.
        Me encanta trabajar en proyectos que tengan impacto real y aprender nuevas herramientas cada día.
      </p>
    </section>
  );
}
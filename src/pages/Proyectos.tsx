import React from "react";

const proyectos = [
  { nombre: "Agenda de Contactos", descripcion: "Aplicación de escritorio con Java y SQLite", enlace: "https://github.com/gonzalocg123/AgendaContactos" },
  { nombre: "Portfolio Web", descripcion: "Mi landing page en React y TypeScript", enlace: "https://github.com/gonzalocg123/mi-portfolio" },
];

export default function Proyectos() {
  return (
    <section className="proyectos">
      <h2>Mis Proyectos</h2>
      <ul>
        {proyectos.map((proyecto, idx) => (
          <li key={idx} className="proyecto-card">
            <div className="card-content">
              <h3>{proyecto.nombre}</h3>
              <p>{proyecto.descripcion}</p>
              <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
                Ver proyecto
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
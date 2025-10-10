import React, { useState } from "react";

const categorias = ["Todos", "Web", "Escritorio", "Full Stack"];

const proyectos = [
  { 
    nombre: "Agenda de Contactos", 
    descripcion: "Aplicación de escritorio desarrollada con Java y SQLite para gestionar contactos de forma eficiente.",
    enlace: "https://github.com/gonzalocg123/AgendaContactos",
    categoria: "Escritorio",
    tecnologias: ["Java", "SQLite", "JavaFX"],
    imagen: "/proyecto1.jpg"
  }
];

export default function Proyectos() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const proyectosFiltrados = categoriaActiva === "Todos" 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === categoriaActiva);

  return (
    <section className="proyectos">
      <div className="proyectos-header">
        <h2>Mis <span className="highlight">Proyectos</span></h2>
        <p>Una muestra de mis trabajos más recientes y destacados</p>
      </div>

      <div className="filtros">
        {categorias.map(categoria => (
          <button
            key={categoria}
            className={`filtro-btn ${categoriaActiva === categoria ? 'active' : ''}`}
            onClick={() => setCategoriaActiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="proyectos-grid">
        {proyectosFiltrados.map((proyecto, idx) => (
          <div key={idx} className="proyecto-card">
            <div className="proyecto-imagen">
              <div className="proyecto-overlay">
                <div className="proyecto-acciones">
                  <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Ver Código
                  </a>
                  <button className="btn-secondary">
                    Ver Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="proyecto-content">
              <h3>{proyecto.nombre}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="proyecto-tecnologias">
                {proyecto.tecnologias.map((tech, techIdx) => (
                  <span key={techIdx} className="tecnologia-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import React, { useState } from "react";

const categorias = ["Todos", "Web", "Escritorio", "Full Stack"];

const proyectos = [
  { 
    nombre: "Agenda de Contactos", 
    descripcion: "Aplicación de escritorio desarrollada con Java y SQLite para gestionar contactos de forma eficiente.",
    enlace: "https://github.com/gonzalocg123/AgendaContactos",
    enlace_vista: "#",
    categoria: "Escritorio",
    tecnologias: ["Java", "SQLite", "JavaFX"],
    imagen: "/proyecto1.jpg"
  },
  { 
    nombre: "Portfolio Web", 
    descripcion: "Mi landing page personal desarrollada con React, TypeScript y CSS moderno con efectos visuales.",
    enlace: "https://github.com/gonzalocg123/mi-portfolio",
    enlace_vista: "#",
    categoria: "Web",
    tecnologias: ["React", "TypeScript", "CSS3"],
    imagen: "/proyecto2.jpg"
  },
  { 
    nombre: "Task Manager", 
    descripcion: "Task Manager, una herramienta de gestión de tareas moderna, desarrollada con React + Vite y Tailwind CSS. Este proyecto se comunica con una API REST desarrollada en Spring Boot y desplegada en Render, mientras que el frontend está desplegado en Vercel.",
    enlace: "https://github.com/gonzalocg123/taskmanager_frontend",
    enlace_vista: "https://taskmanager-frontend-zeta.vercel.app/",
    categoria: "Full Stack",
    tecnologias: ["Spring Boot", "React", "MySQL"],
    imagen: "/proyecto3.jpg"
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
                  <a href={proyecto.enlace_vista} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    Ver Demo
                  </a>
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
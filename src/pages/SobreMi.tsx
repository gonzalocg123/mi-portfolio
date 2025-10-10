import miFoto from "../assets/mi-foto.png";

const habilidades = [
  "Java",
  "JavaScript",
  "TypeScript", 
  "React",
  "Spring Boot",
  "HTML / CSS",
  "SQL / MySQL",
  "Git / GitHub",
  "Python"
];

const experiencias = [
  {
    titulo: "Desarrollador Web (Prácticas FP DAM)",
    empresa: "Formación ACMA",
    periodo: "Feb 2025 - Marz 2025",
    descripcion: "Colaboración en proyectos de desarrollo web. Participación en el ciclo completo de desarrollo, desde el diseño hasta la implementación y pruebas."
  },
  {
    titulo: "Proyectos Personales",
    empresa: "Freelance",
    periodo: "Actualidad",
    descripcion: "Desarrollo de diversas aplicaciones y sitios web para clientes, incluyendo portfolios, sistemas de gestión y aplicaciones de escritorio."
  }
];

export default function SobreMi() {
  return (
    <section className="sobre-mi">
      <div className="sobre-mi-header">
        <div className="foto-container">
          <img src={miFoto} alt="Foto de Gonzalo" className="foto" />
          <div className="foto-overlay"></div>
        </div>
        <h2>Hola, soy <span className="highlight">Gonzalo</span></h2>
        <p className="subtitulo">Desarrollador Full Stack en formación</p>
      </div>
      
      <div className="sobre-mi-content">
        <div className="bio">
          <h3>Mi Historia</h3>
          <p>
            Soy estudiante de FP Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) con una 
            pasión innata por la programación y la tecnología. Desde que escribí mi primera línea de código, 
            supe que había encontrado mi vocación.
          </p>
          <p>
            Mi objetivo es crecer como desarrollador, aprender nuevas tecnologías y crear proyectos 
            innovadores que tengan un impacto real en las personas. Me encanta enfrentarme a nuevos 
            desafíos y encontrar soluciones creativas a problemas complejos.
          </p>
        </div>
        
        <div className="experiencia">
          <h3>Experiencia</h3>
          <div className="experiencias-grid">
            {experiencias.map((exp, idx) => (
              <div key={idx} className="experiencia-card">
                <h4>{exp.titulo}</h4>
                <p className="empresa">{exp.empresa} • {exp.periodo}</p>
                <p>{exp.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="habilidades-section">
          <h3>Mis Habilidades</h3>
          <div className="habilidades-grid">
            {habilidades.map((habilidad, idx) => (
              <div key={idx} className="habilidad-tag">
                {habilidad}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
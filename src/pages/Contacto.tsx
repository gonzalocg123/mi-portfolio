import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs.sendForm(
      "service_tjy0i4c",
      "template_1kmzac5",
      form.current,
      "8bA3vX_P_754eblME"
    ).then(
      () => {
        setSuccess(true);
        setLoading(false);
        form.current?.reset();
        setFormData({ user_name: "", user_email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      },
      (error) => {
        console.error(error.text);
        setLoading(false);
        alert("❌ Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.");
      }
    );
  };

  return (
    <section className="contacto">
      <div className="contacto-header">
        <h2>¿Tienes un <span className="highlight">proyecto</span> en mente?</h2>
        <p>Estoy siempre abierto a nuevas oportunidades y colaboraciones</p>
      </div>

      <div className="contacto-content">
        <div className="contacto-info">
          <h3>Información de Contacto</h3>
          <div className="contacto-item">
            <div className="contacto-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>chicagodinogonzalo@gmail.com</p>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-icon">💼</div>
            <div>
              <h4>LinkedIn</h4>
              <p>https://www.linkedin.com/in/gonzalo-chica-godino-27710a33a/</p>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-icon">🔗</div>
            <div>
              <h4>GitHub</h4>
              <p>github.com/gonzalocg123</p>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contacto-form">
          <div className="form-group">
            <label htmlFor="user_name">Nombre</label>
            <input 
              type="text" 
              id="user_name"
              name="user_name" 
              placeholder="Tu nombre completo" 
              value={formData.user_name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input 
              type="email" 
              id="user_email"
              name="user_email" 
              placeholder="tu.email@ejemplo.com" 
              value={formData.user_email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea 
              id="message"
              name="message" 
              rows={6} 
              placeholder="Describe tu proyecto o consulta..." 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </div>
          
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? (
              <>
                <div className="spinner"></div>
                Enviando...
              </>
            ) : (
              "Enviar Mensaje"
            )}
          </button>
          
          {success && (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <div>
                <h4>¡Mensaje enviado con éxito!</h4>
                <p>Te responderé lo antes posible.</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
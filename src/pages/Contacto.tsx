import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_tjy0i4c",   // Tu Service ID
        "template_1kmzac5",  // Tu Template ID
        form.current,
        "8bA3vX_P_754eblME"  // Tu Public Key
      )
      .then(
        () => {
          setSuccess(true);
          form.current?.reset();
          setTimeout(() => setSuccess(false), 5000); // Oculta mensaje después de 5s
        },
        (error) => {
          console.error(error.text);
          alert("❌ Hubo un error al enviar el correo");
        }
      );
  };

  return (
    <section className="contacto">
      <h2>Contáctame</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          Correo electrónico:
          <input
            type="email"
            name="user_email"
            placeholder="tuemail@ejemplo.com"
            required
          />
        </label>
        <label>
          Mensaje:
          <textarea
            name="message"
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            required
          />
        </label>
        <button type="submit">Enviar</button>
        {success && <p className="success-message">✅ Correo enviado con éxito</p>}
      </form>
    </section>
  );
}

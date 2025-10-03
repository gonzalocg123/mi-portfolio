import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      "service_tjy0i4c",
      "template_1kmzac5",
      form.current,
      "8bA3vX_P_754eblME"
    ).then(
      () => {
        setSuccess(true);
        form.current?.reset();
        setTimeout(() => setSuccess(false), 5000);
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
      <form ref={form} onSubmit={sendEmail} className="contacto-form">
        <label>
          Correo electrónico:
          <input type="email" name="user_email" placeholder="tuemail@ejemplo.com" required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" rows={6} placeholder="Escribe tu mensaje aquí..." required />
        </label>
        <button type="submit">Enviar</button>
        {success && <p className="success-message">✅ Correo enviado con éxito</p>}
      </form>
    </section>
  );
}

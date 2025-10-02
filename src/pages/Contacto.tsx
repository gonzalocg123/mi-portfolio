import React, { useState } from 'react';

const Contacto: React.FC = () => {
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensaje enviado!\nCorreo: ${correo}\nMensaje: ${mensaje}`);
    setCorreo('');
    setMensaje('');
  }

  return (
    <section className="contacto">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <textarea
          placeholder="Tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;

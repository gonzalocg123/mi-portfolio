import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contacto() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_tjy0i4c",   // <-- tu Service ID en EmailJS
        "template_1kmzac5",        // <-- tu Template ID en EmailJS
        form.current,
        "8bA3vX_P_754eblME"          // <-- tu Public Key en EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Correo enviado con éxito");
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Hubo un error al enviar el correo");
        }
      );
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h2 className="text-3xl font-bold mb-6 text-pink-400">Contáctame</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <label className="flex flex-col text-white">
          Correo electrónico:
          <input
            type="email"
            name="user_email"
            required
            className="mt-2 p-2 rounded bg-gray-800 text-white border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </label>

        <label className="flex flex-col text-white">
          Mensaje:
          <textarea
            name="message"
            required
            rows={5}
            className="mt-2 p-2 rounded bg-gray-800 text-white border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </label>

        <button
          type="submit"
          className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
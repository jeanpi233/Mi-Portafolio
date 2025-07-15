import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Alerta } from "../router/alerta";

export default function Contact() {
  return (
    <>
      <section className="contacto_seccion">
        <section id="contacto" className="seccion">
          <h2>Contacto</h2>
          <p>
            ¿Te interesa colaborar conmigo o tienes alguna pregunta? ¡Hablemos!
          </p>

          <ul className="lista-contacto">
            <li>
              📍 <strong>Ubicación: </strong> Medellín, Colombia
            </li>
          </ul>

          <form
            onSubmit={(e) => Alerta(e, "https://formspree.io/f/mldlrklr")}
            className="formulario-contacto"
          >
            <h3 className="correo-destino">jeanpimoreno1607@gmail.com</h3>
            <p className="correo-desc">
              Puedes escribirme cualquier duda o propuesta 🙌
            </p>

            <div className="inputs-grid">
              <input type="text" name="nombre" placeholder="Nombre" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>

            <textarea name="mensaje" placeholder="Mensaje" required></textarea>

            <button type="submit" className="boton-enviar">
              Enviar
            </button>

            <div className="redes-contacto">
              <a
                href="https://github.com/jeanpi233"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jeanpimoreno1607@gmail.com&su=Contacto%20desde%20tu%20portafolio&body=Hola%20Jeanpierry,%20vi%20tu%20web%20y%20me%20interes%C3%B3%20tu%20perfil."
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

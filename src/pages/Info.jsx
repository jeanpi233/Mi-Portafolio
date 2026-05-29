import { useRef } from "react";
import "./Info.css";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Info() {
  const tarjetasRef1 = useRef(null);
  const tarjetasRef2 = useRef(null);
  const [mostrarImagen, setMostrarImagen] = useState(false);
  const [imagenActual, setImagenActual] = useState("");

  return (
    <>
      <section className="info_seccion">
        <h2>Sobre mí</h2>
        <p>
          ¡Hola! Soy Jeanpierry Moreno, estudiante de ingeniería en desarrollo
          de software. Me apasiona crear aplicaciones funcionales con un diseño
          limpio y adaptable. Me enfoco en tecnologías como{" "}
          <strong>Java, Spring Boot, React</strong> y buenas prácticas de
          desarrollo web.
        </p>

        <div className="contenedor-info">
          <div className="columna">
                        <img
              className="img_perfil"
              src="/public/foto_perfil.jpg"
              alt="Foto de perfil"
            />
            <div 
            className="contenedor-btn-hv"><Link to="/Hojav" className="btn-hv">HV</Link></div>


            <h3>Habilidades Técnicas</h3>
            <ul>
              <li>✅ Java & Spring Boot</li>
              <li>✅ React.js & diseño responsivo</li>
              <li>✅ HTML, CSS, JavaScript</li>
              <li>✅ Git & GitHub (flujo con ramas y PRs)</li>
              <li>✅ SQL básico y modelado de datos</li>
            </ul>
          </div>

          <div className="columna">
            <h3>Certificaciones (Platzi)</h3>
            <ul>
              <li>🎓 Acta de Grado</li>
              <li>🎓 Certificado Document Object Model</li>
              <li>🎓 Certificado Estrategias de Inglés</li>
              <li>🎓 Certificado Estructuras de Datos</li>
              <li>🎓 Certificado Git y GitHub</li>
              <li>🎓 Certificado HTML y CSS</li>
              <li>🎓 Certificado Java OOP</li>
              <li>🎓 Certificado Java y SQL</li>
              <li>🎓 Certificado JavaScript</li>
              <li>🎓 Certificado Mobile First</li>
              <li>🎓 Certificado React.js</li>
              <li>🎓 Certificado General</li>
            </ul>
          </div>

          <div className="titulo_certi">
            <h1>Certificados</h1>
          </div>

          <div className="contenedor_tarjetas">
            <button
              className="scroll-btn left"
              onClick={() =>
                tarjetasRef1.current.scrollBy({
                  left: -500,
                  behavior: "smooth",
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left-icon"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="tarjetas_plazi" ref={tarjetasRef1}>
              {[
                {
                  titulo: "Diplomado Document Object Model",
                  img: "/DIPLOMAS_JPG/diploma-document-object-model_page-0001.jpg",
                  pdf: "/public/certificados/diploma-document-object-model.pdf",
                  desc: "Certificación sobre manipulación del DOM en desarrollo web.",
                },
                {
                  titulo: "Diplomado Estrategias de Inglés",
                  img: "/DIPLOMAS_JPG/diploma-estrategias-ingles_page-0001.jpg",
                  pdf: "/public/certificados/diploma-estrategias-ingles.pdf",
                  desc: "Certificación en estrategias para el aprendizaje del inglés.",
                },
                {
                  titulo: "Diplomado Estructuras de Datos",
                  img: "/DIPLOMAS_JPG/diploma-estructuras-datos_page-0001.jpg",
                  pdf: "/public/certificados/diploma-estructuras-datos.pdf",
                  desc: "Certificación en el manejo y uso de estructuras de datos.",
                },
                {
                  titulo: "Diplomado Git y GitHub",
                  img: "/DIPLOMAS_JPG/diploma-gitgithub_page-0001.jpg",
                  pdf: "/public/certificados/diploma-gitgithub.pdf",
                  desc: "Certificación en el control de versiones con Git y GitHub.",
                },
                {
                  titulo: "Diplomado HTML y CSS",
                  img: "/DIPLOMAS_JPG/diploma-html-css_page-0001.jpg",
                  pdf: "/public/certificados/diploma-html-css.pdf",
                  desc: "Certificación en desarrollo web con HTML y CSS.",
                },
                {
                  titulo: "Diplomado Java OOP",
                  img: "/DIPLOMAS_JPG/diploma-java-oop_page-0001.jpg",
                  pdf: "/public/certificados/diploma-java-oop.pdf",
                  desc: "Certificación en Programación Orientada a Objetos con Java.",
                },
                {
                  titulo: "Diplomado Java y SQL",
                  img: "/DIPLOMAS_JPG/diploma-java-sql_page-0001.jpg",
                  pdf: "/public/certificados/diploma-java-sql.pdf",
                  desc: "Certificación en integración de Java con bases de datos SQL.",
                },
                {
                  titulo: "Diplomado JavaScript",
                  img: "/DIPLOMAS_JPG/diploma-javascript_page-0001.jpg",
                  pdf: "/public/certificados/diploma-javascript.pdf",
                  desc: "Certificación en programación con JavaScript.",
                },
                {
                  titulo: "Diplomado Mobile First",
                  img: "/DIPLOMAS_JPG/diploma-mobile-first_page-0001.jpg",
                  pdf: "/public/certificados/diploma-mobile-first.pdf",
                  desc: "Certificación en diseño web con enfoque Mobile First.",
                },
                {
                  titulo: "Diplomado React.js",
                  img: "/DIPLOMAS_JPG/diploma-reactjs_page-0001.jpg",
                  pdf: "/public/certificados/diploma-reactjs.pdf",
                  desc: "Certificación en desarrollo de aplicaciones con React.js.",
                },
              ].map((certi, i) => (
                <div className="tarjeta" key={i}>
                  <h3>{certi.titulo}</h3>
                  <img
                    src={certi.img}
                    alt={certi.titulo}
                    onClick={() => {
                      setImagenActual(certi.img);
                      setMostrarImagen(true);
                    }}
                  />
                  <p>{certi.desc}</p>
                </div>
              ))}
            </div>

            <button
              className="scroll-btn right"
              onClick={() =>
                tarjetasRef1.current.scrollBy({ left: 500, behavior: "smooth" })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right-icon"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="contenedor_tarjetas"></div>
          <div className="titulo_certi">
            <h1>Diplomas</h1>
          </div>

          <div className="contenedor_tarjetas">
            <button
              className="scroll-btn-diploma-left"
              onClick={() =>
                tarjetasRef1.current.scrollBy({
                  left: -500,
                  behavior: "smooth",
                })
              }
            >
            </button>
            <div className="tarjetas_plazi" ref={tarjetasRef2}>
              {[
                {
                  titulo: "Acta de grado",
                  img: "/DIPLOMAS_JPG/Acta_grado_page-0001.jpg",
                  pdf: "/public/certificados/Acta_grado_page-0001.pdf",
                  desc: "Diplomado académico realizado durante la formación de bachillerato.",
                },
                {
                  titulo: "Diplomado bachillerato",
                  img: "/DIPLOMAS_JPG/Diploma_page-0001.jpg",
                  pdf: "/public/certificados/Diploma_page-0001.pdf",
                  desc: "Reconocimiento por participación en diplomado durante el bachillerato.",
                },
              ].map((certi, i) => (
                <div className="tarjeta" key={i}>
                  <h3>{certi.titulo}</h3>
                  <img
                    src={certi.img}
                    alt={certi.titulo}
                    onClick={() => {
                      setImagenActual(certi.img);
                      setMostrarImagen(true);
                    }}
                  />
                  <p>{certi.desc}</p>
                </div>
              ))}
            </div>
            <button
              className="scroll-btn-diploma-right"
              onClick={() =>
                tarjetasRef2.current.scrollBy({ left: 500, behavior: "smooth" })
              }
            >
            </button>
          </div>
        </div>
        {mostrarImagen && (
          <div className="modal_imagen">
            <button
              className="cerrar_modal"
              onClick={() => setMostrarImagen(false)}
            >
              ✖
            </button>
            <img src={imagenActual} alt="Certificado ampliado" />
          </div>
        )}
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import { FaUser, FaBook, FaEnvelope } from "react-icons/fa";
import { useEffect } from "react";

export default function Home({ tema, setTema }) {
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`tema-${tema}`);
  }, [tema]);

  return (
    <main className={`tema-${tema}`}>
      <div className="opciones-verticales">
        <button onClick={() => setTema("light")}>
          <span
            className={`cuadro ${tema === "light" ? "cuadro-activo" : ""}`}
          ></span>{" "}
          LIGHT
        </button>
        <button onClick={() => setTema("dark")}>
          <span
            className={`cuadro ${tema === "dark" ? "cuadro-activo" : ""}`}
          ></span>{" "}
          DARK
        </button>
      </div>

      <div className="contenedor-header-section">
        <header className="contenedor_header">
          <h1 className="titulo">
            <span className="icono-inicio">&lt;/&gt;</span>
            <span className="blanco">Jeanpierry</span>Moreno
          </h1>
          <p className="subtitulo">Desarrollador Web</p>
          <ul className="menu-navegacion">
            <li>
              <Link className="btn" to="/info">
                <FaUser /> Sobre mí
              </Link>
            </li>

            <li>
              <Link className="btn" to="/proyecto">
                <FaBook /> Proyectos
              </Link>
            </li>
            <li>
              <Link className="btn" to="/contacto">
                <FaEnvelope /> Contacto
              </Link>
            </li>
          </ul>
          <section className="contenedor_descripcion">
            <p className="descripcion">
              Hola, soy un desarrollador web apasionado por crear experiencias
              digitales únicas. Aquí encontrarás algunos de mis proyectos más
              destacados.
            </p>

            <div className="manual-uso">
              <h3>📘 Manual de uso</h3>
              <ul>
                <li>
                  <strong>Inicio:</strong> Presentación general, selector de
                  tema y enlaces rápidos. El nombre también redirige a esta
                  sección.
                </li>
                <li>
                  <strong>Proyectos:</strong> Desarrollos web y backend con
                  enlaces a sus repositorios y páginas desplegadas en Vercel.
                </li>
                <li>
                  <strong>Diplomas:</strong> Certificados técnicos y cursos
                  visualizables en PDF.
                </li>
              </ul>
            </div>
          </section>
        </header>
      </div>
    </main>
  );
}

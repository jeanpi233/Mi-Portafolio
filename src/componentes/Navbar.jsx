// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaBook, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ tema, setTema }) {
  return (
    <header className={`barra-navegacion tema-${tema}`}>
      <div className="marca">
        <span className="icono">&lt;/&gt;</span>
        <Link to="/" className="nombre-link" title="Volver al inicio">
          <strong>
            <span className="azul">JeanpierryMoreno</span>
          </strong>
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to="/info">
            <FaUser /> Sobre mí
          </Link>
        </li>
        <li>
          <Link to="/proyecto">
            <FaBook /> Proyectos
          </Link>
        </li>
        <li>
          <Link to="/contacto">
            <FaEnvelope /> Contáctame
          </Link>
        </li>
      </ul>
      <div className="temas-vertical">
        <button
          className={tema === "light" ? "activo" : ""}
          onClick={() => setTema("light")}
        >
          🌞 <span>LIGHT</span>
        </button>
        <button
          className={tema === "dark" ? "activo" : ""}
          onClick={() => setTema("dark")}
        >
          🌙 <span>DARK</span>
        </button>
      </div>
    </header>
  );
}
